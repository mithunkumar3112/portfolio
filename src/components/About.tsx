import { User, Target, Lightbulb } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <section id="about" className="section-rhythm">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            About Me
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 via-lime-400 to-rose-500"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer focused on building modern, scalable, and user-friendly applications.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left" className="space-y-6">
            <article className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-sky-400 to-lime-400 rounded-2xl opacity-20 blur-xl transition-all duration-500 group-hover:-inset-5 group-hover:opacity-55"></div>
              <div className="shine magnetic-card brand-surface relative overflow-hidden rounded-2xl border-2 border-sky-100 p-8 transition-all duration-500 group-hover:border-sky-300 group-hover:shadow-2xl group-hover:shadow-sky-500/20 dark:border-sky-300/20 dark:group-hover:border-sky-300/50">
                <img
                  src={asset('other/about-bg.avif')}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-sky-50/60 to-lime-50/50 transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/85 dark:via-indigo-950/40 dark:to-sky-950/35" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-lime-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative">
                  <User className="mb-4 text-sky-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-indigo-600 dark:text-sky-300 dark:group-hover:text-lime-200" size={40} />
                  <h3 className="text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-indigo-70  dark:text-white dark:group-hover:text-sky-100 mb-4">
                    Hello! I'm Mithun Kumar N
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Aspiring Java Full Stack Developer with hands-on experience building scalable web applications using
                    Spring Boot and React.js. Proficient in designing RESTful APIs, implementing JWT-based authentication,
                    and developing real-time monitoring systems. Experienced with MySQL and MongoDB databases. Eager to contribute to
                    backend and full-stack engineering in a growth-oriented organization.
                  </p>
                </div>
              </div>
            </article>

            <article className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-lime-400 via-amber-300 to-rose-500 rounded-2xl opacity-20 blur-xl transition-all duration-500 group-hover:-inset-5 group-hover:opacity-55"></div>
              <div className="shine magnetic-card brand-surface relative overflow-hidden rounded-2xl border-2 border-rose-100 p-8 transition-all duration-500 group-hover:border-rose-300 group-hover:shadow-2xl group-hover:shadow-rose-500/20 dark:border-rose-300/20 dark:group-hover:border-rose-300/50">
                <img
                  src={asset('other/about-bg.avif')}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-rose-50/55 to-amber-50/50 transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/85 dark:via-rose-950/35 dark:to-amber-950/30" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 via-amber-300 to-rose-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative">
                  <Target className="mb-4 text-rose-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-amber-600 dark:text-rose-300 dark:group-hover:text-amber-200" size={40} />
                  <h3 className="text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-rose-700 dark:text-white dark:group-hover:text-rose-100 mb-4">
                    My Focus
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Specializing in user-centered design, accessibility, and
                    performance-driven interfaces. I create intuitive designs that not only
                    look beautiful but also provide seamless user experiences across all
                    devices.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal direction="right" className="space-y-6">
            <article className="group shine magnetic-card brand-surface relative overflow-hidden rounded-2xl border border-indigo-200/80 p-8 shadow-xl transition-all duration-500 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/20 dark:border-indigo-300/20 dark:hover:border-indigo-300/50">
              <img
                src={asset('other/about-bg.avif')}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-65 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-indigo-50/60 to-sky-50/50 transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/85 dark:via-indigo-950/40 dark:to-sky-950/35" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 p-3 shadow-lg shadow-indigo-500/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-sky-400/30">
                  <Lightbulb className="text-slate-950 transition-transform duration-500 group-hover:scale-110" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                    Developer Philosophy
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Every line of code has a purpose. I believe in building
                     Java applications that are not only efficient and scalable but 
                    also solve real-world problems with precision and reliability.
                  </p>
                </div>
              </div>
            </article>

            <article className="group shine magnetic-card brand-surface relative overflow-hidden rounded-2xl border border-lime-200/80 p-8 shadow-xl transition-all duration-500 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-500/20 dark:border-lime-300/20 dark:hover:border-lime-300/50">
              <img
                src={asset('other/about-bg.avif')}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-65 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-lime-50/55 to-rose-50/45 transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/85 dark:via-lime-950/25 dark:to-rose-950/35" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-300 to-rose-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-gradient-to-br from-lime-300 to-rose-400 p-3 shadow-lg shadow-lime-400/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-rose-400/30">
                  <Lightbulb className="text-slate-950 transition-transform duration-500 group-hover:scale-110" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                    Development Approach
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Clean, maintainable code that brings designs to life. I focus on
                    responsive design, performance optimization, and implementing
                    delightful micro-interactions.
                  </p>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-2 gap-4">
              <article className="group magnetic-card brand-surface relative overflow-hidden rounded-xl border border-sky-200/80 p-6 text-center shadow-lg transition-all duration-500 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/20 dark:border-sky-300/20">
                <img
                  src={asset('other/score-bg.avif')}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-65 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-sky-50/70 transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/85 dark:to-sky-950/40" aria-hidden="true" />
                <div className="relative">
                  <div className="mb-2 bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-4xl font-bold text-transparent transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    5+
                  </div>
                  <div className="text-slate-900 dark:text-white font-bold">
                    Projects Completed
                  </div>
                </div>
              </article>
              <article className="group magnetic-card brand-surface relative overflow-hidden rounded-xl border border-rose-200/80 p-6 text-center shadow-lg transition-all duration-500 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/20 dark:border-rose-300/20">
                <img
                  src={asset('other/score-bg.avif')}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-65 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-rose-50/70 transition-opacity duration-500 group-hover:opacity-90 dark:from-slate-950/85 dark:to-rose-950/40" aria-hidden="true" />
                <div className="relative">
                  <div className="mb-2 bg-gradient-to-r from-lime-500 to-rose-500 bg-clip-text text-4xl font-bold text-transparent transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    80%
                  </div>
                  <div className="text-slate-900 dark:text-white font-bold">
                    Academic Score
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
