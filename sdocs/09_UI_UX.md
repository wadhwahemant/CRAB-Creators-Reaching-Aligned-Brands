# CRAB — UI/UX DESIGN SPECIFICATION

Version: 2.0
Status: Design Specification
Project: CRAB
Product Type: AI-Powered Creator–Brand Collaboration Platform

---

# 1. DOCUMENT PURPOSE

This document defines the user interface, user experience, visual
identity, interaction design, navigation, page layouts, and responsive
behavior of the CRAB platform.

It serves as the primary UI/UX implementation reference for developers
and AI coding agents, including Antigravity.

The implementation must follow this specification alongside:

- 01_PRD.md
- 02_MVP.md
- 03_USER_FLOWS.md
- 04_SRD.md
- 05_ARCHITECTURE.md
- 06_DATABASE.md
- 07_API_SPEC.md
- 08_AI_MATCHING.md
- 10_ROADMAP.md

These documents define the product requirements, technical architecture,
database structure, integrations, AI behavior, and implementation scope.

This document defines how the product should look and behave.

If a feature is outside the approved MVP, its UI must not be treated
as evidence that the feature has been implemented.

The interface must distinguish between functional features,
development placeholders, and future capabilities.

---

# 2. PRODUCT DESIGN VISION

CRAB is an AI-powered platform that connects content creators with
brands for relevant, meaningful, and measurable collaborations.

The product has two distinct user experiences:

1. Creator Workspace
2. Business Workspace

Both experiences share one underlying design system but have different
visual identities, navigation priorities, and workflows.

## 2.1 Creator Experience

The creator experience should feel:

- Creative
- Intelligent
- Modern
- Futuristic
- Approachable
- Premium
- Personalized
- Opportunity-driven

The interface should help creators discover relevant brands, explore
campaigns, manage applications, maintain their profiles, and track
collaborations without unnecessary complexity.

Creators should immediately understand what opportunities are available
and what actions they should take next.

Primary design objective:

"Help creators discover the right brands and manage their creator
business through one intelligent workspace."

## 2.2 Business Experience

The business experience should feel:

- Professional
- Strategic
- Powerful
- Data-driven
- Efficient
- Trustworthy
- Premium
- Campaign-oriented

Businesses should be able to discover creators, create campaigns,
review applications, organize collaborations, and monitor campaign
progress through a structured workspace.

Primary design objective:

"Help businesses find suitable creators, manage campaigns efficiently,
and make better collaboration decisions."

## 2.3 Shared Product Identity

Both experiences must feel like parts of the same platform.

They must share:

- Typography
- Spacing rules
- Component architecture
- Border treatment
- Interaction principles
- Accessibility standards
- Animation timing
- Layout conventions
- Form behavior
- Notification patterns

The creator and business workspaces must not look like unrelated
applications.

Their primary differences should come from color accents, ambient
lighting, content priorities, and role-specific navigation.

---

# 3. DESIGN REFERENCES

The supplied homepage screenshot is the primary visual reference.

Reference:
https://layers.to/layers/cm8uo2ss7000yjm0bvacj3v6a

The associated screenshot and additional reference images should be
stored inside the project's references directory.

Recommended structure:

references/
    reference-homepage.png
    cursor-reference.png
    reference-notes.md

The exact filenames may differ depending on the assets available.

## 3.1 Visual Characteristics to Adopt

The reference establishes the following design direction:

- Extremely dark background
- Luminous blue arc
- Soft atmospheric lighting
- Elegant white typography
- Restrained navigation
- Large, confident hero text
- Smooth gradients
- Subtle interface borders
- Premium technology aesthetic
- Layered depth
- Generous negative space

These characteristics should inspire CRAB's design system.

The original reference brand, text, and exact composition must not
be copied.

CRAB must have its own recognizable identity.

## 3.2 Reference Interpretation

The luminous arc represents the primary decorative visual motif.

It should resemble a glowing horizon or partial circular light source.

The arc should be especially prominent on the public homepage and may
appear in a more subtle form within authenticated workspaces.

The overall aesthetic should remain sophisticated rather than becoming
a collection of excessive glow effects.

---

# 4. DESIGN PRINCIPLES

All UI decisions should follow these principles.

## 4.1 Clarity Before Decoration

Every element must have a clear purpose.

Do not sacrifice usability for visual effects.

Important information, campaign requirements, metrics, and actions
must remain readable.

## 4.2 Premium Minimalism

Use intentional spacing, refined typography, subtle borders, and
carefully controlled color.

Avoid:

- Excessive gradients
- Excessive rounded cards
- Unnecessary decorative icons
- Overcrowded layouts
- Constant animation
- Oversized glowing elements
- Generic dashboard templates
- Large empty areas without purpose

## 4.3 Action-Oriented Dashboards

Dashboards should prioritize the actions users perform frequently.

Creators should quickly access brand discovery, campaigns,
applications, and messages.

Businesses should quickly access campaign creation, creator discovery,
and application review.

Metrics should provide context rather than overwhelm the interface.

## 4.4 Progressive Disclosure

Frequently used actions should be visible immediately.

Less frequently used actions may be placed inside secondary navigation,
drawers, menus, or contextual controls.

Important actions must never be hidden merely to make the interface
look minimal.

## 4.5 Consistency

Shared components should behave consistently across the application.

Buttons, forms, dialogs, navigation elements, cards, and notifications
must follow common interaction patterns.

## 4.6 Honest Product Feedback

The UI must accurately communicate the state of the system.

Never display a successful operation when the underlying operation
failed.

