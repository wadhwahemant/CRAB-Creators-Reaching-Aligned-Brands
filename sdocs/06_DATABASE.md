# CRAB — Database Design

**Document:** 06_DATABASE.md
**Project:** CRAB — Creator and Brand Collaboration Platform
**Version:** 1.0
**Status:** MVP Database Specification

---

# 1. Overview

CRAB is a creator-brand collaboration platform that helps creators understand their social media performance and helps brands discover suitable creators for marketing campaigns.

The database must support:

* User authentication and profiles.
* Separate creator and brand experiences.
* Creator social media account connections.
* YouTube and Instagram analytics.
* Creator performance dashboards.
* Brand campaigns and creator discovery.
* AI-powered creator-brand matching.
* Campaign applications and collaboration tracking.
* Contracts and collaboration records.
* AI-generated insights and recommendations.
* Future expansion to additional social media platforms.

The database must support the MVP without unnecessary complexity.

## 1.1 Recommended Technology

* **Database:** PostgreSQL
* **Database platform:** Supabase
* **Authentication:** Supabase Auth
* **Database security:** Supabase Row Level Security (RLS)
* **Backend:** Server-side API/backend
* **AI integration:** External LLM/API integrated through the backend
* **Social media data:** YouTube and Instagram APIs, subject to their access permissions

Supabase Auth will handle authentication. PostgreSQL will store application data.

---

# 2. Database Design Principles

Follow these principles throughout implementation:

1. Use UUIDs for internal primary keys.
2. Use foreign keys to maintain relationships between tables.
3. Use timestamps for records that need creation and update tracking.
4. Store platform-specific IDs separately from internal database IDs.
5. Separate authentication data from application profile data.
6. Keep raw analytics data separate from AI-generated insights.
7. Store historical analytics snapshots for dashboard graphs.
8. Use JSONB only when data structures genuinely vary between platforms.
9. Enforce access permissions through Row Level Security.
10. Never expose OAuth tokens, service-role keys, or other secrets to the frontend.
11. Use migrations to create and modify the database schema.
12. Avoid creating duplicate tables or storing the same information unnecessarily.

---

# 3. Authentication and User Profiles

## 3.1 Table: `profiles`

Stores application-level user information.

Supabase Auth will manage login credentials and authentication sessions.

| Column     | Type        | Constraints                            | Description      |
| ---------- | ----------- | -------------------------------------- | ---------------- |
| id         | UUID        | Primary key, references auth.users(id) | User ID          |
| full_name  | TEXT        | Nullable                               | User's full name |
| avatar_url | TEXT        | Nullable                               | Profile image    |
| role       | TEXT        | Required                               | creator or brand |
| created_at | TIMESTAMPTZ | Default now()                          | Creation time    |
| updated_at | TIMESTAMPTZ | Default now()                          | Last update      |

### Requirements

* Create a profile when a user registers.
* Ensure the profile ID matches the Supabase Auth user ID.
* Do not store passwords in this table.
* Restrict users to modifying their own profiles unless an authorized administrative operation is required.
* Validate roles on the server and in database constraints.

---

# 4. Creator Module

## 4.1 Table: `creator_profiles`

Stores creator-specific information.

| Column            | Type        | Constraints                        | Description            |
| ----------------- | ----------- | ---------------------------------- | ---------------------- |
| id                | UUID        | Primary key                        | Creator profile ID     |
| user_id           | UUID        | Foreign key to profiles.id, unique | Associated user        |
| display_name      | TEXT        | Required                           | Creator's public name  |
| bio               | TEXT        | Nullable                           | Creator biography      |
| profile_image_url | TEXT        | Nullable                           | Profile image          |
| country           | TEXT        | Nullable                           | Country                |
| city              | TEXT        | Nullable                           | City                   |
| languages         | TEXT[]      | Default empty array                | Languages used         |
| niches            | TEXT[]      | Default empty array                | Content categories     |
| primary_platform  | TEXT        | Nullable                           | Main social platform   |
| contact_email     | TEXT        | Nullable                           | Business contact email |
| created_at        | TIMESTAMPTZ | Default now()                      | Creation time          |
| updated_at        | TIMESTAMPTZ | Default now()                      | Last update            |

### Requirements

* Each user can have at most one creator profile.
* Creator profiles should be separate from brand profiles.
* Do not assume that all creators have connected social media accounts.
* Public creator information must be distinguishable from private account information.
* Contact information must not be exposed publicly without authorization.

## 4.2 Table: `creator_categories`

Use this table if CRAB needs standardized creator categories rather than free-text niches.

| Column     | Type        | Constraints      | Description         |
| ---------- | ----------- | ---------------- | ------------------- |
| id         | UUID        | Primary key      | Category ID         |
| name       | TEXT        | Unique, required | Category name       |
| slug       | TEXT        | Unique, required | Category identifier |
| created_at | TIMESTAMPTZ | Default now()    | Creation time       |

