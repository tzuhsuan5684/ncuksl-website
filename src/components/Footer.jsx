import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-secondary-900 text-secondary-300 border-t border-secondary-800 pt-8 pb-4">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-display text-white">
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="KS Lab Logo"
                                className="w-8 h-8 object-contain"
                            /> AIKS Lab
                        </Link>
                        <p className="text-secondary-400 leading-relaxed max-w-xs">
                            致力於探索人工智慧的無限可能，
                            <br />打造人性化與永續的智慧教育環境。
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">快速連結</h4>
                        <ul className="space-y-1">
                            {[
                                { to: '/research-areas', label: '研究方向' },
                                { to: '/systems', label: '研究系統' },
                                { to: '/team', label: '研究團隊' },
                                { to: '/publications', label: '研究成果' },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                                        <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary-500"></i>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">聯絡資訊</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-8 h-8 rounded bg-secondary-800 flex items-center justify-center text-primary-400 shrink-0 border border-secondary-700">
                                    <i className="fas fa-map-marker-alt text-sm"></i>
                                </div>
                                <div>
                                    <span className="block text-sm font-semibold text-white">實驗室位置</span>
                                    <span className="text-sm">桃園市中壢區中大路300號<br />國立中央大學 工程五館</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-8 h-8 rounded bg-secondary-800 flex items-center justify-center text-primary-400 shrink-0 border border-secondary-700">
                                    <i className="fas fa-phone-alt text-sm"></i>
                                </div>
                                <div>
                                    <span className="block text-sm font-semibold text-white">電話</span>
                                    <span className="text-sm">03-422-7151 分機 35353、35356</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-500">
                    <p>&copy; {currentYear} KS Lab. All Rights Reserved.</p>

                </div>
            </div>
        </footer>
    );
}
