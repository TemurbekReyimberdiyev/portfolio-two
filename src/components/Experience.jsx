import React from 'react';
import { useTranslation } from 'react-i18next';

// Inline SVG matching the ITPark Khorezm logo exactly to look sharp and perfectly sized
const ITParkLogo = () => (
    <svg width="200" height="56" viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14">
        {/* Leaf/Shield Background */}
        <path d="M30 2C47 2 59 18 55 36C51 54 9 54 5 36C1 18 13 2 30 2Z" fill="#7CB342"/>
        {/* Person Head */}
        <circle cx="30" cy="15" r="4.5" fill="white"/>
        {/* Person Arms */}
        <path d="M15 24 L30 29 L45 24" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Person Torso */}
        <path d="M30 29 L30 54" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
        {/* Person Hands */}
        <circle cx="15" cy="24" r="3.5" fill="white"/>
        <circle cx="45" cy="24" r="3.5" fill="white"/>

        {/* Text Area */}
        <text x="68" y="26" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" fontWeight="800" fontSize="24" fill="#333333" letterSpacing="0.02em">IT PARK</text>
        <rect x="68" y="32" width="100" height="20" rx="4" fill="#7CB342"/>
        <text x="76" y="47" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" fontWeight="600" fontSize="13" fill="#ffffff" letterSpacing="0.08em">KHOREZM</text>
    </svg>
);

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            company: "ITPark Xorazm",
            role: "IT mentor",
            period: t('experience.itpark_period'),
            logoComponent: <ITParkLogo />
        }
    ];

    return (
        <section id="experience" className="w-full bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('experience.title')}</h2>
                    <p className="text-gray-600 text-lg max-w-xl">{t('experience.subtitle_experience') || ""}</p>
                </div>

                <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12 pb-4">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative ml-6 md:ml-12 group">
                            {/* Sleek Timeline Dot */}
                            <div className="absolute -left-[33px] md:-left-[57px] top-8 w-4 h-4 rounded-full bg-white border-[3px] border-primary group-hover:bg-primary transition-colors shadow-sm"></div>
                            
                            {/* Responsive Content Card */}
                            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-2">
                                    <div className="order-2 sm:order-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                                        <h4 className="text-lg text-primary font-bold mb-3">{exp.company}</h4>
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                            {exp.period}
                                        </div>
                                    </div>
                                    <div className="order-1 sm:order-2 self-start flex-shrink-0 bg-white sm:bg-gray-50/50 sm:px-4 sm:py-3 sm:rounded-xl sm:border border-gray-100/50">
                                        {exp.logoComponent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
