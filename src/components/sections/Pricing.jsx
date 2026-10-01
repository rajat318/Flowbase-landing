import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { pricingPlans } from '../../data/landingPageData';

function PricingCard({ plan, index }) {
  return (
    <ScrollReveal direction="up" delay={index * 0.1} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`relative h-full flex flex-col p-8 rounded-2xl border ${
          plan.highlighted
            ? 'border-brand-500 bg-brand-500 text-white shadow-soft lg:scale-105'
            : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5'
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-brand-600 text-xs font-bold uppercase tracking-wide">
            Most popular
          </span>
        )}

        <h3 className={`text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm mt-1 ${plan.highlighted ? 'text-brand-100' : 'text-slate-500 dark:text-slate-400'}`}>
          {plan.description}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            {plan.price}
          </span>
          <span className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-slate-500 dark:text-slate-400'}`}>
            / {plan.period}
          </span>
        </div>

        <ul className="mt-8 space-y-3 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-white' : 'text-brand-500'}`} />
              <span className={plan.highlighted ? 'text-brand-50' : 'text-slate-600 dark:text-slate-300'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          variant={plan.highlighted ? 'secondary' : 'primary'}
          className="w-full mt-8"
        >
          {plan.cta}
        </Button>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-slate-50 dark:bg-white/[0.03]">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your team"
          description="Start free. Upgrade when you need more workflows, more people, or more control."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 items-stretch">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
