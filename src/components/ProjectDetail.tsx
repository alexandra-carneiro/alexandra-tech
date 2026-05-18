import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { laroo_beauty_care_content, dividi_app_content } from '../data/markdownMocks';

// Map the markdown content based on ID for this prototype
const mockMarkdownContent: Record<string, string> = {
  'laroo-beauty-care': laroo_beauty_care_content,
  'dividi-app': dividi_app_content,
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  const project = projects.find(p => p.id === id);
  const content = project ? mockMarkdownContent[project.id] : null;

  if (!project || !content) {
    return (
      <div className="pt-48 pb-32 px-6 container mx-auto text-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
        <Link to="/" className="text-primary hover:underline">← Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 md:pt-40 px-6 container mx-auto max-w-4xl min-h-screen relative">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 font-mono">
        <ArrowLeft size={16} /> Voltar para o Portfólio
      </Link>

      <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Markdown Content Styling */}
        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-white prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800 prose-code:text-primary max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children, ...props }) => {
                const isExternal = href?.startsWith('http');
                return (
                  <a 
                    href={href} 
                    target={isExternal ? '_blank' : undefined} 
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
              img: ({ src, alt, ...props }) => {
                const isMobile = src?.includes('mobile');
                return (
                  <img 
                    src={src} 
                    alt={alt} 
                    className={`block my-6 h-auto ${isMobile ? 'max-w-[280px] mx-auto' : 'w-full'}`}
                    {...props}
                  />
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
