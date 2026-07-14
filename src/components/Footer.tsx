import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.12),transparent_28rem)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2 justify-center md:justify-start">
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/mithunkumar3112/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/mithunkumar3112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:itsmithunkumar31@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/MithunKumar3112/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-100 transform hover:scale-110 transition-all"
              aria-label="LeetCode"
            >
              <Code2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
