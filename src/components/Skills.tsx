export default function Skills() {
  const skills = [
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
    { name: 'Power BI', src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg', alt: 'Power BI', extraClass: 'filter invert bg-white' },
    { name: 'Excel', src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg', alt: 'Excel', extraClass: 'filter invert bg-white' },
    { name: 'Eclipse', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg', alt: 'Eclipse' },
    { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'Visual Studio Code', extraClass: 'ml-5' },
    { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub', extraClass: 'filter invert bg-white' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white">SKILLS</h4>
          <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, featuring real-world applications and innovative solutions.
          </p>
        </div>

        <div className="skill-show">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="skill group relative rounded-3xl transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute -inset-2 rounded-[2rem] bg-white opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true" />
                <div className="absolute -inset-0.5 rounded-[1.6rem] bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative z-10 overflow-hidden rounded-3xl bg-white dark:bg-black p-5 text-center shadow-lg border border-slate-200 dark:border-slate-700 transition-shadow duration-300 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: "url('/skill/skill.png')" }} aria-hidden="true" />

                  <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className={`h-14 w-14 object-contain filter grayscale brightness-150 contrast-125 ${skill.extraClass ?? ''}`}
                    />
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
