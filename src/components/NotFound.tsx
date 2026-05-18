import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0f]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full border border-gray-800 bg-surface/50 rounded-xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-900" />
        
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
          <Terminal className="text-red-500" size={24} />
          <h1 className="text-xl font-mono font-bold text-gray-300">sys.error(404)</h1>
        </div>

        <div className="font-mono space-y-4 mb-10">
          <p className="text-red-400 font-bold text-2xl md:text-3xl">&gt; FATAL ERROR: CONNECTION LOST</p>
          <p className="text-gray-400 leading-relaxed max-w-lg">
            A rota para o destino solicitado não foi encontrada na tabela de roteamento. 
            O pacote foi descartado.
          </p>
          <div className="bg-black/50 p-4 rounded text-sm text-gray-500 mt-6 border border-gray-800/50">
            <span className="text-red-500/80">root@alexandra.tech</span>
            <span className="text-gray-600">:</span>
            <span className="text-blue-400">/var/www</span>
            <span className="text-gray-600">$ ping -c 1 destino...</span>
            <br />
            ping: destino: Name or service not known
          </div>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded transition-colors font-mono"
        >
          <ArrowLeft size={18} /> Retornar à Base
        </Link>
      </motion.div>
    </div>
  );
}
