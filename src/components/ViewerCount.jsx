import React, { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-view-counted";
const ENDPOINT = "/.netlify/functions/views";

function formatCount(n) {
  return new Intl.NumberFormat("en-IN").format(n);
}

function ViewerCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function syncViews() {
      const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";
      const url = alreadyCounted ? ENDPOINT : `${ENDPOINT}?inc=1`;

      try {
        const res = await fetch(url, {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled) return;
        if (typeof data.count === "number") {
          setCount(data.count);
          if (!alreadyCounted) sessionStorage.setItem(SESSION_KEY, "1");
        }
      } catch {
        // Local Vite / offline: hide the counter quietly
      }
    }

    syncViews();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className="viewer-count" aria-live="polite">
      <span className="viewer-count__label">Views</span>
      <span className="viewer-count__value">{formatCount(count)}</span>
    </p>
  );
}

export default ViewerCount;
