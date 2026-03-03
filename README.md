# Lab Website Template

A modern, responsive academic lab website template built with **React + Vite + Tailwind CSS**.

🔗 **Live Demo:** _Deploy your own and add your URL here_

---

## ✨ Features

- **Modern UI**: Clean, dark-mode-ready design with responsive layout
- **Data-driven**: Easily update content through local JSON files or Google Sheets (no code changes needed)
- **Multi-page**: Home, News, Projects, Research Areas, Systems, Team, Publications, Location
- **Fast**: Built on Vite for lightning-fast development and optimized production builds

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React.js](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Routing | React Router v6 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Data Source | Google Sheets CSV (dynamic) + JSON (static fallback) |
| Icons | Font Awesome (CDN) |

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```

### 2. Customize your content

All content is stored in `public/data/`. Edit these JSON files to fill in your lab's information:

| File | Content |
|---|---|
| `team.json` | Professor, students, postdocs, alumni |
| `news.json` | Announcements and news items |
| `activities.json` | Upcoming events and activities |
| `projects.json` | Research projects and grants |
| `publications.json` | Academic publications |

### 3. Add your photos

Place your images in `public/assets/images/`:
- `team/` — headshots (referenced by `image` field in `team.json`)
- `events/` — lab photos shown on the home page gallery

Update `public/logo.png` and `public/favicon.png` with your lab logo.

---

## 📊 Google Sheets Integration (Optional)

For easy non-technical updates, you can connect Google Sheets as a live data source:

1. Create a Google Sheet with the columns matching the JSON structure
2. Go to **File → Share → Publish to web** → choose the tab → select **CSV**
3. Copy the generated URL
4. Paste it into `src/config/sheetsConfig.js` for the corresponding data key

The app will automatically fetch from Google Sheets when a URL is provided, and fall back to the local JSON file if not.

---

## 📍 Location Page

Update the Google Maps embed URL in `src/pages/Location.jsx`:

```jsx
src="https://www.google.com/maps/embed?YOUR_EMBED_URL_HERE"
```

Get your embed URL from [Google Maps](https://maps.google.com) → Share → Embed a map → Copy HTML → extract the `src` URL.

---

## 🚢 Deployment

### GitHub Pages

1. Update `vite.config.js` → set `base` to your repo name (e.g., `'/your-repo/'`)
2. Build: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### GitLab CI/CD

A `.gitlab-ci.yml.example` file is included. Rename it to `.gitlab-ci.yml` and it will automatically build and deploy to GitLab Pages on every push to `main`.

---

## 📁 Project Structure

```
├── public/
│   ├── data/           ← JSON data files (edit these!)
│   ├── assets/
│   │   └── images/     ← Photos (team/, events/)
│   ├── logo.png        ← Your lab logo
│   └── favicon.png     ← Browser tab icon
├── src/
│   ├── components/     ← Header, Footer, Layout, BackToTop
│   ├── pages/          ← One file per page
│   ├── config/
│   │   └── sheetsConfig.js  ← Google Sheets URLs
│   └── utils/          ← Data fetching helpers
└── index.html          ← Update title and meta tags here
```

---

## 📄 License

MIT License — feel free to use and adapt for your own lab.
