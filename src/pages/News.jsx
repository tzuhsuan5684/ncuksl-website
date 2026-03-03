import { useState, useEffect } from 'react';
import { fetchSheetData } from '../utils/fetchData';
import { SHEET_URLS, FALLBACK_URLS } from '../config/sheetsConfig';
import { categoryColors, sortByPinned } from '../utils/categoryColors';

export default function News() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetchSheetData(SHEET_URLS.news, FALLBACK_URLS.news)
            .then((data) => {
                setNewsData(sortByPinned(data));
            })
            .catch((err) => console.error('Error loading news:', err));
    }, []);

    return (
        <div className="section-padding min-h-screen">
            <div className="container-custom">
                <header className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                        最新<span className="text-gradient">公告</span>
                    </h1>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        實驗室最新消息與重要公告
                    </p>
                </header>

                <div className="max-w-4xl mx-auto space-y-6">
                    {newsData.length > 0 ? (
                        newsData.map((item, index) => {
                            const colorClass = categoryColors[item.category] || categoryColors['其他'];
                            return (
                                <div
                                    key={index}
                                    className="glass-card flex flex-col md:flex-row gap-6 items-start p-8 rounded-md hover:bg-white/50 dark:hover:bg-secondary-800/50 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary-500 group animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="shrink-0 flex flex-row md:flex-col items-center md:items-start gap-3 md:w-32">
                                        <div className="text-sm font-mono text-secondary-500 dark:text-secondary-400 whitespace-nowrap flex items-center bg-white/50 dark:bg-secondary-900/50 px-3 py-1 rounded-full">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            {item.date}
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${colorClass}`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="content grow">
                                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {item.pinned && (
                                                <i className="fas fa-thumbtack text-accent-600 mr-2" title="置頂公告"></i>
                                            )}
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline decoration-primary-500 decoration-2 underline-offset-4"
                                                >
                                                    {item.title}
                                                </a>
                                            ) : (
                                                item.title
                                            )}
                                        </h3>
                                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-sm md:text-base">
                                            {item.summary}
                                        </p>
                                    </div>
                                    {item.link && (
                                        <div className="md:self-center hidden md:block opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 duration-300">
                                            <i className="fas fa-arrow-right text-primary-400"></i>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className="glass-panel p-12 text-center text-secondary-500">
                            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
                            載入中...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
