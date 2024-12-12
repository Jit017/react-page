import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const data = [
  { date: '2024-03-01', usage: 240 },
  { date: '2024-03-02', usage: 300 },
  { date: '2024-03-03', usage: 280 },
  { date: '2024-03-04', usage: 260 },
  { date: '2024-03-05', usage: 320 },
  { date: '2024-03-06', usage: 290 },
  { date: '2024-03-07', usage: 270 }
];

export const WaterUsageChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM d')}
          />
          <YAxis />
          <Tooltip 
            labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
            formatter={(value) => [`${value} L`, 'Water Usage']}
          />
          <Area 
            type="monotone" 
            dataKey="usage" 
            stroke="#2563eb" 
            fill="#3b82f6" 
            fillOpacity={0.2} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};