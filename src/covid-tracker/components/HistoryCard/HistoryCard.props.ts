import { History } from '../../api/interfaces/history.interface';

export interface HistoryCardProps {
  history: History;
  label: 'Total cases' | 'Total deaths';
}
