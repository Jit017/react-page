import * as tf from '@tensorflow/tfjs';

export const detectAnomalies = (data: number[], threshold: number = 2): number[] => {
  const tensor = tf.tensor1d(data);
  const mean = tensor.mean();
  const std = tf.sqrt(tensor.sub(mean).square().mean());
  
  const zScores = tensor.sub(mean).div(std);
  const anomalies = zScores.abs().greater(threshold);
  
  return anomalies.arraySync() as number[];
};