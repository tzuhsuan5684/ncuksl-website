import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSheetData } from '../utils/fetchData';
import { SHEET_URLS, FALLBACK_URLS } from '../config/sheetsConfig';
import { categoryColors, sortByPinned } from '../utils/categoryColors';

export default function Home() {
    const [newsData, setNewsData] = useState([]);
    const [activitiesData, setActivitiesData] = useState([]);
    const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        // Load team data
        fetchSheetData(SHEET_URLS.team, FALLBACK_URLS.team)
            .then((data) => setTeamData(data))
            .catch((err) => console.error('Error loading team data:', err));

        // Load news data
        fetchSheetData(SHEET_URLS.news, FALLBACK_URLS.news)
            .then((data) => {
                setNewsData(sortByPinned(data).slice(0, 4)); // Show first 4
            })
            .catch((err) => console.error('Error loading news:', err));

        // Load activities data
        fetchSheetData(SHEET_URLS.activities, FALLBACK_URLS.activities)
            .then((data) => setActivitiesData(data))
            .catch((err) => console.error('Error loading activities:', err));
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden pt-20 pb-32 bg-primary-900">
                {/* Clean Gradient Background based on Logo (Blue -> Teal) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 opacity-100"></div>

                {/* Minimal Overlay Grid (Optional, kept subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container-custom relative z-10 flex flex-col items-center">
                    <span className="inline-block py-1 px-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-accent-200 text-sm font-medium mb-8 animate-fade-in-down tracking-widest uppercase">
                        Innovation · Intelligence · Impact
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 animate-fade-in-down text-white tracking-tight leading-tight">
                        人工智慧與<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-accent-300">知識系統</span>實驗室
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 animate-fade-in-up mb-12 leading-relaxed font-light">
                        致力於探索人工智慧的前沿，透過機器學習與自然語言處理技術，
                        <br className="hidden md:block" />
                        開創智慧教育與永續發展的無限可能。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-200">
                        <a href="#news-section" className="px-8 py-3 rounded text-primary-900 bg-white font-medium hover:bg-gray-100 transition-colors shadow-none border border-transparent">
                            最新動態
                        </a>
                        <Link to="/research-areas" className="px-8 py-3 rounded font-medium text-white border border-white/30 hover:bg-white/10 transition-all duration-300">
                            核心研究
                        </Link>
                    </div>
                </div>
            </section>

            {/* News & Activities Section */}
            <section id="news-section" className="relative z-20 -mt-20 pb-24 px-4">
                <div className="container-custom">
                    <div className="bg-white dark:bg-primary-950 rounded-md p-8 md:p-12 border border-gray-200 dark:border-primary-800 shadow-none">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Activities */}
                            <div className="lg:col-span-5 relative border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-primary-800 pb-12 lg:pb-0 lg:pr-12">
                                <div className="flex items-center mb-8">
                                    <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white border-l-4 border-accent-600 pl-4">
                                        近期活動
                                    </h2>
                                </div>

                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:ml-2.5 before:h-full before:w-px before:bg-gray-200 dark:before:bg-primary-800">
                                    {activitiesData.length > 0 ? (
                                        activitiesData.map((item, index) => (
                                            <div key={index} className="relative flex items-start gap-6 group">
                                                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white dark:border-primary-950 bg-primary-400 z-10 shrink-0 mt-1"></div>

                                                <div className="w-full bg-gray-50 dark:bg-primary-900/50 p-5 rounded border border-gray-100 dark:border-primary-800 transition-colors hover:border-accent-500/50">
                                                    <div className="text-sm font-mono text-accent-700 dark:text-accent-400 mb-2 border-b border-gray-200 dark:border-primary-700 pb-1 inline-block">{item.date}</div>
                                                    <h3 className="font-bold text-primary-900 dark:text-white mb-2 text-lg">
                                                        {item.link ? (
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent-700 transition-colors">
                                                                {item.title}
                                                            </a>
                                                        ) : (
                                                            item.title
                                                        )}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-400">載入中...</div>
                                    )}
                                </div>
                            </div>

                            {/* News */}
                            <div className="lg:col-span-7">
                                <div className="flex justify-between items-end mb-8 border-b border-gray-100 dark:border-primary-800 pb-4">
                                    <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white border-l-4 border-primary-600 pl-4">
                                        最新公告
                                    </h2>
                                    <Link to="/news" className="hidden md:inline-flex items-center text-primary-700 hover:text-primary-900 font-medium transition-colors text-sm uppercase tracking-wide">
                                        View All <i className="fas fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {newsData.length > 0 ? (
                                        newsData.map((item, index) => {
                                            const colorClass = categoryColors[item.category] || categoryColors['其他'];
                                            return (
                                                <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 rounded hover:bg-gray-50 dark:hover:bg-primary-900/40 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-primary-700 group">
                                                    <div className="shrink-0 flex flex-row md:flex-col items-center gap-3 md:w-24 text-center">
                                                        <div className="flex flex-col items-center justify-center font-mono text-sm leading-tight text-gray-500">
                                                            <span className="text-xs uppercase">{item.date.split('-')[1]}</span>
                                                            <span className="font-bold text-xl text-primary-900 dark:text-gray-200">{item.date.split('-')[2]}</span>
                                                            <span className="text-xs text-gray-400">{item.date.split('-')[0]}</span>
                                                        </div>
                                                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${colorClass}`}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <div className="grow border-l border-gray-100 dark:border-primary-800 pl-0 md:pl-6 pt-2 md:pt-0">
                                                        <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2 group-hover:text-primary-700 transition-colors font-serif">
                                                            {item.pinned && <i className="fas fa-thumbtack text-accent-600 mr-2" title="置頂公告"></i>}
                                                            {item.link ? (
                                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                                    {item.title}
                                                                </a>
                                                            ) : (
                                                                item.title
                                                            )}
                                                        </h3>
                                                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                                            {item.summary}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="text-center text-gray-400 py-8">載入中...</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding bg-gray-50 dark:bg-primary-950 overflow-hidden relative border-t border-gray-200 dark:border-primary-800">
                <div className="container-custom relative z-10">
                    {/* Professor Section */}
                    {teamData?.professor && (
                        <div className="max-w-5xl mx-auto mb-32">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                                {/* Photo + Contact */}
                                <div className="flex-shrink-0 flex flex-col items-center gap-6 lg:w-1/3">
                                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto relative">
                                        <img src={`${import.meta.env.BASE_URL}${teamData.professor.image}`} alt={teamData.professor.name} className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="space-y-3 text-secondary-600 dark:text-secondary-400 text-sm text-center">
                                        <p className="flex items-center justify-center gap-2">
                                            <i className="fas fa-envelope text-primary-500 w-4"></i>
                                            <a href={`mailto:${teamData.professor.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono">{teamData.professor.email}</a>
                                        </p>
                                        {teamData.professor.office && (
                                            <p className="flex items-center justify-center gap-2">
                                                <i className="fas fa-map-marker-alt text-primary-500 w-4"></i>
                                                {teamData.professor.office}
                                            </p>
                                        )}
                                        {teamData.professor.ext && (
                                            <p className="flex items-center justify-center gap-2">
                                                <i className="fas fa-phone text-primary-500 w-4"></i>
                                                分機: {teamData.professor.ext}
                                            </p>
                                        )}
                                        {teamData.professor.website && (
                                            <div className="pt-2">
                                                <a href={teamData.professor.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800/50 transition-colors text-xs font-bold uppercase tracking-wider">
                                                    <i className="fas fa-globe"></i> 個人網頁
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 text-center lg:text-left pt-4 lg:pt-8">
                                    <div className="mb-2 text-primary-600 dark:text-primary-400 font-bold tracking-widest text-sm uppercase">實驗室主持人</div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-8">{teamData.professor.name}</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                                        {teamData.professor.titles && teamData.professor.titles.length > 0 && (
                                            <div>
                                                <h4 className="text-lg font-bold text-primary-900 dark:text-white mb-4 border-l-4 border-primary-500 pl-3">
                                                    主要職務
                                                </h4>
                                                <ul className="space-y-3">
                                                    {teamData.professor.titles.map((title, index) => (
                                                        <li key={index} className="flex items-start gap-3 text-secondary-700 dark:text-secondary-300">
                                                            <i className={`${title.icon} text-primary-400 mt-1 w-5 text-center shrink-0`}></i>
                                                            <span className="leading-relaxed">{title.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {teamData.professor.honors && teamData.professor.honors.length > 0 && (
                                            <div>
                                                <h4 className="text-lg font-bold text-primary-900 dark:text-white mb-4 border-l-4 border-accent-500 pl-3">
                                                    榮譽獎項
                                                </h4>
                                                <ul className="space-y-3">
                                                    {teamData.professor.honors.map((honor, index) => (
                                                        <li key={index} className="flex items-start gap-3 text-secondary-700 dark:text-secondary-300">
                                                            <i className={`${honor.icon} text-accent-400 mt-1 w-5 text-center shrink-0`}></i>
                                                            <span className="leading-relaxed">{honor.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* About Us Intro */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-900 dark:text-white leading-tight">
                                探索智慧，<br />
                                <span className="text-accent-700 dark:text-accent-400">啟發未來</span>
                            </h2>
                            <div className="w-20 h-1 bg-primary-900 dark:bg-white mb-8"></div>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 font-light">
                                本實驗室主要研究開發人性化及永續的學習科技，利用資料科學和人工智慧，將理論和實際應用結合，致力於在電腦科學領域做出前沿的研究貢獻。
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 font-light">
                                我們專注於人工智慧、機器學習以及自然語言處理。透過學習分析實現精準教育，利用先進的語言模型，讓機器讀懂人類語言，協助解決複雜問題。
                            </p>
                            <Link to="/team" className="inline-flex items-center text-primary-800 dark:text-primary-300 font-bold hover:translate-x-1 transition-transform uppercase tracking-wider text-sm border-b-2 border-primary-800 dark:border-primary-300 pb-1">
                                認識我們的團隊
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={`${import.meta.env.BASE_URL}assets/images/events/Ogata1.jpg`} alt="實驗室照片" className="rounded shadow-none border border-gray-200 dark:border-primary-800 w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="section-padding relative border-t border-gray-200 dark:border-primary-800">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-6">核心研究領域</h2>
                        <div className="w-16 h-1 bg-accent-600 mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'fa-robot', title: '人工智慧', desc: '發展核心演算法，建構更聰明、更可靠的智慧系統。' },
                            { icon: 'fa-cogs', title: '機器學習', desc: '從數據中學習模式，實現精準預測與決策自動化。' },
                            { icon: 'fa-language', title: '自然語言處理', desc: '讓機器理解與生成人類語言，縮短人機溝通的距離。' },
                            { icon: 'fa-graduation-cap', title: '智慧教育', desc: '結合學習分析與AI，打造個人化、永續的學習環境。' },
                        ].map((area, index) => (
                            <div key={index} className="group bg-white dark:bg-primary-900 p-8 rounded border border-gray-200 dark:border-primary-700 hover:border-primary-500 hover:shadow-none transition-all duration-300 text-left">
                                <div className="text-3xl text-primary-700 dark:text-primary-400 mb-6 GROUP-HOVER:text-primary-900">
                                    <i className={`fas ${area.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-primary-900 dark:text-white font-serif">
                                    {area.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-gray-50 dark:bg-secondary-950 border-t border-gray-200 dark:border-primary-800">
                <div className="container-custom">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 dark:text-white mb-2">實驗室生活</h2>
                        <p className="text-gray-600 dark:text-gray-400">研究之餘的精彩時刻</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-1 h-[600px] md:h-[500px]">
                        {/* Large items */}
                        <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden bg-gray-200">
                            <img src={`${import.meta.env.BASE_URL}assets/images/events/Ogata2.jpg`} alt="Lab Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl tracking-wider">京大 Ogata 老師來訪</span>
                            </div>
                        </div>

                        {/* Smaller items */}
                        {[
                            { src: `${import.meta.env.BASE_URL}assets/images/events/talk.jpg`, label: '實驗室研討', span: 'md:col-span-1' },
                            { src: `${import.meta.env.BASE_URL}assets/images/events/M1.jpg`, label: '合照', span: 'md:col-span-1' },
                            { src: `${import.meta.env.BASE_URL}assets/images/events/conference.jpg`, label: '研討會發表', span: 'md:col-span-1' },
                            { src: `${import.meta.env.BASE_URL}assets/images/events/eat.jpg`, label: '聚餐', span: 'md:col-span-1' },
                        ].map((photo, index) => (
                            <div key={index} className={`relative group overflow-hidden bg-gray-200 ${photo.span}`}>
                                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm tracking-wider">{photo.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Access / Call to Action */}
            <section className="py-24 bg-primary-900 text-white border-t border-primary-800">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">準備好探索更多了嗎？</h2>
                    <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-light">
                        深入了解我們的研究成果，或查看實驗室位置與我們聯繫。
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { to: '/research-areas', icon: 'fa-flask', label: '研究方向' },
                            { to: '/team', icon: 'fa-users', label: '研究團隊' },
                            { to: '/publications', icon: 'fa-book-open', label: '研究成果' },
                        ].map((link, index) => (
                            <Link key={index} to={link.to} className="group border border-white/20 p-8 hover:bg-white/5 transition-all duration-300 text-center">
                                <div className="text-3xl mb-4 text-accent-400 group-hover:text-accent-300 transition-colors">
                                    <i className={`fas ${link.icon}`}></i>
                                </div>
                                <div className="font-bold text-lg tracking-wider">{link.label}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
