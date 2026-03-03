
export default function Systems() {
    const systems = [
        {
            category: 'learning',
            title: '學習系統',
            items: [
                {
                    name: 'BookRoll',
                    desc: '由日本京都大學 Hiroaki Ogata 教授實驗室團隊所開發的線上電子書閱讀系統，提供學生練習和複習課程內容，老師也能監看學生的學習狀況，並能對學生的狀態進行分析。',
                    features: [
                        'Assessment & Review System：提供選擇題、克漏字與簡答題練習',
                        'Grafana：學習日誌視覺化儀表板',
                        'Book_overview：閱讀狀態與標記紀錄監控',
                        'Intervention dashboard：個人化改善建議與狀態分析'
                    ],
                    icon: 'fa-book-open',
                },
                {
                    name: 'VisCode',
                    desc: '一套結合 JupyterHub 與系統日誌分析系統 (ELK) 的系統。自動紀錄學習者執行程式碼的細節，並進行視覺化，以便教師即時掌握教學情形。',
                    features: [
                        'Elasticsearch & Logstash：日誌儲存與過濾',
                        'Kibana：即時可視化套件',
                        'JupyterHub 日誌分析：紀錄登入、運行結果等'
                    ],
                    icon: 'fa-code-branch',
                },
            ],
        },
        {
            category: 'assistant',
            title: '學習助教系統',
            items: [
                {
                    name: 'PyChatbot',
                    desc: '課後輔助學習工具，自動抓取學生線上解題環境中的作答紀錄，分析總結學習狀況並給予建議。使用 ChatGPT 輔助教師生成教材。',
                    features: [
                        '自動總結評分與程式設計求救',
                        '作業繳交與點名結果查詢',
                        '使用 SBERT 技術減輕教師負擔'
                    ],
                    icon: 'fa-robot',
                },
                {
                    name: 'PyTutor',
                    desc: '基於 React.js 和 TypeScript 開發的 Chrome Extension 智慧助教。利用 ChatGPT 生成解題提示和程式碼解釋。',
                    features: [
                        '24 小時不間斷程式引導服務',
                        '提供解題提示與程式碼解釋',
                        'Flask 後端平台支援'
                    ],
                    icon: 'fa-laptop-code',
                },
            ],
        },
        {
            category: 'esg',
            title: 'ESG 分析系統',
            items: [
                {
                    name: 'ALEX',
                    desc: '使用 BERT 模型提供即時句子標記並產生視覺化圖表。配合 ChatGPT 利用輿情分析找出 ESG 新聞核心話題，並可生成演講稿。',
                    features: [
                        'News Summary Generator：ESG 流行詞及議題摘要',
                        'Cue Card Generator：生成演講提示稿',
                        '幫助企業即時回應、減少風險'
                    ],
                    icon: 'fa-leaf',
                },
            ],
        },
    ];

    return (
        <div className="section-padding min-h-screen">
            <div className="container-custom">
                <header className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                        研究<span className="text-gradient">系統</span>
                    </h1>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        我們開發的各類智慧教學與分析系統，結合 AI 技術提升學習與決策效率
                    </p>
                </header>

                {/* Systems */}
                <div className="max-w-7xl mx-auto">
                    {systems.map((category, catIndex) => (
                        <section key={catIndex} id={`${category.category}-systems`} className="mb-20">
                            <h2 className="text-3xl font-bold mb-10 text-secondary-900 dark:text-white flex items-center">
                                <span className="w-12 h-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full mr-4"></span>
                                {category.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.items.map((system, index) => (
                                    <div
                                        key={index}
                                        className="glass-card group p-8 rounded-md transition-all duration-300"
                                    >
                                        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-md flex items-center justify-center text-3xl text-primary-600 dark:text-primary-400 mb-6 shadow-sm">
                                            <i className={`fas ${system.icon}`}></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                                            {system.name}
                                        </h3>
                                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-base mb-6">
                                            {system.desc}
                                        </p>

                                        {system.features && (
                                            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                                                <h4 className="text-sm font-semibold text-secondary-800 dark:text-secondary-200 mb-2">主要功能：</h4>
                                                <ul className="text-sm text-secondary-500 dark:text-secondary-400 space-y-2">
                                                    {system.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <i className="fas fa-check text-primary-500 mt-1 mr-2 text-xs opacity-70"></i>
                                                            <span className='leading-tight'>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
