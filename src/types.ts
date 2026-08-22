export type Region = 'Todas' | 'Norte' | 'Centro' | 'Sul';

export type WeatherCondition =
  | 'Ensolarado'
  | 'Parcialmente nublado'
  | 'Nublado'
  | 'Chuva fraca'
  | 'Chuva moderada'
  | 'Chuva forte'
  | 'Trovoadas'
  | 'Céu limpo';

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: WeatherCondition;
  rainProb: number;
}

export interface DailyForecast {
  day: string;
  tempMax: number;
  tempMin: number;
  condition: WeatherCondition;
  rainProb: number;
}

export interface ProvinceWeather {
  id: string;
  name: string;
  capital: string;
  region: 'Norte' | 'Centro' | 'Sul';
  temp: number;
  tempMax: number;
  tempMin: number;
  condition: WeatherCondition;
  humidity: number; // in %
  rainProb: number; // in %
  windSpeed: number; // in km/h
  windDirection: string;
  feelsLike: number; // in °C
  pressure: number; // in hPa
  uvIndex: number;
  description: string;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
}

export type AlertLevel = 'info' | 'warning' | 'danger';

export interface WeatherAlert {
  id: string;
  level: AlertLevel;
  title: string;
  description: string;
  regions: string[];
  issuedAt: string;
  expiresAt: string;
  instructions: string[];
}

export interface AgriTip {
  id: string;
  category: 'plantio' | 'chuvas' | 'seca' | 'pragas' | 'agua';
  categoryLabel: string;
  title: string;
  summary: string;
  details: string[];
  recommendedCrops: string[];
  timing: string;
}

export interface ExtremeEvent {
  id: string;
  type: 'ciclone' | 'tempestade' | 'chuva' | 'calor' | 'seca';
  title: string;
  status: string;
  severity: 'normal' | 'moderado' | 'alto';
  summary: string;
  safetyTips: string[];
}
