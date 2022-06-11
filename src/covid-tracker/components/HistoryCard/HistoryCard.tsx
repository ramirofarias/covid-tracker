import { HistoryCardProps } from './HistoryCard.props';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables, ScriptableContext } from 'chart.js';
import './HistoryCard.scss';
ChartJS.register(...registerables);

export const HistoryCard = ({ data, label, color }: HistoryCardProps) => {
  const dates = Object.keys(data!.dates).reverse();
  const amounts = Object.values(data!.dates).reverse();

  return (
    <div className="history-card">
      <Line
        data={{
          labels: dates,

          datasets: [
            {
              label,
              showLine: false,
              pointStyle: 'cross',
              borderWidth: 0,
              backgroundColor: (context: ScriptableContext<'line'>) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},1)`);
                gradient.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},0.4)`);
                return gradient;
              },
              data: amounts,
              fill: true,
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks: {
                color: 'white',
                font: {
                  size: 12,
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: 'white',
                font: {
                  size: 10,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
