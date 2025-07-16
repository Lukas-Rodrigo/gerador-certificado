import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export function formatLocalDate(date: Date): string {
  return format(date, "MM/dd/yyyy", {locale: ptBR});
}
