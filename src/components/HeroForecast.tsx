import React, { useState } from 'react';
import { 
  CloudSun, 
  Droplets, 
  CloudRain, 
  Wind, 
  Thermometer, 
  Sun, 
  Compass, 
  CalendarDays, 
  Clock, 
  RotateCw,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ProvinceWeather } from '../types';

interface HeroForecastProps {
  currentProvince: ProvinceWeather;
  allProvinces: ProvinceWeather[];
  onSelectProvince: (provinceId: string) => void;
}

export const HeroForecast: React.FC<HeroForecastProps> = ({
  currentProvince,
  allProvinces,
  onSelectProvince,
}) => {
  const [isReloading, setIsReloading] = useState(false);

  const handleReloadPage = () => {
    setIsReloading(true);
    // Instant feedback and full page reload
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  return (
    <section id="previsao" className="pt-6 pb-8">
      {/* Quick location switcher strip with Clima MZ Reload Button */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-sky-100 shadow-xs">
        {/* Clima MZ Button that serves to reload/refresh the entire page */}
        <button
          id="btn-reload-clima-mz"
          type="button"
          onClick={handleReloadPage}
          title="Clique para atualizar e recarregar toda a página"
          aria-label="Atualizar e recarregar a página Clima MZ"
          className="group inline-flex items-center gap-3 p-1.5 pr-3 rounded-xl bg-white hover:bg-sky-50/70 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {/* Blue Rounded App Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#006bb6] group-hover:bg-[#005a9c] flex items-center justify-center text-white shadow-xs transition-colors shrink-0">
            <CloudSun className={`w-6 h-6 text-white ${isReloading ? 'animate-spin' : 'group-hover:scale-105 transition-transform'}`} />
          </div>

          {/* Clima MZ Text & Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center text-xl tracking-tight leading-none">
              <span className="font-black text-slate-900">Clima</span>
              <span className="font-black text-[#0077c8] ml-1">MZ</span>
            </div>

            {/* MOÇAMBIQUE Pill */}
            <span className="bg-[#e1f0fa] text-[#005fa3] text-[11px] font-black px-2.5 py-1 rounded-md tracking-wider uppercase leading-none border border-sky-200/60">
              MOÇAMBIQUE
            </span>
          </div>

          {/* Update tooltip / icon */}
          <div className="flex items-center gap-1 text-[11px] font-semibold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md ml-1 group-hover:bg-sky-200 transition-colors">
            <RotateCw className={`w-3 h-3 text-sky-600 ${isReloading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            <span className="hidden xs:inline">Atualizar</span>
          </div>
        </button>

        {/* Location select dropdown */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
          <label htmlFor="province-quick-select" className="text-xs text-slate-600 font-medium whitespace-nowrap">
            Mudar localidade:
          </label>
          <select
            id="province-quick-select"
            value={currentProvince.id}
            onChange={(e) => onSelectProvince(e.target.value)}
            className="text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white cursor-pointer"
          >
            {allProvinces.map((p) => (
              <option key={p.id} value={p.id}>
                {p.capital} ({p.name}) — {p.temp}°C
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Highlight Card */}
      <div className="bg-gradient-to-b from-sky-600 via-sky-700 to-sky-800 text-white rounded-2xl p-5 sm:p-7 shadow-md relative overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          {/* Header row of card */}
          <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-white/15">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-medium text-sky-100 mb-1">
                <span>🌦️ Previsão Meteorológica Oficial</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {currentProvince.capital}
              </h1>
              <p className="text-sky-200 text-sm font-medium">
                Província de {currentProvince.name} • Região {currentProvince.region}
              </p>
            </div>

            <div className="text-right bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 text-xs text-sky-100 flex flex-col items-end">
              <span className="font-semibold text-white">Máx: {currentProvince.tempMax}°C</span>
              <span>Mín: {currentProvince.tempMin}°C</span>
            </div>
          </div>

          {/* Core Temperature and Condition Showcase */}
          <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 flex items-center gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-amber-300 border border-white/20 shadow-inner shrink-0">
                <CloudSun className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-black tracking-tight">
                    {currentProvince.temp}°
                  </span>
                  <span className="text-2xl font-light text-sky-200">C</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-sky-100 mt-0.5">
                  {currentProvince.condition}
                </p>
                <p className="text-xs sm:text-sm text-sky-200/90 leading-snug mt-1">
                  {currentProvince.description}
                </p>
              </div>
            </div>

            {/* Key Metrics Grid (4 Primary Factors) */}
            <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* Rain Probability */}
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/15">
                <div className="flex items-center gap-1.5 text-sky-200 text-xs font-medium mb-1">
                  <CloudRain className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Chuva</span>
                </div>
                <div className="text-lg font-black text-white">
                  {currentProvince.rainProb}%
                </div>
                <div className="text-[11px] text-sky-200">
                  {currentProvince.rainProb > 40 ? 'Provável' : 'Pouco provável'}
                </div>
              </div>

              {/* Humidity */}
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/15">
                <div className="flex items-center gap-1.5 text-sky-200 text-xs font-medium mb-1">
                  <Droplets className="w-3.5 h-3.5 text-sky-300" />
                  <span>Humidade</span>
                </div>
                <div className="text-lg font-black text-white">
                  {currentProvince.humidity}%
                </div>
                <div className="text-[11px] text-sky-200">
                  {currentProvince.humidity > 70 ? 'Elevada' : 'Normal'}
                </div>
              </div>

              {/* Wind */}
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/15">
                <div className="flex items-center gap-1.5 text-sky-200 text-xs font-medium mb-1">
                  <Wind className="w-3.5 h-3.5 text-teal-300" />
                  <span>Vento</span>
                </div>
                <div className="text-lg font-black text-white">
                  {currentProvince.windSpeed} <span className="text-xs font-normal">km/h</span>
                </div>
                <div className="text-[11px] text-sky-200 truncate">
                  {currentProvince.windDirection.split(' ')[0]}
                </div>
              </div>

              {/* Feels Like */}
              <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/15">
                <div className="flex items-center gap-1.5 text-sky-200 text-xs font-medium mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-rose-300" />
                  <span>Sensação</span>
                </div>
                <div className="text-lg font-black text-white">
                  {currentProvince.feelsLike}°C
                </div>
                <div className="text-[11px] text-sky-200">
                  UV: {currentProvince.uvIndex}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary tabs for Hourly & 3-Day Forecast */}
          <div className="pt-4 border-t border-white/15 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Hourly strip */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-200 mb-2.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Previsão para Hoje por Horário</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {currentProvince.hourly.map((h, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg p-2 text-center border border-white/10 flex flex-col items-center justify-between"
                  >
                    <span className="text-[11px] text-sky-200 font-medium">{h.time}</span>
                    <span className="text-sm font-bold text-white my-0.5">{h.temp}°</span>
                    <span className="text-[10px] text-cyan-200 flex items-center gap-0.5">
                      <Droplets className="w-2.5 h-2.5" /> {h.rainProb}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-day simplified trend */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-200 mb-2.5">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Próximos Dias em {currentProvince.capital}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {currentProvince.daily.map((d, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg p-2 text-center border border-white/10 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-bold text-white truncate">{d.day}</span>
                    <span className="text-xs font-medium text-sky-100 my-1 truncate">{d.condition}</span>
                    <div className="text-xs text-sky-200 font-semibold flex justify-center gap-1">
                      <span>{d.tempMax}°</span>
                      <span className="text-sky-300/70 font-normal">/ {d.tempMin}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
