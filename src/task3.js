const fs = require('fs');
const { EOL } = require('os');
const path = require('path')

// var filename = "/web/access.log";
// var ips = ["89\.123\.1\.41", "34\.48\.240\.111"];
function task3(filename, ips) {
    
    var readStream = fs.createReadStream(filename, { encoding: 'utf8' });

    var buf = "";

    function appendDataToFile(file, data) {
        const writeStream = fs.createWriteStream(file, { flags: 'a', encoding: 'utf8' });
        writeStream.write(data);
        writeStream.end();
    }
    function requestHandler(request) {
        ips.forEach((ip) => {
            if (request.match(ip)) {
                appendDataToFile(path.join(__dirname, `${ip}_request.log`), request);
            }
        });
    }
    function dataHandler(chunk) {
        buf += chunk.toString();
        if (buf.indexOf(EOL) >= 0) {
            var request = buf.slice(0, buf.indexOf(EOL) + 1);
            requestHandler(request)
            buf = buf.slice(buf.indexOf(EOL) + 1);
        }
    }
    readStream.on("data", dataHandler);
}

module.exports = task3;