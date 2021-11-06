import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const formatDateString = (dateString: string): string => {
  return dayjs(dateString, 'DD-MM-YYYY').format('D MMMM YYYY');
};
