import React from 'react';
import { useTranslation } from 'react-i18next';
import { Database, Server } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="px-4 md:px-8 py-8 w-full max-w-7xl mx-auto">
            <div className="bg-dark rounded-[32px] overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

                <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16 lg:p-24 relative z-10">
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary uppercase text-sm font-bold tracking-wider rounded-full mb-6">
                            {t('hero.tag')}
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {t('hero.title1')} <span className="text-primary italic">{t('hero.title_mid')}</span> <br />
                            {t('hero.title2')}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
                            {t('hero.bio')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/25">
                                {t('hero.view_projects')}
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/10">
                                {t('hero.contact_me')}
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0">
                        <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden animate-pulse-slow">
                            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-gray-400 text-xs ml-4 font-mono">main.py</span>
                            </div>
                            <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                                <p><span className="text-pink-500">from</span> fastapi <span className="text-pink-500">import</span> FastAPI</p>
                                <p className="mt-2 text-green-400"># Tizimni ishga tushirish</p>
                                <p>app = FastAPI()</p>
                                <p className="mt-4"><span className="text-blue-400">@app.get</span>(<span className="text-yellow-300">"/"</span>)</p>
                                <p><span className="text-pink-500">async def</span> <span className="text-blue-400">root</span>():</p>
                                <p className="pl-4"><span className="text-pink-500">return</span> &#123;<span className="text-yellow-300">"message"</span>: <span className="text-yellow-300">"Salom Dunyo!"</span>&#125;</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce shadow-primary/20">
                            <div className="bg-orange-100 p-2 rounded-lg text-primary"><Database size={24} /></div>
                            <div><p className="text-gray-900 font-bold text-sm">PostgreSQL</p></div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce delay-150 text-gray-900">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Server size={24} /></div>
                            <div><p className="text-gray-900 font-bold text-sm">FastAPI</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