Never present fictional analytics, fabricated AI scores, or simulated
external integrations as real production data.

---

# 5. BRAND IDENTITY

## 5.1 Brand Name

CRAB

The visual identity should use a clean, modern wordmark.

The logo should remain recognizable against both dark themes.

A simple typographic logo or restrained custom symbol is preferred
over a complicated mascot.

The implementation must not imitate another product's logo.

## 5.2 Brand Personality

CRAB combines creative discovery with intelligent decision-making.

Its personality should balance:

- Creative freedom
- Technological sophistication
- Professional credibility
- Data-informed decisions
- Efficient workflows

The creator workspace emphasizes opportunity and growth.

The business workspace emphasizes discovery, campaign execution,
and decision-making.

---

# 6. COLOR SYSTEM

The application uses two related color themes.

All colors must be defined through reusable design tokens.

Avoid scattering hardcoded colors throughout components.

## 6.1 Creator Theme

Primary background:
#050816

Secondary background:
#090D1B

Elevated background:
#10172A

Primary accent:
#6485FF

Secondary accent:
#80DFFF

Primary text:
#F5F7FF

Secondary text:
#929BB2

Subtle borders:
rgba(255, 255, 255, 0.10)

Glass surfaces:
rgba(255, 255, 255, 0.045)

Hover surfaces:
rgba(100, 133, 255, 0.10)

Creator ambient glow:
Blue, cyan, and occasional soft violet.

Use the primary blue accent for:

- Primary buttons
- Active navigation
- Selected filters
- Interactive highlights
- Relevant charts
- Focus indicators
- Selected progress indicators
- Important links

Use cyan sparingly for secondary highlights.

## 6.2 Business Theme

Primary background:
#080808

Secondary background:
#111111

Elevated background:
#181818

Primary accent:
#FF7A1A

Secondary accent:
#FFB15C

Primary text:
#F7F7F7

Secondary text:
#A1A1AA

Subtle borders:
rgba(255, 255, 255, 0.10)

Glass surfaces:
rgba(255, 255, 255, 0.045)

Hover surfaces:
rgba(255, 122, 26, 0.10)

Business ambient glow:
Orange and warm amber.

Use orange for:

- Primary actions
- Active navigation
- Selected filters
- Important metrics
- Campaign progress highlights
- Selected chart elements
- Relevant status indicators
- Interactive highlights

Do not make the entire business interface orange.

Black and charcoal should remain dominant.

## 6.3 Semantic Colors

Use consistent semantic colors for system feedback.

Success:
A readable green tone.

Warning:
A readable amber tone.

Error:
A readable red tone.

Information:
A readable blue tone.

Semantic colors must remain distinguishable from decorative theme
accents.

Do not communicate status using color alone.

## 6.4 Contrast

Maintain sufficient contrast between text and backgrounds.

Glass effects must not reduce text legibility.

If a translucent surface makes content difficult to read, use a more
opaque background.

---

# 7. TYPOGRAPHY

Typography should feel modern, clean, and premium.

A suitable font family is Inter or another high-quality sans-serif
already available in the project.

Avoid introducing multiple font families without a clear purpose.

## 7.1 Typography Hierarchy

Display heading:
Large, bold, tightly composed.

Page heading:
Clear and prominent.

Section heading:
Medium to bold, with restrained spacing.

Body text:
Comfortable and readable.

Supporting text:
Smaller, muted, but still legible.

Labels:
Compact and consistent.

Metrics:
Large enough to scan quickly.

## 7.2 Typography Rules

Use strong hierarchy rather than excessive font-size variation.

Avoid long paragraphs inside dashboard cards.

Use short descriptions and meaningful labels.

Keep line lengths comfortable.

Do not use low-contrast text merely to achieve a futuristic appearance.

On smaller screens, headings should scale fluidly.

Use responsive typography techniques where appropriate.

---

# 8. BACKGROUND LIGHTING AND SIGNATURE VISUALS

## 8.1 Ambient Lighting

Create an atmospheric background using layered radial gradients.

Creator pages use blue and cyan light.

Business pages use orange and amber light.

Lighting should sit behind the main content.

It must not interfere with reading, clicking, scrolling, or chart
interpretation.

## 8.2 Luminous Arc

The luminous arc is CRAB's signature decorative visual.

Implementation options include:

- CSS pseudo-elements
- CSS radial gradients
- SVG
- Layered gradient borders
- Lightweight animated elements

The arc should appear as a partial circle or luminous horizon.

Use multiple layers:

1. A narrow bright edge.
2. A softer surrounding glow.
3. A larger, low-opacity ambient light.

The result should resemble a distant light source rather than a solid
geometric border.

## 8.3 Animation

The arc may rotate or orbit slowly.

Motion must be subtle and continuous.

Avoid rapid spinning or distracting movement.

The public homepage can use a more visible arc.

Authenticated dashboards should use reduced-intensity decorative
lighting.

Decorative visuals must not cover essential content.

## 8.4 Performance

Prefer CSS-based animations.

Avoid continuous JavaScript animation loops unless genuinely required.

Limit expensive blur effects.

Respect reduced-motion preferences.

---

# 9. GLASSMORPHISM SYSTEM

Glassmorphism is an important part of CRAB's visual identity.

However, glass effects must be applied selectively.

## 9.1 Appropriate Uses

Use glass surfaces for:

- Floating navigation
- Secondary navigation drawers
- Notification panels
- Profile menus
- Modals
- Popovers
- Selected dashboard cards
- Featured campaign cards
- Authentication role-selection cards
- Small floating interface elements

