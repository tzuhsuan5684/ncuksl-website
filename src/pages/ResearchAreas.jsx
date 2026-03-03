export default function ResearchAreas() {
    return (
        <div className="section-padding bg-secondary-50 dark:bg-secondary-900 min-h-screen">
            <div className="container-custom">
                <header className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                        研究<span className="text-gradient">方向</span>
                    </h1>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
                        我們專注於四大核心領域，推動理論創新與實際應用，
                        <br className="hidden md:block" />
                        致力於解決真實世界的複雜問題。
                    </p>
                </header>

                <div className="space-y-20">
                    {/* Section 1: Language and Knowledge Processing */}
                    <section className="research-section relative">
                        <div className="flex flex-col md:flex-row items-start gap-12">
                            <div className="md:w-1/3 sticky top-24">
                                <div className="w-20 h-20 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 shadow-sm">
                                    <i className="fas fa-comments text-4xl"></i>
                                </div>
                                <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">語言和知識處理</h2>
                                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                                    結合語言學與計算機科學，讓機器具備理解、生成與推理人類語言的能力，並建構可解釋的知識系統。
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: '人工智慧', desc: '開發能夠模擬人類智能行為的演算法與模型。' },
                                    { title: '知識系統', desc: '建構、表示與應用領域知識，實現專家級的推理與決策。' },
                                    { title: '自然語言處理', desc: '使電腦能夠理解、解釋和生成人類語言。' },
                                    { title: '大型語言模型', desc: '研究並應用於最前沿的LLMs，探索其在各領域的潛力。' },
                                ].map((item, index) => (
                                    <div key={index} className="glass-card p-8 rounded-md border-l-4 border-l-purple-500">
                                        <h3 className="font-bold text-xl text-secondary-900 dark:text-white mb-3">{item.title}</h3>
                                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Data Analysis and Machine Learning */}
                    <section className="research-section relative">
                        <div className="flex flex-col md:flex-row-reverse items-start gap-12">
                            <div className="md:w-1/3 sticky top-24">
                                <div className="w-20 h-20 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 shadow-sm">
                                    <i className="fas fa-chart-line text-4xl"></i>
                                </div>
                                <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">數據分析和機器學習</h2>
                                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                                    從海量數據中挖掘價值，透過先進的機器學習演算法，實現數據驅動的決策與預測。
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: '機器學習', desc: '設計演算法讓系統能從數據中自動學習並改進。' },
                                    { title: '大數據', desc: '處理和分析大規模數據集，從中提取有價值的洞見。' },
                                    { title: '資料科學', desc: '整合統計、計算機科學和領域知識來解決複雜問題。' },
                                ].map((item, index) => (
                                    <div key={index} className="glass-card p-8 rounded-md border-l-4 border-l-green-500">
                                        <h3 className="font-bold text-xl text-secondary-900 dark:text-white mb-3">{item.title}</h3>
                                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
