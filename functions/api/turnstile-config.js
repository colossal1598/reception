export function onRequestGet(context) {
  const siteKey = context.env.PUBLIC_TURNSTILE_SITE_KEY;

  return new Response(JSON.stringify({ siteKey: siteKey || null }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
