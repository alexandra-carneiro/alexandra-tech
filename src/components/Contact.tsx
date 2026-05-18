import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    // Substitua pelo sua Access Key gerada em https://web3forms.com/
    formData.append("access_key", "9ddc29e2-2657-453d-90be-6d4351a14426");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 container mx-auto">
      <div className="max-w-3xl mx-auto tech-card p-8 md:p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight mb-4">/contacto</h2>
          <p className="text-gray-400">Tem uma proposta ou projeto em mente? Envie-me uma mensagem diretamente para a minha caixa de e-mail.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-gray-400 flex items-center gap-2">
                <User size={14} /> Nome
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full bg-background/50 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="O seu nome"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-gray-400 flex items-center gap-2">
                <Mail size={14} /> Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full bg-background/50 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="seu.email@exemplo.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-mono text-gray-400 flex items-center gap-2">
              <MessageSquare size={14} /> Mensagem
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              required
              className="w-full bg-background/50 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              placeholder="Como posso ajudar a sua empresa?"
            ></textarea>
          </div>

          {/* Web3Forms required fields */}
          <input type="hidden" name="subject" value="Nova mensagem do Portfólio Tech!" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
          >
            {status === 'idle' && <><Send size={18} /> Enviar Mensagem</>}
            {status === 'submitting' && 'A enviar...'}
            {status === 'success' && 'Mensagem enviada com sucesso! ✓'}
            {status === 'error' && 'Erro ao enviar. Tente novamente.'}
          </button>
        </form>
      </div>
    </section>
  );
}
