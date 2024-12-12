import React, { useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

interface DashboardItem {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface CustomizableDashboardProps {
  items: DashboardItem[];
}

export const CustomizableDashboard: React.FC<CustomizableDashboardProps> = ({ items }) => {
  const [layout, setLayout] = useState(
    items.map((item, i) => ({
      i: item.id,
      x: i % 3,
      y: Math.floor(i / 3),
      w: 1,
      h: 2,
      minW: 1,
      maxW: 3,
      minH: 2,
      maxH: 4
    }))
  );

  return (
    <div className="w-full">
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={3}
        rowHeight={150}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        isDraggable
        isResizable
        margin={[16, 16]}
      >
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm overflow-hidden">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            {item.component}
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};