Example categories:

* Technology
* Gaming
* Fashion
* Beauty
* Fitness
* Food
* Travel
* Education
* Lifestyle
* Finance

## 4.3 Table: `creator_category_mappings`

Connects creators to standardized categories.

| Column      | Type | Constraints                          | Description |
| ----------- | ---- | ------------------------------------ | ----------- |
| creator_id  | UUID | Foreign key to creator_profiles.id   | Creator     |
| category_id | UUID | Foreign key to creator_categories.id | Category    |

Use a composite primary key on `(creator_id, category_id)`.

---

# 5. Brand Module

## 5.1 Table: `brand_profiles`

Stores brand or business account information.

| Column              | Type        | Constraints                        | Description          |
| ------------------- | ----------- | ---------------------------------- | -------------------- |
| id                  | UUID        | Primary key                        | Brand profile ID     |
| user_id             | UUID        | Foreign key to profiles.id, unique | Associated user      |
| company_name        | TEXT        | Required                           | Business name        |
| description         | TEXT        | Nullable                           | Business description |
| logo_url            | TEXT        | Nullable                           | Company logo         |
| website_url         | TEXT        | Nullable                           | Website              |
| industry            | TEXT        | Nullable                           | Business industry    |
| country             | TEXT        | Nullable                           | Country              |
| city                | TEXT        | Nullable                           | City                 |
| company_size        | TEXT        | Nullable                           | Business size        |
| verification_status | TEXT        | Default pending                    | Verification status  |
| created_at          | TIMESTAMPTZ | Default now()                      | Creation time        |
| updated_at          | TIMESTAMPTZ | Default now()                      | Last update          |

### Requirements

* Each user can have at most one brand profile in the MVP.
* Brand data must remain separate from creator data.
* Verification status must be controlled by trusted backend operations.
* A brand must not be able to mark itself as verified by directly updating the database.

---

# 6. Social Media Accounts

## 6.1 Table: `social_accounts`

Stores connected creator social media accounts.

| Column              | Type        | Constraints                        | Description            |
| ------------------- | ----------- | ---------------------------------- | ---------------------- |
| id                  | UUID        | Primary key                        | Internal account ID    |
| creator_id          | UUID        | Foreign key to creator_profiles.id | Associated creator     |
| platform            | TEXT        | Required                           | youtube or instagram   |
| platform_account_id | TEXT        | Required                           | Platform account ID    |
| username            | TEXT        | Nullable                           | Platform username      |
| display_name        | TEXT        | Nullable                           | Platform display name  |
| profile_url         | TEXT        | Nullable                           | Public profile URL     |
| profile_image_url   | TEXT        | Nullable                           | Platform profile image |
| access_token        | TEXT        | Server-only                        | OAuth access token     |
| refresh_token       | TEXT        | Server-only, nullable              | OAuth refresh token    |
| token_expires_at    | TIMESTAMPTZ | Nullable                           | Token expiration       |
| connection_status   | TEXT        | Default connected                  | Connection status      |
| last_synced_at      | TIMESTAMPTZ | Nullable                           | Last successful sync   |
| created_at          | TIMESTAMPTZ | Default now()                      | Connection time        |
| updated_at          | TIMESTAMPTZ | Default now()                      | Last update            |

### Requirements

* Support YouTube and Instagram initially.
* Keep internal IDs separate from platform account IDs.
* Prevent accidental duplicate connections.
* Track token expiration and connection status.
* Handle revoked or expired authorization gracefully.
* Never return access tokens or refresh tokens to frontend components.
* Use secure server-side token handling and encryption appropriate for the deployment.
* Verify OAuth state and callback requests.
* Respect each platform's API permissions and restrictions.

Add a uniqueness constraint on `(platform, platform_account_id)` where appropriate.

**Important:** Instagram account access and available metrics depend on the account type, permissions, API product, and approved access. Do not assume every Instagram account exposes the same data.

---

# 7. Account-Level Analytics

## 7.1 Table: `platform_metrics`

Stores account-level performance snapshots.

| Column            | Type        | Constraints                       | Description                 |
| ----------------- | ----------- | --------------------------------- | --------------------------- |
| id                | UUID        | Primary key                       | Metric record ID            |
| social_account_id | UUID        | Foreign key to social_accounts.id | Social account              |
| metric_date       | DATE        | Required                          | Snapshot date               |
| followers         | BIGINT      | Nullable                          | Followers or subscribers    |
| following         | BIGINT      | Nullable                          | Following count             |
| views             | BIGINT      | Nullable                          | Views                       |
| likes             | BIGINT      | Nullable                          | Likes                       |
| comments          | BIGINT      | Nullable                          | Comments                    |
| shares            | BIGINT      | Nullable                          | Shares                      |
| reach             | BIGINT      | Nullable                          | Reach                       |
| impressions       | BIGINT      | Nullable                          | Impressions                 |
| engagement_rate   | NUMERIC     | Nullable                          | Engagement rate             |
| extra_metrics     | JSONB       | Default empty object              | Additional platform metrics |
| created_at        | TIMESTAMPTZ | Default now()                     | Record creation             |

