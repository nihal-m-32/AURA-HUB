import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Search, ChevronLeft, ExternalLink } from 'lucide-react';
import { downloads } from '../data';

interface DownloadsPageProps {
  onBack: () => void;
}

/**
 * AURA Creator Hub - Downloads Page
 * You can edit this file to customize the layout of your downloads section.
 */
export default function DownloadsPage({ onBack }: DownloadsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDownloads = downloads.filter(d => 
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-brand-primary hover:text-white transition-colors mb-4 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Hub
            </button>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              RESOURCE <span className="glow-text">DOWNLOADS</span>
            </h1>
            <p className="text-white/50 mt-4 text-lg">
              Access all my tools, guides, and assets in one place.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDownloads.length > 0 ? (
            filteredDownloads.map((download) => (
              <motion.div
                key={download.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                    <Download size={28} />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1">
                      {download.type}
                    </span>
                    <span className="block text-xs text-white/40 font-mono">
                      {download.version}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-brand-primary transition-colors">
                  {download.title}
                </h3>
                <p className="text-white/50 mb-8 flex-grow leading-relaxed text-sm">
                  {download.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/5">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <span className="block text-[10px] uppercase text-white/30 font-bold mb-1">Size</span>
                    <span className="block text-sm font-mono text-white/80">{(download as any).size}</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <span className="block text-[10px] uppercase text-white/30 font-bold mb-1">Downloads</span>
                    <span className="block text-sm font-mono text-white/80">{(download as any).downloads}</span>
                  </div>
                </div>

                <a 
                  href={download.link} 
                  className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-base"
                >
                  <Download size={20} /> Download Now
                </a>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/40 text-xl">No downloads found matching your search.</p>
            </div>
          )}
        </div>

        {/* Help Box */}
        <div className="mt-20 glass-card p-8 md:p-12 border-brand-primary/20 bg-brand-primary/5">
          <h2 className="text-2xl font-bold mb-4">Need help with a download?</h2>
          <p className="text-white/70 mb-6">
            If you're having trouble accessing any of these files or need a specific format, feel free to reach out via the contact form on the home page.
          </p>
          <button 
            onClick={onBack}
            className="text-brand-primary font-bold hover:underline"
          >
            Go to Contact Section →
          </button>
        </div>
      </div>
    </div>
  );
}
