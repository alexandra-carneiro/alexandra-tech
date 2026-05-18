import { Trophy, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    course: 'Licenciatura em Engenharia de Software',
    institution: 'Faculdade Descomplica - Ensino a Distância',
    status: 'Conclusão 12/2027',
  },
  {
    course: 'Técnico Especialista Gestão de Redes e Sistemas Computacionais (QNQ 5)',
    institution: 'IEFP Portugal',
    status: 'Conclusão 12/2026',
  },
  {
    course: 'Técnico Especialista em Cibersegurança (QNQ 5)',
    institution: 'IEFP Portugal',
    status: 'Concluído em 2025',
  }
];

const certificates = [
  {
    name: 'Cisco Networking Academy (CCNA 1)',
    issuer: 'Cisco',
    date: '2024',
    tags: ['Networking', 'Routing'],
  },
  {
    name: 'Hardening de Servidores Linux',
    issuer: 'Plataforma Acadêmica',
    date: '2024',
    tags: ['Security', 'Linux'],
  },
  {
    name: 'Fundamentos de Cibersegurança',
    issuer: 'Em andamento',
    date: 'Presente',
    tags: ['Security', 'Concepts'],
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-12 container mx-auto mb-20">
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full max-w-6xl mx-auto">
        
        {/* Education Col */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-10 w-full justify-center lg:justify-start">
            <GraduationCap className="text-primary" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">/formação</h2>
          </div>

          <div className="flex flex-col gap-4">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="tech-card p-5 group flex flex-col justify-between border-l-4 border-l-primary"
              >
                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-primary transition-colors">{edu.course}</h3>
                  <p className="text-sm text-gray-400 mt-2">{edu.institution}</p>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Col */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-10 w-full justify-center lg:justify-start">
            <Trophy className="text-accent" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">/certificações</h2>
          </div>

          <div className="flex flex-col gap-4">
            {certificates.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="tech-card p-5 group flex flex-col justify-between border-l-4 border-l-accent"
              >
                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-accent transition-colors">{cert.name}</h3>
                  <p className="text-sm border-l-2 border-gray-700 pl-3 text-gray-400 mt-2 mb-4">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {cert.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-gray-800 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