### Requirements

* Store historical snapshots to support dashboard charts.
* Avoid overwriting all historical data during a sync.
* Prevent duplicate daily snapshots for the same account and metric date.
* Store unavailable metrics as NULL instead of inventing values.
* Normalize metric definitions where possible.
* Document how engagement rate is calculated.
* Do not treat reach, impressions, views, and followers as interchangeable.

Add a unique constraint on `(social_account_id, metric_date)`.

---

# 8. Audience Analytics

## 8.1 Table: `audience_snapshots`

Stores audience demographics where supported by the connected platform.

| Column            | Type        | Constraints                       | Description    |
| ----------------- | ----------- | --------------------------------- | -------------- |
| id                | UUID        | Primary key                       | Snapshot ID    |
| social_account_id | UUID        | Foreign key to social_accounts.id | Social account |
| snapshot_date     | DATE        | Required                          | Snapshot date  |
| data              | JSONB       | Required                          | Audience data  |
| created_at        | TIMESTAMPTZ | Default now()                     | Creation time  |

Possible audience information:

* Age distribution
* Gender distribution
* Country distribution
* City distribution
* Audience activity periods

### Requirements

* Store only data actually available from authorized APIs.
* Preserve the source and meaning of each metric.
* Do not fabricate demographic information.
* Use JSONB because demographic structures may vary across platforms.
* Restrict audience analytics to authorized users.

---

# 9. Content and Posts

## 9.1 Table: `content_posts`

Stores individual videos, reels, shorts, and posts.

| Column              | Type        | Constraints                       | Description                    |
| ------------------- | ----------- | --------------------------------- | ------------------------------ |
| id                  | UUID        | Primary key                       | Internal content ID            |
| social_account_id   | UUID        | Foreign key to social_accounts.id | Publishing account             |
| platform_content_id | TEXT        | Required                          | Original platform content ID   |
| content_type        | TEXT        | Required                          | video, short, reel, post, etc. |
| title               | TEXT        | Nullable                          | Content title                  |
| description         | TEXT        | Nullable                          | Caption or description         |
| thumbnail_url       | TEXT        | Nullable                          | Thumbnail                      |
| content_url         | TEXT        | Nullable                          | Public content URL             |
| published_at        | TIMESTAMPTZ | Nullable                          | Publishing date                |
| created_at          | TIMESTAMPTZ | Default now()                     | Record creation                |
| updated_at          | TIMESTAMPTZ | Default now()                     | Last update                    |

Add a unique constraint on `(social_account_id, platform_content_id)`.

## 9.2 Table: `content_metrics`

Stores historical performance for individual posts.

| Column          | Type        | Constraints                     | Description        |
| --------------- | ----------- | ------------------------------- | ------------------ |
| id              | UUID        | Primary key                     | Metric ID          |
| content_id      | UUID        | Foreign key to content_posts.id | Content item       |
| metric_date     | DATE        | Required                        | Snapshot date      |
| views           | BIGINT      | Nullable                        | Views              |
| likes           | BIGINT      | Nullable                        | Likes              |
| comments        | BIGINT      | Nullable                        | Comments           |
| shares          | BIGINT      | Nullable                        | Shares             |
| saves           | BIGINT      | Nullable                        | Saves              |
| reach           | BIGINT      | Nullable                        | Reach              |
| impressions     | BIGINT      | Nullable                        | Impressions        |
| watch_time      | BIGINT      | Nullable                        | Watch time         |
| engagement_rate | NUMERIC     | Nullable                        | Engagement rate    |
| extra_metrics   | JSONB       | Default empty object            | Additional metrics |
| created_at      | TIMESTAMPTZ | Default now()                   | Record creation    |

Add a unique constraint on `(content_id, metric_date)`.

### Requirements

* Use the content table to power creator dashboards.
* Support filtering and sorting content by performance.
* Support historical performance comparisons.
* Store only metrics available from the corresponding platform API.
* Do not assume all metrics are available for every content type.

---

# 10. Brand Campaigns

## 10.1 Table: `campaigns`

Stores campaigns created by brands.

