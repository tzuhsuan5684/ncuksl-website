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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9662644892847!2d121.19276731500658!3d24.968049484011647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681e5a1e8b1e8b%3A0x3f8e8e8e8e8e8e8e!2z5ZyL56uL5Lit5aSu5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1234567890123!5m2!1szh-TW!2stw"
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
                                    國立中央大學
                                </p>
                                <div className="space-y-1 text-secondary-600 dark:text-secondary-400 leading-relaxed text-base">
                                    <p>桃園市中壢區中大路300號</p>
                                    <p>國立中央大學 工程五館 B320 與 B321-1室</p>
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
                                    <p>03-422-7151</p>
                                    <p>分機 35353、35356</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
