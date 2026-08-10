import React from "react";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="aid-display aid-ink text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
        {title}
      </h2>
      {subtitle && <p className="aid-muted mt-5 max-w-md leading-relaxed">{subtitle}</p>}
    </div>
  );
}