| Column               | Type        | Constraints                      | Description                           |
| -------------------- | ----------- | -------------------------------- | ------------------------------------- |
| id                   | UUID        | Primary key                      | Campaign ID                           |
| brand_id             | UUID        | Foreign key to brand_profiles.id | Campaign owner                        |
| title                | TEXT        | Required                         | Campaign title                        |
| description          | TEXT        | Required                         | Campaign description                  |
| objectives           | TEXT[]      | Default empty array              | Campaign goals                        |
| category             | TEXT        | Nullable                         | Campaign category                     |
| target_audience      | JSONB       | Default empty object             | Target audience                       |
| platforms            | TEXT[]      | Default empty array              | Preferred platforms                   |
| creator_niches       | TEXT[]      | Default empty array              | Preferred creator niches              |
| budget_min           | NUMERIC     | Nullable                         | Minimum budget                        |
| budget_max           | NUMERIC     | Nullable                         | Maximum budget                        |
| currency             | TEXT        | Default INR                      | Currency code                         |
| compensation_type    | TEXT        | Required                         | Paid, barter, or other supported type |
| deliverables         | JSONB       | Default empty array              | Expected deliverables                 |
| start_date           | DATE        | Nullable                         | Campaign start                        |
| end_date             | DATE        | Nullable                         | Campaign end                          |
| application_deadline | TIMESTAMPTZ | Nullable                         | Application deadline                  |
| status               | TEXT        | Default draft                    | Campaign status                       |
| created_at           | TIMESTAMPTZ | Default now()                    | Creation time                         |
| updated_at           | TIMESTAMPTZ | Default now()                    | Last update                           |

Suggested campaign statuses:

* draft
* published
* paused
* closed
* completed
* cancelled

### Requirements

* A brand can create and manage its own campaigns.
* Published campaigns can be discovered by eligible creators.
* Validate budget ranges and campaign dates.
* Prevent unauthorized modification of another brand's campaigns.
* Store currency explicitly.
* Define the supported deliverables format before implementing validation.

---

# 11. Campaign Applications

## 11.1 Table: `campaign_applications`

Stores creator applications to brand campaigns.

| Column           | Type        | Constraints                        | Description             |
| ---------------- | ----------- | ---------------------------------- | ----------------------- |
| id               | UUID        | Primary key                        | Application ID          |
| campaign_id      | UUID        | Foreign key to campaigns.id        | Campaign                |
| creator_id       | UUID        | Foreign key to creator_profiles.id | Applicant               |
| proposal_message | TEXT        | Nullable                           | Creator's proposal      |
| proposed_rate    | NUMERIC     | Nullable                           | Creator's proposed rate |
| currency         | TEXT        | Nullable                           | Proposed rate currency  |
| status           | TEXT        | Default pending                    | Application status      |
| reviewed_at      | TIMESTAMPTZ | Nullable                           | Review date             |
| created_at       | TIMESTAMPTZ | Default now()                      | Application date        |
| updated_at       | TIMESTAMPTZ | Default now()                      | Last update             |

Suggested statuses:

* pending
* shortlisted
* accepted
* rejected
* withdrawn

Add a unique constraint on `(campaign_id, creator_id)`.

### Requirements

* A creator cannot apply to the same campaign repeatedly unless the product explicitly supports resubmission.
* Creators can view their own applications.
* Brands can review applications to their campaigns.
* Only authorized parties can change application statuses.
* Validate campaign status and application deadlines on the server.

---

# 12. AI Creator-Brand Matching

The AI matching system is a central CRAB feature.

It should evaluate creator suitability for brand campaigns using available creator profiles, authorized analytics, campaign requirements, and matching criteria.

The LLM should not independently invent follower counts, engagement rates, budgets, or demographic information.

## 12.1 Table: `match_results`

Stores creator-campaign matching results.

| Column            | Type        | Constraints                        | Description                |
| ----------------- | ----------- | ---------------------------------- | -------------------------- |
| id                | UUID        | Primary key                        | Match result ID            |
| campaign_id       | UUID        | Foreign key to campaigns.id        | Campaign                   |
| creator_id        | UUID        | Foreign key to creator_profiles.id | Creator                    |
| score             | NUMERIC     | Required                           | Overall match score        |
| category_scores   | JSONB       | Default empty object               | Individual matching scores |
| explanation       | TEXT        | Nullable                           | Human-readable explanation |
| strengths         | JSONB       | Default empty array                | Matching strengths         |
| concerns          | JSONB       | Default empty array                | Potential concerns         |
| model_name        | TEXT        | Nullable                           | Model used                 |
| algorithm_version | TEXT        | Nullable                           | Matching algorithm version |
| generated_at      | TIMESTAMPTZ | Default now()                      | Generation time            |
| expires_at        | TIMESTAMPTZ | Nullable                           | Expiration time            |

Possible matching criteria:

* Niche relevance
* Audience alignment
* Engagement quality
* Content performance
* Platform compatibility
* Budget compatibility
* Campaign objective alignment

### Requirements

* Store an overall score with a documented range, preferably 0–100.
* Keep individual criterion scores available for explainability.
* Store the algorithm or model version.
* Generate matches using backend-controlled operations.
* Validate that scores are within the defined range.
* Regenerate results when relevant campaign or creator information changes.
* Treat AI-generated explanations as recommendations, not guaranteed outcomes.
* Avoid presenting unavailable analytics as verified facts.

Add a unique constraint on `(campaign_id, creator_id, algorithm_version)` if the application is designed to retain only one result per algorithm version. Otherwise, support multiple historical results explicitly.

