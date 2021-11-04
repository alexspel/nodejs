// var printPrimeNumbers = require("./src/task1");
// var { DateUtils, run } = require("./src/task2");
// // printPrimeNumbers(process.argv[2], process.argv[3]);

// if (process.argv.length > 2) {
//     var timers = [];
//     for (var i = 2; i < process.argv.length; i++) {
//         var date = new Date(process.argv[i]);
//         if (date == "Invalid Date") {
//             continue;
//         }
//         timersStarted = true;
//         timers.push(
//             DateUtils.countdown(
//                 DateUtils.dateToSeconds(
//                     date.getFullYear(),
//                     date.getMonth(),
//                     date.getDate(),
//                     date.getHours()
//                 ), 1000
//             )
//         );
//     }
//     if (timers.length > 0) {
//         run();
//     } else {
//         console.log("no timers started");
//     }
// } 


var task3 = require("./src/task3");


task3("./access.log", ["89\.123\.1\.41", "34\.48\.240\.111"]);