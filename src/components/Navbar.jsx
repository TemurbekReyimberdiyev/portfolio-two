import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const links = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.projects'), href: '#projects' }
    ];

    return (
        <nav className="sticky top-0 w-full bg-white z-50 py-4 px-6 md:px-12 shadow-sm border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded border-2 border-primary flex items-center justify-center text-white font-bold text-lg">T</div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">Reyimberdiyev</span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                {links.map((link) => (
                    <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <select
                    onChange={changeLanguage}
                    defaultValue={i18n.language}
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm font-bold uppercase rounded-lg focus:ring-primary focus:border-primary block p-2 cursor-pointer outline-none"
                >
                    <option value="uz">Uzbek</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
                <a href="#contact" className="hidden sm:inline-block px-6 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                    {t('nav.contact')}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
