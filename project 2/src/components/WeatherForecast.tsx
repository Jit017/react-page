import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

const forecasts = [
  { day: 'Today', temp: 28, condition: 'sunny' },
  { day: 'Tomorrow', temp: 25, condition: 'cloudy' },
  { day: 'Wed', temp: 22, condition: 'rainy' },
  { day: 'Thu', temp: 26, condition: 'sunny' },
  { day: 'Fri', temp: 24, condition: 'cloudy' }
];

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition) {
    case 'sunny':
      return <Sun className="w-8 h-8 text-yellow-500" />;
    case 'cloudy':
      return <Cloud className="w-8 h-8 text-gray-500" />;
    case 'rainy':
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    default:
      return null;
  }
};

export const WeatherForecast: React.FC = () => {
  return (
    <div className="flex justify-between space-x-4">
      {forecasts.map((forecast, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <span className="text-sm font-medium text-gray-600">{forecast.day}</span>
          <WeatherIcon condition={forecast.condition} />
          <span className="text-lg font-bold">{forecast.temp}°C</span>
        </div>
      ))}
    </div>
  );
};