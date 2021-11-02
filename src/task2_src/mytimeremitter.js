const EventEmitter = require('events');
class MyTimerEmitter extends EventEmitter {
    constructor() {
        super();
    }
}

module.exports = MyTimerEmitter;