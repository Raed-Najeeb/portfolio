export const NAME = 'Raed Najeeb';
export const EMAIL = 'raeednajeeb@gmail.com';
export const GITHUB = 'https://github.com/Raed-Najeeb';
export const LINKEDIN = 'https://www.linkedin.com/in/raed-najeeb';
export const RESUME = `${import.meta.env.BASE_URL}resume.pdf`;

export const intro = ['AI & Data Science graduate exploring machine learning, LLMs, and intelligent systems.', 'I enjoy understanding how things work, building them from the ground up, and evaluating what actually works.'];

export const about = [
  'I’m a recent B.Tech graduate in Artificial Intelligence and Data Science from Vimal Jyothi Engineering College. I’m interested in AI engineering and in understanding machine learning systems rather than only using them, so I tend to learn by implementing: a GPT from scratch, a local RAG pipeline, a LoRA fine-tuning experiment, and an evaluation toolkit.',
  'I care about experimentation and evaluation, which mostly means measuring whether something works instead of assuming it does.'
];

export interface Project { name: string; description: string; tags: string[]; repo: string; details: string[] }

export const projects: Project[] = [
  {
    name: 'EvalLab', repo: `${GITHUB}/Evallab`, tags: ['Python', 'Pydantic', 'pytest'],
    description: 'A toolkit for evaluating retrieval systems using ranking metrics, abstention, and structured reporting.',
    details: [
      'Runs a deterministic keyword-overlap system against a fixed corpus and evaluation dataset, computes per-case metrics, aggregates them, and writes a JSON report.',
      'Metrics: Recall@2, Precision@2, MRR and abstention accuracy.',
      'An example run on a four-case dataset gives Recall@2 0.75, Precision@2 0.375, MRR 0.75 and abstention accuracy 1.0. That is a small test set, not a benchmark.',
      '18 pytest tests were passing at the documented checkpoint. Abstention, answer quality and judge validation are still in development.'
    ]
  },
  {
    name: 'RAG Pipeline', repo: `${GITHUB}/rag-pipeline`, tags: ['Ollama', 'ChromaDB', 'Sentence Transformers'],
    description: 'A local retrieval-augmented generation system using Ollama, ChromaDB, and sentence-transformer embeddings.',
    details: [
      'Five Wikipedia articles chunked at 500 characters with a 50-character overlap (777 chunks), embedded with all-MiniLM-L6-v2 and stored in ChromaDB.',
      'Retrieval returns the top chunks by cosine similarity. Llama 3.1 8B, served by Ollama at temperature 0, answers only from them and returns its source documents.',
      '8 of 8 labeled retrieval checks passed, and an unrelated question (“What is the capital of France?”) was refused instead of answered.',
      'Small scale: five documents and eight labeled questions.'
    ]
  },
  {
    name: 'nanoGPT From Scratch', repo: `${GITHUB}/nanogpt-from-scratch`, tags: ['PyTorch', 'Transformers'],
    description: 'A character-level GPT-style language model implemented using PyTorch, exploring transformer architecture and autoregressive generation.',
    details: [
      'A character-level tokenizer and a bigram baseline, then self-attention, multi-head attention, feed-forward layers, residual connections and layer normalization. Four layers, four heads, 32-token context, no transformer library.',
      'Trained on Shakespeare: train / validation loss of 1.77 / 1.90, against roughly 2.4–2.5 for the bigram baseline.',
      'The generated text is not coherent English. The goal was understanding the mechanism, not fluent output.'
    ]
  },
  {
    name: 'Emotion LoRA', repo: `${GITHUB}/emotion-lora`, tags: ['Hugging Face', 'PEFT', 'PyTorch'],
    description: 'Parameter-efficient fine-tuning of DistilBERT for six-class emotion classification using LoRA.',
    details: [
      'DistilBERT on dair-ai/emotion (16,000 train / 2,000 validation / 2,000 test), with the same splits and three-epoch schedule for both runs.',
      'LoRA: rank 8, alpha 16 on q_lin and v_lin, with about 1.10% of parameters trainable.',
      'Full fine-tuning reached 93.15% accuracy / 88.86 F1 in 91 s. LoRA reached 91.65% / 87.71 in 66 s: faster, but slightly less accurate.',
      'One dataset and one seed, so the gap was not tested for significance.'
    ]
  }
];

export const stack: [string, string[]][] = [
  ['Core', ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Transformers']],
  ['LLMs', ['LLMs', 'RAG', 'LoRA', 'LangChain', 'ChromaDB', 'Ollama']],
  ['Tools', ['Git', 'Linux']]
];
