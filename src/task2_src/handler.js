const colors = require("colors/safe");
class Handler {
    static tik(payload) {
        Handler.log(colors.green(`${payload}`));
    }
    static finish(payload) {
        Handler.log(colors.red(`${payload}`));
    }
    static log(payload) {
        console.log(payload);
    }
}

module.exports = {
    Handler
}