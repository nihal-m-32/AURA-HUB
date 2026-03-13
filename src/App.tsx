import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Layout, 
  BookOpen, 
  Download, 
  User, 
  Mail, 
  Github, 
  Twitter,
  ChevronRight,
  Home
} from 'lucide-react';

// Import sub-pages
import ToolsPage from './components/ToolsPage';
import PromptsPage from './components/PromptsPage';
import DownloadsPage from './components/DownloadsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';

type Page = 'hub' | 'tools' | 'prompts' | 'downloads' | 'about' | 'contact' | 'projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('hub');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'tools', title: 'AI Tools', icon: <Zap />, color: 'from-cyan-400 to-blue-500', desc: 'Powerful AI utilities' },
    { id: 'prompts', title: 'Prompts', icon: <BookOpen />, color: 'from-purple-400 to-pink-500', desc: 'Premium AI library' },
    { id: 'projects', title: 'Projects', icon: <Layout />, color: 'from-orange-400 to-red-500', desc: 'My mobile-built work' },
    { id: 'downloads', title: 'Downloads', icon: <Download />, color: 'from-green-400 to-emerald-500', desc: 'Free resources' },
    { id: 'about', title: 'About Me', icon: <User />, color: 'from-blue-400 to-indigo-500', desc: 'The story of Nihal' },
    { id: 'contact', title: 'Contact', icon: <Mail />, color: 'from-yellow-400 to-orange-500', desc: 'Get in touch' },
  ];

  // Hub Homepage
  if (currentPage === 'hub') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4">
            AURA <span className="glow-text">HUB</span>
          </h1>
          <p className="text-white/40 font-bold uppercase tracking-[0.4em] text-xs">Mobile Innovation Center</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigateTo(item.id as Page)}
              className="glass-card p-8 text-left group relative overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <ChevronRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm font-medium">{item.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Footer Socials */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex gap-8 text-white/30"
        >
          <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
          <a href="#" className="hover:text-white transition-colors"><Mail size={24} /></a>
        </motion.div>
      </div>
    );
  }

  // Sub-pages
  return (
    <div className="min-h-screen relative">
      {/* Mini Nav for Sub-pages */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigateTo('hub')} className="text-xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-black"><Home size={16} /></div>
            AURA
          </button>
          <div className="flex gap-4">
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => navigateTo(item.id as Page)}
                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full transition-all ${currentPage === item.id ? 'bg-brand-primary text-black' : 'text-white/40 hover:text-white'}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === 'tools' && <ToolsPage onBack={() => navigateTo('hub')} />}
          {currentPage === 'prompts' && <PromptsPage onBack={() => navigateTo('hub')} />}
          {currentPage === 'downloads' && <DownloadsPage onBack={() => navigateTo('hub')} />}
          {currentPage === 'about' && <AboutPage onBack={() => navigateTo('hub')} />}
          {currentPage === 'contact' && <ContactPage onBack={() => navigateTo('hub')} />}
          {currentPage === 'projects' && <ProjectsPage onBack={() => navigateTo('hub')} />}
        </motion.div>
      </AnimatePresence>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} AURA Creator Hub. Built on Mobile.
        </p>
      </footer>
    </div>
  );
}
