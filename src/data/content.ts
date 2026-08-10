import type { AboutContent, LabItem, NavSection } from "../types";

export const ABOUT: AboutContent = {
  story:
    "I got into building by taking things apart. At fifteen I broke a school portal so badly trying to understand it that I had to fix it before anyone noticed — and that was more or less the moment I decided I'd rather build the thing than just use it. Everything since has been self-taught: late nights, broken builds, and a slowly growing respect for software that just works.",
  focus:
    "Right now I split my time between shipping full-stack products end to end and going deep on the parts most people skip — data modeling, API design, and the small interface decisions that decide whether something feels considered or assembled.",
  learning:
    "Distributed systems fundamentals, and enough Rust to trust myself with performance-critical tools.",
  interests:
    "Market microstructure and trading systems, generative art, and the occasional weekend spent tuning a mechanical keyboard that didn't need tuning.",
  detail:
    "I keep a running log of every bug that took more than a day to find. It's currently at thirty-four entries, and each one taught me something I hadn't expected to learn.",
};

export const LAB_ITEMS: LabItem[] = [
  {
    title: "Cursor trails",
    type: "Canvas experiment",
    year: "2025",
    description:
      "A generative trail that follows the cursor with spring physics instead of linear easing — small, but satisfying to tune.",
  },
  {
    title: "Sorting visualizer",
    type: "Algorithm study",
    year: "2024",
    description:
      "Side-by-side animated comparison of six sorting algorithms, built to actually feel the difference between O(n log n) and O(n²).",
  },
  {
    title: "Candle reader",
    type: "Data tool",
    year: "2025",
    description:
      "A small script that parses OHLC data and flags a handful of classic candlestick patterns — built out of curiosity about markets, not for production trading.",
  },
  {
    title: "Type rhythm",
    type: "Generative design",
    year: "2024",
    description:
      "A poster generator that plays with variable font axes to produce type-only compositions on a fixed grid.",
  },
  {
    title: "Konami detector",
    type: "Reusable hook",
    year: "2026",
    description:
      "A tiny React hook for listening to secret key sequences. Meta enough that it's the same hook running on this very page.",
  },
  {
    title: "Micro synth",
    type: "Web audio toy",
    year: "2023",
    description:
      "A four-voice synthesizer you can play with your keyboard, built to learn the Web Audio API from the oscillator up.",
  },
];

export const NAV_SECTIONS: NavSection[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "lab", label: "Lab" },
  { id: "contact", label: "Contact" },
];

export const KONAMI_CODE: string[] = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
