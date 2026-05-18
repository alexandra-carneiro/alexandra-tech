import { Network, Shield, Server, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-6 md:pt-24 md:pb-8 px-6 md:px-12 container mx-auto relative overflow-hidden">
      
      {/* Decorative background elements (glows) */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 w-full max-w-6xl mx-auto">
        
        {/* Left - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start"
        >
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-primary"></span>
            <span>Initialize connection...</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
            Alexandra <br className="hidden md:block"/> Carneiro
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6 max-w-2xl leading-relaxed">
            Estudante de <span className="text-primary font-medium">Engenharia de Software</span>.
          </h2>

          <p className="text-gray-500 mb-10 max-w-2xl leading-relaxed text-lg">
            Olá! Sou estudante de Engenharia de Software. Criei este espaço para partilhar os meus projetos e laboratórios de estudo, enquanto procuro uma oportunidade de estágio.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary/10 border border-primary text-primary px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-primary hover:text-[#0a0a0f] transition-all duration-300 font-medium font-mono">
              Explorar Labs <ArrowRight size={18} />
            </a>
            <a href="/Currículo Alexandra Carneiro - TI.pdf" target="_blank" rel="noopener noreferrer" className="bg-surface border border-gray-700 text-gray-300 px-8 py-3 rounded-lg flex items-center gap-2 hover:border-gray-500 hover:text-white transition-all duration-300 font-medium">
              <FileText size={18} /> Ver Currículo
            </a>
          </div>
        </motion.div>

        {/* Right - Profile Photo Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group w-64 h-64 md:w-80 md:h-80 shrink-0 mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img 
            src="/profile.png" 
            alt="Alexandra Carneiro" 
            className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 shadow-2xl z-10"
          />
        </motion.div>

      </div>

      {/* Skills / Tech Highlights */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto"
      >
        <div className="tech-card p-6 flex flex-col">
          <Network className="text-primary mb-4" size={32} />
          <h3 className="text-lg font-semibold text-white mb-2 font-mono">desenvolvimento</h3>
          <p className="text-gray-400 text-sm">Criação de páginas, sistemas funcionais e interfaces limpas com foco em design e usabilidade.</p>
        </div>
        <div className="tech-card p-6 flex flex-col">
          <Shield className="text-accent mb-4" size={32} />
          <h3 className="text-lg font-semibold text-white mb-2 font-mono">seguranca</h3>
          <p className="text-gray-400 text-sm">Estudos de boas práticas de segurança defensiva, controlo de acessos e proteção de dados.</p>
        </div>
        <div className="tech-card p-6 flex flex-col">
          <Server className="text-secondary mb-4" size={32} />
          <h3 className="text-lg font-semibold text-white mb-2 font-mono">sistemas</h3>
          <p className="text-gray-400 text-sm">Prática com sistemas Linux CLI, automação simples e publicação de aplicações na nuvem.</p>
        </div>
      </motion.div>
    </section>
  );
}