---

# 13. AI Insights and Recommendations

## 13.1 Table: `ai_insights`

Stores AI-generated observations about creator performance or campaign data.

| Column          | Type        | Constraints                                 | Description        |
| --------------- | ----------- | ------------------------------------------- | ------------------ |
| id              | UUID        | Primary key                                 | Insight ID         |
| creator_id      | UUID        | Nullable foreign key to creator_profiles.id | Related creator    |
| campaign_id     | UUID        | Nullable foreign key to campaigns.id        | Related campaign   |
| type            | TEXT        | Required                                    | Insight category   |
| title           | TEXT        | Required                                    | Insight title      |
| description     | TEXT        | Required                                    | Explanation        |
| confidence      | NUMERIC     | Nullable                                    | Confidence score   |
| supporting_data | JSONB       | Default empty object                        | Supporting metrics |
| model_name      | TEXT        | Nullable                                    | Model used         |
| generated_at    | TIMESTAMPTZ | Default now()                               | Generation time    |
| expires_at      | TIMESTAMPTZ | Nullable                                    | Expiration time    |

Examples:

* Recent content has higher engagement than older content.
* A creator's strongest content category is technology.
* A creator appears aligned with a campaign's target niche.
* A campaign's creator shortlist contains profiles that fit its budget.

### Requirements

* Insights must be based on stored data or clearly identified inputs.
* Include supporting metrics where practical.
* Distinguish factual metrics from AI interpretation.
* Do not expose one creator's private analytics to another creator or an unauthorized brand.

## 13.2 Table: `ai_recommendations`

Stores suggested actions based on insights or matching results.

| Column      | Type        | Constraints                                 | Description           |
| ----------- | ----------- | ------------------------------------------- | --------------------- |
| id          | UUID        | Primary key                                 | Recommendation ID     |
| insight_id  | UUID        | Nullable foreign key to ai_insights.id      | Related insight       |
| creator_id  | UUID        | Nullable foreign key to creator_profiles.id | Related creator       |
| campaign_id | UUID        | Nullable foreign key to campaigns.id        | Related campaign      |
| title       | TEXT        | Required                                    | Recommendation title  |
| description | TEXT        | Required                                    | Suggested action      |
| priority    | TEXT        | Default medium                              | Priority              |
| status      | TEXT        | Default new                                 | Recommendation status |
| created_at  | TIMESTAMPTZ | Default now()                               | Creation time         |
| updated_at  | TIMESTAMPTZ | Default now()                               | Last update           |

Suggested priority values:

* low
* medium
* high

Suggested status values:

* new
* viewed
* dismissed
* completed

---

# 14. Contracts and Collaboration Records

A campaign collaboration may require a formal agreement between the brand and creator.

CRAB should track agreement details and status.

## 14.1 Table: `contracts`

| Column              | Type        | Constraints                                      | Description               |
| ------------------- | ----------- | ------------------------------------------------ | ------------------------- |
| id                  | UUID        | Primary key                                      | Contract ID               |
| campaign_id         | UUID        | Foreign key to campaigns.id                      | Related campaign          |
| creator_id          | UUID        | Foreign key to creator_profiles.id               | Creator                   |
| brand_id            | UUID        | Foreign key to brand_profiles.id                 | Brand                     |
| application_id      | UUID        | Nullable foreign key to campaign_applications.id | Related application       |
| title               | TEXT        | Required                                         | Contract title            |
| terms               | JSONB       | Default empty object                             | Agreement terms           |
| compensation_amount | NUMERIC     | Nullable                                         | Agreed compensation       |
| currency            | TEXT        | Nullable                                         | Currency code             |
| start_date          | DATE        | Nullable                                         | Agreement start           |
| end_date            | DATE        | Nullable                                         | Agreement end             |
| status              | TEXT        | Default draft                                    | Contract status           |
| document_url        | TEXT        | Nullable                                         | Private document location |
| created_at          | TIMESTAMPTZ | Default now()                                    | Creation time             |
| updated_at          | TIMESTAMPTZ | Default now()                                    | Last update               |

Suggested statuses:

* draft
* pending_approval
* approved
* active
* completed
* cancelled
* disputed

### Requirements

* Only authorized parties can access the contract.
* Store documents in private object storage when needed.
* Use signed URLs for authorized document access.
* Do not treat a typed name as a legally valid electronic signature without an appropriate signing process.
* If electronic signatures are introduced, record the relevant signing and audit information.
* Validate contract dates and compensation.
* Keep a history of important contract status changes if the MVP requires an audit trail.

---

# 15. Campaign Deliverables

Use this table if CRAB needs to track whether creators have completed campaign deliverables.

## 15.1 Table: `campaign_deliverables`

