import { format, addDays } from 'date-fns';

export const EXISTING_BOOKINGS = [
  {
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '08:00',
    endTime: '12:00'
  },
  {
    date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    startTime: '13:00',
    endTime: '17:00'
  }
];
