import { HistoryCardProps } from './HistoryCard.props';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

export const HistoryCard = ({ data, label, color }: HistoryCardProps) => {
  const dates = Object.keys(data!.dates).reverse();
  const amounts = Object.values(data!.dates).reverse();

  return (
    <Line
      data={{
        labels: dates,

        datasets: [
          {
            label,
            showLine: false,
            backgroundColor: color,
            data: amounts,
            fill: true,
          },
        ],
      }}
      options={{
        scales: {
          y: {
            ticks: {
              color: 'white',
              font: {
                size: 14,
              },
            },
          },
          x: {
            ticks: {
              color: 'white',
              font: {
                size: 14,
              },
            },
          },
        },
      }}
    />
  );
};
