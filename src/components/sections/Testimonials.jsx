import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { testimonials } from '../../data/landingPageData';

function Avatar({ seed }) {
  const initials = seed
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      aria-hidden="true"
      className="w-11 h-11 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 font-semibold grid place-items-center shrink-0"
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="snap-start shrink-0 w-[85%] sm:w-[420px] p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-card flex flex-col gap-4">
      <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'}
          />
        ))}
      </div>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3 mt-auto pt-2">
        <Avatar seed={testimonial.avatarSeed} />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Testimonials"
            title="Loved by operations teams everywhere"
            description="Real feedback from teams who automated their busywork with Flowbase."
          />
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center hover:border-brand-400 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center hover:border-brand-400 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <ScrollReveal direction="fade" delay={0.15}>
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar mt-12 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
