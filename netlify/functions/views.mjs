import { getStore } from "@netlify/blobs";

const KEY = "total";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export default async (request) => {
  if (request.method === "OPTIONS") {
    return json({ ok: true });
  }

  try {
    const store = getStore("portfolio-views");
    const raw = await store.get(KEY);
    let count = Number.parseInt(raw ?? "0", 10);
    if (!Number.isFinite(count) || count < 0) count = 0;

    const shouldIncrement =
      new URL(request.url).searchParams.get("inc") === "1";

    if (shouldIncrement) {
      count += 1;
      await store.set(KEY, String(count));
    }

    return json({ count });
  } catch {
    return json({ count: null, error: "Views store unavailable" }, 503);
  }
};
