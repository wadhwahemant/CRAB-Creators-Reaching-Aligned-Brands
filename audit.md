# CRAB UI/UX Audit & Stabilization Plan

## Confirmed Problems & Root Causes
1. **Scrolling sometimes stops working / Page becomes blank:**
   - **Root Cause & Evidence:** The `#root` and `body` elements lack `overflow-x: hidden`. The `.luminous-arc` element has `width: 140vw` and `transform: translateX(-50%)`, causing horizontal overflow. On mobile and some desktop environments, horizontal overflow combined with `position: relative; z-index: 1` wrappers causes the browser to struggle with layout bounds, breaking vertical scrolling and causing "blanking" during scroll repaints.
   - **Another Factor:** `minHeight: 100vh` combined with internal `overflowY: 'auto'` on Dashboard `<main>` elements without a fixed height constraint means the outer container grows infinitely instead of scrolling internally. When scrolling the body, the fixed sidebar scrolls out of view.
   - **Files Involved:** `src/App.css`, `src/index.css`, `src/pages/Creator/Dashboard.tsx`, `src/pages/Business/Dashboard.tsx`.

2. **The landing page lacks a complete footer & does not explain CRAB sufficiently:**
   - **Root Cause:** `Home.tsx` is essentially a single hero section with no scrollable content below it.
   - **Files Involved:** `src/pages/Public/Home.tsx`.

3. **Animations and transitions are missing / Background is static:**
   - **Root Cause:** `.ambient-background` uses a static CSS `radial-gradient` without any keyframe animations. The interactive elements lack hover states and scale transitions in a structured way.
   - **Files Involved:** `src/styles/theme.css`, `src/App.css`.

4. **New creators and businesses receive inadequate onboarding guidance:**
   - **Root Cause:** Missing onboarding checklists in the dashboard logic.
   - **Files Involved:** Dashboards and a new `Onboarding` component.

## Recommended Fixes & Regression Risks
- **Fix Overflow & Layout:** Add `overflow-x: hidden` to `#root` and ensure `body` handles it gracefully. Update Dashboard wrappers to use `height: 100vh` with `display: flex; overflow: hidden`, ensuring the `<main>` scrolls internally while the sidebar remains fixed. This prevents the "blanking" and scroll breaking.
- **Background Animations:** Refactor `.ambient-background` to use lightweight CSS animations (`@keyframes` drifting).
- **Redesign Homepage:** Build a full scrollable page with Value Props, AI matching explainer, and Footer.
- **Risk:** Modifying the root layout might temporarily break absolute positioned modals. We will test drawer/modal behavior to ensure they remain functional.

Proceeding to Phase 2 (Stabilize) and Phase 3 (Redesign Public Homepage).
