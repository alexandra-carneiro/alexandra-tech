import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <article className="pt-32 pb-20 px-6 container mx-auto max-w-3xl min-h-screen text-gray-300">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 font-mono">
        <ArrowLeft size={16} /> Voltar para a Home
      </Link>
      
      <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
        <p className="text-lg text-gray-400 mb-8">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Visão Geral</h2>
          <p>
            O respeito pela sua privacidade é uma prioridade. Esta Política de Privacidade descreve como os seus dados são tratados enquanto navega no meu portfólio profissional (alexandra.tech). A minha plataforma foi construída com a máxima atenção à proteção de dados e transparência.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Recolha de Dados (Google Analytics)</h2>
          <p>
            Com o objetivo de melhorar a experiência do portfólio e medir estatísticas de navegação (como tempo de visita e projetos mais vistos), este site utiliza o <strong>Google Analytics</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
            <li>Os dados recolhidos são <strong>anonimizados</strong>.</li>
            <li>O tracking só ocorre se você clicar em "Aceitar Todos" no banner de Cookies.</li>
            <li>Não são recolhidos nomes, e-mails, endereços ou qualquer outro dado sensível.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Os seus Direitos (RGPD)</h2>
          <p>
            De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia, tem o direito de navegar de forma privada. Pode a qualquer momento apagar os cookies armazenados nas configurações do seu navegador para retirar o seu consentimento de medição analítica.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Hospedagem</h2>
          <p>
            Este portfólio encontra-se hospedado em infraestrutura de terceiros (Vercel), que garante os mais altos padrões de segurança em toda a transmissão de dados (HTTPS/TLS).
          </p>
        </section>

        <section className="mt-12 p-6 bg-surface border border-gray-800 rounded-xl">
          <p className="text-sm font-mono text-gray-400">
            // Caso tenha alguma dúvida profissional ou questão de privacidade, sinta-se à vontade para me contactar através das redes profissionais (LinkedIn) indicadas na página inicial.
          </p>
        </section>
      </div>
    </article>
  );
}
