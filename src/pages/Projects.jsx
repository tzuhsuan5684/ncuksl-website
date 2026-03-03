import { useState, useEffect } from 'react';
import { fetchSheetData } from '../utils/fetchData';
import { SHEET_URLS, FALLBACK_URLS } from '../config/sheetsConfig';

export default function Projects() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        fetchSheetData(SHEET_URLS.projects, FALLBACK_URLS.projects)
            .then((data) => setProjectsData(data))
            .catch((err) => console.error('Error loading projects:', err));
    }, []);

    const categoryColors = {
        國科會計畫: 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300 border border-primary-200 dark:border-primary-800',
        教育部計畫: 'bg-accent-100 text-accent-800 dark:bg-accent-900/50 dark:text-accent-300 border border-accent-200 dark:border-accent-800',
        產學合作: 'bg-primary-50 text-primary-700 dark:bg-primary-800/50 dark:text-primary-200 border border-primary-100 dark:border-primary-700',
        其他: 'bg-primary-50 text-primary-600 dark:bg-primary-700/50 dark:text-primary-300 border border-primary-100 dark:border-primary-600',
    };

    return (
        <div className="section-padding min-h-screen">
            <div className="container-custom">
                <header className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 dark:text-white mb-6">
                        實驗室<span className="text-gradient">計畫</span>
                    </h1>
                    <p className="text-xl text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
                        我們執行的研究計畫與產學合作項目
                    </p>
                </header>

                <div id="projects-container" className="max-w-5xl mx-auto space-y-8">
                    {projectsData.length > 0 ? (
                        projectsData.map((project, index) => {
                            const colorClass = categoryColors[project.category] || categoryColors['其他'];
                            return (
                                <div
                                    key={index}
                                    className="glass-card hover-card-lift p-8 rounded-md border-l-4 border-l-primary-500 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                        <h3 className="text-2xl font-bold text-primary-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className={`${colorClass} text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-primary-600 dark:text-primary-400">
                                        <div className="flex items-center p-3 rounded-md bg-primary-50 dark:bg-primary-800/50">
                                            <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center text-primary-500 shadow-sm mr-4">
                                                <i className="fas fa-building"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-primary-500 uppercase tracking-wider font-semibold">補助單位</p>
                                                <p className="font-medium">{project.agency}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 rounded-md bg-primary-50 dark:bg-primary-800/50">
                                            <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center text-primary-500 shadow-sm mr-4">
                                                <i className="far fa-calendar-alt"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-primary-500 uppercase tracking-wider font-semibold">執行期間</p>
                                                <p className="font-medium font-mono">{project.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="glass-panel p-12 text-center text-primary-500">
                            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
                            載入中...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
