import { VaccinesCardProps } from './VaccinesCard.props';

export const VaccinesCard = ({ data }: VaccinesCardProps) => {
  return (
    <div>
      <p>Population: {data?.population}</p>
      <p>Fully Vaccinated: {data?.people_vaccinated}</p>
      <p>Partially Vaccinated: {data?.people_partially_vaccinated}</p>
    </div>
  );
};
