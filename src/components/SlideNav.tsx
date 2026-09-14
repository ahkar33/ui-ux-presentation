"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "01" },
  { id: "problems", label: "02" },
  { id: "wireframe", label: "03" },
  { id: "redesign", label: "04" },
  { id: "specs", label: "05" },
  { id: "summary", label: "06" },
];

export default function SlideNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.6 }
    );

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Slide sections"
      className="fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-start gap-4 md:flex"
    >
      {SECTIONS.map((section) => {
        const isActive = section.id === active;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
            aria-current={isActive}
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? "w-6 bg-paper" : "w-3 bg-paper/30 group-hover:bg-paper/60"
              }`}
            />
            <span
              className={`font-display text-sm transition-colors duration-300 ${
                isActive ? "text-paper" : "text-paper/35 group-hover:text-paper/70"
              }`}
            >
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
