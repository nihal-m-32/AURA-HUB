import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Mail, ChevronLeft } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: PageProps) {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-brand-primary mb-8 hover:underline">
        <ChevronLeft size={20} /> Back to Hub
      </button>
      
      <div className="glass-card p-8 md:p-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-brand-primary/20 shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src="https://picsum.photos/seed/nihal/400/400" alt="Nihal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">ABOUT <span className="glow-text">NIHAL</span></h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              I'm a mobile-first developer and AI enthusiast. I specialize in building powerful tools and resources using nothing but my smartphone. My mission is to show the world that creativity has no hardware limits.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="p-4 bg-white/5 rounded-2xl hover:text-brand-primary hover:bg-white/10 transition-all"><Github /></a>
              <a href="#" className="p-4 bg-white/5 rounded-2xl hover:text-brand-primary hover:bg-white/10 transition-all"><Twitter /></a>
              <a href="#" className="p-4 bg-white/5 rounded-2xl hover:text-brand-primary hover:bg-white/10 transition-all"><Mail /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="text-brand-primary font-black mb-2 uppercase tracking-widest text-xs">Vision</h4>
            <p className="text-sm text-white/40">Democratizing development through mobile innovation.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="text-brand-primary font-black mb-2 uppercase tracking-widest text-xs">Focus</h4>
            <p className="text-sm text-white/40">AI Prompt Engineering & Web App Architecture.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="text-brand-primary font-black mb-2 uppercase tracking-widest text-xs">Goal</h4>
            <p className="text-sm text-white/40">Building the largest mobile-first resource hub.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
