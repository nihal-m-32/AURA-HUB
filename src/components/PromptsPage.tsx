import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ChevronLeft, Copy, Check } from 'lucide-react';
import { prompts } from '../data';

interface PageProps {
  onBack: () => void;
}

export default function PromptsPage({ onBack }: PageProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-brand-primary mb-8 hover:underline">
        <ChevronLeft size={20} /> Back to Hub
      </button>
      
      <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">PROMPT <span className="glow-text">LIBRARY</span></h1>
      <p className="text-white/50 mb-12 text-lg">High-quality prompts to supercharge your AI interactions.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prompts.map((prompt) => (
          <motion.div 
            key={prompt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-1 block">{prompt.category}</span>
                <h3 className="text-2xl font-bold">{prompt.title}</h3>
              </div>
              <button 
                onClick={() => copyToClipboard(prompt.content, prompt.id)}
                className="p-3 bg-white/5 rounded-xl hover:bg-brand-primary/20 hover:text-brand-primary transition-all"
              >
                {copiedId === prompt.id ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            <div className="bg-black/40 rounded-xl p-6 font-mono text-sm text-white/40 border border-white/5 italic">
              "{prompt.content}"
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
