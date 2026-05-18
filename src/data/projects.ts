export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  contentFile: string;
}

export const projects: Project[] = [
  {
    id: 'laroo-beauty-care',
    title: 'Laroo Beauty Care',
    description: 'Landing page e sistema web institucional de alto padrão para espaço de beleza e bem-estar, com agendamentos facilitados. Desenvolvido sob medida com auxílio de inteligência artificial (Antigravity), validações da proprietária e deploy na Vercel.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Antigravity'],
    contentFile: '/projects/laroo-beauty-care.md',
  },
  {
    id: 'dividi-app',
    title: 'Dividi - Gestão Financeira',
    description: 'Aplicação web SaaS Premium para gestão de gastos compartilhados entre casais. Autenticação completa, dashboards dinâmicos, leitura de CSV/Excel e banco de dados em tempo real com segurança RLS.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Autenticação', 'RLS Security', 'Vercel'],
    contentFile: '/projects/dividi-app.md',
  },
];
