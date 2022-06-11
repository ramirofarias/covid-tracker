import { CasesCardProps } from './CasesCard.props';

function getInfectionsPer100k(population: number, infections: number) {
  return Math.round(infections / (population / 100000));
}

export const CasesCard = ({ data }: CasesCardProps) => {
  return (
    <div>
      <p>Cases: {data.confirmed}</p>
      <p>Deaths: {data.deaths}</p>
      <p>Recovered: {data.recovered}</p>
      <p>
        Infections per 100.000 people:{' '}
        {getInfectionsPer100k(data.population, data.confirmed)}
      </p>
    </div>
  );
};
