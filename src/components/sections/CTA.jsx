import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container-max section-padding">
        <ScrollReveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 px-8 py-16 sm:px-16 text-center">
            <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-xl">
                Ready to automate the busywork out of your team's day?
              </h2>
              <p className="text-brand-100 max-w-md">
                Join thousands of teams already saving hours every week with Flowbase.
              </p>
              <Button variant="secondary" size="lg" as="a" href="#pricing">
                Start your free trial
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
