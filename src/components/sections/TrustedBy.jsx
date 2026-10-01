import ScrollReveal from '../common/ScrollReveal';
import { trustedLogos } from '../../data/landingPageData';

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-slate-100 dark:border-white/10">
      <div className="container-max section-padding">
        <ScrollReveal direction="fade" className="text-center text-sm font-medium text-slate-400 dark:text-slate-500 mb-8">
          Trusted by fast-moving teams at
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustedLogos.map((name, i) => (
            <ScrollReveal
              key={name}
              direction="fade"
              delay={i * 0.05}
              className="text-xl font-bold text-slate-300 dark:text-slate-600 tracking-tight select-none"
            >
              {name}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
