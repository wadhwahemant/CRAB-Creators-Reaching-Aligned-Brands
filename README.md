# CRAB 🦀

### Connecting Brands. Empowering Creators.

CRAB is a creator–brand collaboration platform designed to bridge the gap between brands and content creators. It provides a centralized space for brands to discover creators, manage marketing campaigns, review applications, and organize collaborations, while enabling creators to explore opportunities and manage their professional partnerships.

The goal is to make influencer marketing more organized, transparent, and efficient through a unified platform.

---

## 🚀 Features

### 🏢 Brand Portal

* **Dashboard:** Get an overview of campaigns, creator activity, and collaborations.
* **Campaign Management:** Create, view, and manage multiple marketing campaigns.
* **Creator Discovery:** Explore creator profiles to find suitable collaboration partners.
* **Application Management:** Review and manage creator applications for campaigns.
* **Collaborators:** View and organize existing creator partnerships.
* **Inbox:** Manage communication between brands and creators.
* **Campaign Details:** View individual campaign information and associated creator activity.

### 🎨 Creator Portal

* **Dashboard:** Access a personalized overview of creator activities and opportunities.
* **Campaign Discovery:** Explore available brand campaigns.
* **Applications:** Track applications submitted to brands.
* **Collaborations:** Manage ongoing brand partnerships.
* **Profile Management:** Showcase creator information and professional details.
* **Inbox:** Communicate with brands and manage conversations.

### 🔮 Planned Capabilities

* Backend API and database integration.
* User authentication and role-based access control.
* Persistent campaign, creator, and application data.
* Campaign contracts and agreement management.
* Real-time messaging and notifications.
* Application status tracking.
* Secure management of brand–creator collaborations.

*The availability of individual features depends on the current implementation stage.*

---

## 🛠️ Technology Stack

The project is being developed with a modern web development stack.

| Technology         | Purpose                           |
| ------------------ | --------------------------------- |
| Next.js            | Web application framework         |
| React              | User interface development        |
| TypeScript         | Type-safe development             |
| CSS / Tailwind CSS | Styling and responsive layouts    |
| Git & GitHub       | Version control and collaboration |

*The exact dependencies and versions can be verified in the project's package configuration.*

---

## 📂 Project Structure

The application follows a Next.js-based structure. The directory layout may evolve as development progresses.

```text
CRAB/
├── frontend/
│   ├── app/
│   │   ├── creator/
│   │   │   └── dashboard/
│   │   ├── business/
│   │   └── ...
│   ├── components/
│   ├── public/
│   └── ...
├── README.md
└── ...
```

**Note:** This is an illustrative structure. Refer to the actual repository for the complete directory layout.

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

* [Node.js](https://nodejs.org/) — preferably an active LTS version.
* npm — included with Node.js.
* Git — for cloning the repository.

### 1. Clone the Repository

```bash
git clone https://github.com/Aryan689t/Hackerprac_v1.git
```

### 2. Navigate to the Project

```bash
cd Hackerprac_v1
```

If the frontend is located in a separate directory, navigate into it:

```bash
cd frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

If the terminal displays a different port, open the URL shown in the terminal.

---

## 🧪 Current Development Status

CRAB is actively under development.

| Component                 | Status                 |
| ------------------------- | ---------------------- |
| Brand portal UI           | In development         |
| Creator portal UI         | In development         |
| Dashboard interfaces      | In development         |
| Campaign management UI    | In development         |
| Creator discovery UI      | In development         |
| Application management UI | In development         |
| Collaborations interface  | In development         |
| Inbox interface           | In development         |
| Backend API               | Pending implementation |
| Database integration      | Pending implementation |
| Authentication            | Pending implementation |
| Persistent data storage   | Pending implementation |
| Contracts and agreements  | Planned                |

The frontend currently uses mock data in parts of the application. Backend development will introduce persistent data, API integration, authentication, and the business logic required to support real brand–creator workflows.

---

## 🗺️ Development Roadmap

### Phase 1 — Frontend Development

* [x] Establish the initial project structure.
* [x] Develop the initial brand and creator portal interfaces.
* [x] Build dashboard and campaign-related UI components.
* [ ] Complete frontend integration and consistency checks.
* [ ] Validate navigation, responsiveness, and accessibility.

### Phase 2 — Backend Development

* [ ] Audit the existing frontend and identify its data requirements.
* [ ] Define the application architecture and API contracts.
* [ ] Design the database schema.
* [ ] Implement authentication and authorization.
* [ ] Replace mock data with backend APIs.
* [ ] Implement campaign and creator management logic.

### Phase 3 — Collaboration Workflows

* [ ] Implement campaign creation and management.
* [ ] Implement creator discovery and filtering.
* [ ] Implement creator applications and status tracking.
* [ ] Implement collaboration lifecycle management.
* [ ] Introduce campaign contracts and agreements.
* [ ] Implement brand–creator messaging.

### Phase 4 — Testing and Deployment

* [ ] Add unit and integration tests.
* [ ] Test complete brand and creator workflows.
* [ ] Perform end-to-end testing using Playwright.
* [ ] Improve performance, security, and accessibility.
* [ ] Configure production deployment.

---

## 🤝 Contributing

Contributions from team members are welcome.

1. Fork the repository or create a working branch.
2. Make your changes in the appropriate part of the project.
3. Test your changes locally.
4. Commit your changes with a descriptive commit message.
5. Push your branch and open a pull request for review.

### Development Guidelines

* Follow the existing project structure and coding conventions.
* Use TypeScript where appropriate.
* Keep brand and creator workflows consistent.
* Avoid introducing unnecessary dependencies.
* Test affected pages before submitting changes.
* Document significant architectural decisions.
* Coordinate shared changes through Git branches and pull requests.

---

## 🔐 Environment Variables

As backend services are introduced, environment variables may be required for database connections, authentication, and third-party integrations.

Store local configuration in an environment file such as `.env.local`.

**Important:** Never commit passwords, API keys, database credentials, authentication secrets, or other sensitive configuration to GitHub.

A sample environment file can be provided as `.env.example`, containing variable names and placeholder values only.

---

## 🎯 Project Vision

CRAB aims to simplify the creator marketing ecosystem by bringing creator discovery, campaign execution, applications, communication, and collaboration management into one platform.

By connecting brands with relevant creators and organizing the entire collaboration lifecycle, CRAB seeks to make creator partnerships easier to discover, manage, and scale.

---

## 📄 License

A license has not yet been specified. Until one is added to the repository, all rights remain with the respective copyright holder. Do not assume that the project is open source.

---

**CRAB — Connecting Brands. Empowering Creators.**
