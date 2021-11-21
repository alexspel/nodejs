const yargs = require("yargs");
const path = require("path");

const browse = require("./src/task4");

const options = yargs
    .usage("Usage: -p path")
    .option("p", {
        alias: "path",
        describe: "starting path",
        type: "string",
        default: process.cwd(),
        demandOption: true,
    })
    .option("s", {
        alias: "str",
        describe: "string to find",
        type: "string",
        default: null,
        demandOption: true,
    }).argv;

console.log(options);
browse(options.path, options.str);
