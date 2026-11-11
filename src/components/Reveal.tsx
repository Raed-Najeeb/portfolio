import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.7, ease: EASE, delay }}>{children}</motion.div>;
}
