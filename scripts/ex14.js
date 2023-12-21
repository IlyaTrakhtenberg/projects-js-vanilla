import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isSatSun from './is-weekend.js';
const today = dayjs();
console.log(today.add(5,'days').format('MMMM, DD'));
console.log(today.add(1,'months').format('MMMM, DD'));
console.log(today.subtract(1,'months').format('MMMM, DD'));
console.log(today.format('dddd'));
console.log(isSatSun(today));
console.log(isSatSun(today.add(2,'days')));