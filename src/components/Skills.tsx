import { motion } from 'framer-motion';
import { 
  Terminal, Shield, Network, Database, 
  Code2, MonitorSmartphone, LayoutTemplate, Server, Cpu
} from 'lucide-react';

const skills = [
  { name: 'React & Next.js', icon: <Code2 size={24} />, category: 'Frontend', color: 'text-cyan-400' },
  { name: 'TypeScript', icon: <MonitorSmartphone size={24} />, category: 'Linguagens', color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: <LayoutTemplate size={24} />, category: 'Styling', color: 'text-teal-400' },
  { name: 'Supabase & SQL', icon: <Database size={24} />, category: 'Backend', color: 'text-green-400' },
  { name: 'Linux Server', icon: <Terminal size={24} />, category: 'Infraestrutura', color: 'text-yellow-400' },
  { name: 'Redes (BGP/OSPF)', icon: <Network size={24} />, category: 'Infraestrutura', color: 'text-orange-400' },
  { name: 'Cibersegurança', icon: <Shield size={24} />, category: 'Segurança', color: 'text-red-400' },
  { name: 'Vercel / Deploy', icon: <Server size={24} />, category: 'DevOps', color: 'text-purple-400' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 container mx-auto">
      <div className="flex items-center gap-3 mb-12 w-full justify-center">
        <Cpu className="text-primary" size={32} />
        <h2 className="text-3xl md:text-5xl font-bold text-white font-mono tracking-tight">/stack</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="tech-card p-6 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
          >
            <div className={`mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
            <h3 className="text-white font-bold mb-1 text-sm md:text-base">{skill.name}</h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{skill.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
