// Google Sheets CSV URLs Configuration
// 將您的 Google Sheet 發布為 CSV 後，將連結貼在這裡

export const SHEET_URLS = {
    // 最新公告 (News)
    // 欄位: date, title, summary, category, link, pinned
    news: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxiNzg3J-sm0ND2Vh4LiHTaTQqaQ_TQkvs2Do-z3BMbpBCtnetP3KpKq2bkiqjZ7yFcSbAJRcnJwGH/pub?gid=0&single=true&output=csv',

    // 近期活動 (Activities)
    // 欄位: date, title, description, link   
    activities: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuQ2UyAbaHJd9tJdESngrrG44BNA5gZNIZp8rAIf8zRck_A9q4kveoYZR5KqUujthttb-lIPXkJ1vG/pub?gid=0&single=true&output=csv',

    // 研究計畫 (Projects)
    // 欄位: id, title, agency, duration, category
    projects: '',

    // 研究成果/論文 (Publications)
    // 欄位: year, title, authors, venue, link, type
    publications: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYhc6fP7bLkqm3Nw8tullMugXpeC-R1K9PGDe-QCdzUO4X2KL9Vg1NTLBNgJQsmoNdHM7CdttsxMXS/pub?gid=0&single=true&output=csv',

    // 團隊成員 (Team) - 較複雜，建議保持使用 JSON
    // 如需使用 Google Sheets，需要多個工作表
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
