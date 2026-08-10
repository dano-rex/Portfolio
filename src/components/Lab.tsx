import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { LabRow } from "./LabRow";
import { LAB_ITEMS } from "../data/content";

export function Lab() {
  return (
    <section id="lab" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Lab"
          title="Things built for curiosity, not clients."
          subtitle="Small experiments, studies and tools — kept here so they don't just disappear from a hard drive."
        />
        <ul>
          {LAB_ITEMS.map((item, i) => (
            <LabRow key={item.title} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
