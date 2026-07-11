import Reveal from './Reveal';

export default function Education() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const education = [
    {
      degree: 'B.E Computer Science Engineering',
      institution: 'Velammal Institute of Technology',
      year: '2022 - 2026',
      score: '80.1%',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'A.K.T Academy Matric Higher Secondary School',
      year: '2020 - 2022',
      score: '84.6%',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'A.K.T Academy Matric Higher Secondary School',
      year: '2019 - 2020',
      score: '73.4%',
    },
  ];

  return (
    <section id="education" className="section-rhythm">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            Education
          </h2>
          <div className="section-title-line"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           My academic journey, highlighting my learning, growth, and technical foundation.
          </p>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-rose-400">
          </div>
          {education.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <Reveal
                key={idx}
                delay={idx * 110}
                direction={isLeft ? 'left' : 'right'}
                className={
                  'relative mb-12 ' + (isLeft ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto') + ' md:w-1/2'
                }
              >
                <div
                  className={
                    'flex items-start gap-6 md:gap-8 ' + (isLeft ? 'md:flex-row' : 'md:flex-row-reverse')
                  }
                >
                  <article className="w-full">
                    <div
                      className={
                        'shine group brand-surface relative overflow-hidden rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-cyan-200 dark:hover:border-cyan-300/30 hover:ring-2 hover:ring-cyan-200 hover:-translate-y-1 ' +
                        (isLeft ? 'md:mr-16' : 'md:ml-16')
                      }
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${asset('education/edu.avif')}')` }}
                        aria-hidden="true"
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-white">
                            {item.degree}
                          </h3>
                          <span className="px-3 py-1 text-sm font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 rounded-full" aria-label={`Score: ${item.score}`}>
                            {item.score}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-slate-200 group-hover:text-slate-100 mb-2 font-bold transition-colors">
                          {item.institution}
                        </p>
                        <time className="text-gray-500 dark:text-gray-500 group-hover:text-gray-700 text-sm transition-colors">
                          {item.year}
                        </time>
                      </div>
                    </div>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
