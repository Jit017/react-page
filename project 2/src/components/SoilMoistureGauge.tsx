import React from 'react';
import { Droplets } from 'lucide-react';

interface SoilMoistureGaugeProps {
  value: number;
}

export const SoilMoistureGauge: React.FC<SoilMoistureGaugeProps> = ({ value }) => {
  const percentage = Math.min(Math.max(value, 0), 100);
  
  return (
    <div className="relative w-full h-32 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="absolute bottom-0 left-0 w-full bg-blue-500 transition-all duration-500"
        style={{ height: `${percentage}%` }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <Droplets className="w-8 h-8" />
        <span className="text-xl font-bold">{percentage}%</span>
        <span className="text-sm">Soil Moisture</span>
      </div>
    </div>
  );
};