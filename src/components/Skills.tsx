import Reveal from './Reveal';

function SkillIcon({ name, className }: { name: string; className?: string }) {
  const commonClass = `h-14 w-14 object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${className ?? ''}`;

  switch (name) {
    case 'HTML':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#E34F26" d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0Z" />
          <path fill="#EF652A" d="M12 2.2v19.6l6.8-2 1.4-15.6H12Z" />
          <path fill="#FFF" d="M12 6.7 8.6 13h3.4v2.2H7.5l.4 1.7 4.1 1.4 4.1-1.4.5-2.2H12v-2.2h3.4l1.1-4.4H12Z" />
        </svg>
      );
    case 'CSS':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#1572B6" d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0Z" />
          <path fill="#33A9DC" d="M12 2.2v19.6l6.8-2 1.4-15.6H12Z" />
          <path fill="#FFF" d="M7.8 6.8h8.4l-.3 2.2H10l.2 2.2h5.5l-.4 3.5-3.5 1.1-3.4-1.1-.2-1.7H7.4l.4 3.7 5.8 2 5.8-2 .8-7.5H7.8Z" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#F7DF1E" d="M0 0h24v24H0Z" />
          <path d="M12 10.8c0-1.3.8-2.3 2.2-2.3 1.4 0 2 .8 2.3 1.7l2-1.1c-.8-1.7-2.2-2.8-4.3-2.8-2.8 0-4.7 1.8-4.7 4.4 0 3.5 3.1 4.3 4.5 4.8 1.2.4 1.9.8 1.9 1.6 0 .8-.7 1.2-1.7 1.2-1.3 0-2-.5-2.4-1.5l-2.1 1.2c.8 1.8 2.1 2.7 4.6 2.7 2.8 0 4.8-1.6 4.8-4.3 0-3.4-3-4.3-4.4-4.8-1.2-.4-1.8-.8-1.8-1.5 0-.7.6-1.1 1.6-1.1Z" fill="#000" />
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <circle cx="12" cy="12" r="2.75" fill="#61DAFB" />
          <path d="M12 2.2c-2.8 0-5.2 2.3-5.2 5.2 0 1.4.6 2.7 1.7 3.6 1.1.9 2.5 1.3 3.8 1.3 1.3 0 2.6-.4 3.8-1.3 1.1-.9 1.7-2.2 1.7-3.6 0-2.9-2.4-5.2-5.2-5.2Zm0 9.7c-2.8 0-5.2 2.3-5.2 5.2 0 1.4.6 2.7 1.7 3.6 1.1.9 2.5 1.3 3.8 1.3 1.3 0 2.6-.4 3.8-1.3 1.1-.9 1.7-2.2 1.7-3.6 0-2.9-2.4-5.2-5.2-5.2Zm-7.1-3c-.6 0-1.2.3-1.6.8-.9.9-1 2.3-.2 3.3.7.8 1.8 1.1 2.8.9.9-.2 1.7-.8 2.2-1.6.5-.8.5-1.7.1-2.5-.4-.7-1.1-1.2-1.9-1.3-.4 0-.8-.1-1.4-.6Z" fill="#61DAFB" />
          <path d="M19.3 10.8c-.6 0-1.2.3-1.6.8-.9.9-1 2.3-.2 3.3.7.8 1.8 1.1 2.8.9.9-.2 1.7-.8 2.2-1.6.5-.8.5-1.7.1-2.5-.4-.7-1.1-1.2-1.9-1.3-.4 0-.8-.1-1.4-.6Z" fill="#61DAFB" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#4479A1" d="M7.4 2.2c-1.1 0-2.2.2-3.2.6C2.7 3.5 1.9 4.4 1.4 5.5c-.5 1.2-.7 2.5-.7 3.8v4.4c0 1.4.2 2.6.7 3.8.5 1.1 1.3 2 2.8 2.8 1 .4 2.1.6 3.2.6h9.2c1.1 0 2.2-.2 3.2-.6 1.5-.8 2.3-1.7 2.8-2.8.5-1.2.7-2.4.7-3.8V9.3c0-1.4-.2-2.6-.7-3.8-.5-1.1-1.3-2-2.8-2.8-1-.4-2.1-.6-3.2-.6H7.4Z" />
          <path fill="#fff" d="M8 6.3h8c.8 0 1.4.6 1.4 1.4v7.8c0 .8-.6 1.4-1.4 1.4H8c-.8 0-1.4-.6-1.4-1.4V7.7C6.6 6.9 7.2 6.3 8 6.3Zm1.5 2.1v6.1h5.1V8.4h-5.1Z" />
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#ED8B00" d="M4.8 3.2h14.4v17.6H4.8z" />
          <path fill="#fff" d="M7.4 6.1c.3-.2.7-.4 1.2-.4 1.1 0 2 .4 2.8 1.3.5.5.8 1.1.8 1.8 0 1.2-.7 2.2-1.8 2.9l1.8 2.5H9.8l-1.2-1.9c-.2 0-.4 0-.6.1-.5.1-.8.3-1 .5-.2.2-.3.5-.3.8 0 .3.1.6.3.8.2.2.6.4 1.2.4h1.3v1.8H8.4c-1.1 0-2-.3-2.7-1-.7-.6-1-1.3-1-2.1 0-.8.3-1.5.9-2 .5-.4 1.1-.7 1.8-.8L5.7 8.5c-.5-.6-.8-1.3-.9-2.1.1-.8.3-1.5.8-2.1.3-.3.6-.5 1-.6Z" />
        </svg>
      );
    case 'Spring Boot':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#6DB33F" d="M12 2c-1.8 0-3.5.5-4.9 1.4C5.3 4.7 4.2 6.2 3.6 8c-.6 1.8-.5 3.6.2 5.3.7 1.7 2 3 3.6 3.9 1.7.9 3.6 1.3 5.5 1 1.8-.3 3.4-1.1 4.7-2.4 1.3-1.4 2.1-3.2 2.2-5 .1-1.9-.4-3.7-1.3-5.2-.9-1.5-2.2-2.7-3.8-3.4C14.4 2.3 13.2 2 12 2Z" />
          <path fill="#fff" d="M8.7 8.1c.5-.8 1.2-1.4 2-1.8.7-.3 1.5-.4 2.4-.4 1.3 0 2.4.3 3.2.9.8.6 1.3 1.4 1.5 2.3.2.9-.1 1.8-.6 2.5-.6.9-1.5 1.4-2.6 1.7-.9.2-1.9.2-2.8 0-.7-.2-1.3-.5-1.8-.9-.5-.4-.9-.9-1.2-1.4-.3-.5-.4-1-.3-1.5.1-.5.4-1 .8-1.2Z" />
        </svg>
      );
    case 'Power BI':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#F2C811" d="M4 3h6v18H4z" />
          <path fill="#F2C811" d="M10 7h6v14h-6z" />
          <path fill="#F2C811" d="M16 11h4v10h-4z" />
        </svg>
      );
    case 'Excel':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#217346" d="M5 3h10l4 4v14H5z" />
          <path fill="#fff" d="M8.5 8.4h2.2l1.6 2.4 1.6-2.4h2.2l-2.4 3.4 2.6 3.8h-2.2l-1.8-2.7-1.8 2.7H7.6l2.6-3.8-2.7-3.4Z" />
        </svg>
      );
    case 'Eclipse':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#2C2255" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Zm0 3.2c-3.8 0-6.8 3.1-6.8 6.8 0 3.8 3.1 6.8 6.8 6.8 2.2 0 4.2-1.1 5.4-2.8-.8.2-1.6.3-2.4.3-3.2 0-5.8-2.6-5.8-5.8 0-.8.1-1.6.3-2.3A6.8 6.8 0 0 0 12 5.2Z" />
        </svg>
      );
    case 'VS Code':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#007ACC" d="M17 2 7.9 10.6 4.4 7.8 2 8.9l3.7 3.1L2 15.1l2.4 1.1 3.5-2.8L17 22l5-2.2V4.2L17 2Zm0 4.6v10.8l-6.2-5.4 6.2-5.4Z" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <path fill="#181717" d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 7 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.2-.3-4.6-1.2-4.6-5.2 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1 0 0 1 .3 2.6 1.2 1-.3 2.1-.4 3.2-.4 1.1 0 2.2.1 3.2.4 1.6-.9 2.6-1.2 2.6-1.2.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4-2.4 4.9-4.6 5.2.4.3.7.9.7 1.8v2.6c0 .3.2.7.7.5 4.1-1.3 7-5.1 7-9.6C22 6.6 17.5 2 12 2Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={commonClass} aria-hidden="true" role="img">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
      );
  }
}

