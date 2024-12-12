import React from 'react';
import { AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface InsightCardProps {
  title: string;
  message: string;
  type: 'warning' | 'success' | 'info';
}

export const InsightCard: React.FC<InsightCardProps> = ({ title, message, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-amber-500" />;
      case 'success':
        return <TrendingUp className="w-6 h-6 text-green-500" />;
      case 'info':
        return <TrendingDown className="w-6 h-6 text-blue-500" />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'warning':
        return 'border-amber-200 bg-amber-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className={`p-4 border rounded-lg ${getColorClass()}`}>
      <div className="flex items-center space-x-3">
        {getIcon()}
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};