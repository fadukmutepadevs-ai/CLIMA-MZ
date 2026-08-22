import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroForecast } from './components/HeroForecast';
import { ProvincesSection } from './components/ProvincesSection';
import { AlertsSection } from './components/AlertsSection';
import { AgricultureSection } from './components/AgricultureSection';
import { CyclonesSection } from './components/CyclonesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { 
  PROVINCES_DATA, 
  WEATHER_ALERTS, 
  AGRI_TIPS 
} from './data/mockWeatherData';

export default function App() {
  // Default featured location: Quelimane, Zambézia as requested
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('zambezia');

  // Format today's date in Mozambican Portuguese format
  const currentDateFormatted = useMemo(() => {
    const now = new Date();
    return new Intl.DateTimeFormat('pt-MZ', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(now);
  }, []);

  const currentProvince = useMemo(() => {
    return PROVINCES_DATA.find((p) => p.id === selectedProvinceId) || PROVINCES_DATA[0];
  }, [selectedProvinceId]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* 1. CABEÇALHO */}
      <Header currentDate={currentDateFormatted} />

      {/* Main One Page Layout Container */}
      <main className="grow max-w-6xl w-full mx-auto px-4 sm:px-6">
        {/* 2. PREVISÃO EM DESTAQUE */}
        <HeroForecast
          currentProvince={currentProvince}
          allProvinces={PROVINCES_DATA}
          onSelectProvince={setSelectedProvinceId}
        />

        {/* 3. INFORMAÇÕES POR PROVÍNCIA */}
        <ProvincesSection
          provinces={PROVINCES_DATA}
          selectedProvinceId={selectedProvinceId}
          onSelectProvince={setSelectedProvinceId}
        />

        {/* 4. ALERTAS CLIMÁTICOS */}
        <AlertsSection alerts={WEATHER_ALERTS} />

        {/* 5. AGRICULTURA */}
        <AgricultureSection tips={AGRI_TIPS} />

        {/* 6. CICLONES E FENÓMENOS EXTREMOS */}
        <CyclonesSection />

        {/* 7. SOBRE */}
        <AboutSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
