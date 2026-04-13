import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            company: "ITPark Xorazm",
            role: "IT mentor",
            period: t('experience.itpark_period'),
            logo: "https://ui-avatars.com/api/?name=IT&background=8bc34a&color=fff&rounded=true&font-size=0.5"
        }
    ];

    return (
        <section id="experience" className="w-full bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('experience.title')}</h2>
                    <p className="text-gray-600 text-lg max-w-xl">{t('experience.subtitle_experience') || ""}</p>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="mb-10 ml-8 md:ml-12 relative group">
                            <div className="absolute -left-10 md:-left-14 top-0 w-12 h-12 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-primary/30 transition-colors">
                                <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
                            </div>
                            <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                                <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
                                <p className="text-sm text-gray-500">{exp.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
