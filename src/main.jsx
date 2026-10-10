import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';


const projects = [
  {
    id: '01',
    kicker: 'MODEL INTERNALS',
    title: 'nanoGPT From Scratch',
    desc: 'A character-level transformer built from the mechanism up, including attention, causal masking, and the training loop.',
    meta: 'CAUSAL MASKING · ATTENTION · PYTORCH',
    evidence: 'LOSS 0.06 → NOISE → MASK BUG → 1.77 / 1.90',
    github: 'https://github.com/Raed-Najeeb/nanogpt-from-scratch'
  },
  {
    id: '02',
    kicker: 'RETRIEVAL',
    title: 'RAG Pipeline',
    desc: 'A local retrieval-augmented generation pipeline using embeddings, ChromaDB, and a local Llama model.',
    meta: 'EMBEDDINGS · CHROMADB · LLAMA 3.1 8B',
    evidence: '8 / 8 LABELED RETRIEVALS · REFUSAL CHECK',
    github: 'https://github.com/Raed-Najeeb/rag-pipeline'
  },
  {
    id: '03',
    kicker: 'PARAMETER-EFFICIENT FINE-TUNING',
    title: 'Emotion Classification with LoRA',
    desc: 'Compared full fine-tuning of DistilBERT with a LoRA adaptation on the six-class dair-ai/emotion dataset, using held-out test metrics and a small inference test suite.',
    meta: 'DISTILBERT · HUGGING FACE · PEFT · PYTORCH',
    evidence: 'LORA: 91.65% ACCURACY · 0.877 MACRO F1 · 1.10% TRAINABLE PARAMETERS',
    github: 'https://github.com/Raed-Najeeb/emotion-lora'
  },
  {
    id: '04',
    kicker: 'UPCOMING · EVALUATION',
    title: 'LLM Evaluation Harness',
    desc: 'Planned evaluation tooling for the RAG pipeline: a curated question set, deterministic retrieval checks, an LLM judge calibrated against human labels, and regression tracking. This project has not started yet.',
    meta: 'RAG EVALUATION · LLM-AS-JUDGE · COHEN’S KAPPA · CI',
    evidence: 'PLANNED · HUMAN/JUDGE AGREEMENT · REGRESSION TESTS'
  },
  {
    id: '05',
    kicker: 'AGENTIC SYSTEM',
    title: 'CareerMate',
    desc: 'An agentic AI recruitment system combining resume screening, AI interviewing, behavioral analysis, and computer-vision proctoring.',
    meta: 'RESUME SCREENING · AI INTERVIEWING · PROCTORING',
    evidence: 'GEMINI · DJANGO · OPENCV · DEEPFACE',
    github: 'https://github.com/chythrashokan/CareerMate'
  }
];


function App(){
 const[boot,setBoot]=useState(true); const[active,setActive]=useState(null);
 useEffect(()=>{const t=setTimeout(()=>setBoot(false),950);return()=>clearTimeout(t)},[]);
 return <div className="site">
 {boot&&<div className="boot"><div className="boot-card"><span>RAED NAJEEB</span><b>AI ENGINEER</b><i/></div></div>}
 <header><a className="logo" href="#top">RN<span>/</span>26</a><nav><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></nav><span className="status"><i/> AVAILABLE FOR OPPORTUNITIES</span></header>
 <main id="top">
 <section className="hero">
   <div className="eyebrow">AI ENGINEER / LLM SYSTEMS / INDIA</div>
   <div className="hero-copy"><div className="hero-label">AI ENGINEER</div><h1>RAED<br/><span>NAJEEB</span></h1><div className="hero-role">LLM SYSTEMS / APPLIED AI</div><p>I build LLM systems from the mechanism up, and I verify them.</p></div>
   <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><a href="#work" className="circle">WORK<br/>↓</a></div>
   <div className="orb"><div/><div/><div/><span>Q</span><span>K</span><span>V</span></div>
 </section>
 <section className="intro"><div className="section-index">01 — PROFILE</div><div className="intro-copy"><p className="lead">I’m an early-career AI engineer interested in how language models work, where they fail, and how to build systems around them carefully.</p><div className="intro-grid"><p>My work spans transformer internals, retrieval, grounding, local models, and experiments with fine-tuning and agentic applications.</p><a href="#about" className="text-link">MORE ABOUT ME <span>↗</span></a></div></div></section>
 <section id="work" className="work"><div className="section-head"><span>02 — SELECTED WORK</span><span>05 PROJECTS</span></div>{projects.map((p,i)=><article className="project" key={p.id}>
   <div className="num">{p.id}</div><div className="project-main"><div className="kicker">{p.kicker}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="meta">{p.meta}</div><div className="evidence">&gt; {p.evidence}</div><div className="actions"><button onClick={()=>setActive(p)}>INSPECT <span>↗</span></button>{p.github&&<a href={p.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>}</div></div>
   <div className="project-art"><div className={'art art'+i}><span>{i===0?'Q·K·V':i===1?'VECTOR':i===2?'ΔW':i===3?'EVAL':'AGENT'}</span><div className="art-line"/></div></div>
 </article>)}</section>
 <section className="debug"><div className="debug-copy"><div className="section-index">03 — DEBUGGING EXAMPLE</div><h2>When a result<br/><span>looks wrong.</span></h2><p>A small example from nanoGPT: the loss initially looked unusually good, but generated text exposed a causal masking bug.</p></div><div className="terminal"><div className="termbar"><span>nanoGPT / diagnostic.log</span><span>03:17</span></div><pre>{`$ train --model nanoGPT\n\ntrain_loss       0.06\nvalidation_loss  0.08\n\n$ generate\n\noutput           noise\n\n$ inspect attention_mask\n\ncause            causal mask bug\n\n$ patch && retrain\n\ntrain_loss       1.77\nvalidation_loss  1.90\nstatus           verified`}</pre></div></section>
 <section id="about" className="about"><div className="section-index">04 — ABOUT</div><div className="about-copy"><h2>AI ENGINEERING,<br/><span>CAREFULLY.</span></h2><p>I’m building a foundation across the LLM lifecycle: understanding model internals, evaluating retrieval, working with local/open-weight models, and learning where fine-tuning or agents actually add value.</p><div className="facts"><div><b>EDUCATION</b><span>B.Tech AI & Data Science</span></div><div><b>GRADUATION</b><span>Aug 2026 · CGPA 7.95</span></div><div><b>QUALIFICATION</b><span>GATE DA qualified</span></div></div></div></section>
 <section id="contact" className="contact"><div className="section-index">05 — CONTACT</div><div className="contact-copy"><h2>GET IN TOUCH</h2><p>I’m open to opportunities where I can keep learning, build useful systems, and contribute to a strong engineering team.</p><div className="contact-links"><a href="mailto:raednajeeb@gmail.com">EMAIL <span>↗</span></a><a href="https://github.com/Raed-Najeeb" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></div></div></section>
 </main><footer><span>RAED NAJEEB</span><span>AI ENGINEER / 2026</span></footer>
 {active&&<div className="modal" onClick={()=>setActive(null)}><div className="modal-box" onClick={e=>e.stopPropagation()}><button onClick={()=>setActive(null)}>CLOSE ×</button><span>{active.id} / {active.kicker}</span><h2>{active.title}</h2><p>{active.desc}</p><div className="evidence">&gt; {active.evidence}</div>{active.github&&<a href={active.github} target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>}</div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
