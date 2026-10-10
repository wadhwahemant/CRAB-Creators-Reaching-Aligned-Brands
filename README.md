# CRAB — AI-Powered Creator–Brand Collaboration Platform

> **CRAB helps creators discover relevant brand opportunities and helps businesses find, evaluate, and manage creator partnerships through structured campaigns and AI-assisted matching.**

**Project type:** Web application  
**Project stage:** Planning / MVP implementation  
**Primary users:** Creators and businesses / brands  
**Planning documentation:** `sdocs/`  

CRAB is intended to bring creator discovery, campaign listings, applications, and collaboration workflows into one platform. Its central goal is to make creator–brand partnerships more relevant, transparent, and easier to manage than a process built around manual searching, scattered messages, and spreadsheets.

This README is the project-level introduction. The detailed planning documents in `sdocs/` are the source of truth for exact requirements, MVP scope, architecture, database schema, API contracts, AI behavior, and implementation priorities. Where implementation details have not yet been confirmed, this document identifies them as decisions to verify rather than claiming they already exist.

---

## Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Product Goals](#3-product-goals)
4. [Users and Roles](#4-users-and-roles)
5. [Core Features](#5-core-features)
6. [Creator-Side Experience](#6-creator-side-experience)
7. [Business-Side Experience](#7-business-side-experience)
8. [AI Matching System](#8-ai-matching-system)
9. [YouTube and Instagram Integrations](#9-youtube-and-instagram-integrations)
10. [Campaigns, Applications, and Contracts](#10-campaigns-applications-and-contracts)
11. [Main User Journeys](#11-main-user-journeys)
12. [UI/UX and Visual Identity](#12-uiux-and-visual-identity)
13. [High-Level Architecture](#13-high-level-architecture)
14. [Core Domain Concepts](#14-core-domain-concepts)
15. [Repository Structure](#15-repository-structure)
16. [Technology Stack](#16-technology-stack)
17. [Getting Started](#17-getting-started)
18. [Environment Variables and Secrets](#18-environment-variables-and-secrets)
19. [Implementation Roadmap](#19-implementation-roadmap)
20. [Engineering Principles](#20-engineering-principles)
21. [Testing and Acceptance Checklist](#21-testing-and-acceptance-checklist)
22. [Security, Privacy, and Data Integrity](#22-security-privacy-and-data-integrity)
23. [Working with Antigravity and AI Coding Agents](#23-working-with-antigravity-and-ai-coding-agents)
24. [Scope Boundaries and Open Decisions](#24-scope-boundaries-and-open-decisions)
25. [FAQ](#25-faq)

---

## 1. Project Overview

CRAB is a two-sided creator marketing and collaboration platform. It is designed around two related experiences:

- **Creator experience:** Creators set up a profile, discover brands and campaigns that suit their niche, review campaign requirements, apply, and track the progress of their applications and collaborations.
- **Business experience:** Businesses create a brand profile, publish and manage campaigns, discover creators, review applications, and coordinate selected partnerships through the workflows included in the approved MVP.

AI-assisted matching is intended to make discovery more relevant. It should consider campaign and creator attributes and, where possible, explain why a recommendation appears. Matching is not a substitute for clear campaign data, dependable APIs, or user judgment.

### What CRAB should be

- A working product with clear user journeys, not only static dashboard designs.
- A separate, role-aware experience for creators and businesses.
- A structured home for campaigns and applications.
- A platform where recommendations are based on defined data and logic.
- A maintainable application whose AI and third-party integrations can evolve independently.

### What CRAB should not claim prematurely

- Social account data is not necessarily verified just because a user entered a handle or URL.
- An AI match score is not real unless it comes from the implemented matching logic or model.
- A button or designed screen does not prove the corresponding workflow is connected to the backend.
- YouTube and Instagram do not necessarily expose every desired field through public or approved APIs.
- Contracts, e-signatures, payments, messaging, and analytics should not be described as operational unless they are in the approved scope and implemented.

---

## 2. Problem Statement

Creator marketing often requires creators and brands to coordinate across multiple platforms and tools. Creators may struggle to find relevant brand opportunities, while businesses may spend significant time searching for creators and manually judging whether they are suitable for a campaign.

Common friction points include:

- Opportunity discovery is fragmented across social platforms, email, direct messages, and other marketplaces.
- Follower count alone does not establish campaign fit.
- Campaign briefs, deliverables, budgets, and deadlines may be unclear or inconsistent.
- Applications and selection decisions are difficult to track when handled manually.
- Creator information can be difficult to compare consistently.
- Collaboration details may become scattered after a creator is selected.

CRAB aims to organize these steps into a clear workflow and use matching assistance to help users focus on potentially relevant opportunities and partners.

---

## 3. Product Goals

The product should aim to:

1. Help creators find brands and campaigns relevant to their niche, platforms, content, and preferences.
2. Help businesses discover and shortlist creators based on campaign requirements and available profile information.
3. Standardize the information used to describe a campaign and its requirements.
4. Provide a clear application lifecycle for creators and businesses.
5. Make relevant profile and campaign information understandable and easy to compare.
6. Introduce AI-assisted matching in a way that is explainable, testable, and grounded in available data.
7. Establish a foundation for further collaboration management where included in the approved scope.
8. Deliver a polished, responsive, and accessible user experience.

### Product principles

- **Relevance over vanity metrics:** Follower count may be useful but should not be the only factor in a recommendation.
- **Transparency over mystery:** Explain recommendations using actual contributing information whenever possible.
- **Working workflows over decorative screens:** Every enabled action must have meaningful behavior.
- **Data honesty:** Distinguish user-entered, API-sourced, verified, calculated, sample, and unavailable information.
- **Role clarity:** Creator and business accounts need different navigation, permissions, and workflows.
- **MVP first:** Complete the critical end-to-end journey before expanding into optional integrations.
- **Replaceable services:** AI providers and social integrations should be isolated from core product logic where practical.

---

## 4. Users and Roles

### 4.1 Creator

A creator uses CRAB to represent their profile, discover relevant opportunities, submit campaign applications, and track application or collaboration status.

Potential profile information may include:

- Creator display name and profile details
- Niche or content categories
- Social platform handles and links
- Content formats and collaboration preferences
- Audience or performance data, where legitimately available
- Portfolio or examples of previous work
- Location or audience geography when relevant and appropriately supplied
- Indicative rates or availability if required by the approved product scope

Only the fields defined by the approved requirements and database schema should be implemented as required fields.

### 4.2 Business / Brand

A business user represents a brand, defines campaign opportunities, discovers creators, and reviews applications.

Potential business and campaign information may include:

- Business or brand name and description
- Campaign objectives and brief
- Target audience or niche
- Preferred social platforms and content formats
- Deliverables and campaign schedule
- Budget or compensation range
- Eligibility requirements and application deadline
- Campaign and application status

The exact fields and validation rules must match `sdocs/06_DATABASE.md` and `sdocs/07_API_SPEC.md`.

### 4.3 Roles and authorization

The frontend may use role-based navigation for a better user experience, but the backend must enforce authorization independently. A user must not gain business privileges by changing a client-side role value. Protected operations must verify the authenticated identity, role, and record ownership.

---

## 5. Core Features

The precise MVP boundary is defined in `sdocs/02_MVP.md`. The product areas below summarize the planned platform, not a guarantee that every item is already implemented.

| Area | Purpose |
|---|---|
| Public website | Introduce CRAB and guide visitors to the appropriate account flow |
| Authentication | Registration, login, logout, and session handling |
| Role selection and onboarding | Establish creator or business context and collect required information |
| Creator profile | Manage creator details and supported social profile information |
| Business profile | Manage brand identity and business details |
| Creator dashboard | Surface relevant opportunities and creator activity |
| Brand/campaign discovery | Help creators browse campaigns and brands |
| Campaign details | Show requirements, deliverables, compensation information, and deadlines when provided |
| Creator applications | Submit and track campaign applications |
| Business dashboard | Summarize campaigns and application activity |
| Creator discovery | Help businesses browse and filter creator profiles |
| Campaign management | Create, edit, publish, pause, or close campaigns as supported by the data model |
| Application review | Let businesses review and update creator applications |
| AI matching | Provide matching rankings or assistance according to `sdocs/08_AI_MATCHING.md` |
| Social integrations | Retrieve allowed data from official platform APIs, if in scope and configured |
| Collaboration / contract workflow | Track agreement and collaboration information if included in the approved MVP |

Messaging, payments, notifications, analytics, e-signatures, and deliverable approval are potential extensions only if the approved specifications include them.

---

## 6. Creator-Side Experience

### 6.1 Creator dashboard

The dashboard should quickly answer:

- Which opportunities may be relevant to me?
- What is happening with my applications?
- Which actions should I take next?
- Is any important profile information incomplete?

Dashboard metrics should come from stored application data or clearly labelled development data. Avoid invented counts that look like real activity.

### 6.2 “Brands for Your Niche”

The “Brands for Your Niche” section is a priority creator-side experience. It should present relevant brands and campaigns with enough information for a creator to decide whether to investigate further.

A campaign card may display:

- Brand name and logo, when available
- Campaign title and concise summary
- Relevant niche/category
- Platform or content format
- Compensation or budget, if provided
- Deadline or campaign period, if provided
- Match score or match category only if generated by documented logic
- Match explanation only when supported by actual inputs
- Actions such as **View details**, **Apply**, and **Save**, if those actions are in scope

Expected interactions include filtering and sorting by supported attributes, navigating to a dedicated details route, seeing meaningful empty states, and receiving clear feedback after actions. Application eligibility and duplicate submissions must be validated by the backend.

### 6.3 Discovery and campaign details

Creators should be able to inspect a campaign before applying. The detail view should clearly present the brief, deliverables, eligibility criteria, campaign period, compensation information where supplied, and application deadline where applicable.

If a business has not provided a field, show a truthful fallback such as “Not specified”; do not invent a value.

### 6.4 Applications

Creators should be able to view the applications they have submitted and their current status. All statuses and transitions must be consistent across the UI, API, and database. A possible illustrative lifecycle is:

`Submitted → Under review → Accepted / Rejected`

Withdrawal or drafts may exist if the approved specifications support them. The status vocabulary in the actual project documents takes precedence.

### 6.5 Creator profile and social accounts

The product should distinguish between:

- Information entered manually by the creator
- Information fetched from an authorized platform connection
- Information calculated by CRAB
- Information that has not been verified

A username, handle, or profile URL is not equivalent to an authenticated integration.

---

## 7. Business-Side Experience

### 7.1 Business dashboard

The business dashboard should summarize relevant campaign and creator activity, for example active campaigns, incoming applications, applications awaiting review, and shortlisted creators if those concepts exist in the MVP.

All counts should come from real persisted data or be clearly labelled as development examples.

### 7.2 Campaign creation and management

The campaign form should use the fields, validation rules, and status model defined in the database and API specifications. It should explain requirements clearly and prevent publishing when required information is missing.

Campaign actions should be persisted. If the product supports draft, published, paused, and closed states, their transitions should be explicit and tested.

### 7.3 Creator discovery

Businesses should be able to discover creators and narrow results using supported profile attributes. Possible criteria include niche, platform, content format, audience characteristics, and performance metrics if reliable data is available.

The interface should not show unverified statistics as facts or present arbitrary rankings as authoritative AI decisions.

### 7.4 Application review

Businesses should be able to open an application, view the associated campaign and creator profile, inspect available information, and take authorized review actions.

Status changes must be saved by the backend and reflected consistently for both roles. The backend must reject actions that the current user is not permitted to perform.

---

## 8. AI Matching System

The detailed AI design belongs in `sdocs/08_AI_MATCHING.md`. The README summarizes its product role and implementation principles; it does not replace the AI specification.

### 8.1 Purpose

Matching should assist with questions such as:

- How closely does a creator align with a campaign brief?
- Does the creator's niche and content fit the campaign objective?
- Are the creator's supported platforms compatible with the campaign requirements?
- Which available campaigns are most relevant to a creator?
- What evidence supports a recommendation?

### 8.2 Potential inputs

Depending on the approved schema and the data genuinely available, the system may use:

- Campaign title, brief, objectives, niche, audience, and requirements
- Required social platforms and content formats
- Creator niche, bio, and content descriptions
- Creator-declared preferences
- Available audience or performance metrics
- Budget constraints or compensation compatibility
- Campaign eligibility conditions

The precise inputs, scoring rules, weighting, model usage, and output format must be defined in the AI matching document. Do not assume all potential data sources are available.

### 8.3 Recommended implementation approach

1. Define a stable matching input/output contract, including missing-data and error behavior.
2. Enforce hard eligibility requirements, such as platform compatibility, before ranking candidates.
3. Implement the baseline logic described in the AI specification. If appropriate, begin with transparent deterministic rules before adding model-based matching.
4. Add semantic similarity or language-model assistance only if justified by the requirements and evaluation results.
5. Generate explanations from actual input attributes; do not make up evidence to justify a score.
6. Test with representative creator/campaign pairs and review the results manually.
7. Evaluate relevance, failure rate, latency, and cost as matching becomes more sophisticated.

This is a staged approach, not a claim that those steps have already been completed.

### 8.4 Displaying match results

Depending on what the backend genuinely returns, the interface may display a score, match category, explanation, or missing information. A score must not be fabricated or randomly generated and then labelled as AI output. While matching is a prototype, use a clearly marked development placeholder or omit the score.

### 8.5 Model-provider choice and cost

CRAB does not inherently need to train a foundation model from scratch. An existing hosted model or an appropriately deployed open-source model may support parts of the matching workflow, depending on cost, latency, privacy, data quality, and deployment constraints.

Provider selection should consider:

- Quality on CRAB-specific examples
- Request cost and expected volume
- Latency, rate limits, and reliability
- Data handling and retention terms
- Structured output and integration support
- Operational complexity
- Ease of replacing the provider later

Keep provider keys on the server. The chosen provider and exact configuration should be documented in the implementation and environment setup.

---

## 9. YouTube and Instagram Integrations

The project discussions have considered YouTube and Instagram APIs as potential sources of social profile or performance information. The actual capabilities depend on official API support, scopes, account types, user authorization, app review/approval where required, and current platform policies.

### Integration rules

- Use official APIs and comply with platform terms.
- Verify field availability before promising a metric or building product logic around it.
- Store credentials and access tokens securely on the server.
- Request only necessary permissions.
- Handle expired/revoked permissions, rate limits, and provider failures.
- Distinguish a manually entered handle from a connected account.
- Do not label information “verified” unless the verification process actually supports that claim.
- Degrade gracefully if a provider is unavailable.

### Suggested staged approach

**Stage 1 — Profile basics:** Support manually supplied public profile links or fields if allowed by the MVP.  
**Stage 2 — Integration design:** Document providers, required permissions, field mappings, refresh behavior, and secure token storage.  
**Stage 3 — Approved API access:** Implement only the endpoints and data fields accessible to the app.  
**Stage 4 — Reliability:** Add refresh handling, rate-limit behavior, monitoring, and tests.

Confirm this sequence against the official roadmap and API specification before implementation.

---

## 10. Campaigns, Applications, and Contracts

### 10.1 Campaigns

A campaign is a business-owned opportunity described by structured information such as the brief, target niche or audience, platform, deliverables, timing, compensation details, eligibility rules, and status. Exact schema fields and required values belong in `sdocs/06_DATABASE.md` and `sdocs/07_API_SPEC.md`.

### 10.2 Applications

An application connects a creator to a campaign and records the creator's submission and its lifecycle. The system should enforce eligibility, ownership, duplicate-submission rules, and valid status changes on the backend.

### 10.3 Contracts and collaboration workflow

The team has discussed the importance of a contract or agreement page in the larger campaign journey. Whether the first MVP includes a simple agreement record, document generation, acceptance, e-signatures, payments, or deliverable management must be confirmed in the MVP and roadmap documents.

If this workflow is implemented, it should clearly define:

- The parties and campaign involved
- Scope and deliverables
- Timeline and milestones
- Compensation terms where applicable
- Agreement status and permitted transitions
- Who can view or edit the record
- Whether the record is a draft, proposed, accepted, declined, or finalized

A button click should not be represented as a legally completed signature unless a properly defined and implemented signing flow supports that claim. Messaging, payments, and deliverable approval are separate features and should not be assumed to exist automatically.

---

## 11. Main User Journeys

The exact flows and edge cases are defined in `sdocs/03_USER_FLOWS.md`.

### 11.1 Creator journey

1. Visit the public CRAB website.
2. Select sign up.
3. Select or establish the creator role according to the approved registration flow.
4. Create an account and complete required onboarding.
5. Land on the creator dashboard.
6. Explore recommended brands and campaigns.
7. Open a campaign and review its information.
8. Submit an application if eligible.
9. Track application status.
10. Continue into the supported collaboration workflow if selected.

### 11.2 Business journey

1. Visit the public CRAB website.
2. Sign up and establish the business/brand role.
3. Complete the business profile.
4. Land on the business dashboard.
5. Create and publish a campaign if permitted by the current workflow.
6. Discover creators and/or review applications.
7. Evaluate creators against campaign requirements.
8. Update application status through an authorized action.
9. Continue to contract or collaboration management if included in the MVP.

### 11.3 Authentication and protected routes

- Users must be authenticated before accessing protected application routes.
- Creator and business routes must enforce the correct role.
- Redirects must use the authenticated user's real role and session state.
- The backend must authorize every protected operation; client-side guards are not sufficient security controls.
- Logout should clear authenticated application state.
- Handle loading, login failure, expired sessions, unauthorized access, and network errors clearly.

---

## 12. UI/UX and Visual Identity

The detailed design system is in `sdocs/09_UI_UX.md`. The planned visual direction intentionally separates the creator experience from the business experience while preserving shared usability patterns.

### 12.1 Creator theme

The creator experience should feel premium, futuristic, atmospheric, and polished:

- Midnight navy backgrounds
- Electric-blue and cyan accents
- Subtle glassmorphism for navigation and overlays
- Restrained atmospheric lighting and a luminous arc/horizon motif
- Clear typography and generous spacing
- Smooth, understated transitions
- Prominent campaign discovery and personalized opportunity cards

Reference design tokens from the UI/UX specification:

| Token | Value |
|---|---|
| Background | `#050816` |
| Secondary background | `#090D1B` |
| Elevated surface | `#10172A` |
| Primary accent | `#6485FF` |
| Secondary accent | `#80DFFF` |
| Primary text | `#F5F7FF` |
| Muted text | `#929BB2` |

### 12.2 Business theme

The business experience should feel professional and focused on campaign operations:

- Black and charcoal surfaces
- Orange and amber accents
- Clear information hierarchy
- Efficient forms, tables, filters, and status indicators
- Useful campaign and application summaries

Reference tokens:

| Token | Value |
|---|---|
| Background | `#080808` |
| Secondary background | `#111111` |
| Elevated surface | `#181818` |
| Primary accent | `#FF7A1A` |
| Secondary accent | `#FFB15C` |
| Primary text | `#F7F7F7` |
| Muted text | `#A1A1AA` |

These values should be centralized in theme variables rather than duplicated throughout the codebase.

### 12.3 Shared experience requirements

- Separate routes for distinct tasks; do not place the entire product into one giant scrolling page.
- A public marketing page may scroll naturally.
- Use role-aware navigation and a drawer for less frequently used actions where appropriate.
- Keep frequent creator actions visible and easy to reach.
- Make hover, focus, active, disabled, loading, success, and error states clear.
- Support desktop, tablet, and mobile layouts.
- Respect reduced-motion preferences and avoid distracting animation.
- Provide adequate contrast, keyboard navigation, and visible focus states.
- Use reusable components, not duplicate one-off versions of common UI.
- Treat reference images as visual inspiration rather than material to copy pixel-for-pixel.

---

## 13. High-Level Architecture

The final architecture must follow `sdocs/05_ARCHITECTURE.md`. The diagram below is conceptual and does not assume a particular framework, database, provider, or deployment topology.

```text
Browser / Frontend
       |
       | HTTPS / API requests
       v
Application Backend / API
       |
       +-- Authentication and role authorization
       +-- Creator and business profile services
       +-- Campaign services
       +-- Application lifecycle services
       +-- Matching service
       |      +-- Rules / scoring logic
       |      +-- Optional embedding or LLM provider
       +-- Social platform integration services
       +-- Optional collaboration / contract services
       |
       v
Database / Persistent Storage
```

### Architectural boundaries

- The frontend must not contain privileged API credentials or server-side secrets.
- API endpoints and payloads must follow `sdocs/07_API_SPEC.md`.
- Persistence and relational rules must follow `sdocs/06_DATABASE.md`.
- Matching logic should be isolated from visual components.
- Social integration logic should be kept behind dedicated service boundaries.
- Authorization must be implemented on the backend.
- External service failures should be handled without unnecessarily breaking core product flows.
- Errors should be represented consistently across the application.

---

## 14. Core Domain Concepts

The exact entities, properties, relationships, constraints, and indexes are defined in `sdocs/06_DATABASE.md`. At a product level, likely concepts include:

- **User:** Authentication identity and common account metadata.
- **Role:** The authorized product context for the account.
- **Creator profile:** Creator-specific identity, niche, links, and preferences.
- **Business profile:** Brand or business information.
- **Social account:** A manually supplied profile or an authorized platform connection; these must be represented distinctly.
- **Campaign:** A business-owned opportunity and its requirements.
- **Application:** A creator's response to a campaign, including its state and timestamps.
- **Match result:** A recommendation and any required score, rationale, or metadata defined by the AI contract.
- **Collaboration / contract:** Agreement-related information if included in scope.
- **Notification / message:** Communication or activity data if included in scope.

These domain concepts are not proposed table definitions. Implement the actual data model from the database specification rather than deriving migrations from this summary.

### Data consistency requirements

- Use stable IDs for persisted records.
- Validate important inputs on both client and server.
- Enforce ownership and role rules for mutations.
- Define valid state transitions explicitly.
- Avoid conflicting copies of authoritative status data.
- Handle deleted, closed, or unavailable campaigns consistently.
- Never store passwords in plaintext.
- Keep API keys, tokens, and secrets out of version control.

---

## 15. Repository Structure

The planning files discussed for CRAB are organized under `sdocs/`. A suggested repository layout is shown below. This is a reference structure, not a verified inventory of the current working folder; inspect the actual repository and preserve any useful structure already present.

```text
CRAB/
├── README.md
├── sdocs/
│   ├── 01_PRD.md
│   ├── 02_MVP.md
│   ├── 03_USER_FLOWS.md
│   ├── 04_SRD.md
│   ├── 05_ARCHITECTURE.md
│   ├── 06_DATABASE.md
│   ├── 07_API_SPEC.md
│   ├── 08_AI_MATCHING.md
│   ├── 09_UI_UX.md
│   └── ... roadmap / implementation documents, if present
├── references/
│   └── ... design reference images and assets, if included
├── frontend/
│   └── ... frontend application, depending on the chosen structure
├── backend/
│   └── ... backend application, depending on the chosen structure
└── ... configuration, tests, deployment files, and other project assets
```

Do not create empty directories just to match this example. If the repository uses a monorepo layout, a single full-stack application, or different folder names, keep its established structure and update this README accordingly.

### Documentation map

| Document | Authority |
|---|---|
| `01_PRD.md` | Product problem, audience, goals, and high-level requirements |
| `02_MVP.md` | Features and boundaries for the first release |
| `03_USER_FLOWS.md` | Journeys, decisions, alternate paths, and states |
| `04_SRD.md` | Functional and non-functional software requirements |
| `05_ARCHITECTURE.md` | Components, boundaries, and technical architecture |
| `06_DATABASE.md` | Data model, relations, and persistence rules |
| `07_API_SPEC.md` | Endpoint contracts, payloads, and response behavior |
| `08_AI_MATCHING.md` | Matching inputs, logic, outputs, and AI integration requirements |
| `09_UI_UX.md` | Visual system, navigation, layouts, and interaction behavior |
| Roadmap document, if present | Milestones, implementation order, and priorities |
| `README.md` | Project entry point, orientation, setup guidance, and development principles |

If planning documents conflict, resolve the discrepancy explicitly with the team. Do not silently change one document to fit an assumption in another.

---

## 16. Technology Stack

The exact stack must be verified from `sdocs/05_ARCHITECTURE.md` and the actual project files. This README intentionally does not invent framework, database, authentication, hosting, or AI-provider decisions.

Before implementation, confirm:

| Area | Decision to verify |
|---|---|
| Frontend | Framework, language, build tool, routing, styling, component conventions |
| Backend | Runtime, framework, API style, validation strategy |
| Database | Engine, schema, migration tool, connection strategy |
| Authentication | Provider or custom implementation, session/token model, role source of truth |
| File storage | Whether uploads are needed and which storage service is approved |
| AI | Provider/model, matching method, output contract, error behavior |
| Social APIs | Official APIs, scopes, permission requirements, available fields, review requirements |
| Testing | Unit, integration, and end-to-end tools |
| Deployment | Hosting, environment separation, build/run commands, release process |

### Stack decision rule

Follow the stack already agreed in the project's architecture. Do not add a dependency or external service only because it is popular. If a change is necessary, document why, along with tradeoffs, cost, security impact, and migration work.

---

## 17. Getting Started

The exact commands cannot be specified reliably until the existing repository manifests and chosen stack are verified. Use the package scripts and instructions in the actual project rather than copying generic commands from this README.

### First-time setup checklist

1. Open or clone the CRAB repository.
2. Read the planning documents in `sdocs/` before creating new architecture or features.
3. Inspect the current directory and identify the frontend/backend entry points.
4. Confirm the stack from the architecture document and package manifests.
5. Install dependencies using the package manager indicated by the committed lockfile.
6. Create local environment configuration from a safe example file, if provided.
7. Configure the development database and run documented migrations.
8. Seed development data only through the project's documented process, if needed.
9. Start the relevant application services using their documented scripts.
10. Verify registration, login, role-based redirects, and protected routes.
11. Work through the implementation roadmap and test each milestone before moving on.

### Before declaring the app runnable

Confirm that the repository includes or documents:

- Dependency manifests and lockfiles
- Required environment variables
- Database setup and migration commands
- Seed/development-data instructions, if used
- Frontend and backend run commands
- Lint, type-check, and test commands where configured
- External credentials required for optional integrations

This README should be updated once those actual commands are known and verified in a clean environment.

---

## 18. Environment Variables and Secrets

The variable names below are examples of configuration categories only. They are not guaranteed to match the application code. Use the exact names required by the chosen libraries and implementation.

```dotenv
# Application configuration
APP_ENV=development
APP_URL=
API_BASE_URL=

# Database — use only the variable(s) required by the selected database client
DATABASE_URL=

# Authentication — exact configuration depends on the selected auth architecture
AUTH_SECRET=

# AI provider — server-side only
AI_PROVIDER=
AI_API_KEY=
AI_MODEL=

# Optional social-platform integrations — only if implemented
YOUTUBE_CLIENT_ID=
YOUTUBE_CLIENT_SECRET=
INSTAGRAM_CLIENT_ID=
INSTAGRAM_CLIENT_SECRET=
```

Remove unused entries and replace this illustrative block with a verified `.env.example` when the implementation stack is settled.

### Secrets policy

- Never commit `.env` files containing real credentials, access tokens, private keys, or production secrets.
- Commit only safe example values and placeholders.
- Do not expose server-side credentials through public frontend environment variables.
- Use separate credentials for development and production.
- Rotate credentials if they are exposed accidentally.
- Keep access tokens on the server and implement token refresh/revocation handling where required.

---

## 19. Implementation Roadmap

The official project roadmap, if present, is authoritative. The stages below summarize a practical implementation order based on project discussions and should be reconciled with the official plan before they are treated as final.

### Milestone 0 — Specification and repository alignment

- Confirm the planning documents and reference assets are available.
- Read the PRD, MVP, flows, SRD, architecture, database, API, AI matching, UI/UX, and roadmap.
- Inspect the existing code before scaffolding anything.
- Confirm the stack, project scripts, and required services.
- List unresolved questions or contradictions.

**Exit condition:** The team can describe the first release, technical boundaries, key domain concepts, and the first implementation slice.

### Milestone 1 — Foundation and design system

- Establish or verify the application structure.
- Set up shared styles, design tokens, typography, spacing, and reusable UI components.
- Build the public landing page and global navigation.
- Establish routing and shared loading/error patterns.
- Ensure initial layouts respond to desktop, tablet, and mobile sizes.

**Exit condition:** The application runs and has a consistent visual foundation.

### Milestone 2 — Authentication, roles, and onboarding

- Implement sign-up, login, logout, and session handling.
- Implement role selection or assignment according to the auth specification.
- Add protected routes and backend authorization.
- Implement role-aware redirects and required onboarding.

**Exit condition:** Users can authenticate and access only the appropriate experience.

### Milestone 3 — Profiles and persistent data

- Implement the approved database schema and migrations.
- Build creator and business profile flows.
- Connect profile UI to the API.
- Implement input validation and ownership checks.
- Set up safe development data where needed.

**Exit condition:** Profile changes persist and are correctly retrieved.

### Milestone 4 — Campaigns and applications

- Implement campaign create/edit/publish workflows within the MVP.
- Implement creator campaign discovery and detail pages.
- Implement application submission and status tracking.
- Implement business application review.
- Enforce valid status changes and authorization on the backend.

**Exit condition:** A creator can apply to a valid campaign and the business can review the application with persisted changes.

### Milestone 5 — Matching baseline

- Implement the input/output contract described in `08_AI_MATCHING.md`.
- Add eligibility checks, scoring/model logic, and grounded explanations as specified.
- Handle missing or conflicting data.
- Add representative test cases and manual quality review.
- Avoid presenting mock scores as actual AI results.

**Exit condition:** Matching behavior is traceable to documented logic and can be evaluated.

### Milestone 6 — External and extended workflows

- Integrate approved YouTube/Instagram capabilities if in scope.
- Add contract, collaboration, messaging, analytics, or notification features only when specified.
- Implement secure tokens, provider error handling, and rate-limit behavior.

**Exit condition:** Every enabled integration has been tested and its limitations are documented.

### Milestone 7 — QA and demo readiness

- Test creator and business journeys end to end.
- Test responsive layouts and accessibility.
- Test empty, loading, error, and success states.
- Remove misleading mock metrics and non-functional controls.
- Verify setup instructions from a clean checkout.
- Ensure the demo does not depend on unconfigured external services unless those dependencies are clearly stated.

**Exit condition:** The core MVP is reliable to demonstrate and its actual capabilities are clear.

---

## 20. Engineering Principles

### 20.1 Read the specifications before coding

Do not generate the whole application from a single broad prompt. Read the relevant documents, identify the applicable requirements, and create a bounded implementation plan.

### 20.2 Build complete vertical slices

Prefer one working end-to-end workflow over many disconnected screens. For example, a campaign page should connect to the correct data source, show genuine loading/error/empty states, and perform an actual action where the feature is enabled.

### 20.3 Respect source-of-truth documents

- Product scope follows `02_MVP.md`.
- Journeys follow `03_USER_FLOWS.md`.
- Software behavior follows `04_SRD.md`.
- System boundaries follow `05_ARCHITECTURE.md`.
- Persistence follows `06_DATABASE.md`.
- API shapes follow `07_API_SPEC.md`.
- Matching behavior follows `08_AI_MATCHING.md`.
- Visual and interaction requirements follow `09_UI_UX.md`.

### 20.4 Keep development data separate

- Store seed/mock data in a deliberate development layer.
- Do not hard-code fake counts and match scores throughout UI components.
- Prevent accidental mixing of sample and production records.
- Label simulated capabilities wherever a user could mistake them for real behavior.

### 20.5 Make actions meaningful

Every active button should do what its label promises. If a feature is incomplete, disable it or show a clear not-yet-available state. Do not show a success message when the backend action has failed or is not connected.

### 20.6 Avoid premature complexity

Do not start with every AI provider, social API, payment workflow, or contract capability at once. Build and test the core profiles, campaigns, and application flow first, then add advanced matching and external integrations in the planned order.

### 20.7 Keep code maintainable

- Centralize design tokens and reusable UI patterns.
- Keep business rules and validation out of purely presentational components.
- Reuse API clients and error handling.
- Use clear names and small, well-defined modules.
- Add tests for important permissions, validation rules, and status transitions.
- Document deliberate deviations from approved requirements.

---

## 21. Testing and Acceptance Checklist

### Product behavior

- [ ] Registration and login work.
- [ ] Logout clears the authenticated state.
- [ ] Creator/business role redirects work.
- [ ] Users cannot access another role's protected functionality.
- [ ] Backend authorization is enforced for sensitive operations.
- [ ] Required profile fields and campaign fields are validated.
- [ ] Campaign create/update actions persist correctly.
- [ ] Creators can discover eligible campaigns.
- [ ] Application submission persists correctly.
- [ ] Businesses can review applications and persist permitted status changes.
- [ ] Invalid status transitions are rejected.
- [ ] Matching output follows the documented contract.
- [ ] Social API failures are handled gracefully where integrations exist.

### UI/UX

- [ ] Every core route renders correctly.
- [ ] Navigation and drawers work across supported screen sizes.
- [ ] Forms show useful validation messages.
- [ ] Buttons perform real actions or are clearly marked unavailable.
- [ ] Loading, empty, success, and error states are implemented.
- [ ] Keyboard navigation and visible focus states work.
- [ ] Text and controls have adequate contrast.
- [ ] Reduced-motion preferences are respected.
- [ ] Layouts do not overflow on narrow screens.

### Engineering and operations

- [ ] Database migrations work from a clean state.
- [ ] Required environment variables are documented.
- [ ] Secrets are not committed or sent to the browser.
- [ ] API inputs are validated server-side.
- [ ] Important domain rules have tests.
- [ ] Logs do not expose secrets or unnecessary private data.
- [ ] Configured lint, type-check, and test commands pass.
- [ ] README instructions match the actual repository.

---

## 22. Security, Privacy, and Data Integrity

CRAB may process account information, creator profiles, campaign details, application data, social-platform data, and business information. Security and privacy need to be part of the implementation from the beginning.

Baseline requirements include:

- Authenticate access to protected resources.
- Authorize actions based on role and record ownership.
- Validate inputs on the server and apply appropriate output handling.
- Use the selected authentication solution's secure session/password practices.
- Keep credentials and API tokens server-side.
- Use HTTPS in deployed environments.
- Request only necessary social-platform permissions.
- Handle token expiration and revocation where applicable.
- Prevent unauthorized access to private campaigns and applications.
- Avoid logging passwords, tokens, or unnecessary personal data.
- Define data retention, account deletion, and access behavior as required by the product.
- Be clear about data provenance and whether values are user supplied, API sourced, or calculated.
- Avoid presenting AI-generated recommendations as guaranteed facts.

These points are implementation requirements to verify, not a statement that the current application already meets them.

---

## 23. Working with Antigravity and AI Coding Agents

Antigravity or another AI coding agent can accelerate implementation, but should work from the existing specifications and repository—not invent the product independently.

### Recommended agent workflow

1. Open the root CRAB project folder.
2. Confirm that `sdocs/` and any reference assets are present.
3. Ask the agent to read the relevant planning documents before editing.
4. Ask it to summarize the product and identify conflicts or missing decisions.
5. Ask for a milestone-based implementation plan aligned with the actual architecture.
6. Implement one bounded milestone or vertical slice at a time.
7. Ask the agent to run the available checks and report what was actually tested.
8. Review the changed files before accepting the work.

### Requirements for agent-generated changes

The agent should:

- Preserve useful existing code and project conventions.
- Follow the MVP and the detailed specifications.
- Avoid overwriting or regenerating unrelated files.
- Use real API/database integrations where required by the task.
- Keep sample data clearly separated.
- Never claim an AI or social integration is operational without testing it.
- Report files changed, commands executed, results, and known limitations.
- Identify any assumption that could affect data, permissions, security, or product scope.

### Suggested task template

```text
Goal:
Describe the user outcome this task must deliver.

Read first:
List the relevant documents in sdocs/ and inspect the existing code.

Scope:
List the routes, components, backend services, data models, and API contracts involved.

Acceptance criteria:
State the observable behaviors that must work.

Out of scope:
List the features and files that must not be changed.

Verification:
Run the relevant tests and report the commands and results. Clearly label mocks, incomplete work, and external credential requirements.
```

---

## 24. Scope Boundaries and Open Decisions

Before treating any item as finalized, verify it against the project documents and current code.

1. **Exact stack:** Confirm frontend, backend, database, authentication, and deployment choices in the architecture document.
2. **MVP scope:** Confirm whether contract management, messaging, analytics, notifications, payments, and deliverable tracking belong in the first release.
3. **Role and auth model:** Confirm where roles are stored and how they are enforced by the backend.
4. **Database details:** Use the actual schema and migrations; the concepts in this README are not table definitions.
5. **API details:** Use the documented endpoints, payloads, response types, errors, and authorization behavior.
6. **AI approach:** Confirm whether matching is rules-based, embedding-based, LLM-assisted, or a hybrid, as specified in `08_AI_MATCHING.md`.
7. **AI provider and cost:** Confirm provider/model selection, usage assumptions, fallback behavior, and security requirements.
8. **Social integrations:** Verify available official API fields, access permissions, account requirements, and app approval status.
9. **Contracts:** Define whether the MVP needs an agreement record, document generation, acceptance, e-signatures, or no contract workflow yet.
10. **Reference assets:** Confirm the real location of reference images and whether they are included in version control.
11. **Roadmap:** Follow the official roadmap if its order differs from this summary.
12. **Feature status:** A design document or frontend mockup is not evidence that a feature has been completed.

### Conflict-resolution rule

If this README conflicts with an approved planning document, resolve the discrepancy with the team and update the relevant document. Do not silently reshape requirements based on assumptions in this README.

---

## 25. FAQ

### Does CRAB need to train its own AI model?

Not necessarily. An existing model or service may be suitable for part of the matching workflow. The right choice depends on the approved AI design, data quality, evaluation results, budget, privacy requirements, latency, and expected use. Training a foundation model from scratch should not be assumed necessary.

### Can CRAB automatically fetch every YouTube and Instagram metric?

No such assumption should be made. Access depends on official API capabilities, permissions, supported account types, review requirements, and platform policies. Each feature should be designed around fields that the app is actually allowed to retrieve.

### Should the AI be built before the rest of CRAB?

The core profiles, campaign data, and application workflow provide the context the matching system needs. Define the matching contract early, but implement and evaluate it against real product data and stable APIs. Do not substitute a fabricated match score for a tested matching system.

### Can the frontend be developed before the backend?

Yes, staged UI development can use clearly isolated sample data. However, the critical product workflows should ultimately connect to the backend and persistent database. Mock data must not be presented as real user activity.

### Are contracts, payments, messaging, and analytics guaranteed MVP features?

No. Their inclusion must be confirmed in the MVP and related user-flow, database, API, and roadmap documents. They should not be promised until scope and implementation are clear.

### What should be built first?

Reconcile the planning documents, verify the repository and stack, and then build a complete vertical slice. A sensible high-level sequence is foundation and design system, authentication and roles, profiles, campaigns, applications, and then the matching/integration work defined by the project documents.

### How should this README be maintained?

Keep it as the project's entry point. Update the stack, setup commands, repository tree, and feature status when those details are confirmed in code. Keep the detailed requirements and implementation contracts in `sdocs/`.

---

## Final Note

CRAB will succeed through a reliable, understandable creator–brand journey—not through the number of pages or the amount of AI terminology. The core workflows should work, recommendations should be grounded in real inputs, permissions should be enforced, and the product should clearly communicate what is live versus what is still a prototype.

**Use this README to understand the project. Use `sdocs/` to implement it correctly.**
