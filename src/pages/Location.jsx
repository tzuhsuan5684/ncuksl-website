export default function Location() {
    return (
        <div className="section-padding min-h-screen">
            <div className="container-custom">
                <header className="text-center mb-16 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                        聯絡與交通<span className="text-gradient">資訊</span>
                    </h1>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        歡迎來訪 KS Lab
                    </p>
                </header>

                <div className="max-w-10xl mx-auto space-y-12">
                    {/* Map */}
                    <div className="glass-panel max-w-6xl mx-auto">
                        <div className="aspect-video rounded-none overflow-hidden border border-secondary-200 dark:border-secondary-700">
                            <iframe
                                src="https://www.google.com/maps/embed?YOUR_EMBED_URL_HERE"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KS Lab Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Address Column */}
                        <div className="glass-card p-4 md:p-8 rounded-md h-full flex flex-col">
                            <h2 className="text-2xl font-bold mb-auto text-secondary-900 dark:text-white flex items-center">
                                <div className="w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                地址資訊
                            </h2>
                            <div className="flex-grow flex flex-col justify-center py-6">
                                <p className="text-secondary-800 dark:text-white font-bold text-lg mb-4">
                                    Your University Name
                                </p>
                                <div className="space-y-1 text-secondary-600 dark:text-secondary-400 leading-relaxed text-base">
                                    <p>Your University Street Address</p>
                                    <p>Your Building, Room XXX</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Column */}
                        <div className="glass-card p-4 md:p-8 rounded-md h-full flex flex-col">
                            <h2 className="text-2xl font-bold mb-auto text-secondary-900 dark:text-white flex items-center">
                                <div className="w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                聯絡我們
                            </h2>
                            <div className="flex-grow flex flex-col justify-center py-6">
                                <p className="text-secondary-800 dark:text-white font-bold text-lg mb-4">
                                    電話
                                </p>
                                <div className="space-y-1 text-secondary-600 dark:text-secondary-400 leading-relaxed text-base">
                                    <p>+00-0000-0000</p>
                                    <p>ext. XXXXX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
