import React from 'react';
import { motion } from 'motion/react';
import { Zap, ChevronLeft, ExternalLink } from 'lucide-react';
import { tools } from '../data';

interface PageProps {
  onBack: () => void;
}

export default function ToolsPage({ onBack }: PageProps) {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-brand-primary mb-8 hover:underline">
        <ChevronLeft size={20} /> Back to Hub
      </button>
      
      <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">AI <span className="glow-text">TOOLS</span></h1>
      <p className="text-white/50 mb-12 text-lg">Powerful AI utilities built for mobile productivity.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <motion.div 
            key={tool.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 group"
          >
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all">
              <Zap />
            </div>
            <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">{tool.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/60">{tool.category}</span>
              <a href={tool.link} className="text-white/30 hover:text-brand-primary transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
