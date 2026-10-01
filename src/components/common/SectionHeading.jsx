import ScrollReveal from './ScrollReveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <ScrollReveal className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
