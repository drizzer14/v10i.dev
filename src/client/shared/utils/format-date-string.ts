import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const formatDateString = (dateString: string): string => {
  return dayjs(dateString).utc().format('D MMMM YYYY');
};
