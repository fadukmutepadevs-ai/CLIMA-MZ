import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, ShieldAlert, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { WeatherAlert, AlertLevel } from '../types';

interface AlertsSectionProps {
  alerts: WeatherAlert[];
}

export const AlertsSection: React.FC<AlertsSectionProps> = ({ alerts }) => {
  const [filterLevel, setFilterLevel] = useState<string>('todos');

  const filteredAlerts = alerts.filter((alert) => {
    if (filterLevel === 'todos') return true;
    return alert.level === filterLevel;
  });

  const getAlertBadge = (level: AlertLevel) => {
    switch (level) {
      case 'danger':
        return {
          bg: 'bg-rose-50 border-rose-200 text-rose-800',
          badgeBg: 'bg-rose-600 text-white',
          borderLeft: 'border-l-4 border-l-rose-600',
          icon: ShieldAlert,
          label: 'ALERTA MÁXIMO',
        };
      case 'warning':
        return {
          bg: 'bg-amber-50 border-amber-200 text-amber-900',
          badgeBg: 'bg-amber-500 text-white',
          borderLeft: 'border-l-4 border-l-amber-500',
          icon: AlertTriangle,
          label: 'ATENÇÃO',
        };
      case 'info':
      default:
        return {
          bg: 'bg-sky-50 border-sky-200 text-sky-900',
          badgeBg: 'bg-sky-600 text-white',
          borderLeft: 'border-l-4 border-l-sky-600',
          icon: Info,
          label: 'INFORMAÇÃO',
        };
    }
  };

  return (
    <section id="alertas" className="py-8 border-t border-slate-200">
      {/* Section Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md mb-1.5 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Vigilância Meteorológica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ⚠️ Alertas Climáticos
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Avisos oficiais simplificados classificados por nível de risco para proteger comunidades e culturas.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 self-start">
          <button
            type="button"
            onClick={() => setFilterLevel('todos')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
              filterLevel === 'todos' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Todos ({alerts.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterLevel('danger')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors flex items-center gap-1 ${
              filterLevel === 'danger' ? 'bg-rose-600 text-white shadow-xs' : 'text-rose-700 hover:bg-rose-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Alerta
          </button>
          <button
            type="button"
            onClick={() => setFilterLevel('warning')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors flex items-center gap-1 ${
              filterLevel === 'warning' ? 'bg-amber-600 text-white shadow-xs' : 'text-amber-800 hover:bg-amber-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Atenção
          </button>
          <button
            type="button"
            onClick={() => setFilterLevel('info')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors flex items-center gap-1 ${
              filterLevel === 'info' ? 'bg-sky-600 text-white shadow-xs' : 'text-sky-800 hover:bg-sky-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            Informação
          </button>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => {
          const styling = getAlertBadge(alert.level);
          const Icon = styling.icon;

          return (
            <div
              key={alert.id}
              className={`bg-white rounded-xl border p-4 sm:p-5 shadow-2xs ${styling.borderLeft} border-slate-200`}
            >
              {/* Alert Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-black tracking-wider px-2 py-0.5 rounded uppercase ${styling.badgeBg}`}>
                    {styling.label}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {alert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {alert.issuedAt}
                  </span>
                  <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    {alert.expiresAt}
                  </span>
                </div>
              </div>

              {/* Alert description */}
              <div className="mt-3">
                <p className="text-sm font-medium text-slate-800">
                  {alert.description}
                </p>

                {/* Regions Affected */}
                <div className="mt-2.5 flex items-center gap-1.5 flex-wrap text-xs">
                  <span className="font-bold text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> Áreas Afetadas:
                  </span>
                  {alert.regions.map((reg, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-800 font-semibold px-2 py-0.5 rounded border border-slate-200"
                    >
                      {reg}
                    </span>
                  ))}
                </div>

                {/* Precautions instructions */}
                <div className="mt-3.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1.5">
                    Recomendações e Medidas Preventivas:
                  </span>
                  <ul className="space-y-1">
                    {alert.instructions.map((inst, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
