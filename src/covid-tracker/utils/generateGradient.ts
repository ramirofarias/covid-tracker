import { ScriptableContext } from 'chart.js';

export function generateGradient(context: ScriptableContext<any>, color: number[]) {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},1)`);
  gradient.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},0.7)`);
  return gradient;
}
