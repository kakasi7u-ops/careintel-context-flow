# CareIntel Website Plan

## Direction
Build the selected **Asymmetric Narrative — premium editorial healthcare technology design** concept across exactly five pages. Use graphite, clinical white, mineral blue, soft teal, and silver mist with Space Grotesk headings and DM Sans body copy.

The recurring visual language will be:
- **Evidence Thread:** source → extracted fact → context → reviewer
- **Care Timeline:** input → event → uncertainty → clarification → review
- **Intelligence Layer:** raw information → structure → trusted context → bounded AI draft → human review

## Shared Experience
- Create a sticky institutional navigation with desktop links, compact accessible mobile menu, and the supplied page structure.
- Build reusable section, typography, evidence, timeline, workflow, architecture, CTA, and footer primitives so the pages feel related without repeating identical layouts.
- Use a carefully curated mix of authentic healthcare photography and custom CareIntel visualizations. Avoid generic stock-photo aesthetics, doctors-at-laptop imagery, unrelated business photography, and dashboard mockups.
- Add restrained scroll reveals, evidence-thread movement, and precise hover feedback with reduced-motion fallbacks.
- Maintain strong keyboard access, focus states, contrast, semantic headings, and intentionally recomposed mobile layouts.

## Pages

### 1. Home `/`
- Treat the homepage hero as the highest-priority visual area, matching the selected asymmetric split composition while using the requested headline, supporting copy, and two CTAs.
- Build a custom Care Intelligence Canvas—not a SaaS dashboard—combining text, voice, document, image, extracted fields, timeline, provenance, reviewer draft, structured context, and qualified human review.
- Add the trust statement, fragmented-information story, Capture/Understand/Structure/Review sequence, multimodal flow, evidence provenance section, human-in-the-loop sequence, and final CTA.

### 2. Platform `/platform`
- Introduce the full workflow with the supplied platform message.
- Present the six capability groups through varied editorial compositions rather than a repeated card grid.
- Make the horizontal Raw Input → Evidence → Structure → Context → Assistance → Review sequence the page’s signature visual.

### 3. How It Works `/how-it-works`
- Create a 12-step product narrative with alternating visual treatments and concise system-role explanations.
- Build the interactive synthetic case journey from neutral patient input through transcript, OCR, evidence, timeline, clarification, retrieval, draft, safety, review queue, and reviewer action.
- Avoid diagnoses, medical conclusions, and identifiable patient data.

### 4. Technology & Safety `/technology`
- Build the simplified architecture exactly from the supplied stack and boundaries, without adding prohibited technologies.
- Create distinct sections for the AI boundary, deterministic safety sequence, storage and state model, and engineering principles.
- Make “AI is a component. Not the authority.” and “Safety is part of the architecture.” the primary trust anchors.

### 5. Impact `/impact`
- Present six qualitative impact areas without metrics or unsupported outcomes.
- Show only the supplied target environments.
- Use a restrained editorial human-impact section and the requested closing statement and CTA.

## Content and Trust Controls
- Use only the supplied claims, capabilities, environments, and architecture.
- Keep CareIntel explicitly non-diagnostic, evidence-linked, bounded by policy, and human-led.
- Do not introduce customer names, logos, statistics, testimonials, certifications, partnerships, regulatory claims, deployment claims, or fabricated patient details.

## Technical Details
- Keep the exact five routes: `/`, `/platform`, `/how-it-works`, `/technology`, and `/impact`.
- Implement within the project’s existing TanStack Start and TypeScript structure. This Lovable project runtime does not support replacing it with Next.js App Router, but the file-based routing, server rendering, metadata, and font optimization goals will be delivered in the supported framework.
- Use Tailwind v4 semantic tokens in the global design system; no hardcoded page-level colors.
- Optimize Space Grotesk and DM Sans as project fonts without unnecessary runtime font loading.
- Give every page unique title, description, Open Graph title/description, `og:type`, and Twitter card metadata.
- Keep visuals lightweight, reserve stable dimensions, lazy-load noncritical media where relevant, and avoid unnecessary dependencies.

## Final Review
- Verify all five routes and navigation links.
- Test desktop and mobile layouts for clipping, overflow, diagram legibility, menu behavior, and visual hierarchy.
- Check keyboard navigation, focus visibility, reduced motion, heading order, and contrast.
- Audit every page for unsupported claims, repetitive card patterns, generic SaaS styling, broken visuals, and inconsistent architecture language.
