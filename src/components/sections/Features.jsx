import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { features } from '../../data/landingPageData';

function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <ScrollReveal direction="up" delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group h-full p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-card hover:shadow-soft hover:border-brand-200 dark:hover:border-brand-400/30 transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 grid place-items-center mb-5 group-hover:bg-brand-500 transition-colors duration-300">
          <Icon
            size={22}
            className="text-brand-500 group-hover:text-white transition-colors duration-300"
          />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to eliminate busywork"
          description="Flowbase brings automation, integrations, and analytics together in one place, built for teams who'd rather ship than shuffle tickets."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} index={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