Use more opaque surfaces for data-heavy tables, forms, and dense
content areas when transparency harms readability.

## 9.2 Glass Component Properties

Glass components may use:

- Semi-transparent backgrounds
- backdrop-filter blur
- Fine translucent borders
- Restrained inner highlights
- Soft shadows
- Subtle accent-colored glow
- Carefully controlled corner radii

Avoid excessive blur and large shadows.

Do not apply identical glass effects to every component.

## 9.3 Glass Hierarchy

Primary navigation:
Clearly separated from the page background.

Floating panels:
Higher contrast and stronger separation.

Dashboard cards:
Subtle glass or solid elevated surfaces.

Forms:
Readable surfaces with clear boundaries.

Dense tables:
Prefer opaque or nearly opaque backgrounds.

---

# 10. SPACING, SHAPES, AND LAYOUT

Use a consistent spacing scale.

Recommended spacing values:

4px
8px
12px
16px
24px
32px
48px
64px
96px

Use a consistent corner-radius system.

Suggested radii:

Small controls:
8px

Buttons and inputs:
10px–12px

Standard cards:
14px–18px

Large panels:
20px–24px

Floating navigation:
Pill-shaped where appropriate.

Avoid rounding every element excessively.

Use subtle borders and spacing to establish hierarchy.

The layout should feel spacious without wasting useful screen area.

---

# 11. PUBLIC WEBSITE EXPERIENCE

The public website introduces CRAB and directs users toward
registration or login.

Marketing pages may use normal vertical scrolling.

Application workflows should use separate routes rather than forcing
the entire platform into one long page.

## 11.1 Homepage

Route:

/

The homepage should provide an immediate impression of a premium
AI-powered product.

### Header

Include:

- CRAB logo
- Features
- For Creators
- For Businesses
- How It Works
- Pricing, if applicable
- Sign In
- Get Started

Keep the navigation restrained.

The header may become translucent when the user scrolls.

All navigation items must lead to meaningful destinations.

### Hero Section

Badge:

AI-POWERED CREATOR COLLABORATIONS

Headline:

Your Next Great Collaboration Starts Here.

Supporting text:

Discover the right brands, connect with creators, and turn better
matches into meaningful partnerships.

Primary action:

Get Started

Secondary action:

Explore CRAB

The luminous arc should appear behind the hero text.

Maintain strong text contrast.

The hero should use generous negative space and polished typography.

### Product Preview

Show a carefully designed preview of the actual CRAB interface.

The preview may contain:

- Dashboard cards
- Brand opportunities
- Campaign metrics
- Creator recommendations
- Relevant navigation

Do not use unrelated stock dashboard screenshots.

### Supporting Sections

Include only the sections necessary for the approved product:

- Platform introduction
- Creator experience
- Business experience
- Core capabilities
- How it works
- Product preview
- Final call to action

Avoid filling the homepage with generic marketing cards.

## 11.2 Additional Public Routes

Where supported by the product scope:

/features
/for-creators
/for-businesses
/how-it-works
/pricing
/about

Do not implement unnecessary marketing pages at the expense of the MVP.

---

# 12. AUTHENTICATION EXPERIENCE

Authentication must use the same visual language as the rest of CRAB.

Suggested routes:

/login
/signup
/forgot-password

Role-specific routes may also be implemented where appropriate.

/login/creator
/login/business

## 12.1 Login Page

Include:

- Email input
- Password input
- Show/hide password
- Forgot password
- Sign-in button
- Registration link
- Appropriate validation
- Loading state
- Error feedback

Use a focused layout with subtle ambient lighting.

Do not overcrowd the screen with unnecessary decoration.

## 12.2 Signup Page

The user must be able to select an account type.

Two role-selection cards:

### Creator

Description:

Discover brands, find campaigns, and grow your creator business.

Visual theme:
Blue and cyan.

### Business

Description:

Discover creators, launch campaigns, and build meaningful partnerships.

Visual theme:
Orange and amber.

Both cards should have clear interactive states.

After role selection, display the relevant registration form.

## 12.3 Onboarding

Use progressive onboarding.

Collect the information required for the selected account type.

Do not ask for every possible profile detail before account creation.

Creator onboarding may collect:

- Display name
- Primary niche
- Preferred platforms
- Basic profile information

Business onboarding may collect:

- Business name
- Brand category
- Basic business information

The exact fields must follow the existing user-flow and database
documentation.

## 12.4 Authentication Behavior

The interface must support the intended authentication system.

Implement:

- Form validation
- Loading states
- Error states
- Session handling
- Protected routes
- Role-aware redirects
- Logout
- Appropriate unauthenticated access handling

Creators must enter the creator workspace.

Businesses must enter the business workspace.

Do not treat a frontend-only demo login as production authentication.

If real authentication is not yet configured, use a clearly isolated
development adapter and document its limitations.

---

# 13. GLOBAL APPLICATION NAVIGATION

The application must use separate routes for distinct tasks.

Do not build the authenticated platform as one enormous scrolling page.

Each major task should have its own page.

Examples include:

- Discovering brands
- Exploring campaigns
- Viewing a creator profile
- Creating a campaign
- Reviewing applications
- Managing messages
- Editing a profile

Each individual page may contain its own scrolling sections.

## 13.1 Primary Navigation

Use a premium floating glass navigation bar on desktop where
appropriate.

The navigation should be compact and easy to scan.

The active item must be clearly distinguishable.

