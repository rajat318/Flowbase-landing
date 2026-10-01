import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Counter — animates a number from 0 to `value` once it scrolls into view.
 * Does not start animating on page load; only when visible.
 */
export default function Counter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const spanRef = useRef(null);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      <span ref={spanRef}>0{suffix}</span>
    </motion.span>
  );
}
