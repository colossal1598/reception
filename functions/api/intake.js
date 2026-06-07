const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const DEFAULT_N8N_WEBHOOK_URL =
  "https://automation.sababim.co.il/webhook-test/reception-form";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_CONTACT_METHODS = new Set(["email", "phone", "telegram", "whatsapp"]);

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const turnstileToken = body["cf-turnstile-response"] ?? body.turnstileToken;
  const turnstileSecret = env.TURNSTILE_SECRET_KEY;

  if (turnstileSecret) {
    if (!turnstileToken) {
      return json({ error: "Please complete the verification challenge." }, 400);
    }

    const turnstileRes = await verifyTurnstile(
      turnstileToken,
      turnstileSecret,
      request.headers.get("cf-connecting-ip") ?? undefined,
    );

    if (!turnstileRes.success) {
      return json({ error: "Verification failed. Please try again." }, 400);
    }
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const businessType =
    typeof body.business_type === "string" ? body.business_type.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const contactMethod =
    typeof body.contact_method === "string" ? body.contact_method.trim() : "";
  const contactDetails =
    typeof body.contact_details === "string" ? body.contact_details.trim() : "";
  const plan =
    typeof body.plan === "string" && body.plan.trim()
      ? body.plan.trim()
      : "not-sure-yet";
  const locale =
    typeof body.locale === "string" && body.locale.trim()
      ? body.locale.trim()
      : "en";

  if (!name) {
    return json({ error: "Name is required." }, 400);
  }

  if (!businessType) {
    return json({ error: "Business type is required." }, 400);
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return json({ error: "Please enter a valid email." }, 400);
  }

  let payload;

  if (locale === "he") {
    if (!phone) {
      return json({ error: "Phone is required." }, 400);
    }

    payload = {
      name,
      plan,
      business_type: businessType,
      email,
      phone,
      contact_method: "phone",
      contact_details: phone,
      locale,
      source: "reception-intake",
      submitted_at: new Date().toISOString(),
    };
  } else {
    if (!ALLOWED_CONTACT_METHODS.has(contactMethod)) {
      return json({ error: "Please select a valid contact method." }, 400);
    }

    if (contactMethod !== "email" && !contactDetails) {
      return json(
        { error: "Please provide your contact details for the selected method." },
        400,
      );
    }

    payload = {
      name,
      plan,
      business_type: businessType,
      email,
      contact_method: contactMethod,
      contact_details: contactMethod === "email" ? null : contactDetails,
      locale,
      source: "reception-intake",
      submitted_at: new Date().toISOString(),
    };
  }

  const webhookUrl = env.N8N_WEBHOOK_URL || DEFAULT_N8N_WEBHOOK_URL;

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      console.error("n8n webhook error:", webhookRes.status, await webhookRes.text());
      return json(
        { error: "Could not submit your request. Please try again." },
        500,
      );
    }
  } catch (err) {
    console.error("n8n webhook fetch error:", err);
    return json(
      { error: "Could not submit your request. Please try again." },
      500,
    );
  }

  return json({ ok: true }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function verifyTurnstile(token, secret, remoteIp) {
  try {
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    if (remoteIp) {
      form.append("remoteip", remoteIp);
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      return { success: false };
    }

    const result = await response.json();
    return { success: Boolean(result.success) };
  } catch {
    return { success: false };
  }
}
