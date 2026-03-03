// Google Sheets CSV URLs Configuration
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO SET UP:
//   1. Open your Google Sheet → File → Share → Publish to web
//   2. Choose the sheet tab → select "Comma-separated values (.csv)"
//   3. Click "Publish" and copy the generated URL
//   4. Paste the URL as the value for the corresponding key below
//   5. Leave a key as '' to fall back to the local JSON file in public/data/
// ─────────────────────────────────────────────────────────────────────────────

export const SHEET_URLS = {
    // Latest Announcements (News)
    // Columns: date, title, summary, category, link, pinned
    news: '',

    // Upcoming Activities
    // Columns: date, title, description, link
    activities: '',

    // Research Projects
    // Columns: id, title, agency, duration, category
    projects: '',

    // Publications
    // Columns: year, category, title, authors, source, link
    publications: '',

    // Team Members — complex structure, recommended to keep using JSON
    // If using Google Sheets, multiple sheets are required
    team: ''
};

// Fallback JSON URLs
export const FALLBACK_URLS = {
    news: `${import.meta.env.BASE_URL}data/news.json`,
    activities: `${import.meta.env.BASE_URL}data/activities.json`,
    projects: `${import.meta.env.BASE_URL}data/projects.json`,
    publications: `${import.meta.env.BASE_URL}data/publications.json`,
    team: `${import.meta.env.BASE_URL}data/team.json`
};
