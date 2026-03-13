import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, ChevronLeft, MapPin, Phone } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: PageProps) {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-brand-primary mb-8 hover:underline">
        <ChevronLeft size={20} /> Back to Hub
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">GET IN <span className="glow-text">TOUCH</span></h1>
          <p className="text-xl text-white/50 mb-12">Have a question or want to collaborate? Drop me a message below.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary"><Mail size={20} /></div>
              <span>nihal@aura.hub</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary"><MapPin size={20} /></div>
              <span>Digital Nomad / Remote</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary/50 transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary/50 transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-primary/50 transition-all" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