Use subtle accent lighting to indicate the current workspace.

## 13.2 Secondary Navigation

Provide an expandable navigation drawer accessible through a
three-line hamburger menu.

The drawer should contain less frequently used destinations.

Use a blurred background overlay when appropriate.

The drawer must support:

- Keyboard navigation
- Escape-to-close behavior
- Click-outside dismissal
- Focus management
- Responsive sizing

Do not hide frequently used actions inside the drawer.

## 13.3 Profile Menu

Provide access to:

- Account information
- Profile
- Settings
- Help
- Logout

Only show destinations supported by the implementation.

## 13.4 Notifications

Where notifications are implemented, provide:

- Unread indicator
- Notification panel or page
- Read/unread state
- Clear empty state
- Meaningful notification content

Do not display fake unread notifications in production.

---

# 14. CREATOR WORKSPACE

Primary route:

/creator/dashboard

The creator dashboard is a central product experience.

It must prioritize discovery, campaign activity, and next actions.

## 14.1 Creator Theme

Use:

- Midnight navy
- Electric blue
- Cyan highlights
- Subtle blue ambient lighting
- Refined glass navigation
- Restrained luminous borders

## 14.2 Creator Primary Navigation

Suggested items:

- Overview
- Discover Brands
- Campaigns
- Messages
- Analytics

Use the actual MVP scope to determine which items are active.

## 14.3 Creator Secondary Navigation

Potential destinations:

- My Profile
- Social Accounts
- My Content
- Applications
- Collaborations
- Contracts
- Payments
- Notifications
- Settings
- Help and Support

Only expose implemented MVP destinations as functional links.

## 14.4 Dashboard Header

Example greeting:

Welcome back, Alex.

Supporting text:

Here's what's happening with your creator journey.

Use the actual user's display name when available.

Prominent actions:

- Discover Brands
- View Campaigns
- Complete Profile

Do not use a hardcoded user name in the production interface.

## 14.5 Summary Metrics

Potential metrics:

- Profile Views
- Engagement Rate
- Active Collaborations
- Pending Applications
- Audience Growth
- Campaign Earnings

Display only metrics supported by the actual data model or clearly
identified development data.

Each card may include:

- Label
- Main value
- Comparison period
- Trend indicator
- Optional sparkline
- Relevant icon

Avoid unnecessary charts inside every metric card.

## 14.6 Brands for Your Niche

This is a priority creator feature.

Section title:

Brands for Your Niche

Supporting text:

Discover brands that fit your content, audience, and style.

The section should be visually prominent.

### Niche Filters

Potential niches:

- Technology
- Beauty
- Fashion
- Fitness
- Gaming
- Food
- Travel
- Lifestyle
- Education
- Finance

Users should be able to select or change their preferred niche.

The actual available niches may come from the backend or documented
product model.

### Brand Opportunity Cards

Each card may contain:

- Brand identity
- Brand name
- Industry
- Campaign title
- Campaign description
- Relevant niche
- Supported platforms
- Compensation range
- Audience requirements
- Application deadline
- Match score
- Match explanation
- View Details action
- Apply action

Only display information that is available.

Do not invent missing compensation ranges or deadlines.

### Match Explanations

When a genuine matching result exists, explain why the opportunity
is relevant.

Examples:

- Strong niche alignment
- Compatible platform
- Audience requirements match
- Budget compatibility
- Content category alignment

These explanations must correspond to the matching inputs.

Development scores must be clearly distinguished from actual AI
matching results.

### Interactions

Creators should be able to:

- Open campaign details
- Apply to campaigns
- Save opportunities
- Filter opportunities
- Sort results
- View all recommendations

Every action must perform its intended function.

## 14.7 Campaign Overview

Provide an overview of applications and collaborations.

Potential statuses:

- Saved
- Applied
- Under Review
- Shortlisted
- Accepted
- In Progress
- Completed

Use the actual status definitions from the project documentation.

Display clear badges and relevant actions.

## 14.8 Recent Activity

Potential events:

- Application submitted
- Application status changed
- Collaboration invitation received
- New message
- Deliverable deadline approaching
- Contract awaiting review

Use real events where available.

Development events must be clearly treated as sample data.

## 14.9 Quick Actions

Prioritize:

- Discover Brands
- View Applications
- Open Campaigns
- Update Creator Profile
- Connect Social Account
- View Analytics
- Open Messages

Do not let decorative elements push important actions below
unnecessary content.

---

# 15. CREATOR DISCOVERY

Primary route:

/creator/discover

The discovery page must be functional.

Include:

- Search
- Niche filters
- Platform filters
- Compensation filters
- Campaign type filters
- Sorting
- Saved opportunities
- Brand cards
- Campaign cards
- Detail navigation

Provide appropriate loading, error, and empty states.

Filter and sorting controls must update the displayed results.

Saved opportunities should retain their state according to the
selected data layer.

Do not claim that AI-powered personalization is active unless the
matching implementation actually supplies the results.

---

# 16. CREATOR BRAND AND CAMPAIGN DETAILS

Suggested routes:

/creator/brands/:brandId
/creator/campaigns/:campaignId

The page should contain the information required for an informed
application decision.

Potential sections:

- Brand information
- Campaign title
- Campaign objective
- Campaign description
- Target audience
- Deliverables
- Supported platforms
- Eligibility requirements
- Compensation
- Timeline
- Application deadline
- Terms and conditions
- Relevant contact information
- Apply action

Use clear hierarchy.

Critical requirements must remain visible.

## 16.1 Application Workflow

