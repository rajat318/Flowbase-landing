import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { timelineSteps } from '../../data/landingPageData';

export default function Timeline() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-slate-50 dark:bg-white/[0.03]">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="How it works"
          title="From audit to automation in four steps"
          description="Most teams go from signing up to their first live workflow the same day."
        />

        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-slate-200 dark:bg-white/10" />
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {timelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} direction="up" delay={i * 0.12} className="relative">
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 shadow-card grid place-items-center">
                      <Icon size={24} className="text-brand-500" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-500">{step.number}</span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
