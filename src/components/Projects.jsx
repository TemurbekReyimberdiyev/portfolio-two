import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, stack, link, sourceCodeText }) => (
    <div className="bg-gray-50 rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full">
        <div className="p-8 flex-1">
            <div className="mb-6 flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
                        {tech}
                    </span>
                ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
        <div className="bg-white border-t border-gray-100 p-6 flex items-center justify-between mt-auto">
            <a href={link} className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg> {sourceCodeText}
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <ExternalLink size={18} />
            </a>
        </div>
    </div>
);

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('projects.p1_title'),
            desc: t('projects.p1_desc'),
            stack: ["Django Rest Framework", "PostgreSQL", "Celery", "Redis"],
            link: "https://github.com/TemurbekReyimberdiyev"
        },
        {
            title: t('projects.p2_title'),
            desc: t('projects.p2_desc'),
            stack: ["Python", "Aiogram 3", "SQLAlchemy", "Alembic"],
            link: "https://github.com/TemurbekReyimberdiyev"
        },
        {
            title: t('projects.p3_title'),
            desc: t('projects.p3_desc'),
            stack: ["FastAPI", "BeautifulSoup4", "WebSockets", "MongoDB"],
            link: "https://github.com/TemurbekReyimberdiyev"
        }
    ];

    return (
        <section id="projects" className="w-full bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
                        <p className="text-gray-600 text-lg max-w-xl">{t('projects.subtitle')}</p>
                    </div>
                    <a href="https://github.com/TemurbekReyimberdiyev" className="text-primary font-bold hover:underline">{t('projects.view_all')}</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} {...proj} sourceCodeText={t('projects.source_code')} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
