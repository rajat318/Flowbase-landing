import { Workflow, Globe, GitFork, Link2 } from 'lucide-react';
import { footerLinks } from '../../data/landingPageData';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/10">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand-500 text-white">
                <Workflow size={18} strokeWidth={2.5} />
              </span>
              Flowbase
            </a>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Automate the busywork so your team can focus on the work that matters.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Globe, GitFork, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1 md:col-span-1">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Flowbase, Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
