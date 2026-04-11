import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="bg-dark text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title1')} <br /><span className="text-primary italic">{t('contact.title2')}</span></h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">{t('contact.desc')}</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary"><Mail /></div>
                                <div>
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{t('contact.email')}</p>
                                    <a href="mailto:temurbekreyimberdiyev@gmail.com" className="text-lg hover:text-primary transition-colors">temurbekreyimberdiyev@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary"><Phone /></div>
                                <div>
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{t('contact.phone')}</p>
                                    <a href="tel:+998959692112" className="text-lg hover:text-primary transition-colors">+998 95 969 21 12</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary"><Send /></div>
                                <div>
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{t('contact.telegram')}</p>
                                    <a href="https://t.me/temurbek21" className="text-lg hover:text-primary transition-colors">@temurbek21</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -z-10"></div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.form_title')}</h3>
                        <form className="space-y-4">
                            <div>
                                <input type="text" placeholder={t('contact.name')} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                            </div>
                            <div>
                                <input type="email" placeholder={t('contact.email_ph')} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                            </div>
                            <div>
                                <textarea rows="4" placeholder={t('contact.message')} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 active:scale-95">{t('contact.submit')}</button>
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('contact.rights')}</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://github.com/TemurbekReyimberdiyev" className="hover:text-white transition-colors">Github</a>
                        <a href="https://www.linkedin.com/in/temurbek-reyimberdiyev-a773b6343/" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://t.me/temurbek21" className="hover:text-white transition-colors">Telegram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
