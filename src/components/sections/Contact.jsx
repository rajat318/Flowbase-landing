import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';

const initialForm = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if (!form.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message should be at least 20 characters.';
  }

  return errors;
}

function Field({ label, name, type = 'text', value, error, onChange, as = 'input', rows }) {
  const Component = as;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <Component
        id={name}
        name={name}
        type={as === 'input' ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-brand-500 transition-colors ${
          error
            ? 'border-red-400'
            : 'border-slate-200 dark:border-white/10 focus:border-brand-400'
        }`}
      />
      {error && (
        <span id={`${name}-error`} className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No backend — this simply simulates a successful submission.
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 dark:bg-white/[0.03]">
      <div className="container-max section-padding max-w-2xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with our team"
          description="Have a question about pricing, features, or enterprise plans? Send us a message."
        />

        <ScrollReveal direction="up" delay={0.1} className="mt-12">
          <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-6 p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-card">
            <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
            <div className="sm:col-span-2">
              <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Field
                as="textarea"
                rows={5}
                label="Message"
                name="message"
                value={form.message}
                error={errors.message}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
              <Button type="submit" size="lg">
                Send message
                <Send size={16} />
              </Button>

              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400"
                  >
                    <CheckCircle2 size={18} />
                    Message sent — we'll be in touch shortly!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