The application experience should support:

1. Review campaign.
2. Confirm eligibility.
3. Enter required application details.
4. Review application.
5. Submit.
6. Receive confirmation.
7. View application status.

Validate the form.

Prevent duplicate applications where required.

Persist successful submissions through the selected data layer.

Do not display success when submission fails.

---

# 17. CREATOR PROFILE AND SOCIAL ACCOUNTS

## 17.1 Creator Profile

Suggested route:

/creator/profile

Potential fields:

- Profile image
- Display name
- Biography
- Primary niche
- Secondary niches
- Social platforms
- Audience statistics
- Content categories
- Collaboration preferences
- Portfolio or selected content
- Profile completion

The actual fields must match the existing database and MVP.

Provide a clear profile editing workflow.

## 17.2 Social Account Management

Potential route:

/creator/social-accounts

Display:

- Platform
- Account handle
- Connection status
- Last synchronization
- Available metrics
- Connect or disconnect actions

The UI must distinguish between connected, disconnected, and
unavailable integrations.

Do not display fake successful connections.

Real authorization and API integration must follow the existing
API specification.

---

# 18. CREATOR ANALYTICS

Suggested route:

/creator/analytics

Potential metrics:

- Audience growth
- Engagement
- Views
- Reach
- Content performance
- Platform comparisons
- Historical trends

Use readable charts with:

- Clear titles
- Axis labels
- Useful tooltips
- Appropriate time filters
- Meaningful legends

Do not fabricate real social performance data.

Clearly label development data.

Avoid charts that provide no actionable information.

---

# 19. BUSINESS WORKSPACE

Primary route:

/business/dashboard

The business workspace must have its own information architecture.

It should emphasize campaign operations and creator discovery.

## 19.1 Business Theme

Use:

- Near-black background
- Charcoal surfaces
- Orange accents
- Warm amber highlights
- Subtle orange ambient lighting
- Refined glass surfaces

The business theme must feel professional rather than excessively
decorative.

## 19.2 Business Primary Navigation

Suggested items:

- Overview
- Discover Creators
- Campaigns
- Messages

## 19.3 Business Secondary Navigation

Potential destinations:

- Creator Shortlists
- Applications
- Collaborations
- Contracts
- Analytics
- Brand Profile
- Notifications
- Settings
- Help and Support

Only expose features according to the MVP and implementation status.

## 19.4 Dashboard Header

Example:

Welcome back, Alex.

Supporting text:

Find the right creators. Build better campaigns.

Prominent action:

Create Campaign

Secondary actions:

- Discover Creators
- Review Applications
- View Campaigns

Use the actual signed-in user and business information when available.

## 19.5 Business Metrics

Potential metrics:

- Active Campaigns
- Total Creators
- Pending Applications
- Campaigns in Progress
- Completed Collaborations
- Campaign Spend

Only display metrics supported by the actual data or clearly
identified development data.

Use orange accents selectively.

---

# 20. BUSINESS CAMPAIGN MANAGEMENT

Suggested route:

/business/campaigns

Campaign cards or rows should display:

- Campaign name
- Campaign objective
- Target niche
- Budget
- Creator requirements
- Applicant count
- Campaign status
- Application deadline
- Deliverable progress
- Available actions

Potential statuses:

- Draft
- Active
- Paused
- Completed
- Archived

Use the documented campaign lifecycle.

Businesses should be able to open campaign details, edit drafts,
review applications, and perform supported campaign actions.

Do not allow the UI to imply that unsupported operations are available.

---

# 21. BUSINESS CREATOR DISCOVERY

Primary route:

/business/discover

Creator discovery is a central business workflow.

Include:

- Search
- Niche filters
- Platform filters
- Audience size filters
- Engagement filters
- Location filters where appropriate
- Budget filters
- Content category filters
- Sorting

Creator cards may contain:

- Profile image
- Creator name
- Primary niche
- Biography
- Social platforms
- Audience size
- Engagement metrics
- Content categories
- Relevant location
- Estimated collaboration range
- Match score
- Save to Shortlist
- View Profile
- Invite to Campaign, where supported

Only display metrics and information that are available and
authorized for use.

## 21.1 Creator Detail Page

Suggested route:

/business/creators/:creatorId

Include relevant creator information and available public or
authorized performance metrics.

Potential sections:

- Creator overview
- Niches
- Social platforms
- Audience characteristics
- Content categories
- Relevant performance metrics
- Matching explanation
- Portfolio
- Campaign compatibility
- Available collaboration actions

Do not expose private information without authorization.

---

# 22. BUSINESS CAMPAIGN CREATION

Suggested route:

/business/campaigns/new

Use a multi-step form when appropriate.

## Step 1: Campaign Basics

- Campaign name
- Brand
- Description
- Objective
- Category

## Step 2: Target Creator

- Preferred niches
- Supported platforms
- Audience requirements
- Eligibility criteria

## Step 3: Deliverables

- Content types
- Deliverable quantity
- Posting requirements
- Submission requirements

## Step 4: Budget and Timeline

- Compensation structure
- Budget or compensation range
- Application deadline
- Campaign dates

## Step 5: Review and Publish

- Campaign summary
- Validation
- Save Draft
- Publish Campaign

The exact fields must follow the documented product requirements.

The interface should provide:

- Step indicator
- Previous and Next buttons
- Validation
- Error messages
- Draft persistence
- Review step
- Success confirmation

Preserve entered data when navigating between steps.

A campaign must not be shown as published unless the underlying
operation succeeds.

---

