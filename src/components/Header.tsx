import React, { useState } from 'react';
import { CloudSun, Menu, X, Zap, MapPin, AlertTriangle, Sprout, Wind, Info } from 'lucide-react';

interface HeaderProps {
  currentDate: string;
}

export const Header: React.FC<HeaderProps> = ({ currentDate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início', icon: CloudSun },
    { href: '#previsao', label: 'Previsão', icon: MapPin },
    { href: '#provincias', label: 'Províncias', icon: MapPin },
    { href: '#alertas', label: 'Alertas', icon: AlertTriangle },
    { href: '#agricultura', label: 'Agricultura', icon: Sprout },
    { href: '#fenomenos', label: 'Fenómenos', icon: Wind },
    { href: '#sobre', label: 'Sobre', icon: Info },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="inicio" className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sky-100 shadow-xs">
      {/* Top micro banner for low-data indicator and date */}
      <div className="bg-sky-900 text-sky-100 text-xs px-3 py-1.5 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-1.5 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Clima MZ • Informação Meteorológica & Agrícola</span>
        </div>
        <div className="flex items-center gap-3 text-sky-200">
          <span className="hidden sm:inline">Moçambique (CAT / GMT+2)</span>
          <span className="font-semibold text-white">{currentDate}</span>
          <span className="bg-sky-800 text-sky-200 px-2 py-0.5 rounded text-[11px] font-normal">
            Modo Leve
          </span>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-sm group-hover:bg-sky-700 transition-colors">
            <CloudSun className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight text-slate-900">
                Clima <span className="text-sky-600">MZ</span>
              </span>
              <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                Moçambique
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-tight hidden xs:block">
              Tempo, Alertas & Agricultura
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 transition-colors flex items-center gap-1.5"
              >
                <Icon className="w-4 h-4 text-sky-600" />
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="btn-mobile-menu"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            className="p-2.5 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-sky-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden border-t border-sky-100 bg-white px-4 py-3 shadow-lg transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-700 flex items-center gap-3 active:bg-sky-100"
                >
                  <div className="w-8 h-8 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>Versão 1.0 • Ultra Leve</span>
            <span className="text-emerald-700 font-medium flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Baixo Consumo 3G/4G
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
