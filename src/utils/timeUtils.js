import * as moment from 'moment';
import 'moment/locale/ru';

export function formatTime(millis) {
  const hours = Math.floor(millis / 3600);
  let minutes = Math.floor((millis - hours * 3600) / 60);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export function isOpen(workFromMillis, workTillMillis) {
  const currentDateTime = new Date();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  const currentTime = hours * 3600 + minutes * 60;

  return currentTime >= workFromMillis && currentTime < workTillMillis;
}

export const convertMilisToHours = milis => milis / (60 * 60 * 1000);
export const convertTimestampToDate = timestamp => {
  moment.locale('ru');
  return moment.unix(timestamp).format('hh:mm DD/MM/YYYY');
};
