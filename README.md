# 學術研究室網站模板 (Lab Website Template)

專為大學研究室開發的現代化、響應式網站模板。採用 **React + Vite + Tailwind CSS** 構建，透過分離前端介面與資料層，實現無痛維護的內容更新。

## 🔗 線上實體網站 

本專案已實際應用，線上穩定運行中：
> 🌐 **[點此查看正式上線網站](https://www.ncuksl.com/)** 

---

## 💡 開發動機與解決方案

學術網站最大的痛點是「常態性的內容維護」。為了讓不熟悉程式碼的教授與學生能輕鬆更新論文、最新消息與成員名單，本專案實作了**混合資料架構**：

- **零程式碼更新**：除支援靜態 `JSON` 讀取外，也對接 **Google Sheets (CSV格式)**。使用者只需修改 Google 表單，網站即可自動同步最新資料。

---

## ✨ 核心技術亮點

- **前端框架**：`React 19` + `Vite` 開發，支援快速 HMR 開發與優化建置。
- **元件化設計與路由**：使用 `React Router v6` 建立 SPA 架構，涵蓋首頁、團隊、專案、論文等模組化頁面。
- **效能優化**：利用 `useMemo` 等 Hook 優化論文年份篩選與名單渲染效能，避免無效重繪。
- **純前端功能**：客製化純前端功能，例如直接轉換論文陣列並匯出 `.csv` 檔案。
- **現代化 UI/UX**：導入 `Tailwind CSS` 實作深色模式與自適應 (RWD) 佈局，大幅提升傳統學術網站的使用體驗。

---

## 🚀 本地開發與使用

1. **安裝環境與啟動開發伺服器**：
   ```bash
   npm install
   npm run dev
   ```
2. **客製化資料**：
   修改 `public/data/` 內的 JSON 檔案，或於 `src/config/sheetsConfig.js` 填入您的 Google Sheets URL。
3. **建置與部屬**：
   ```bash
   npm run build
   ```
   支援輕鬆部屬至 GitHub Pages 或 GitLab CI/CD（已內建 YAML 範例）。
