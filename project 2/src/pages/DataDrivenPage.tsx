import React, { useState } from 'react';
import { WaterUsageChart } from '../components/WaterUsageChart';
import { SoilMoistureGauge } from '../components/SoilMoistureGauge';
import { WeatherForecast } from '../components/WeatherForecast';
import { InsightCard } from '../components/InsightCard';
import { InteractiveMap } from '../components/InteractiveMap';
import { CustomizableDashboard } from '../components/CustomizableDashboard';
import { AnomalyAlert } from '../components/AnomalyAlert';
import { LineChart, BarChart, Settings, Map } from 'lucide-react';

export const DataDrivenPage: React.FC = () => {
  const [showCustomization, setShowCustomization] = useState(false);

  const dashboardItems = [
    {
      id: 'water-usage',
      title: 'Water Usage Trends',
      component: <WaterUsageChart />
    },
    {
      id: 'soil-moisture',
      title: 'Soil Moisture',
      component: <SoilMoistureGauge value={75} />
    },
    {
      id: 'weather',
      title: 'Weather Forecast',
      component: <WeatherForecast />
    }
  ];

  const anomalies = [
    {
      timestamp: '2024-03-10 14:30',
      type: 'Unusual Water Usage',
      severity: 'high',
      message: 'Detected 50% increase in water consumption in Field A'
    },
    {
      timestamp: '2024-03-10 12:15',
      type: 'Equipment Warning',
      severity: 'medium',
      message: 'Pump efficiency dropping in Zone 2'
    }
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Data-Driven Insights</h1>
              <p className="text-gray-600 mt-2">
                Monitor and optimize your water usage with real-time analytics and AI-powered predictions
              </p>
            </div>
            <button
              onClick={() => setShowCustomization(!showCustomization)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Settings className="w-5 h-5" />
              Customize Dashboard
            </button>
          </div>
        </header>

        {showCustomization ? (
          <CustomizableDashboard items={dashboardItems} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    Water Usage Trends
                  </h2>
                  <select className="border rounded-md px-3 py-1">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <WaterUsageChart />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Current Conditions</h2>
                <SoilMoistureGauge value={75} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  Water Usage Map
                </h2>
                <InteractiveMap />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Anomaly Detection</h2>
                <AnomalyAlert anomalies={anomalies} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">5-Day Weather Forecast</h2>
              <WeatherForecast />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InsightCard
                type="warning"
                title="High Usage Alert"
                message="Water usage is 20% higher than usual. Consider adjusting irrigation schedules."
              />
              <InsightCard
                type="success"
                title="Optimal Soil Conditions"
                message="Current soil moisture levels are ideal for your crops."
              />
              <InsightCard
                type="info"
                title="Weather Impact"
                message="Expected rainfall in the next 48 hours. Irrigation can be reduced."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Predictive Analytics
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Predicted Water Needs</h3>
                  <p className="text-3xl font-bold text-blue-600">285L</p>
                  <p className="text-sm text-gray-600">Forecasted for tomorrow</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Potential Savings</h3>
                  <p className="text-3xl font-bold text-green-600">15%</p>
                  <p className="text-sm text-gray-600">Based on current usage patterns</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};