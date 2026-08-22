import React from 'react';
import { Info, Zap, Smartphone, Wifi, Cpu, Globe, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-8 border-t border-slate-200">
      <div className="bg-gradient-to-br from-sky-50 via-white to-slate-50 border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-2xs">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/80 px-3 py-1 rounded-full mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Missão e Plataforma</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sobre o Clima MZ
          </h2>

          {/* Primary exact quoted statements from prompt */}
          <blockquote className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed bg-white p-5 rounded-xl border border-sky-200/70 shadow-xs mb-4">
            “O Clima MZ é uma plataforma independente criada para facilitar o acesso a informações sobre clima, tempo e agricultura em Moçambique.”
          </blockquote>

          <p className="text-sm font-semibold text-sky-800 bg-sky-50 px-4 py-2.5 rounded-lg border border-sky-100 mb-6 inline-block">
            ✨ “Futuramente, a plataforma poderá integrar sistemas de previsão meteorológica e inteligência artificial.”
          </p>

          {/* Core Performance & Accessibility Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mt-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Ultrarrápido & Leve</h3>
              <p className="text-xs text-slate-600 mt-1">
                Sem scripts pesados ou mapas que consomem saldo móvel. Carregamento instantâneo.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Mobile-First</h3>
              <p className="text-xs text-slate-600 mt-1">
                Projetado com botões acessíveis e leitura fluida em qualquer telemóvel ou tablet.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2">
                <Wifi className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Otimizado para 2G/3G</h3>
              <p className="text-xs text-slate-600 mt-1">
                Economia máxima de dados para estudantes, produtores rurais e comunidades costeiras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
