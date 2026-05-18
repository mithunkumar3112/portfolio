import { User, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
          <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer focused on building modern, scalable, and user-friendly applications.
          </p>
          <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900/20 dark:to-slate-800/20 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/other/aa.jpg')" }} aria-hidden="true" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" aria-hidden="true" />
                <div className="relative">
                  <User className="text-slate-900 dark:text-white mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Hello! I'm Mithun Kumar N                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Aspiring Java Full Stack Developer with hands-on experience building scalable web applications using
                   Spring Boot and React.js. Proficient in designing RESTful APIs, implementing JWT-based authentication,
                    and developing real-time monitoring systems. Experienced with MySQL and MongoDB databases. Eager to contribute to
                     backend and full-stack engineering in a growth-oriented organization.
                </p>
              </div>              </div>            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900/20 dark:to-slate-800/20 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/other/aa.jpg')" }} aria-hidden="true" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" aria-hidden="true" />
                <div className="relative">
                  <Target className="text-slate-900 dark:text-white mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
          </div>
        </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-xl">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('/other/aa.jpg')" }} aria-hidden="true" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" aria-hidden="true" />
              <div className="relative flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Developer Philosophy
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Every line of code has a purpose. I believe in building
                     Java applications that are not only efficient and scalable but 
                    also solve real-world problems with precision and reliability.
                  </p>
                </div>
              </div>
            </div>
             <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-xl">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('/other/aa.jpg')" }} aria-hidden="true" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" aria-hidden="true" />
              <div className="relative flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Development Approach
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Clean, maintainable code that brings designs to life. I focus on
                    responsive design, performance optimization, and implementing
                    delightful micro-interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl p-6 shadow-lg text-center bg-white dark:bg-black">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('/other/a.jpg')" }} aria-hidden="true" />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20" aria-hidden="true" />
                <div className="relative">
                  <div className="text-4xl font-bold text-slate-950 dark:text-white mb-2">
                    5+
                  </div>
                  <div className="text-slate-900 dark:text-white font-bold">
                    Projects Completed
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl p-6 shadow-lg text-center bg-white dark:bg-black">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" style={{ backgroundImage: "url('/other/a.jpg')" }} aria-hidden="true" />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20" aria-hidden="true" />
                <div className="relative">
                  <div className="text-4xl font-bold text-slate-950 dark:text-white mb-2">
                    80%
                  </div>
                  <div className="text-slate-900 dark:text-white font-bold">
                    Academic Score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
