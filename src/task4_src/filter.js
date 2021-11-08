const { Transform } = require("stream");
const colors = require("colors");
class Filter extends Transform {
  constructor(regexp) {
    super({
      readableObjectMode: true,
      writableObjectMode: true,
    });
    this.rxp = regexp;
  }

  _transform(chunk, encoding, next) {
    if (chunk.match(this.rxp)) {
      return next(null, colors.red(chunk));
    }
    next(null, chunk);
  }
}

module.exports = Filter;
