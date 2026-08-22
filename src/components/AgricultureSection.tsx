import React, { useState } from 'react';
import { 
  Sprout, 
  CloudRain, 
  SunMedium, 
  Droplets, 
  ShieldCheck, 
  Wheat, 
  Calendar, 
  Check, 
  Layers
} from 'lucide-react';
import { AgriTip } from '../types';

interface AgricultureSectionProps {
  tips: AgriTip[];
}

export const AgricultureSection: React.FC<AgricultureSectionProps> = ({ tips }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const categories = [
    { id: 'todas', label: 'Todas as Dicas', icon: Layers },
    { id: 'chuvas', label: 'Chuvas & Drenagem', icon: CloudRain },
    { id: 'plantio', label: 'Sementeira & Plantio', icon: Sprout },
    { id: 'seca', label: 'Gestão da Seca', icon: SunMedium },
    { id: 'agua', label: 'Gestão da Água', icon: Droplets },
    { id: 'pragas', label: 'Proteção de Culturas', icon: ShieldCheck },
  ];

  const filteredTips = tips.filter((tip) => {
    if (activeCategory === 'todas') return true;
    return tip.category === activeCategory;
  });

  return (
    <section id="agricultura" className="py-8 border-t border-slate-200">
      {/* Section Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-1.5 border border-emerald-200">
          <Sprout className="w-3.5 h-3.5 text-emerald-600" />
          <span>Agrometeorologia Prática</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          🌱 Clima e Agricultura
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Orientações práticas para camponeses, agricultores familiares e associações produtivas baseadas nas condições climáticas de Moçambique.
        </p>
      </div>

      {/* Category selector pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Agri Tips Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card top badge & timing */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {tip.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {tip.timing}
                </span>
              </div>

              {/* Title and summary */}
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {tip.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100/80 mt-2">
                “{tip.summary}”
              </p>

              {/* Step details */}
              <div className="mt-3.5 space-y-1.5">
                <span className="text-xs font-bold text-slate-700 block">
                  Ações Recomendadas no Campo:
                </span>
                <ul className="space-y-1">
                  {tip.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Crops Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                <Wheat className="w-3 h-3 text-amber-600" /> Culturas:
              </span>
              {tip.recommendedCrops.map((crop, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Practical Agro-Climate Quick Matrix for Mozambique */}
      <div className="mt-6 bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-tight">
                Resumo por Zona Agroecológica de Moçambique
              </h4>
              <p className="text-xs text-emerald-200">
                Principais culturas e estratégias recomendadas por região
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white/10 p-3 rounded-lg border border-white/10">
            <span className="font-bold text-emerald-300 block mb-1">Zona Sul (Gaza, Inhambane, Maputo)</span>
            <p className="text-emerald-100 leading-relaxed">
              Foco em culturas resistentes à estiagem (mandioca, sorgo, feijão nhemba) e retenção hídrica em bacias e mulching.
            </p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg border border-white/10">
            <span className="font-bold text-emerald-300 block mb-1">Zona Centro (Zambézia, Sofala, Manica, Tete)</span>
            <p className="text-emerald-100 leading-relaxed">
              Drenagem de campos em planícies aluviais, cultivo de milho, arroz e hortícolas de alto rendimento nas terras altas.
            </p>
          </div>
          <div className="bg-white/10 p-3 rounded-lg border border-white/10">
            <span className="font-bold text-emerald-300 block mb-1">Zona Norte (Nampula, Cabo Delgado, Niassa)</span>
            <p className="text-emerald-100 leading-relaxed">
              Sementeira precoce de gergelim, algodão, leguminosas e milho, com aproveitamento pleno da estação chuvosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
