import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, MapPin, Briefcase, Phone, GraduationCap, Globe, Building } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="w-full bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden shadow-xl border-4 border-gray-50 flex-shrink-0">
                            <img src="/profile.jpg" alt="Temurbek Reyimberdiyev" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {t('about.bio')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><User size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.name_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg">{t('about.name')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><Briefcase size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.role_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg">{t('about.role')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><Building size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.workplace_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg">{t('about.workplace')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><MapPin size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.location_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg">{t('about.location')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><GraduationCap size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.education_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg">{t('about.education')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><Globe size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.languages_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg">{t('about.languages')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-primary"><Phone size={22} /></div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('about.phone_label')}</p>
                                    <p className="font-bold text-gray-900 text-lg cursor-pointer hover:text-primary transition-colors">{t('about.phone')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Optional Download CV Button added automatically by translation format */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
