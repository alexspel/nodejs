// var printPrimeNumbers = require("./src/task1");
var { DateUtils, run } = require("./src/task2");
// // printPrimeNumbers(process.argv[2], process.argv[3]);

DateUtils.countdown(DateUtils.dateToSeconds(2021, 10, 2, 18, 45), 100);
DateUtils.countdown(DateUtils.dateToSeconds(2021, 10, 2, 18, 50), 1000);

run();