# 23. BUSINESS APPLICATION REVIEW

Suggested route:

/business/campaigns/:campaignId/applications

Provide an interface for reviewing creator applications.

Potential information:

- Creator name
- Profile image
- Primary niche
- Social platforms
- Relevant audience metrics
- Engagement statistics
- Application date
- Campaign
- Matching explanation
- Application status

Potential actions:

- View Creator
- Shortlist
- Accept
- Reject
- Open Conversation

Only implement actions included in the product scope.

Consequential actions should provide clear feedback.

Confirmation dialogs may be used for destructive or difficult-to-reverse
actions.

Actual authorization must be enforced by the backend when available.

---

# 24. MESSAGING

If messaging is included in the MVP, implement it as a distinct
application feature.

Suggested routes:

/creator/messages
/business/messages

Include:

- Conversation list
- Search
- Message history
- Message composer
- Timestamps
- Unread indicators
- Conversation context
- Empty states

Where appropriate, associate conversations with campaigns or
collaborations.

If real-time messaging is unavailable, clearly identify any local
development implementation.

Do not claim that a message has reached another user if the system
only stores it locally.

---

# 25. CONTRACTS AND COLLABORATIONS

Follow the existing MVP and user-flow documents to determine which
contract and collaboration interfaces must be implemented.

Where contracts are included, relevant information may include:

- Parties
- Campaign
- Scope of work
- Deliverables
- Compensation
- Deadlines
- Terms
- Status
- Available actions

Potential statuses:

- Draft
- Awaiting Review
- Awaiting Signature
- Active
- Completed
- Cancelled

Use the actual documented lifecycle.

Do not imply legally binding electronic signature functionality
unless it has genuinely been implemented.

Where collaborations are included, show:

- Associated creator or brand
- Campaign
- Deliverables
- Due dates
- Progress
- Communication
- Completion status

Prioritize the MVP.

---

# 26. AI MATCHING INTERFACE

AI matching is a central CRAB capability.

Read 08_AI_MATCHING.md before implementing any matching interface.

The UI must reflect the actual matching system and its available
inputs.

Potential factors include:

- Creator niche
- Content category
- Audience characteristics
- Engagement metrics
- Social platform
- Campaign objective
- Audience requirements
- Budget compatibility
- Content style
- Brand suitability

Only use the factors supported by the matching specification.

## 26.1 Match Scores

Display match scores only when a matching result exists.

The interface may show a percentage or another documented score.

Explain what the score represents where appropriate.

Do not imply that a score is a guaranteed prediction of campaign
success.

## 26.2 Match Explanations

Where supported, display concise explanations such as:

- Strong niche alignment
- Compatible social platform
- Suitable audience characteristics
- Budget compatibility
- Relevant content category

Each explanation must correspond to available matching inputs.

## 26.3 Development Mode

If the actual AI service is not connected, use a clearly isolated
development matching adapter when necessary.

Do not pretend that a real LLM or AI service is running.

Keep matching logic separate from UI components.

Never expose model API keys in frontend code.

---

# 27. ROUTING SPECIFICATION

The application must use real, distinct routes.

Suggested public routes:

/
 /features
 /for-creators
 /for-businesses
 /how-it-works
 /pricing
 /login
 /signup
 /forgot-password

Suggested creator routes:

/creator/dashboard
/creator/discover
/creator/brands/:brandId
/creator/campaigns
/creator/campaigns/:campaignId
/creator/applications
/creator/messages
/creator/analytics
/creator/profile
/creator/settings

Suggested business routes:

/business/dashboard
/business/discover
/business/creators/:creatorId
/business/campaigns
/business/campaigns/new
/business/campaigns/:campaignId
/business/campaigns/:campaignId/applications
/business/messages
/business/analytics
/business/profile
/business/settings

Additional routes should be added only when justified by the existing
MVP and roadmap.

Route parameters should load the appropriate record.

Missing records should display a useful not-found state.

Protected routes must handle unauthenticated users correctly.

Role-specific routes must prevent inappropriate workspace access.

A user must not be able to access restricted functionality merely
by changing a URL in the browser.

The frontend should be supported by backend authorization when
the backend is implemented.

Do not route every button to the same page.

Do not implement all authenticated functionality as a single
scrolling dashboard.

---

# 28. REUSABLE COMPONENT SYSTEM

Build reusable components for common interface patterns.

Suggested shared components:

- Button
- IconButton
- Input
- Textarea
- Select
- Checkbox
- Switch
- Badge
- Avatar
- Tooltip
- Dropdown
- Modal
- Drawer
- Toast
- SearchInput
- FilterPopover
- GlassCard
- MetricCard
- CampaignCard
- CreatorCard
- BrandCard
- PageHeader
- LoadingSkeleton
- EmptyState
- ErrorState
- NotificationPanel
- ProfileMenu
- FormField
- StepIndicator
- DashboardShell
- Pagination

Not every component needs a glass treatment.

Use the correct component for the information being displayed.

Components should support the creator and business themes through
shared design tokens rather than duplicated styling systems.

Keep the code modular.

Avoid enormous components that combine routing, data access,
business logic, and presentation.

---

# 29. INTERACTION DESIGN

All interactive elements must have predictable behavior.

## 29.1 Buttons

Provide:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading

Use clear labels.

Avoid vague actions when a specific label is possible.

## 29.2 Cards

Interactive cards may use:

- Slight elevation
- Border brightness
- Subtle shadow changes
- Restrained accent lighting

Do not make an entire card clickable if it contains several
independent controls.