| Column       | Type        | Constraints                 | Description           |
| ------------ | ----------- | --------------------------- | --------------------- |
| id           | UUID        | Primary key                 | Deliverable ID        |
| contract_id  | UUID        | Foreign key to contracts.id | Related contract      |
| title        | TEXT        | Required                    | Deliverable title     |
| description  | TEXT        | Nullable                    | Requirements          |
| content_url  | TEXT        | Nullable                    | Submitted content URL |
| due_date     | TIMESTAMPTZ | Nullable                    | Due date              |
| status       | TEXT        | Default pending             | Completion status     |
| submitted_at | TIMESTAMPTZ | Nullable                    | Submission time       |
| reviewed_at  | TIMESTAMPTZ | Nullable                    | Review time           |
| created_at   | TIMESTAMPTZ | Default now()               | Creation time         |
| updated_at   | TIMESTAMPTZ | Default now()               | Last update           |

Suggested statuses:

* pending
* submitted
* approved
* revision_requested
* rejected
* completed

### Requirements

* The creator submits deliverables.
* The brand reviews submissions for its own collaborations.
* Only authorized parties can modify deliverable statuses.
* Validate submission and review operations on the backend.

---

# 16. Notifications

## 16.1 Table: `notifications`

Stores in-app notifications.

| Column         | Type        | Constraints                | Description          |
| -------------- | ----------- | -------------------------- | -------------------- |
| id             | UUID        | Primary key                | Notification ID      |
| user_id        | UUID        | Foreign key to profiles.id | Recipient            |
| type           | TEXT        | Required                   | Notification type    |
| title          | TEXT        | Required                   | Notification title   |
| message        | TEXT        | Required                   | Notification message |
| reference_type | TEXT        | Nullable                   | Related entity type  |
| reference_id   | UUID        | Nullable                   | Related entity ID    |
| is_read        | BOOLEAN     | Default false              | Read status          |
| created_at     | TIMESTAMPTZ | Default now()              | Creation time        |

Possible notification types:

* campaign_application
* application_status
* new_match
* contract_update
* deliverable_update
* system

### Requirements

* Users can only read and update their own notifications.
* Create notifications through trusted backend operations.
* Do not allow clients to create arbitrary notifications for other users.

---

# 17. API Synchronization Jobs

## 17.1 Table: `sync_jobs`

Tracks API synchronization operations.

| Column            | Type        | Constraints                       | Description                 |
| ----------------- | ----------- | --------------------------------- | --------------------------- |
| id                | UUID        | Primary key                       | Job ID                      |
| social_account_id | UUID        | Foreign key to social_accounts.id | Social account              |
| job_type          | TEXT        | Required                          | Sync type                   |
| status            | TEXT        | Required                          | Job status                  |
| started_at        | TIMESTAMPTZ | Nullable                          | Start time                  |
| completed_at      | TIMESTAMPTZ | Nullable                          | Completion time             |
| error_message     | TEXT        | Nullable                          | Safe error summary          |
| records_processed | INTEGER     | Default 0                         | Number of records processed |
| created_at        | TIMESTAMPTZ | Default now()                     | Creation time               |

Suggested statuses:

* pending
* running
* completed
* failed

### Requirements

* Track successful and failed synchronizations.
* Avoid storing secrets or OAuth tokens in error messages.
* Implement retries carefully.
* Respect API quotas and rate limits.
* Record the last successful synchronization time.
* Ensure that repeated synchronization does not create duplicate records.

---

# 18. Optional Audit Logs

## 18.1 Table: `audit_logs`

Implement this if the MVP requires a record of sensitive actions.

| Column        | Type        | Constraints                         | Description            |
| ------------- | ----------- | ----------------------------------- | ---------------------- |
| id            | UUID        | Primary key                         | Log ID                 |
| actor_user_id | UUID        | Nullable foreign key to profiles.id | User performing action |
| action        | TEXT        | Required                            | Action performed       |
| entity_type   | TEXT        | Required                            | Entity type            |
| entity_id     | UUID        | Nullable                            | Related record         |
| metadata      | JSONB       | Default empty object                | Safe action metadata   |
| created_at    | TIMESTAMPTZ | Default now()                       | Event time             |

Do not store passwords, tokens, private credentials, or unnecessary personal information in audit logs.

---

# 19. Database Relationships

The primary relationships are:

```text
auth.users
    |
    v
profiles
    |
    +------------------------+
    |                        |
    v                        v
creator_profiles         brand_profiles
    |                        |
    |                        v
    |                    campaigns
    |                        |
    |                        +----------------------+
    |                        |                      |
    |                        v                      v
    |                 campaign_applications    match_results
    |                        |                      |
    |                        v                      |
    |                    contracts <----------------+
    |                        |
    |                        v
    |                 campaign_deliverables
    |
    +--> social_accounts
              |
              +--> platform_metrics
              |
              +--> audience_snapshots
              |
              +--> content_posts
              |        |
              |        v
              |   content_metrics
              |
              +--> sync_jobs

creator_profiles / campaigns
              |
              v
         ai_insights
              |
              v
      ai_recommendations

profiles
    |
    v
notifications
```