export default function Skills() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const skills = [
    { name: 'HTML', alt: 'HTML' },
    { name: 'CSS', alt: 'CSS' },
    { name: 'JavaScript', alt: 'JavaScript' },
    { name: 'React', alt: 'React' },
    { name: 'MySQL', alt: 'MySQL' },
    { name: 'Java', alt: 'Java' },
    { name: 'Spring Boot', alt: 'Spring Boot' },
    { name: 'Power BI', alt: 'Power BI', extraClass: 'filter invert bg-white' },
    { name: 'Excel', alt: 'Excel', extraClass: 'filter invert bg-white' },
    { name: 'Eclipse', alt: 'Eclipse' },
    { name: 'VS Code', alt: 'Visual Studio Code', extraClass: 'ml-5' },
    { name: 'GitHub', alt: 'GitHub', extraClass: 'filter invert bg-white' },
  ];

  return (
    <section id="skills" className="section-rhythm">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-3 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="brand-gradient-text text-4xl sm:text-5xl font-bold">Skills</h2>
          <div className="section-title-line"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical proficiencies and tools I work with.
          </p>
        </Reveal>

        <div className="skill-show">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <Reveal key={index} delay={index * 55} className="skill group relative rounded-3xl transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute -inset-2 rounded-[2rem] bg-white opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true" />
                <div className="absolute -inset-0.5 rounded-[1.6rem] bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <article className="shine brand-surface relative z-10 overflow-hidden rounded-3xl p-5 text-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.03]">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: `url('${asset('skill/skill.avif')}')` }} aria-hidden="true" />
                  <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/40" aria-hidden="true" />

                  <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                    <div className={`filter grayscale brightness-150 contrast-125 ${skill.extraClass ?? ''}`}>
                      <SkillIcon name={skill.name} className="h-14 w-14" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{skill.name}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
