import { useEffect } from "react";

export function useReveal(rootSelector = "[data-reveal]") {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(rootSelector));
    if (!nodes.length) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
