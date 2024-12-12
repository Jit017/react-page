import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AnomalyAlertProps {
  anomalies: {
    timestamp: string;
    type: string;
    severity: 'low' | 'medium' | 'high';
    message: string;
  }[];
}

export const AnomalyAlert: React.FC<AnomalyAlertProps> = ({ anomalies }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      {anomalies.map((anomaly, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg flex items-start space-x-3 ${getSeverityColor(anomaly.severity)}`}
        >
          <AlertTriangle className="w-5 h-5 mt-0.5" />
          <div>
            <div className="font-semibold">{anomaly.type}</div>
            <div className="text-sm">{anomaly.message}</div>
            <div className="text-xs mt-1 opacity-75">{anomaly.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};