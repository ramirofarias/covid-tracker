import { History } from '../../api/interfaces/history.interface';

export interface HistoryCardProps {
  data?: History;
  label?: 'Total cases' | 'Total deaths';
  color: number[];
}
