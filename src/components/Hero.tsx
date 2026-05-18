import { ArrowDown, Download, Briefcase } from 'lucide-react';

export default function Hero() {
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/other/about.png')" }} aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-slide-up">
              Hi, I'm{' '}
              <span className="text-black dark:text-white">
                Mithun Kumar N
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 animate-slide-up delay-100">
              Software Engineer | Java Developer
            </p>
          </div>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-slide-up delay-200">
            Passionate about creating interactive and responsive web applications with modern frontend and backend technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-white hover:text-gray-950 hover:shadow-2xl hover:shadow-white/40 hover:ring-2 hover:ring-white transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Briefcase size={20} />
              View Projects
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>

            {/* ✅ FIXED RESUME LINK */}
            <a
              href="/projects/Mithun_Kumar_N_Resume.docx"
              download
              className="px-8 py-4 bg-white dark:bg-black text-gray-900 dark:text-white rounded-full font-semibold shadow-lg hover:bg-white dark:hover:bg-white hover:text-gray-950 dark:hover:text-gray-950 hover:shadow-2xl hover:shadow-white/40 hover:ring-2 hover:ring-white transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700 dark:hover:border-white"
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
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
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
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
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
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
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
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
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
