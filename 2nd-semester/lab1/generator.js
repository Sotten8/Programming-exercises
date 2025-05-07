'use strict';

const WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekGen = function* (array) {
  let day = 0;
  while (true) {
    yield array[day++];
    day = day++ % array.length;
  }
};

const weekIter = weekGen(WEEK);
const weekDay = weekIter[Symbol.iterator]();
// const mon = weekDay.next();
// const tue = weekDay.next();
// const wed = weekDay.next();
// const thu = weekDay.next();
// const fri = weekDay.next();
// const sat = weekDay.next();
// const sun = weekDay.next();
// const monday = weekDay.next();
// console.log({ mon, tue, wed, thu, fri, sat, sun, monday });

// const print = async (ms) => {
//   for (let i = 0; i <= 13; i++) {
//     await new Promise((resolve) => setTimeout(resolve, ms));
//     console.log(weekDay.next().value);
//   }
// };

// print(1000);

const printDay = async (ms) => {
  for (const day of weekIter) {
    await new Promise((resolve) => setTimeout(resolve, ms));
    console.log(day);
  }
};

printDay(1000);
