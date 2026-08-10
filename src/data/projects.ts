import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "marqete",
    number: "01",
    name: "Marqete",
    tagline: "Multi-vendor commerce platform",
    description:
      "A storefront-and-checkout platform that lets independent sellers launch a real store in an afternoon, without stitching together five different SaaS tools.",
    tags: ["Next.js", "PostgreSQL", "Stripe Connect", "Redis"],
    side: "left",
    problem:
      "Independent sellers were losing weekends to wiring together a storefront builder, a separate cart, a payment processor and a spreadsheet for inventory — and still getting a disjointed result.",
    solution:
      "One platform: storefronts, inventory and checkout under a single vendor dashboard, with payouts handled automatically per order.",
    role: "Sole developer — product, architecture, backend and frontend.",
    technology:
      "Next.js for the storefront and dashboard, PostgreSQL with row-level security for tenant isolation, Stripe Connect for split payouts, Redis for cart and session state.",
    decisions: [
      "Row-level security over one database per vendor — kept a single schema to maintain while still guaranteeing data isolation.",
      "Optimistic UI updates on the cart so add-to-cart feels instant even on slower connections.",
      "Server-rendered product pages for search-engine visibility, client-rendered dashboard for interactivity.",
    ],
    challenges:
      "Stripe Connect payouts get complicated fast once vendors have different commission tiers and refund timelines. Getting the ledger to reconcile correctly, every time, took more than one rewrite.",
    outcome:
      "Forty vendors onboarded in a private beta. Reworking the cart flow around optimistic updates lifted checkout completion noticeably in the first month.",
    links: { live: "#", code: "#" },
  },
  {
    id: "ledger",
    number: "02",
    name: "Ledger",
    tagline: "Bank-synced personal finance app",
    description:
      "An expense tracker that categorizes transactions automatically, so keeping a budget doesn't require a nightly ritual of manual entry.",
    tags: ["React Native", "Plaid", "Node.js", "GraphQL"],
    side: "right",
    problem:
      "Most budgeting apps ask for daily upkeep to stay accurate, and most people stop after week two.",
    solution:
      "Automatic bank sync with confident transaction categorization, a ledger you can correct in one tap, and a monthly summary that actually gets read.",
    role: "Solo build — mobile app, API and categorization logic.",
    technology:
      "React Native for the client, Node.js and GraphQL for the API layer, Plaid for bank connections, on-device caching for offline-first reads.",
    decisions: [
      "Local-first data layer with background sync, so the app stays responsive on a bad connection instead of blocking on the network.",
      "A small, editable rule engine for categorization instead of a black-box model — users can see and correct exactly why a transaction was tagged the way it was.",
    ],
    challenges:
      "Bank re-syncs would occasionally resend transactions with slightly different metadata, creating near-duplicates that needed a careful matching strategy to merge correctly.",
    outcome:
      "Used daily by a small group of beta testers for four months straight, with categorization accuracy holding above 90 percent.",
    links: { live: "#", code: "#" },
  },
  {
    id: "compass",
    number: "03",
    name: "Compass",
    tagline: "Internal analytics dashboard",
    description:
      "A single source of truth for a small operations team that had been tracking KPIs across five spreadsheets that quietly drifted out of sync.",
    tags: ["TypeScript", "D3.js", "Express", "Redis"],
    side: "left",
    problem:
      "Five spreadsheets, five slightly different numbers, and a weekly meeting spent arguing about which one was right.",
    solution:
      "A dashboard that pulls from the existing data sources directly, computes numbers once on the server, and gives every team member the same view with role-based access.",
    role: "Backend architecture, data pipeline and dashboard frontend.",
    technology:
      "Express API with scheduled aggregation jobs, materialized views cached in Redis, D3.js for the custom charts, TypeScript throughout.",
    decisions: [
      "Server-side aggregation over client-side computation, so every viewer sees the same number regardless of device or filter state.",
      "Materialized views refreshed on a schedule rather than real time — the team needed consistency far more than second-by-second freshness.",
    ],
    challenges:
      "Keeping the dashboard fast once historical data passed a couple of years meant rethinking the aggregation strategy twice.",
    outcome:
      "Weekly reporting dropped from a few hours of manual spreadsheet work to a few minutes of reading a dashboard.",
    links: { live: "#", code: "#" },
  },
  {
    id: "atlas",
    number: "04",
    name: "Atlas",
    tagline: "Docs-as-code CMS for developers",
    description:
      "A lightweight content system that treats documentation as versioned files living next to the code they describe, with an editing experience fast enough to feel instant.",
    tags: ["TypeScript", "MDX", "Vite", "SQLite"],
    side: "right",
    problem:
      "Documentation drifts out of date because writing it means leaving the codebase and opening a completely different tool.",
    solution:
      "MDX files stored in the repo, a fast local preview server, and a minimal CMS-style editor for people who would rather not touch git directly.",
    role: "Design and build, end to end.",
    technology:
      "Vite for the dev server and build, MDX for content, SQLite for lightweight indexing and search, TypeScript across the codebase.",
    decisions: [
      "File-based content over a database-backed CMS, so documentation stays diffable and reviewable in a normal pull request.",
      "An incremental parser so the live preview keeps up while typing instead of re-rendering the whole document on every keystroke.",
    ],
    challenges:
      "Getting the preview renderer fast enough to feel instant, rather than merely quick, meant profiling and rewriting the render path more than once.",
    outcome:
      "Adopted internally across two side projects, with reported documentation drift dropping close to zero.",
    links: { live: "#", code: "#" },
  },
];
