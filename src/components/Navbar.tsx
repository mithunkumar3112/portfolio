import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const getNavHoverClass = (id: string) =>
    id === 'contact'
      ? 'text-gray-300 hover:bg-white hover:text-slate-950 hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white/30'
      : 'text-gray-300 hover:bg-gray-800';

  const activeNavClass = 'bg-white text-slate-950 ring-2 ring-white shadow-lg shadow-white/30';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#07111f]/85 backdrop-blur-xl shadow-lg shadow-cyan-950/10 dark:shadow-cyan-300/5 border-b border-cyan-400/10 dark:border-cyan-300/10'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="brand-gradient-text text-2xl font-bold"
            aria-label="Mithun Kumar N - Portfolio Home"
          >
            MITHUN KUMAR N
          </button>

          <div className="hidden md:flex items-center space-x-1" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? activeNavClass
                    : getNavHoverClass(item.id)
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="md:hidden bg-white/95 dark:bg-[#07111f]/95 backdrop-blur-xl border-t border-cyan-400/10 dark:border-cyan-300/10 animate-slide-up"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? activeNavClass
                    : getNavHoverClass(item.id)
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
