# Prabika Rai — Portfolio (MERN Stack)

A full MERN (MongoDB, Express, React, Node) portfolio site, styled to match a
clean, minimal, code-themed reference design: a thin dark top bar, a
`< Name />` logo, uppercase navigation, and a single scrolling page with five
sections — Home, Experience & Education, Projects & Publications, About, and
Contact — all backed by a database instead of hardcoded content.

The nav links are anchors (`#home`, `#experience`, `#projects`, `#about`,
`#contact`) that smooth-scroll to each section, and the active nav item
underlines itself automatically as you scroll past that section.

```
portfolio-mern/
├── server/          Express + MongoDB API
│   ├── config/db.js       Mongo connection
│   ├── models/             Mongoose schemas (Profile, Project, Message)
│   ├── routes/              /api/profile, /api/projects, /api/contact
│   ├── seed.js               Seeds the DB with sample content
│   └── server.js              App entry point
└── client/          React (Vite) + Tailwind CSS frontend
    └── src/
        ├── components/       Navbar, Footer, DecoDots, BrandIcons
        ├── pages/              Section components stacked on one page:
        │                       Home, ExperienceEducation, ProjectsPublications,
        │                       About, Contact
        ├── api/client.js       Axios wrapper around the API
        └── data/fallback.js    Local fallback content if the API is unreachable
```

## Sections (in scroll order)

- **Home** (`#home`) — portrait + name + role + greeting chip + short bio +
  social links, followed by "Hello, world!" and "Lately" sections.
- **Experience & Education** (`#experience`) — two-column timelines (green
  dot markers) plus Certifications & Hackathons / Volunteering & Leadership
  checklists (green checkmarks).
- **Projects & Publications** (`#projects`) — a horizontally scrolling
  project carousel with prev/next arrows, pulling live from `/api/projects`.
- **About** (`#about`) — full bio plus a skills grid.
- **Contact** (`#contact`) — "Connect with Me" layout with a working form
  that POSTs to `/api/contact` and is stored in MongoDB.

## 1. Prerequisites

- Node.js 18+
- A MongoDB connection — either a local `mongod` instance or a free
  [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

## 2. Backend setup

```bash
cd server
cp .env.example .env      # then edit MONGO_URI if you're using Atlas
npm install
npm run seed               # populates Profile + 3 sample Projects
npm run dev                 # starts on http://localhost:5000
```

API endpoints:

| Method | Route                | Description                     |
|--------|-----------------------|----------------------------------|
| GET    | `/api/profile`        | Hero/about content + skills      |
| PUT    | `/api/profile`        | Update the profile               |
| GET    | `/api/projects`        | List projects (`?featured=true`) |
| POST   | `/api/projects`        | Create a project                 |
| PUT    | `/api/projects/:id`    | Update a project                 |
| DELETE | `/api/projects/:id`    | Delete a project                 |
| POST   | `/api/contact`         | Submit the contact form          |
| GET    | `/api/contact`         | List submitted messages          |

## 3. Frontend setup

```bash
cd client
cp .env.example .env      # points VITE_API_URL at the backend, defaults to :5000
npm install
npm run dev                 # starts on http://localhost:5173
```

Open `http://localhost:5173`. The page fetches your profile and projects from
the API; if the API isn't running yet it falls back to the sample content so
the UI is never empty while you're setting things up.

## 4. Customizing content

Everything shown on the page — name, role, bio, skills, resume link, socials,
and the three project cards — lives in MongoDB. Edit it either by:

- Re-running `npm run seed` after editing `server/seed.js`, or
- Calling the API directly (e.g. `PUT /api/profile`, `POST /api/projects`)
  from a tool like Postman or `curl`.

## 5. Production build

```bash
cd client && npm run build   # outputs static files to client/dist
cd server && npm start        # serve the API (add a static file server or
                                # deploy client/dist to a CDN/host of your choice)
```
