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
  {
    id: 'bgp-ospf-lab',
    title: 'Topologia BGP OSPF',
    description: 'Laboratório de roteamento dinâmico em GNS3 com BGP multi-area e OSPF para alta disponibilidade.',
    tags: ['BGP', 'OSPF', 'GNS3', 'Cisco'],
    contentFile: '/projects/bgp-ospf-lab.md',
  },
  {
    id: 'linux-hardening',
    title: 'Hardening Servidor Linux',
    description: 'Implementação de baselines de segurança, firewall com iptables, Fail2Ban e auditoria com Auditd.',
    tags: ['Linux', 'Security', 'Bash', 'Firewall'],
    contentFile: '/projects/linux-hardening.md',
  },
  {
    id: 'ansible-nginx',
    title: 'Automação Ansible Nginx',
    description: 'Playbooks Ansible para provisionamento e configuração de proxy reverso Nginx com SSL Let\'s Encrypt.',
    tags: ['Ansible', 'Nginx', 'Automation', 'SSL'],
    contentFile: '/projects/ansible-nginx.md',
  },
];
