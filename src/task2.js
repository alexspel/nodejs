const MyTimerEmitter = require("./task2_src/mytimeremitter");
const { Handler } = require("./task2_src/handler");

const mte = new MyTimerEmitter();
mte.on('tik', Handler.tik);
mte.on('finish', Handler.finish);

class DateUtils {

    static secondsToDate(seconds) {
        var t = new Date(1970, 0, 1);
        t.setSeconds(seconds);
        return t;
    }
 
    static dateToSeconds(y, m, d, h = 0, mm = 0) { 
        return new Date(y, m, d, h, mm).getTime() / 1000;
    }

    static countdown(destinationTime, d) {
        return setTimeout(() => {
            var currentTime = Math.floor(new Date().getTime() / 1000);
            var timeLeft = destinationTime - currentTime;
            var destinationDate = DateUtils.secondsToDate(destinationTime);
            var destinationDateString = destinationDate.toLocaleString();
            if (timeLeft > 0) {
                mte.emit("tik", `${destinationDateString} left ${timeLeft} seconds`);
                DateUtils.countdown(destinationTime, d);
            } else {
                mte.emit("finish", `${destinationDateString} finished`);
            }
        }, d);
    }
}

const delay = (ms = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
}

const run = async () => {
    await delay(100);
    run();
}

module.exports = { run, DateUtils }