import { useState } from 'react';
import { BarChart3, Coffee, Monitor, Terminal } from 'lucide-react';
import Reveal from './Reveal';

export default function Certifications() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  const certifications = [
    {
      title: 'Joy of Computing Using Python',
      issuer: 'NPTEL',
      description: 'Built a strong foundation in Python programming through problem-solving, logic building, and computational thinking.',
      icon: Terminal,
      color: 'blue',
      image: asset('Certifications/PYTHON NPTEL.avif'),
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      description: 'Learned object-oriented programming concepts, Java fundamentals, and application development using Java.',
      icon: Coffee,
      color: 'blue',
      image: asset('Certifications/Programming In Java.avif'),
    },
    {
      title: 'Java Core for Beginners',
      issuer: 'Udemy',
      description: 'Gained hands-on experience with core Java concepts including classes, inheritance, collections, and exception handling.',
      icon: Coffee,
      color: 'blue',
      image: asset('Certifications/Udemy.avif'),
    },
    {
      title: 'Web Development Intern',
      issuer: 'Codsoft',
      description: 'Worked as a Web Development Intern, developing responsive web applications using HTML, CSS, JavaScript, and frontend-backend integration.',
      icon: Monitor,
      color: 'cyan',
      image: asset('Certifications/CodSoft.avif'),
    },
    {
      title: 'Data Analytics and Data Science Internship',
      issuer: 'InternPe',
      description: 'Hands-on experience gaining hands-on experience in data preprocessing, visualization, and model building using Java and Excel.',
      icon: BarChart3,
      color: 'teal',
      image: asset('Certifications/Mithun kumar N - Data analyst & science .avif'),
    },

  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-slate-900 to-slate-700',
        bg: 'bg-slate-100 dark:bg-slate-900/20',
        text: 'text-slate-900',
      },
      cyan: {
        gradient: 'from-slate-900 to-slate-700',
        bg: 'bg-slate-100 dark:bg-slate-900/20',
        text: 'text-slate-900',
      },
      teal: {
        gradient: 'from-slate-900 to-slate-700',
        bg: 'bg-slate-100 dark:bg-slate-900/20',
        text: 'text-slate-900',
      },
      green: {
        gradient: 'from-slate-900 to-slate-700',
        bg: 'bg-slate-100 dark:bg-slate-900/20',
        text: 'text-slate-900',
      },
    };
    return colors[color as keyof typeof colors];
  }

  return (
    <section id="certifications" className="section-rhythm">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="section-title-line"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognized certifications and achievements that strengthen my technical expertise.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const colorClasses = getColorClasses(cert.color);

            return (
              <Reveal
                key={idx}
                delay={idx * 85}
              >
              <article
                onClick={() => openModal(cert.image)}
                className="shine group relative w-full h-[250px] rounded-3xl shadow-lg shadow-cyan-950/10 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 border-2 border-cyan-100 dark:border-cyan-300/15 hover:border-cyan-200 hover:ring-2 hover:ring-cyan-200 hover:-translate-y-2 overflow-hidden cursor-pointer bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url('${asset('Certifications/cert.avif')}')`, backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(cert.image);
                  }
                }}
                aria-label={`View ${cert.title} certification`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.95)_100%)]" />

                <div className="absolute left-4 bottom-4">
                  <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 max-w-[60%]">
                    <div className="rounded-3xl bg-black/30 p-4 backdrop-blur-sm">
                      <div className="flex flex-col items-start gap-3">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${colorClasses.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                        >
                          <Icon className="text-white" size={24} />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                            {cert.title}
                          </h3>
                          <p className="text-sm font-bold text-slate-100">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6">
                  <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[calc(100%-3rem)]">
                    <div className="rounded-3xl bg-white/95 dark:bg-white/95 p-5 shadow-xl shadow-white/20 backdrop-blur-sm border border-white/80 group-hover:shadow-2xl group-hover:shadow-white/40 transition-all duration-300">
                      <p className="text-center text-gray-900 leading-relaxed font-semibold">
                        {cert.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Icon className={colorClasses.text} size={18} />
                          <span className="text-sm font-semibold text-gray-700">
                            Verified Certification
                          </span>
                        </div>
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-sm font-bold shadow-lg group-hover:bg-cyan-300 group-hover:ring-2 group-hover:ring-cyan-200 transition-all duration-200">
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 rounded-lg hover:bg-white dark:hover:bg-white hover:text-gray-950 hover:shadow-2xl hover:shadow-white/40 hover:ring-2 hover:ring-white transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
