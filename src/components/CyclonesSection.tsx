import React from 'react';
import { 
  Wind, 
  CloudLightning, 
  Waves, 
  Flame, 
  Sun, 
  PhoneCall, 
  ShieldCheck, 
  AlertOctagon,
  Radio
} from 'lucide-react';
import { EXTREME_EVENTS, EMERGENCY_CONTACTS } from '../data/mockWeatherData';

export const CyclonesSection: React.FC = () => {
  return (
    <section id="fenomenos" className="py-8 border-t border-slate-200">
      {/* Section Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md mb-1.5 border border-sky-200">
          <Wind className="w-3.5 h-3.5 text-sky-600" />
          <span>Proteção Civil & Monitorização</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          🌀 Fenómenos Climáticos
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Acompanhamento de eventos extremos em Moçambique: ciclones tropicais no Canal de Moçambique, tempestades, cheias, secas e ondas de calor.
        </p>
      </div>

      {/* Main Cyclone Status Banner */}
      <div className="bg-sky-900 text-white rounded-xl p-4 sm:p-5 mb-6 border border-sky-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-sky-800 flex items-center justify-center text-cyan-300 border border-sky-700 shrink-0">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Estado: Normal
              </span>
              <span className="text-xs text-sky-300">Canal de Moçambique</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">
              Sem Ciclones Tropicais Ativos no Momento
            </h3>
            <p className="text-xs text-sky-200 mt-0.5">
              A bacia do Sudoeste do Oceano Índico permanece sob monitorização contínua.
            </p>
          </div>
        </div>

        <div className="bg-sky-950/60 p-3 rounded-lg border border-sky-800 text-xs text-sky-200 shrink-0">
          <span className="font-semibold text-white block">Época Ciclónica Típica:</span>
          <span>Novembro a Abril em Moçambique</span>
        </div>
      </div>

      {/* 4 Core Phenomenon Types Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {/* 1. Ciclones e Tempestades */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2.5">
            <Wind className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Ciclones Tropicais</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Ventos superiores a 120 km/h e chuvas torrenciais com grande impacto na orla costeira de Moçambique.
          </p>
          <div className="mt-2.5 text-[11px] text-sky-800 font-semibold bg-sky-50 p-1.5 rounded">
            Prevenção: Fixe tetos e identifique abrigos.
          </div>
        </div>

        {/* 2. Chuvas Intensas & Cheias */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center mb-2.5">
            <Waves className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Cheias & Inundações</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Subida rápida das bacias hidrográficas dos rios Zambeze, Limpopo, Púnguè, Búzi e Licungo.
          </p>
          <div className="mt-2.5 text-[11px] text-cyan-800 font-semibold bg-cyan-50 p-1.5 rounded">
            Prevenção: Afaste-se das margens e rios.
          </div>
        </div>

        {/* 3. Ondas de Calor */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
            <Flame className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Ondas de Calor</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Temperaturas extremas acima de 38°C frequentes no interior de Tete, Manica e Gaza.
          </p>
          <div className="mt-2.5 text-[11px] text-amber-800 font-semibold bg-amber-50 p-1.5 rounded">
            Prevenção: Hidratação e sombra nas horas quentes.
          </div>
        </div>

        {/* 4. Secas e Estiagem */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
            <Sun className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Secas Sazonais</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Intervalos prolongados sem chuva influenciados por fenómenos globais como El Niño.
          </p>
          <div className="mt-2.5 text-[11px] text-emerald-800 font-semibold bg-emerald-50 p-1.5 rounded">
            Prevenção: Mulching e culturas resistentes.
          </div>
        </div>
      </div>

      {/* Emergency Contacts Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <PhoneCall className="w-4 h-4 text-rose-600" />
          <h4 className="text-sm font-bold text-slate-900">
            Linhas e Contactos de Emergência em Moçambique
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {EMERGENCY_CONTACTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-lg border border-slate-200 text-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-slate-900 block">{item.name}</span>
                <span className="text-slate-500 text-[11px]">{item.desc}</span>
              </div>
              <div className="mt-2 font-mono font-bold text-sky-800 bg-sky-50 px-2 py-1 rounded text-center">
                {item.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