## 29.3 Inputs

Inputs must have:

- Clear labels
- Appropriate placeholders
- Visible focus states
- Validation messages
- Disabled states
- Error states

Do not rely on placeholder text as the only field label.

## 29.4 Dialogs

Dialogs must:

- Have a clear purpose
- Be keyboard accessible
- Support Escape-to-close where appropriate
- Manage focus correctly
- Prevent unintended background interaction

## 29.5 Notifications

Use toast notifications for concise feedback.

Examples:

- Campaign saved.
- Application submitted.
- Profile updated.
- Creator added to shortlist.

Show success notifications only after successful operations.

## 29.6 Empty States

Empty states should explain:

- What is missing
- Why it matters
- What the user can do next

Example:

"No campaigns yet."

"Explore available opportunities to find your next collaboration."

Provide a relevant action when possible.

---

# 30. ANIMATION SYSTEM

Animations should make CRAB feel responsive and polished.

They must never make essential interactions slower or harder to use.

## 30.1 General Timing

Suggested durations:

Micro-interactions:
120–180ms

Standard transitions:
180–280ms

Page transitions:
200–350ms

Decorative ambient movement:
Slow and continuous.

These values are guidelines, not rigid requirements.

## 30.2 Permitted Effects

- Subtle button transitions
- Card hover elevation
- Navigation selection transitions
- Drawer animations
- Modal transitions
- Fade and slide page transitions
- Background glow movement
- Slow luminous arc rotation
- Small chart entrance animations
- Optional cursor effects

## 30.3 Animation Restrictions

Avoid:

- Rapid blinking
- Aggressive bouncing
- Constant movement on every card
- Large distracting parallax effects
- Excessive particle systems
- Heavy animations during form submission
- Animations that prevent immediate clicking

## 30.4 Reduced Motion

Respect the user's reduced-motion preference.

Disable or substantially reduce decorative motion when requested.

Essential content must never depend on animation to become visible.

---

# 31. CUSTOM CURSOR

A custom cursor is an optional desktop enhancement.

The reference cursor image may be used as inspiration for its visual
language.

Suggested appearance:

- Small luminous center
- Subtle outer ring
- Restrained trailing effect
- Blue accent for creators
- Orange accent for businesses

The cursor must:

- Follow pointer movement smoothly
- Never block pointer events
- Never interfere with clicking
- Support text selection
- Remain compatible with form controls
- Fall back to the native cursor on touch devices
- Respect reduced-motion preferences

Do not enlarge the cursor excessively.

Do not sacrifice accessibility or usability for decoration.

If the implementation becomes distracting or expensive, simplify
or remove the effect.

The custom cursor is not a dependency for core functionality.

---

# 32. RESPONSIVE DESIGN

CRAB must work on desktop, laptop, tablet, and mobile.

## 32.1 Desktop

Use the available space effectively.

Prioritize:

- Spacious dashboards
- Clear navigation
- Useful multi-column layouts
- Readable data tables
- Well-proportioned cards

## 32.2 Tablet

Adapt the layout to the available width.

Reduce unnecessary columns.

Ensure navigation and filters remain usable.

## 32.3 Mobile

Use a responsive application shell.

Potential adaptations:

- Replace desktop navigation with a drawer
- Use a compact header
- Stack metric cards
- Convert dense tables into manageable cards
- Use responsive campaign cards
- Keep primary actions accessible
- Make forms comfortable to complete
- Prevent horizontal overflow

Do not merely shrink the desktop interface.

Touch targets should be large enough for comfortable interaction.

## 32.4 Responsive Testing

Test representative viewport widths, including:

- 1440px desktop
- 1024px tablet or small laptop
- 768px tablet
- 390px mobile

These are useful testing targets, not exclusive supported sizes.

---

# 33. ACCESSIBILITY

Follow good accessibility practices.

Requirements include:

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Proper form labels
- Appropriate ARIA attributes
- Sufficient contrast
- Keyboard-accessible dialogs
- Focus management
- Escape-to-close behavior where appropriate
- Reduced-motion support
- Clear status indicators
- Accessible chart descriptions where applicable

Do not communicate information through color alone.

Glassmorphism and decorative effects must not reduce accessibility.

The application should remain usable without a mouse.

---

# 34. DATA PRESENTATION AND HONESTY

The interface must distinguish among:

1. Real backend data
2. Real external API data
3. Development seed data
4. Simulated demonstration behavior
5. Planned but unimplemented features

Do not label development data as live analytics.

Do not invent AI-generated results and present them as genuine.

Do not imply that social platforms are connected when they are not.

Do not show a successful save, application, or campaign publication
when the underlying operation fails.

Where data is unavailable, display an appropriate empty, pending,
or unavailable state.

Use fictional development data only when clearly appropriate.

---

# 35. LOADING, ERROR, AND SUCCESS STATES

Every major data-driven page should handle asynchronous states.

## Loading

Use skeletons or compact progress indicators.

Preserve layout stability when data loads.

## Empty

Explain the absence of data and suggest a relevant action.

## Error

Provide a useful message and retry option where appropriate.

Do not expose sensitive technical details to the user.

## Success

Confirm completed actions.

For major workflows, a dedicated confirmation page or dialog may
be appropriate.

## Partial Failure

If one data source fails, do not unnecessarily break unrelated
parts of the application.

For example, unavailable social analytics should not prevent a
creator from accessing available campaign information.

---

# 36. FRONTEND ARCHITECTURE AND IMPLEMENTATION

The UI should be implemented using the project's established
technology stack.

