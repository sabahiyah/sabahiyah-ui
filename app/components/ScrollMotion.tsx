"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (
      !root ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    const groupIndexes = new Map<Element, number>();

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((target) => {
      const group = target.closest("[data-reveal-group]") ?? target.parentElement ?? root;
      const index = groupIndexes.get(group) ?? 0;
      groupIndexes.set(group, index + 1);
      target.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 80}ms`);
      target.classList.add("motion-reveal");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}