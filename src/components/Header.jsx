import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: '/', label: '首頁' },
        { to: '/news', label: '公告' },
        { to: '/projects', label: '實驗室計畫' },
        { to: '/research-areas', label: '研究方向' },
        { to: '/systems', label: '研究系統' },
        { to: '/team', label: '研究團隊' },
        { to: '/publications', label: '研究成果' },
        { to: '/location', label: '聯絡與交通資訊' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 dark:bg-primary-950/95 border-b border-gray-200 dark:border-primary-800 py-2'
                : 'bg-transparent py-4 border-b border-transparent'
                }`}
        >
            <nav className="container-custom flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-bold text-primary-900 dark:text-gray-100 flex items-center gap-3 group">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="KS Lab Logo"
                        className="w-10 h-10 object-contain transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <span>
                        AIKS Lab
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive
                                    ? 'text-primary-900 dark:text-white bg-gray-100 dark:bg-primary-800'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-primary-800/50'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center lg:hidden">
                    <button
                        className="text-2xl text-primary-900 dark:text-white focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-x-0 top-[60px] p-4 transition-all duration-300 transform lg:hidden z-40 ${mobileMenuOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="glass-panel rounded-md p-4 flex flex-col space-y-1 shadow-none border border-gray-200 dark:border-primary-700">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-md transition-all duration-200 ${isActive
                                    ? 'bg-gray-100 dark:bg-primary-800 text-primary-900 dark:text-white font-bold'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-primary-800/50'
                                }`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
}
