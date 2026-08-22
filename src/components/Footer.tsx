import React from 'react';
import { CloudSun, ArrowUp, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          {/* Logo & description */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
              <CloudSun className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-bold text-base">Clima MZ</span>
              <span className="text-slate-400 text-xs ml-2">Moçambique</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <a href="#previsao" className="hover:text-white transition-colors">Previsão</a>
            <a href="#provincias" className="hover:text-white transition-colors">Províncias</a>
            <a href="#alertas" className="hover:text-white transition-colors">Alertas</a>
            <a href="#agricultura" className="hover:text-white transition-colors">Agricultura</a>
            <a href="#fenomenos" className="hover:text-white transition-colors">Fenómenos</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Disclaimer and copyright note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Clima MZ — Versão 1.0 (Dados demonstrativos).
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Desenvolvido para cidadãos, estudantes e agricultores de Moçambique</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
