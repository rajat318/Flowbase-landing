import { motion } from 'framer-motion';

const variantClasses = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-soft',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  outline:
    'border border-slate-300 text-slate-900 hover:border-brand-400 hover:text-brand-600 dark:border-white/20 dark:text-white dark:hover:border-brand-400',
};

const sizeClasses = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  className = '',
  ...props
}) {
  const Component = motion[as] ?? motion.button;

  return (
    <Component
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-500 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
