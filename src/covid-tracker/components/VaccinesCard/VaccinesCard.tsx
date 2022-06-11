import { VaccinesCardProps } from './VaccinesCard.props';
import { Bar } from 'react-chartjs-2';
import { generateGradient } from '../../utils/generateGradient';
import { formatNumber } from '../../utils/formatNumber';
import { ScriptableContext } from 'chart.js';

export const VaccinesCard = ({ data }: VaccinesCardProps) => {
  return (
    <div className="card">
      <div className="card__header">
        <p>
          <b>Fully vaccinated:</b> {formatNumber(data?.people_vaccinated)}
        </p>
        <p>
          <b>Partially vaccinated:</b> {formatNumber(data?.people_partially_vaccinated)}
        </p>
      </div>
      <Bar
        data={{
          labels: ['Population', 'Fully vaccinated', 'Partially vaccinated'],
          datasets: [
            {
              label: '',
              indexAxis: 'y',
              data: [
                data?.population,
                data?.people_partially_vaccinated,
                data?.people_vaccinated,
              ],
              // @ts-ignore
              backgroundColor: (context: ScriptableContext<'line'>) => {
                return [
                  generateGradient(context, [0, 80, 179]),
                  generateGradient(context, [35, 120, 4]),
                  generateGradient(context, [149, 222, 100]),
                ];
              },
              borderWidth: 0,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
