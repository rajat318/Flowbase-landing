import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yShapeOne = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yShapeTwo = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yMockup = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Decorative parallax shapes */}
      <motion.div
        style={{ y: yShapeOne }}
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-200/50 dark:bg-brand-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: yShapeTwo }}
        className="pointer-events-none absolute top-40 -right-16 w-80 h-80 rounded-full bg-brand-300/40 dark:bg-brand-400/10 blur-3xl"
      />

      <div className="container-max section-padding relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-white/5 border border-brand-100 dark:border-white/10 text-sm font-medium text-brand-700 dark:text-brand-300"
          >
            <Sparkles size={14} />
            Now with AI-assisted workflow suggestions
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Automate your team's
            <span className="block text-brand-500">workflow, end to end.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl"
          >
            Flowbase connects the tools your team already uses and automates the
            repetitive work between them — so nothing falls through the cracks.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button size="lg" as="a" href="#pricing">
              Start free trial
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" as="a" href="#process">
              See how it works
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 pt-2"
          >
            <CheckCircle2 size={16} className="text-brand-500" />
            No credit card required · 14-day free trial
          </motion.div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          style={{ y: yMockup }}
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 lg:mt-20 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-soft overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="p-6 lg:p-10 grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                  className={`h-20 sm:h-28 rounded-xl bg-gradient-to-br ${
                    i % 3 === 0
                      ? 'from-brand-400 to-brand-600'
                      : 'from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5'
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex absolute -right-6 -top-6 items-center gap-2 rounded-xl bg-white dark:bg-slate-800 shadow-soft px-4 py-3 border border-slate-100 dark:border-white/10"
          >
            <CheckCircle2 size={18} className="text-green-500" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Workflow completed</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
