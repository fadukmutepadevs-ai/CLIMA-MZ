import React, { useState, useMemo } from 'react';
import { MapPin, Search, CloudRain, Droplets, Wind, ArrowRight, Check } from 'lucide-react';
import { ProvinceWeather, Region } from '../types';

interface ProvincesSectionProps {
  provinces: ProvinceWeather[];
  selectedProvinceId: string;
  onSelectProvince: (id: string) => void;
}

export const ProvincesSection: React.FC<ProvincesSectionProps> = ({
  provinces,
  selectedProvinceId,
  onSelectProvince,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const regions: Region[] = ['Todas', 'Sul', 'Centro', 'Norte'];

  const filteredProvinces = useMemo(() => {
    return provinces.filter((p) => {
      const matchesRegion = selectedRegion === 'Todas' || p.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.capital.toLowerCase().includes(q) ||
        p.condition.toLowerCase().includes(q);

      return matchesRegion && matchesSearch;
    });
  }, [provinces, selectedRegion, searchQuery]);

  return (
    <section id="provincias" className="py-8 border-t border-slate-200">
      {/* Section Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md mb-1.5 border border-sky-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Panorama Nacional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            📍 Clima em Moçambique
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Consulte a temperatura, estado do tempo e probabilidade de chuva nas 11 províncias moçambicanas.
          </p>
        </div>

        {/* Region filter tabs & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar província..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-48 pl-9 pr-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Region chips */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                  selectedRegion === region
                    ? 'bg-sky-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Provinces Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
        {filteredProvinces.map((prov) => {
          const isSelected = prov.id === selectedProvinceId;
          const isHot = prov.temp >= 33;
          const hasRain = prov.rainProb >= 40;

          return (
            <div
              key={prov.id}
              className={`bg-white rounded-xl p-4 border transition-all duration-150 flex flex-col justify-between relative ${
                isSelected
                  ? 'border-sky-500 ring-2 ring-sky-500/20 shadow-sm bg-sky-50/30'
                  : 'border-slate-200 hover:border-sky-300 hover:shadow-xs'
              }`}
            >
              <div>
                {/* Top header of card */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {prov.capital}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {prov.name}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      prov.region === 'Norte'
                        ? 'bg-amber-100 text-amber-800'
                        : prov.region === 'Centro'
                        ? 'bg-teal-100 text-teal-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}
                  >
                    {prov.region}
                  </span>
                </div>

                {/* Main temp and condition */}
                <div className="flex items-baseline justify-between my-2">
                  <div>
                    <span className="text-3xl font-black text-slate-900 tracking-tight">
                      {prov.temp}°C
                    </span>
                    <div className="text-xs text-slate-500 font-medium">
                      {prov.tempMax}° / {prov.tempMin}°
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold text-sky-800 block truncate max-w-[130px]">
                      {prov.condition}
                    </span>
                    <span
                      className={`text-[11px] font-medium inline-flex items-center gap-1 ${
                        hasRain ? 'text-cyan-700 font-bold' : 'text-slate-500'
                      }`}
                    >
                      <CloudRain className="w-3 h-3 text-cyan-600" /> {prov.rainProb}% chuva
                    </span>
                  </div>
                </div>

                {/* Sub details: wind and humidity */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg mt-2 border border-slate-100">
                  <div className="flex items-center gap-1 truncate">
                    <Wind className="w-3 h-3 text-slate-400" />
                    <span>{prov.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center gap-1 truncate">
                    <Droplets className="w-3 h-3 text-sky-500" />
                    <span>Hum: {prov.humidity}%</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                {isSelected ? (
                  <span className="text-xs font-bold text-sky-700 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Selecionado no Topo
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      onSelectProvince(prov.id);
                      // Smooth scroll to hero section
                      const heroElem = document.getElementById('previsao');
                      if (heroElem) {
                        heroElem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full text-xs font-bold text-sky-700 hover:text-sky-900 hover:bg-sky-50 py-1 px-2 rounded flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Ver no Destaque</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredProvinces.length === 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-600">
          <p className="font-semibold text-slate-800">Nenhuma província encontrada com esse filtro.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion('Todas');
              setSearchQuery('');
            }}
            className="mt-2 text-xs font-bold text-sky-600 hover:underline"
          >
            Limpar filtros de pesquisa
          </button>
        </div>
      )}
    </section>
  );
};
