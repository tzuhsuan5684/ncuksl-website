import { useState, useEffect, useMemo } from 'react';
import { fetchSheetData } from '../utils/fetchData';
import { SHEET_URLS, FALLBACK_URLS } from '../config/sheetsConfig';

export default function Publications() {
    const [allPublications, setAllPublications] = useState([]);
    const [selectedYear, setSelectedYear] = useState('all');
    const [years, setYears] = useState([]);

    useEffect(() => {
        fetchSheetData(SHEET_URLS.publications, FALLBACK_URLS.publications)
            .then((data) => {
                setAllPublications(data);

                // Extract unique years and sort
                const uniqueYears = [...new Set(data.map((item) => item.year))].sort((a, b) => b - a);
                setYears(uniqueYears);
            })
            .catch((err) => console.error('Error loading publications:', err));
    }, []);

    // 直接從 allPublications 計算，不需要額外 state 或 useEffect
    const filteredPublications = useMemo(() => {
        if (selectedYear === 'all') return allPublications;
        return allPublications.filter((item) => item.year.toString() === selectedYear);
    }, [selectedYear, allPublications]);

    const handleClearFilters = () => {
        setSelectedYear('all');
    };

    const handleExportCSV = () => {
        let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';
        csvContent += '標題,作者,年份,類別,出處,連結\n';

        filteredPublications.forEach((item) => {
            const row = [item.title, item.authors, item.year, item.category, item.source, item.link]
                .map((field) => `"${(field || '').toString().replace(/"/g, '""')}"`)
                .join(',');
            csvContent += row + '\n';
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'kslab_publications.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="section-padding min-h-screen">
            <div className="container-custom">
                <header className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                        研究<span className="text-gradient">成果</span>
                    </h1>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        我們的學術發表與研究貢獻
                    </p>
                </header>

                {/* Filters */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="glass-panel rounded-md p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="flex flex-col sm:flex-row gap-4 items-center flex-1 w-full md:w-auto">
                                <label htmlFor="filter-year" className="font-bold text-secondary-700 dark:text-secondary-300 whitespace-nowrap">
                                    <i className="fas fa-filter mr-2 text-primary-500"></i>
                                    篩選年份
                                </label>
                                <div className="relative w-full sm:w-48">
                                    <select
                                        id="filter-year"
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full appearance-none px-4 py-3 rounded-md border border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
                                    >
                                        <option value="all">全部年份</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-400 pointer-events-none"></i>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto justify-end">
                                <button
                                    id="clear-filters-btn"
                                    onClick={handleClearFilters}
                                    className="px-6 py-3 bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-700 dark:hover:bg-secondary-600 text-secondary-700 dark:text-secondary-200 rounded-md transition-all duration-300 font-semibold"
                                >
                                    <i className="fas fa-redo mr-2"></i>清除
                                </button>
                                <button
                                    id="export-csv-btn"
                                    onClick={handleExportCSV}
                                    className="btn-primary flex items-center gap-2"
                                >
                                    <i className="fas fa-download"></i>匯出 CSV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Publications List */}
                <div id="publications-list" className="max-w-6xl mx-auto space-y-4">
                    {filteredPublications.length > 0 ? (
                        filteredPublications.map((item, index) => {
                            const hasLink = item.link && item.link.trim() !== '';
                            return (
                                <div
                                    key={index}
                                    className="glass-card p-6 md:p-8 rounded-md border-l-4 border-l-primary-500 hover:border-l-emerald-400 transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 leading-snug">
                                                {hasLink ? (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                                    >
                                                        {item.title}
                                                    </a>
                                                ) : (
                                                    item.title
                                                )}
                                            </h3>
                                            <p className="text-secondary-600 dark:text-secondary-300 mb-4 text-base">
                                                <i className="fas fa-users mr-2 text-primary-400"></i>
                                                {item.authors}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                                <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium border border-primary-100 dark:border-primary-800">
                                                    <i className="far fa-calendar-alt mr-2"></i>
                                                    {item.year}
                                                </span>
                                                <span className="flex items-center text-secondary-500 dark:text-secondary-400 italic">
                                                    <i className="fas fa-book mr-2"></i>
                                                    {item.source}
                                                </span>
                                            </div>
                                        </div>
                                        {hasLink && (
                                            <div className="flex-shrink-0 mt-2 md:mt-0">
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center px-5 py-2.5 bg-secondary-100 text-secondary-700 hover:bg-primary-600 hover:text-white dark:bg-secondary-800 dark:text-secondary-300 dark:hover:bg-primary-600 dark:hover:text-white rounded-md transition-all duration-300 text-sm font-bold shadow-sm"
                                                >
                                                    <i className="fas fa-external-link-alt mr-2"></i>查看
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div id="no-publications-found" className="text-center text-secondary-500 py-16 glass-panel rounded-md">
                            <i className="fas fa-search text-5xl mb-4 text-secondary-300"></i>
                            <p className="text-xl">找不到符合條件的研究成果</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
