import { Doughnut } from 'react-chartjs-2';
import { CasesCardProps } from './CasesCard.props';
import './CasesCard.scss';
import { generateGradient } from '../../utils/generateGradient';
import { formatNumber } from '../../utils/formatNumber';
import { ScriptableContext } from 'chart.js';

function getInfectionsPer100k(population: number, infections: number) {
  return formatNumber(Math.round(infections / (population / 100000)));
}

export const CasesCard = ({ data }: CasesCardProps) => {
  return (
    <div className="card">
      <div className="card__header">
        <p>
          <b>Cases:</b> {formatNumber(data?.confirmed)}
        </p>
        <p>
          <b>Deaths:</b> {formatNumber(data?.deaths)}
        </p>
        <p>
          <b>Recovered:</b> {formatNumber(data?.recovered)}
        </p>
        <p>
          <b>Infections per 100.000:</b>{' '}
          {getInfectionsPer100k(data!.population, data!.confirmed)}
        </p>
      </div>
      <div className="card__chart">
        <Doughnut
          data={{
            labels: ['Cases', 'Deaths', 'Recovered'],
            datasets: [
              {
                data: [data?.confirmed, data?.deaths, data?.recovered],
                // @ts-ignore
                backgroundColor: (context: ScriptableContext<'doughnut'>) => {
                  return [
                    generateGradient(context, [24, 144, 255]),
                    generateGradient(context, [245, 34, 45]),
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
    </div>
  );
};
