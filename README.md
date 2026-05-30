# 📅 Event Registration System Backend

[![Node.js Version](https://img.shields.io/badge/node->=%2018.0.0-blue.svg)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/framework-Express.js-brightgreen.svg)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/database-MongoDB-green.svg)](https://www.mongodb.com)
[![CodeAlpha Task](https://img.shields.io/badge/Internship-CodeAlpha_Task_11-orange.svg)]()

A robust, enterprise-ready RESTful API backend architecture built for an **Event Registration System**. This system handles scalable user sign-ups, event creation, automatic relationship mappings, and secure registration management tracking.

---

## 🚀 Key System Features

| Feature Module | Technical Implementation | Description |
| :--- | :--- | :--- |
| **Backend Engine** | Node.js & Express.js | Modular router structure handling requests cleanly. |
| **Data Persistence** | MongoDB & Mongoose | Schema validation and relational object references (`ObjectId`). |
| **Data Integrity** | Unique Composite Indexes | Prevents a user from registering for the same event twice. |
| **Registration Sync** | Intelligent User Lookup | Automatically creates missing user entries on-the-fly during registration. |
| **Lifecycle Controls** | CRUD Functionality | Full support to fetch, inspect, register, and cancel event allocations. |

---

## 📂 Architecture Structure

```text
CodeAlpha_Event_Registration_System/
├── config/
│   └── db.js                 # Database configuration module
├── models/
│   ├── User.js               # User Identification entity schema
│   ├── Event.js              # Event specifications entity schema
│   └── Registration.js       # Mapping model linking Users to Events
├── routes/
│   ├── eventRoutes.js        # Routes managing event lifecycles
│   └── registrationRoutes.js # Routes handling user registrations & cancellations
├── .env                      # Environment configurations (Protected)
├── .gitignore                # Tells Git what files to ignore
├── package.json              # Directives, scripts, and production dependencies
└── server.js                 # System entrypoint & middleware aggregator
🛠️ Tech Stack & Dependencies
Runtime Environment: Node.js

Framework: Express.js

Database Driver: Mongoose (ODM for MongoDB)

Configuration Management: Dotenv

Development Process Monitors: Nodemon

📡 Core API Endpoints
🎫 Event Paths
GET    /api/events — Retrieves an array of all organized events.

GET    /api/events/:id — Inspects detailed attributes of a target event.

POST   /api/events — Populates database by spinning up a new event entity.

✍️ Registration Paths
POST   /api/registrations — Submits data payload linking a user's identity to an event ID.

GET    /api/registrations/user/:userId — Aggregates all registered bookings for a single user.

DELETE /api/registrations/:id — Safely deletes/cancels an active registration allocation.

🏁 Local Installation Guide
Follow these steps to run this codebase configuration locally:

Clone & Navigate into the workspace:

Bash
git clone [https://github.com/joneshbenadit29it-ui/CodeAlpha_Event_Registration_System1.git](https://github.com/joneshbenadit29it-ui/CodeAlpha_Event_Registration_System1.git)
cd CodeAlpha_Event_Registration_System1
Acquire project dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root root directory and assign configuration strings:

Code snippet
PORT=5000
MONGO_URI=mongodb://localhost:27017/event_registration
Launch Development Application Server:

Bash
npm run dev
Developed as part of the CodeAlpha Web Development Internship task assignment.


---

### What to do next:
1. Save the file (`Ctrl + S`).
2. Run your final push commands (`git add .`, `git commit -m "docs: add attractive readme"`, `git push`)
