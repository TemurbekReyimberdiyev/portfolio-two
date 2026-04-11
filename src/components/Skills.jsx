import React from 'react';
import { useTranslation } from 'react-i18next';

const SkillCard = ({ title, bg, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex items-center gap-4">
        <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    </div>
);

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="w-full bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('skills.title')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t('skills.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCard title="Python" bg="bg-blue-100 text-blue-600" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" />} />
                    <SkillCard title="Django Framework" bg="bg-green-100 text-green-700" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="w-8 h-8" alt="Django" />} />
                    <SkillCard title="FastAPI" bg="bg-teal-100 text-teal-600" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" className="w-8 h-8" alt="FastAPI" />} />
                    <SkillCard title="PostgreSQL" bg="bg-blue-100 text-blue-800" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-8 h-8" alt="PostgreSQL" />} />
                    <SkillCard title="Docker" bg="bg-blue-100 text-blue-500" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-8 h-8" alt="Docker" />} />
                    <SkillCard title="Git & GitHub" bg="bg-gray-200 text-gray-800" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-8 h-8" alt="Git" />} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
