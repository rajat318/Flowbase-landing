import ScrollReveal from '../common/ScrollReveal';
import Counter from '../common/Counter';
import { stats } from '../../data/landingPageData';

export default function Stats() {
  return (
    <section className="py-20 bg-brand-500">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} direction="up" delay={i * 0.1} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm sm:text-base text-brand-100">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
