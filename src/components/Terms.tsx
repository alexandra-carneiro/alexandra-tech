import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <article className="pt-32 pb-20 px-6 container mx-auto max-w-3xl min-h-screen text-gray-300">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 font-mono">
        <ArrowLeft size={16} /> Voltar para a Home
      </Link>
      
      <h1 className="text-4xl font-bold text-white mb-8">Termos de Uso</h1>
      
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
        <p className="text-lg text-gray-400 mb-8">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Natureza do Portfólio</h2>
          <p>
            Este website (alexandra.tech) é um portfólio estritamente profissional criado por Alexandra Carneiro. O objetivo exclusivo desta plataforma é exibir o meu currículo, demonstrar os meus projetos de desenvolvimento de software e apresentar as minhas qualificações e competências para oportunidades de emprego ou parcerias técnicas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Propriedade Intelectual</h2>
          <p>
            Todo o código-fonte proprietário, logótipos e designs expostos na secção de Projetos pertencem aos seus respetivos clientes ou repositórios open-source. Os direitos sobre a infraestrutura e design deste portfólio pertencem à criadora (Alexandra Carneiro). Não é autorizada a cópia do design deste portfólio para utilização comercial de terceiros sem aviso prévio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Ausência de Prestação de Serviços Comerciais</h2>
          <p>
            Gostaria de esclarecer que <strong>não existem vendas diretas, transações financeiras ou subscrições a partir desta página</strong>. Os projetos listados, como o "Laroo Beauty Care" ou "Dividi", são meras demonstrações de trabalho (Showcase).
          </p>
        </section>

        <section className="mt-12 p-6 bg-surface border border-gray-800 rounded-xl">
          <p className="text-sm font-mono text-gray-400">
            // Estes termos destinam-se a garantir a proteção do trabalho intelectual exposto. Muito obrigada pela visita.
          </p>
        </section>
      </div>
    </article>
  );
}