---

# 20. Indexes and Constraints

Create indexes for common queries.

Recommended indexes:

```sql
CREATE INDEX idx_creator_profiles_user_id
ON creator_profiles(user_id);

CREATE INDEX idx_brand_profiles_user_id
ON brand_profiles(user_id);

CREATE INDEX idx_social_accounts_creator_id
ON social_accounts(creator_id);

CREATE INDEX idx_platform_metrics_account_date
ON platform_metrics(social_account_id, metric_date DESC);

CREATE INDEX idx_content_posts_account
ON content_posts(social_account_id);

CREATE INDEX idx_content_posts_published
ON content_posts(published_at DESC);

CREATE INDEX idx_content_metrics_content_date
ON content_metrics(content_id, metric_date DESC);

CREATE INDEX idx_campaigns_brand
ON campaigns(brand_id);

CREATE INDEX idx_campaigns_status
ON campaigns(status);

CREATE INDEX idx_campaigns_deadline
ON campaigns(application_deadline);

CREATE INDEX idx_applications_campaign_status
ON campaign_applications(campaign_id, status);

CREATE INDEX idx_applications_creator
ON campaign_applications(creator_id);

CREATE INDEX idx_match_results_campaign_score
ON match_results(campaign_id, score DESC);

CREATE INDEX idx_ai_insights_creator
ON ai_insights(creator_id, generated_at DESC);

CREATE INDEX idx_ai_insights_campaign
ON ai_insights(campaign_id, generated_at DESC);

CREATE INDEX idx_contracts_creator
ON contracts(creator_id);

CREATE INDEX idx_contracts_brand
ON contracts(brand_id);

CREATE INDEX idx_notifications_user_created
ON notifications(user_id, created_at DESC);

CREATE INDEX idx_sync_jobs_account_status
ON sync_jobs(social_account_id, status);
```

### Important

Before creating indexes, verify that equivalent indexes do not already exist.

Foreign keys, uniqueness constraints, and CHECK constraints should be added where appropriate.

Examples of useful validations:

* Budget minimum must not exceed budget maximum.
* Match scores must fall within the documented range.
* Numeric compensation and budgets must not be negative.
* Campaign and contract dates must follow valid ordering.
* Enumerated status fields must use supported values.
* Required fields must not be NULL.

Use PostgreSQL constraints wherever possible instead of relying exclusively on frontend validation.

---

# 21. Supabase Row Level Security

Enable RLS on every application table exposed through Supabase's API.

Authentication alone does not automatically protect application data.

## 21.1 Profile Security

Users should be able to:

* Read their own profile.
* Update permitted fields in their own profile.
* Access only the information explicitly made public by another user.

Users must not be able to change their role to gain unauthorized permissions.

## 21.2 Creator Security

Creators should be able to:

* Read and update their own creator profiles.
* Manage their connected social accounts through authorized operations.
* Read their own private analytics.
* Read their own applications, contracts, and notifications.

Creators must not be able to access another creator's private analytics or OAuth credentials.

## 21.3 Brand Security

Brands should be able to:

* Read and update their own brand profiles.
* Create and manage their own campaigns.
* Read applications submitted to their campaigns.
* Access contracts and deliverables for their authorized collaborations.
* Read campaign matching results they are authorized to access.

Brands must not be able to read private creator analytics unless the product's permissions and creator consent explicitly allow it.

## 21.4 Campaign Security

* Published campaigns may be publicly discoverable to authenticated users, depending on product requirements.
* Draft campaigns should be visible only to authorized brand users.
* Only the owning brand should manage its campaign.
* Application access must be restricted to the creator applicant and authorized campaign owner.

## 21.5 AI Data Security

* Users must only access insights and recommendations they are authorized to see.
* Matching results must not expose unauthorized private data.
* AI generation must run through trusted backend operations.
* Never rely on hidden frontend buttons as an access-control mechanism.

## 21.6 OAuth Security

OAuth tokens must never be available to ordinary frontend queries.

Prefer a dedicated server-side token storage and access strategy. If tokens are stored in PostgreSQL, enforce strict server-only access and ensure that client roles cannot read token columns.

## 21.7 Implementation Requirement

Create and test RLS policies for all relevant tables.

Do not deploy permissive policies such as unrestricted access for all authenticated users.

Verify policies using separate creator and brand test accounts.

---

# 22. Data Flow

The expected system flow is:

```text
Creator / Brand
       |
       v
CRAB Frontend
       |
       v
Backend / API
       |
       +----------------------+
       |                      |
       v                      v
Supabase Auth            PostgreSQL
                              |
               +--------------+--------------+
               |              |              |
               v              v              v
           Profiles        Campaigns       Analytics
               |              |              |
               +--------------+--------------+
                              |
                              v
                         AI Matching
                              |
                              v
                    Match Results / Insights
                              |
                              v
                         CRAB Dashboard
```

