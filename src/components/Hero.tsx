import { ArrowDown, Briefcase, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
  const highlights = ['Spring Boot', 'React.js', 'REST APIs', 'MySQL'];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f8fbff] dark:bg-[#07111f]"
    >
      <img
        src={asset('other/about.avif')}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-50 scale-105"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(6,182,212,0.16),transparent_28rem),radial-gradient(circle_at_72%_68%,rgba(251,113,133,0.12),transparent_24rem)] dark:bg-[radial-gradient(circle_at_48%_18%,rgba(6,182,212,0.18),transparent_30rem),radial-gradient(circle_at_72%_68%,rgba(16,185,129,0.12),transparent_24rem)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-aurora" />
        <div className="absolute -bottom-44 -left-32 w-96 h-96 bg-rose-300/20 dark:bg-emerald-400/15 rounded-full blur-3xl animate-aurora delay-1000" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full border border-cyan-400/20 dark:border-cyan-200/15 animate-float animate-border-glow" />
        <div className="absolute right-8 top-1/3 hidden h-24 w-24 rounded-3xl border border-emerald-400/30 bg-emerald-200/20 backdrop-blur-md rotate-12 animate-float md:block" />
        <div className="absolute left-8 bottom-1/4 hidden h-16 w-16 rounded-full border border-rose-300/30 bg-rose-200/20 dark:bg-rose-300/10 animate-float delay-300 md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-950 dark:text-white animate-slide-up leading-tight">
              Hi, I'm{' '}
              <span className="brand-gradient-text">
                Mithun Kumar N
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-700 dark:text-cyan-100 animate-slide-up delay-100">
              Software Engineer | Java Developer
            </p>
          </div>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed animate-slide-up delay-200">
            Passionate about creating interactive and responsive web applications with modern frontend and backend technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-slide-up delay-200">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="brand-chip rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-300 dark:hover:text-slate-950"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <button
              onClick={scrollToProjects}
              className="shine px-8 py-4 bg-white/90 dark:bg-slate-950/80 text-slate-950 dark:text-white rounded-full font-semibold shadow-lg shadow-cyan-950/10 hover:bg-cyan-50 dark:hover:bg-cyan-300 hover:text-slate-950 hover:shadow-2xl hover:shadow-cyan-400/30 hover:ring-2 hover:ring-cyan-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border-2 border-cyan-100 dark:border-cyan-300/20 group"
            >
              <Briefcase size={20} />
              View Projects
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>

            <a
              href={asset('projects/Mithun_Kumar_N_Resume.docx')}
              download
              className="shine px-8 py-4 bg-white/90 dark:bg-slate-950/80 text-slate-950 dark:text-white rounded-full font-semibold shadow-lg shadow-cyan-950/10 hover:bg-cyan-50 dark:hover:bg-cyan-300 hover:text-slate-950 hover:shadow-2xl hover:shadow-cyan-400/30 hover:ring-2 hover:ring-cyan-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border-2 border-cyan-100 dark:border-cyan-300/20"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 animate-slide-up delay-400">
            <a
              href="https://www.linkedin.com/in/mithunkumar3112/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-300 transform hover:scale-110 hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://github.com/mithunkumar3112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-300 transform hover:scale-110 hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <span
                className="block w-8 h-8 bg-current"
                style={{
                  WebkitMask: "url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg') center / contain no-repeat",
                  mask: "url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg') center / contain no-repeat",
                }}
              />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=itsmithunkumar31@gmail.com"
              className="text-slate-500 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-300 transform hover:scale-110 hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/MithunKumar3112/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-300 transform hover:scale-110 hover:-translate-y-1 transition-all"
              aria-label="LeetCode"
            >
              <span
                className="block w-8 h-8 bg-current"
                style={{
                  WebkitMask: "url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg') center / contain no-repeat",
                  mask: "url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg') center / contain no-repeat",
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400 dark:text-gray-600" size={32} />
      </div>
    </section>
  );
}
