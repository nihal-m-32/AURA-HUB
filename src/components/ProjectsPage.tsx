import React from 'react';
import { motion } from 'motion/react';
import { Layout, ChevronLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data';

interface PageProps {
  onBack: () => void;
}

export default function ProjectsPage({ onBack }: PageProps) {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-brand-primary mb-8 hover:underline">
        <ChevronLeft size={20} /> Back to Hub
      </button>
      
      <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">FEATURED <span className="glow-text">PROJECTS</span></h1>
      <p className="text-white/50 mb-12 text-lg">A showcase of my best work, all developed on mobile.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-white/50 mb-6 text-sm leading-relaxed">{project.description}</p>
              <a href={project.link} className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
