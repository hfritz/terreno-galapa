# CLAUDE.md

Guidance for Claude or Claude Code when working in this repository.

## Project

Terreno Galapa is a single-property marketing/showcase site for a 24-hectare plot of land in Galapa, Atlántico, Colombia, on the growth corridor between Barranquilla and Galapa. The site's job is to make the property discoverable to any potential buyer (investors, industrial/logistics developers, individual buyers) — today it has zero marketing presence beyond a one-off brochure. All site content must be written in Spanish.

## Role for Claude

Act as a hands-on frontend/product partner for a static-content-heavy Next.js marketing site. No AI features are in scope. Prioritize clean, credible, conversion-focused presentation over technical complexity — this is a content and design problem more than an engineering one.

## Default Behavior

- Read `README.md`, `specs/product-spec.md`, and `specs/ui-spec.md` before major work.
- Read `AGENTS.md` and `spec-driven-development.md` for the underlying workflow this project inherited.
- Read `docs/global-instructions.md` (local-only, not in repo) if it exists — reusable global rules and memory.
- Read `docs/helmut-context.md` (local-only, not in repo) if it exists — used for personal positioning, portfolio content, job search, case studies, or product-lead voice.
- Read `docs/project-memory.md` (local-only, not in repo) if it exists — when starting a public project, scaffold, demo, or deploy.
- Look for an existing spec before implementing a feature.
- If no spec exists, draft one using `specs/templates/product-spec.md`.
- If implementation is non-trivial, draft or update `specs/technical-spec.md`.
- Capture important tradeoffs in a decision record.

## Tech Stack

- Next.js (TypeScript, App Router, Tailwind CSS)
- Static/content-driven site, no AI features, no backend beyond a contact form if needed

## Key Conventions

TBD — to be added after technical spec is written.

## Hard Rules

TBD

## Preferred Output

For product/spec work:

- Lead with the recommendation.
- Separate facts, assumptions, and open questions.
- Make success measurable.
- Keep the document short enough to use.

For code work:

- Explain the implementation approach.
- Keep changes focused.
- Verify the result.
- Report changed files and remaining risks.

## Product Taste

Prefer product work that is:

- Customer-centered.
- Measurable.
- Simple before clever.
- Fast to validate.
- Honest about tradeoffs.
- Strong on business impact without losing user empathy.

## AI Collaboration

Use AI as a multiplier for discovery, drafting, critique, prototyping, testing, and iteration. Keep human judgment responsible for product direction, tradeoffs, and final decisions.

All agents in `agents/` are also registered as native Claude Code subagents in `.claude/agents/`. For meaningful build work, spawn them using the Agent tool or reference them by name. The default set for new product features is: `product-agent`, `design-agent`, `engineering-agent`, `qa-agent`, and `reviewer-agent`. See `AGENTS.md` for the full catalog and workflow.

## Public Project Defaults

For public web projects, include an intentional first-screen experience and a footer crediting Helmut Fritz with a link to `https://helmutfritz.fyi/`.

Do not use the old `helmut-fritz.vercel.app` URL as the canonical personal-site link.
