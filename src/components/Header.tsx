import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const nav = [['about', 'About'], ['projects', 'Projects'], ['contact', 'Contact']];

export default function Header({ theme, toggle }: { theme: 'dark' | 'light'; toggle: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/10 bg-bg/80 backdrop-blur-sm transition-colors duration-500">
      <div className="mx-auto flex h-14 max-w-[680px] items-center justify-between px-6">
        <a href="#top" className="mono text-fg" aria-label="Raed Najeeb, back to top">Raed Najeeb</a>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-6">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="text-sm text-muted transition-colors duration-200 hover:text-accent">{l}</a>)}
          <button type="button" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="-mr-2 grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-fg">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={{ opacity: 0, rotate: -50 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 50 }} transition={{ duration: 0.18 }}>
                {theme === 'dark' ? <Sun aria-hidden="true" className="size-4" strokeWidth={1.75} /> : <Moon aria-hidden="true" className="size-4" strokeWidth={1.75} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </div>
    </header>
  );
}
