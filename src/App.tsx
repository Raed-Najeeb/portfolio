import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import Reveal, { EASE } from './components/Reveal';
import Projects from './components/Projects';
import { EMAIL, GITHUB, LINKEDIN, RESUME, about, intro, stack } from './data';

type Theme = 'dark' | 'light';
const contact = [
  { label: 'Email', href: `mailto:${EMAIL}`, Icon: Mail, ext: false },
  { label: 'GitHub', href: GITHUB, Icon: Github, ext: true },
  { label: 'LinkedIn', href: LINKEDIN, Icon: Linkedin, ext: true }
];

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'));
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme); } catch { /* storage unavailable */ } }, [theme]);
  return (
    <MotionConfig reducedMotion="user">
      <Header theme={theme} toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="top" className="mx-auto max-w-[680px] px-6">
        <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="pb-6 pt-16 sm:pt-24" aria-labelledby="name">
          <h1 id="name" className="text-3xl font-semibold tracking-tight sm:text-4xl">Raed Najeeb</h1>
          <p className="mt-5 text-lg leading-relaxed">{intro[0]}</p>
          <p className="mt-3 text-muted">{intro[1]}</p>
          <p className="mono mt-6 flex gap-5">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="ulink">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="ulink">LinkedIn</a>
          </p>
        </motion.section>

        <Section id="about" title="About"><div className="grid gap-4 text-muted">{about.map((t) => <p key={t}>{t}</p>)}</div></Section>
        <Section id="projects" title="Projects"><Projects /></Section>
        <Section id="stack" title="Technical stack">
          <dl className="grid gap-2 text-[15px]">{stack.map(([k, v]) => <div key={k} className="grid grid-cols-[64px_1fr] gap-3"><dt className="mono pt-0.5 text-muted">{k}</dt><dd className="text-muted">{v.join(' · ')}</dd></div>)}</dl>
        </Section>
        <Section id="contact" title="Contact">
          <p className="text-muted">Interested in working on interesting problems or building something meaningful? Let’s connect.</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {contact.map(({ label, href, Icon, ext }) => <li key={label}><a href={href} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})} className="group inline-flex min-h-9 items-center gap-2 text-[15px] text-muted transition-colors hover:text-accent"><Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />{label}</a></li>)}
            <li><a href={RESUME} download="Raed_Najeeb_Resume.pdf" className="group inline-flex min-h-9 items-center gap-2 text-[15px] text-muted transition-colors hover:text-accent"><Download aria-hidden="true" className="size-4" strokeWidth={1.75} />Resume</a></li>
          </ul>
        </Section>
      </main>
      <footer className="mx-auto max-w-[680px] px-6"><Reveal className="border-t border-line/10 py-8 text-sm text-muted">© 2026 Raed Najeeb.</Reveal></footer>
    </MotionConfig>
  );
}
