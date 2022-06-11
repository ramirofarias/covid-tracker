import { HistoryCardProps } from './HistoryCard.props';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

export const HistoryCard = ({ history, label }: HistoryCardProps) => {
  const dates = Object.keys(history.dates).reverse();
  const cases = Object.values(history.dates).reverse();

  return (
    <Line
      data={{
        labels: dates,
        datasets: [
          {
            label,
            backgroundColor: `${
              label === 'Total deaths' ? 'rgb(0, 0, 0)' : 'rgb(255, 99, 132)'
            }`,
            borderColor: `${
              label === 'Total deaths' ? 'rgb(0, 0, 0)' : 'rgb(255, 99, 132)'
            }`,
            data: cases,
          },
        ],
      }}
    />
  );
};
