import { useState, useEffect } from 'react';
import { fetchSheetData } from '../utils/fetchData';
import { SHEET_URLS, FALLBACK_URLS } from '../config/sheetsConfig';

export default function Team() {
    const [teamData, setTeamData] = useState(null);
    const [activeFilter, setActiveFilter] = useState('current');

    useEffect(() => {
        fetchSheetData(SHEET_URLS.team, FALLBACK_URLS.team)
            .then((data) => setTeamData(data))
            .catch((err) => console.error('Error loading team data:', err));
    }, []);

    if (!teamData) {
        return (
            <div className="container-custom py-32 text-center">
                <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-secondary-500">載入中...</p>
            </div>
        );
    }

    const renderMemberCard = (member) => {
        const positionClass = member.img_position ? `object-${member.img_position}` : '';
        return (
            <div className="group glass-card text-center p-6 rounded-md flex flex-col h-full bg-white dark:bg-secondary-800">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md overflow-hidden bg-secondary-100 dark:bg-secondary-700 flex items-center justify-center">
                    {member.image ? (
                        <img src={`${import.meta.env.BASE_URL}${member.image}`} alt={member.name} className={`w-full h-full object-cover ${positionClass}`} />
                    ) : (
                        <i className="fas fa-user text-5xl text-secondary-300 dark:text-secondary-500"></i>
                    )}
                </div>
                <div className="flex-grow mb-4">
                    <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">{member.name}</h4>
                </div>
                <div className="mt-auto pt-4 border-t border-secondary-100 dark:border-secondary-700/50 space-y-2 text-sm text-left">
                    {member.email && (
                        <div className="flex items-start">
                            <i className="fas fa-envelope fa-fw mr-3 w-4 text-center mt-1 text-primary-400"></i>
                            <a href={`mailto:${member.email}`} className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all">
                                {member.email}
                            </a>
                        </div>
                    )}
                    {member.office && (
                        <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                            <i className="fas fa-map-marker-alt fa-fw mr-3 w-4 text-center text-primary-400"></i> {member.office}
                        </div>
                    )}
                    {member.ext && (
                        <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                            <i className="fas fa-phone fa-fw mr-3 w-4 text-center text-primary-400"></i> 分機: {member.ext}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderAlumniCard = (member) => {
        return (
            <div className="group relative glass-card rounded-md p-6 overflow-hidden">

                <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-14 h-14 rounded-full bg-primary-50 dark:bg-secondary-700 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-2">
                            <i className="fas fa-user-graduate text-2xl"></i>
                        </div>
                    </div>
                    <h4 className="text-xl font-bold text-center text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {member.name}
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-start justify-center text-sm">
                            <i className="fas fa-building mt-1 mr-2 text-secondary-400 group-hover:text-primary-500 transition-colors"></i>
                            <span className="font-medium text-secondary-600 dark:text-secondary-300 text-center">{member.company}</span>
                        </div>
                        {member.job_title && (
                            <div className="flex items-center justify-center text-sm">
                                <i className="fas fa-briefcase mr-2 text-secondary-400 group-hover:text-primary-500 transition-colors"></i>
                                <span className="text-secondary-500 dark:text-secondary-400">{member.job_title}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="section-padding bg-secondary-50 dark:bg-secondary-900 min-h-screen">
            <div className="container-custom px-4 md:px-8 lg:px-12">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                        研究<span className="text-gradient">團隊</span>
                    </h1>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        認識我們優秀的團隊成員，共同推動研究發展
                    </p>
                </header>

                {/* Filter Buttons */}
                <div id="team-filter-buttons" className="flex justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveFilter('current')}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeFilter === 'current'
                            ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                            : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 shadow'
                            }`}
                    >
                        現任成員
                    </button>
                    <button
                        onClick={() => setActiveFilter('alumni')}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeFilter === 'alumni'
                            ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                            : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 shadow'
                            }`}
                    >
                        畢業校友
                    </button>
                </div>

                {/* Current Members */}
                <div id="current-members-container" className={activeFilter === 'current' ? '' : 'hidden'}>
                    {/* Groups */}
                    {[
                        { title: '博士後研究員', data: teamData.postdocs, id: 'postdocs-grid' },
                        { title: '研究助理', data: teamData.assistants, id: 'assistants-grid' },
                        { title: '博士班學生', data: teamData.phd_students, id: 'phd-students-grid' },
                        { title: '碩士班二年級', data: teamData.master_students?.second_year, id: 'master-second-year-grid' },
                        { title: '碩士班一年級', data: teamData.master_students?.first_year, id: 'master-first-year-grid' }
                    ].map((group, index) => (
                        group.data && group.data.length > 0 && (
                            <section key={index} className="mb-20">
                                <h2 className="text-2xl font-bold mb-10 text-secondary-900 dark:text-white flex items-center gap-4">
                                    <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
                                    {group.title}
                                </h2>
                                <div id={group.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {group.data.map((member, i) => <div key={i} className="h-full">{renderMemberCard(member)}</div>)}
                                </div>
                            </section>
                        )
                    ))}
                </div>

                {/* Alumni */}
                <div id="alumni-container" className={activeFilter === 'alumni' ? '' : 'hidden'}>
                    {[
                        { title: '博士班畢業', icon: 'fa-graduation-cap', data: teamData.alumni?.phd },
                        { title: '碩士班畢業', icon: 'fa-user-graduate', data: teamData.alumni?.master }
                    ].map((group, index) => (
                        group.data && group.data.length > 0 && (
                            <div key={index} className="alumni-section mb-20">
                                <h3 className="text-2xl font-bold mb-10 text-secondary-900 dark:text-white flex items-center gap-3 border-b border-secondary-200 dark:border-secondary-700 pb-4">
                                    <i className={`fas ${group.icon} text-primary-500`}></i>
                                    {group.title}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {group.data.map((member, i) => <div key={i}>{renderAlumniCard(member)}</div>)}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div >
        </div >
    );
}
