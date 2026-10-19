import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  {
    number: '01', category: 'TRANSFORMERS', title: 'nanoGPT from scratch',
    description: 'A character-level GPT implemented in PyTorch to understand token embeddings, causal self-attention, transformer blocks, and training.',
    stack: 'PYTORCH · SELF-ATTENTION · LANGUAGE MODELING',
    result: 'TRAINING / VALIDATION LOSS: 1.77 / 1.90',
    href: 'https://github.com/Raed-Najeeb/nanogpt-from-scratch', link: 'View repository'
  },
  {
    number: '02', category: 'RETRIEVAL & GROUNDING', title: 'RAG pipeline',
    description: 'A local retrieval-augmented generation pipeline using sentence embeddings, ChromaDB, and Llama 3.1, with retrieval checks and refusal behavior.',
    stack: 'OLLAMA · CHROMADB · SENTENCE TRANSFORMERS',
    result: '8 / 8 LABELED RETRIEVAL CHECKS PASSED',
    href: 'https://github.com/Raed-Najeeb/rag-pipeline', link: 'View repository'
  },
  {
    number: '03', category: 'MODEL ADAPTATION', title: 'Emotion classification with LoRA',
    description: 'Compared a full fine-tuning baseline with a parameter-efficient LoRA adaptation of DistilBERT on a six-class emotion dataset.',
    stack: 'HUGGING FACE · PEFT · PYTORCH',
    result: '91.65% ACCURACY · 0.877 MACRO F1 · 1.10% TRAINABLE PARAMETERS',
    href: 'https://github.com/Raed-Najeeb/emotion-lora', link: 'View repository'
  },
  {
    number: '04', category: 'LLM EVALUATION', title: 'EvalLab',
    description: 'A small, tested evaluation pipeline that loads a fixed corpus and evaluation dataset, runs a deterministic baseline system, calculates retrieval and abstention metrics, and writes a JSON report.',
    stack: 'PYTHON · PYDANTIC · PYTEST · RETRIEVAL METRICS',
    result: '18 TESTS PASSING · JSON EVALUATION REPORT',
    href: 'https://github.com/Raed-Najeeb/Evallab', link: 'View repository'
  },
  {
    number: '05', category: 'AGENTIC APPLICATION', title: 'CareerMate',
    description: 'An AI-assisted recruitment project combining resume screening, interview workflows, behavioral analysis, and computer-vision proctoring.',
    stack: 'DJANGO · GEMINI · OPENCV · DEEPFACE',
    result: 'MULTI-COMPONENT RECRUITMENT WORKFLOW',
    href: 'https://github.com/chythrashokan/CareerMate', link: 'View project'
  }
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Raed Najeeb, home">Raed Najeeb<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" /> EARLY-CAREER AI ENGINEER <span className="eyebrow-divider">/</span> INDIA</div>
            <h1>Raed Najeeb<span>.</span></h1>
            <p className="hero-summary">AI & Data Science graduate learning by building and testing language-model systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://github.com/Raed-Najeeb" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-note" aria-label="Areas of focus">
            <span>FOCUS AREAS</span>
            <p>LLM systems<br />Retrieval & grounding<br />Evaluation</p>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div><span className="section-kicker">SELECTED WORK</span><h2>Projects</h2></div>
            <p>A few projects exploring how AI systems work, where they fail, and how to test them.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack}</div>
                  <div className="project-bottom">
                    <span className="project-result"><span aria-hidden="true">↳</span> {project.result}</span>
                    <a href={project.href} target="_blank" rel="noreferrer">{project.link} <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
                <div className="project-mark" aria-hidden="true"><span>{project.number}</span><i /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-label"><span className="section-kicker">A LITTLE ABOUT ME</span></div>
          <div className="about-content">
            <h2>Learning by building.<br /><span>One project at a time.</span></h2>
            <p>I’m a recent AI & Data Science graduate, and I learn by building things and checking whether they work. My projects include a small GPT built from scratch, a local RAG pipeline, a LoRA fine-tuning experiment, and EvalLab, a tested evaluation pipeline with retrieval and abstention metrics. I’m interested in understanding what’s happening under the hood and looking for a role where I can keep learning through practical engineering work.</p>
            <div className="about-facts">
              <div><span>EDUCATION</span><strong>B.Tech, AI & Data Science</strong></div>
              <div><span>GRADUATED</span><strong>August 2026</strong></div>
              <div><span>QUALIFICATION</span><strong>GATE DA qualified</strong></div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div><span className="section-kicker">CONTACT</span><h2>Let’s talk.</h2></div>
          <div className="contact-content">
            <p>I’m looking for opportunities to contribute, learn from real engineering work, and grow in AI/ML or AI evaluation.</p>
            <div className="contact-links">
              <a href="mailto:raednajeeb@gmail.com">Email me <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/Raed-Najeeb" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#home">Raed Najeeb<span>.</span></a><span>Designed to keep the work in focus.</span><span>© 2026 Raed Najeeb</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
