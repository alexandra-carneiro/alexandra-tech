import { FolderGit2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-6 md:py-8 px-6 md:px-12 container mx-auto relative">
      {/* Support both #projects and #labs scroll anchors */}
      <div id="labs" className="absolute top-0 left-0" />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-12 relative z-10">
          <FolderGit2 className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">/projects & labs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="tech-card p-6 flex flex-col h-full relative group">
              <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-gray-800/80 text-primary border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors w-max">
                Ver Detalhes <ExternalLink size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
