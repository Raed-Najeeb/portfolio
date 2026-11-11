import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="py-12 sm:py-14">
      <Reveal className="mb-6 flex items-center gap-4"><h2 id={`${id}-h`} className="mono uppercase tracking-[0.12em] text-muted">{title}</h2><span aria-hidden="true" className="h-px flex-1 bg-line/10" /></Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}