For social analytics:

```text
YouTube API / Instagram API
             |
             v
      Backend Integration
             |
             v
      Validate and Normalize
             |
             v
        PostgreSQL
             |
             +------> Creator Analytics Dashboard
             |
             +------> AI Matching / Insights
```

For AI matching:

```text
Campaign Requirements
          +
Creator Profile
          +
Authorized Analytics
          |
          v
     Matching Engine
          |
          v
   Structured Match Result
          |
          v
     PostgreSQL
          |
          v
   Brand Creator Discovery
```

---

# 23. MVP Implementation Priorities

Do not implement every optional table before the core application works.

## Phase 1: Foundation

Implement:

* Supabase Auth configuration.
* `profiles`
* `creator_profiles`
* `brand_profiles`
* Basic RLS policies.
* Database migrations.

Goal: users can register, log in, and maintain the correct creator or brand profile.

## Phase 2: Social Analytics

Implement:

* `social_accounts`
* `platform_metrics`
* `content_posts`
* `content_metrics`
* `sync_jobs`

Add `audience_snapshots` when the relevant API data is available.

Goal: creators can connect supported social accounts and view stored analytics.

## Phase 3: Brand Campaigns

Implement:

* `campaigns`
* `campaign_applications`
* Campaign discovery and filtering.

Goal: brands can publish campaigns and creators can apply.

## Phase 4: AI Matching

Implement:

* `match_results`
* `ai_insights`
* `ai_recommendations`

Goal: brands can view explainable creator matches based on available data.

## Phase 5: Collaboration Management

Implement:

* `contracts`
* `campaign_deliverables`
* `notifications`

Goal: users can track accepted collaborations and their progress.

## Phase 6: Improvements

Consider:

* `creator_categories`
* `creator_category_mappings`
* `audit_logs`
* More detailed synchronization monitoring.
* Advanced collaboration and team features.

---

# 24. Migration and Development Rules

When implementing this database:

1. Inspect the existing repository before making changes.
2. Read the existing project documentation.
3. Check whether Supabase is already configured.
4. Reuse existing tables and migrations where appropriate.
5. Do not recreate tables that already exist.
6. Create version-controlled SQL migrations.
7. Keep local development and production configuration separate.
8. Never commit API keys, service-role keys, OAuth tokens, or other secrets.
9. Use environment variables for sensitive configuration.
10. Seed only fictional development data.
11. Test foreign keys, constraints, and RLS policies.
12. Ensure that creator and brand accounts cannot access each other's unauthorized private data.
13. Document any schema decisions that differ from this specification.
14. Do not change unrelated frontend or backend code while implementing the database.
15. Do not assume that an API provides metrics that have not been verified.

If a requirement conflicts with another project document, identify the conflict before making a significant design decision.

---

# 25. Important MVP Decisions

The following decisions should guide implementation:

* Supabase Auth is the authentication provider.
* PostgreSQL is the main application database.
* Creator and brand profiles are separate.
* YouTube and Instagram are the initial social platforms.
* Historical analytics are stored as dated snapshots.
* Campaigns belong to brands.
* Campaign applications connect creators and campaigns.
* Matching results connect creators and campaigns.
* AI insights and recommendations are stored separately from raw analytics.
* Contracts connect brands, creators, and collaborations.
* RLS protects application data.
* OAuth credentials remain server-only.
* Platform-specific data availability must be verified before finalizing API integrations.

---

# 26. Instructions for Antigravity

When this document is used for implementation:

1. Read this document together with:

   * `01_PRD.md`
   * `02_MVP.md`
   * `03_USER_FLOWS.md`
   * `04_SRD.md`
   * `05_ARCHITECTURE.md`
   * `07_API_SPEC.md`
   * `08_AI_MATCHING.md`
   * `09_UI_UX.md`
   * `10_ROADMAP.md`

2. Compare the database design against the actual MVP requirements.

3. Identify missing requirements, conflicting specifications, redundant tables, and security concerns.

4. Inspect the existing project structure before creating files.

5. Present the proposed implementation plan before making major changes.

6. Implement the database in small, testable stages.

7. Create SQL migrations rather than relying on undocumented manual database changes.

8. Add and test RLS policies.

9. Confirm that the schema supports the intended creator dashboard, brand dashboard, campaign workflows, and AI matching flow.

10. Report which tables, migrations, constraints, and security policies have actually been implemented.

11. Clearly distinguish implemented functionality from planned functionality.

12. Do not claim that an API integration or AI matching system works until it has been implemented and tested.

---

# Final Note

This document defines the intended database foundation for CRAB's MVP.

It should be validated against the final requirements, existing codebase, Supabase configuration, and actual YouTube/Instagram API capabilities before production deployment.

The goal is to create a secure, understandable, maintainable database that supports CRAB's core creator-brand collaboration workflow without unnecessary complexity.