If the repository is empty, a reasonable default is:

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS or a consistent CSS architecture
- A suitable icon library
- A lightweight animation library where necessary
- A charting library where required

Existing architectural decisions take precedence over these defaults.

Use:

- Shared components
- Typed data models
- Modular route components
- Separate data-access logic
- Reusable design tokens
- Clear theme boundaries
- Consistent error handling

Keep UI components independent of specific AI providers and social
platform APIs.

Use service interfaces or adapters for integrations.

Do not expose secret API keys in frontend code.

Do not add unnecessary dependencies.

---

# 37. DEVELOPMENT DATA AND PROTOTYPING

Development data may be used to implement and demonstrate the
frontend before backend integration.

Suggested fictional brands include:

- NOVA Audio
- ORBIT Athletics
- LUMA Skincare
- NORTHSTAR Tech
- MONO Studio

These names are illustrative development examples, not claims of
real partnerships.

Development data should include coherent relationships among:

- Creators
- Businesses
- Brands
- Campaigns
- Applications
- Matching results

Use the actual documented database structure wherever possible.

Keep the data layer replaceable.

If browser-local storage is used for development persistence,
document its limitations.

Local storage is not secure production storage and does not provide
reliable multi-user synchronization.

---

# 38. IMPLEMENTATION PRIORITIES

The UI/UX implementation should follow the existing project roadmap.

## Phase 1: Foundation

- Project setup
- Design tokens
- Typography
- Shared components
- Routing
- Background lighting
- Luminous arc
- Responsive application shells

## Phase 2: Public Website and Authentication

- Homepage
- Public navigation
- Login
- Signup
- Role selection
- Authentication states
- Role-aware redirects

## Phase 3: Creator MVP

- Creator dashboard
- Brands for Your Niche
- Brand discovery
- Campaign details
- Application workflow
- Creator profile

## Phase 4: Business MVP

- Business dashboard
- Creator discovery
- Creator details
- Campaign creation
- Campaign management
- Application review

## Phase 5: Shared Features

Implement the shared features included in the approved MVP.

Potential features include:

- Messaging
- Notifications
- Analytics
- Contracts
- Collaboration tracking
- Settings

## Phase 6: Integration and Polish

- Real authentication
- Backend data integration
- AI matching
- Social APIs
- Responsive refinement
- Accessibility
- Performance
- Testing

The roadmap in 10_ROADMAP.md determines the actual implementation
order when it differs from this suggested sequence.

Do not implement every advanced feature merely because it appears
in a potential route or design example.

---

# 39. UI/UX ACCEPTANCE CRITERIA

The interface is considered ready for a milestone review when
the following conditions are satisfied.

## Visual Quality

- The application has a coherent identity.
- The reference-inspired design direction is recognizable.
- The creator theme uses midnight navy and blue.
- The business theme uses black and orange.
- Typography has a clear hierarchy.
- Spacing is consistent.
- Glassmorphism is restrained.
- Ambient lighting is subtle.
- The luminous arc does not interfere with content.

## Navigation

- Major tasks have separate routes.
- Navigation items lead to meaningful destinations.
- Active navigation states are clear.
- The hamburger drawer works.
- Protected routes handle authentication correctly.
- Creator and business workspaces remain distinct.

## Creator Experience

- The creator dashboard prioritizes important actions.
- Brands for Your Niche is prominent.
- Discovery filters work.
- Campaign details are accessible.
- Applications can be submitted through the implemented data layer.
- Application status is communicated clearly.

## Business Experience

- The business dashboard prioritizes campaign operations.
- Creator discovery is functional.
- Creator profiles are accessible.
- Campaign creation works within the implemented scope.
- Application review supports the available workflow.
- Status changes provide accurate feedback.

## Interaction

- Buttons work.
- Forms validate.
- Loading states are present where required.
- Error states are understandable.
- Empty states provide useful guidance.
- Success messages reflect actual operation results.

## Responsiveness

- Desktop layouts are polished.
- Tablet layouts remain usable.
- Mobile layouts do not overflow.
- Navigation works across supported devices.
- Touch interactions remain accessible.

## Accessibility

- Keyboard navigation works.
- Focus indicators are visible.
- Forms are labeled.
- Contrast is sufficient.
- Reduced-motion preferences are respected.

## Technical Reliability

- Implemented routes render correctly.
- Refreshing nested routes works.
- No significant console errors remain.
- Data updates behave consistently.
- Development placeholders are clearly identified.
- Unimplemented integrations are not presented as operational.

A milestone must not be marked complete merely because the
screenshots look attractive.

The important user journeys must work.

---

# 40. FINAL DESIGN DIRECTIVE

CRAB must combine premium visual design with practical product
functionality.

The creator workspace should feel like an intelligent creative
command center.

The business workspace should feel like a sophisticated campaign
management and creator intelligence platform.

The public homepage should establish the visual identity through
dark surfaces, luminous arcs, atmospheric lighting, elegant
typography, and a refined presentation.

The authenticated application should prioritize useful workflows,
clear information hierarchy, and fast access to important actions.

Glassmorphism, animation, and cursor effects are supporting
design elements, not substitutes for usability.

The implementation must follow the established product documents,
respect the approved MVP, and accurately communicate which features
are genuinely operational.

Build the product incrementally.

Test the actual application.

Prioritize the creator and business workflows before adding
unnecessary decorative or advanced features.

The final objective is to make CRAB feel like a premium,
production-oriented AI product while maintaining a maintainable
and extensible implementation.