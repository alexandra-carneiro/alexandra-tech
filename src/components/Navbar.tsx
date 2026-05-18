import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Menu, X, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline">
          <Terminal className="text-primary group-hover:text-white transition-colors" size={24} />
          <span className="text-xl font-bold tracking-wider font-mono text-gray-100 group-hover:glow-text transition-all">
            alexandra<span className="text-primary">-tech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="/#home" className="text-gray-300 hover:text-primary transition-colors">~/home</a>
          <a href="/#projects" className="text-gray-300 hover:text-primary transition-colors">~/labs</a>
          <a href="/Currículo Alexandra Carneiro - TI.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">~/cv</a>
          <a href="/#contact" className="text-gray-300 hover:text-primary transition-colors">~/contacto</a>
        </div>

        {/* Social / Contact Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/alexandra-carneiro" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/carneiro-alexandra/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel bg-[#0a0a0f]/95 absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 font-mono border-t-0 shadow-2xl">
          <a href="/#home" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>~/home</a>
          <a href="/#projects" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>~/labs</a>
          <a href="/Currículo Alexandra Carneiro - TI.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>~/cv</a>
          <a href="/#contact" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>~/contacto</a>
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/alexandra-carneiro" target="_blank" rel="noreferrer" className="text-gray-400">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/carneiro-alexandra/" target="_blank" rel="noreferrer" className="text-gray-400">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
