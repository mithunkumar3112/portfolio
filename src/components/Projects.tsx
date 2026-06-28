import { Figma, Code, LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

type MediaBlock = {
  video?: string;
  image?: string;
};

type Project = {
  title: string;
  tools: string[];
  icon: LucideIcon;
  gradient: string;
  link?: string;
  video?: string;
  mockup?: string;
  mediaBlocks?: MediaBlock[];
  cover?: string;
};

export default function Projects() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const projects: Project[] = [
    {
      title: 'Laptop Monitoring & Remote Management System',
      tools: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'REST API', 'MongoDB', 'JWT Authentication'],
      link:'https://github.com/mithunkumar3112/iot.git',
      icon: Code,
      gradient: 'from-slate-900 to-slate-700',
        mediaBlocks: [
        {
          image: asset('projects/laptop.png'),
        },
      ],
    },
    {
      title: 'ATM Management System',
      tools: [ 'Java', 'MySql'],
      link: 'https://github.com/mithunkumar3112/ATM.git',
      icon: Code,
      gradient: 'from-slate-900 to-slate-700',
        mediaBlocks: [
        {
          image: asset('projects/atm.png'),
        },
      ],
    },
    {
      title: 'Workforce Analytics Dashboard',
      tools: [ 'Java', 'Spring Boot', 'React.js', 'MySQL', 'REST API'],
      link: 'https://github.com/mithunkumar3112/empolyee_dashboad.git',
      icon: Code,
      gradient: 'from-slate-900 to-slate-700',
        mediaBlocks: [
        {
          image: asset('projects/work.png'),
        },
      ],
    },
    {
      title: 'AI-Based Image Compression Tool',
      tools: [ 'Streamlit', 'Python', 'AI', 'REST API', 'Random Forest algorithm'],
      icon: Code,
      link:'#',
      gradient: 'from-slate-900 to-slate-700',
        mediaBlocks: [
        {
          image: asset('projects/image.png'),
        },
      ],
    },
    
    {
      title: 'Personal Portfolio Design Explorations',
      tools: ['HTML', 'CSS', 'JavaScript'],
      link:'https://github.com/mithunkumar3112/portfolio-mithun.git',
      icon: Figma,
      gradient: 'from-slate-900 to-slate-700',
      mediaBlocks: [
        {
          image: asset('projects/port.png'),
        },
      ],
    },
  ];

  return (
    <section id="projects" className="section-rhythm">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="section-title-line" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, featuring real-world applications and innovative solutions.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const bgImage = project.cover || project.mediaBlocks?.[0]?.image || asset('projects/projects.png');

            return (
              <Reveal key={idx} delay={idx * 80}>
                <div className="shine group relative w-full h-[240px] overflow-hidden rounded-2xl bg-slate-950 cursor-pointer shadow-lg shadow-cyan-950/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25 hover:ring-2 hover:ring-cyan-200">
                <img src={bgImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute left-4 top-4 rounded-full border border-cyan-200/30 bg-cyan-300/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  0{idx + 1}
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 p-4">
                  <h3 className="text-white text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3 justify-center px-4">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-2 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm ring-1 ring-white/30 group-hover:bg-white/30 group-hover:ring-white/60 transition-all duration-200">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 brand-button rounded-md font-semibold transition-all duration-200"
                      >
                        View Project
                      </a>
                    )}

                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>

    </section>
  );
}
