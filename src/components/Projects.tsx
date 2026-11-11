import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { EASE } from './Reveal';
import { projects, type Project } from '../data';

function Row({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  const id = `details-${p.name.replace(/\W+/g, '-').toLowerCase()}`;
  return (
    <li className="group relative border-t border-line/10 py-6 first:border-t-0 first:pt-0">
      <span aria-hidden="true" className="absolute -left-4 top-6 h-5 w-px origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100 group-focus-within:scale-y-100 group-first:top-0" />
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[17px] font-medium tracking-tight">{p.name}</h3>
        <a href={p.repo} target="_blank" rel="noreferrer" className="mono group/gh inline-flex shrink-0 items-center gap-1 text-muted transition-colors hover:text-accent" aria-label={`${p.name} on GitHub`}>
          GitHub <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-200 group-hover/gh:-translate-y-0.5 group-hover/gh:translate-x-0.5" />
        </a>
      </div>
      <p className="mt-1.5 text-[15px] text-muted">{p.description}</p>
      <ul className="mono mt-3 flex flex-wrap gap-x-3 gap-y-1 text-muted/80">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id} className="mono mt-3 inline-flex min-h-8 items-center gap-1 text-muted transition-colors hover:text-fg">
        <ChevronRight aria-hidden="true" className={`size-3.5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />{open ? 'Hide details' : 'Technical details'}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
            <ul className="mt-2 grid gap-2.5 border-l border-line/15 pl-4 text-[15px] text-muted">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Projects() {
  return <ul>{projects.map((p) => <Row key={p.name} p={p} />)}</ul>;
}
