const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const http = require("http");
const url = require("url");
const { pipeline } = require('stream');

const server = http.createServer((req, res) => {
    var queryData = url.parse(req.url, true);
    var reqPath = queryData.path;
    var dir = path.join(process.cwd(), reqPath);
    if (fs.existsSync(dir)) {
        const stats = fs.lstatSync(dir);
        if (stats.isFile()) {
            const rs = fs.createReadStream(dir);
            rs.setEncoding("UTF8");
            rs.on("end", () => { res.end(); });
            pipeline(rs, res, () => { });
        }
        if (stats.isDirectory()) {
            var filesInCwd = fs.readdirSync(dir).map((f) => {
                var link = path.join(reqPath, f);
                return `<div><a href='${link}'>${link}</a></div>`;
            }).join("");
            res.write(filesInCwd);
            res.end();
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.write("404 Not Found\n");
        res.end();
    }

});

module.exports = { server };
