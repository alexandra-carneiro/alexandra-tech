import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o utilizador já tomou uma decisão anteriormente
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Pequeno delay para a animação de entrada ficar mais natural
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    
    // Acionar o evento para injetar o Google Analytics dinamicamente
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="pointer-events-auto bg-surface/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-sm text-gray-300">
                <p>
                  <strong className="text-white">Aviso de Cookies:</strong> O meu portfólio utiliza cookies para melhorar a sua experiência de navegação e analisar o tráfego do site. Pode gerir o seu consentimento a qualquer momento de acordo com as leis de proteção de dados. Saiba mais detalhes nas minhas <a href="/privacidade" className="text-primary hover:underline">Políticas de Privacidade</a>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-max">
                <button
                  onClick={handleReject}
                  className="px-5 py-2.5 rounded-lg font-mono text-sm border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                >
                  Apenas Essenciais
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 rounded-lg font-mono text-sm bg-primary text-background hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
