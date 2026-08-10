import React from "react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="aid-muted text-xs tracking-[0.2em] uppercase font-medium mb-4">
      {children}
    </div>
  );
}
