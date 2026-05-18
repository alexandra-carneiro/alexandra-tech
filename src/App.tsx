import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Certifications } from './components/Certifications';
import { NotFound } from './components/NotFound';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';
import { CookieBanner } from './components/CookieBanner';
import { Contact } from './components/Contact';

// Substitua pelo seu ID de Medição do Google Analytics (ex: G-12345ABCD)
const GA_MEASUREMENT_ID = 'G-CJMJEMH9FQ'; 

function injectGoogleAnalytics() {
  // Se não houver ID ou se o script já estiver na página, não fazemos nada
  if (!GA_MEASUREMENT_ID || document.getElementById('ga-script')) return; 
  
  const script1 = document.createElement('script');
  script1.id = 'ga-script';
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.id = 'ga-init-script';
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
}

function PortfolioHome() {
  return (
    <>
      <Hero />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    // 1. Se o utilizador já aceitou no passado, acionamos imediatamente o tracking
    if (localStorage.getItem('cookie-consent') === 'accepted') {
      injectGoogleAnalytics();
    }

    // 2. Se o utilizador clicar "Aceitar" neste exato momento, acionamos o tracking via evento
    const handleConsent = () => injectGoogleAnalytics();
    window.addEventListener('cookieConsentAccepted', handleConsent);
    
    return () => window.removeEventListener('cookieConsentAccepted', handleConsent);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <CookieBanner />
      
      {/* Footer */}
      <footer className="w-full border-t border-gray-800 bg-surface/50 py-8 text-center text-gray-500 font-mono text-sm mt-32 flex flex-col items-center gap-3">
        <p>sys.exit(0) // Desenvolvido por Alexandra Carneiro © {new Date().getFullYear()}</p>
        <div className="flex gap-4 text-xs">
          <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <span className="text-gray-800">|</span>
          <Link to="/privacidade" className="hover:text-primary transition-colors">Políticas de Privacidade</Link>
        </div>
      </footer>
    </Router>
  );
}

export default App;
