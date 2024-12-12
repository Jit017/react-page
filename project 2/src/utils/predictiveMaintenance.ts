export interface Equipment {
  id: string;
  type: string;
  lastMaintenance: Date;
  readings: number[];
}

export const predictMaintenanceNeeded = (equipment: Equipment): boolean => {
  const daysSinceLastMaintenance = Math.floor(
    (new Date().getTime() - equipment.lastMaintenance.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  const recentReadings = equipment.readings.slice(-5);
  const averageReading = recentReadings.reduce((a, b) => a + b, 0) / recentReadings.length;
  
  return daysSinceLastMaintenance > 30 || averageReading > 85;
};