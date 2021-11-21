const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Filter = require("./task4_src/filter");

const getDirectoryContent = async (directory) => {
    const itemsInDirectory = await new Promise((resolve) => {
        fs.readdir(directory, (err, data) => {
            resolve(data);
        });
    });

    var result = [];
    var root = path.parse(directory).root;
    result = root !== directory ? [".."] : [];
    return [...result, ...(itemsInDirectory ?? [])];
};

const promptUser = async (choices) => {
    const optionKey = "optionKey";

    const result = await inquirer.prompt([
        {
            name: optionKey,
            type: "list",
            message: "choose file: ",
            choices,
        },
    ]);

    return result[optionKey];
};

const showFileContents = async (filepath, regx) => {
    const filter = new Filter(regx);
    return new Promise((resolve) => {
        const stream = fs.createReadStream(filepath, "utf-8");
        stream.on("end", resolve);
        stream.pipe(filter).pipe(process.stdout);
    });
};

const browse = async (dir, str = null) => {
    const filesInCwd = await getDirectoryContent(dir);
    const userInput = await promptUser(filesInCwd);
    const userPath = path.join(dir, userInput);
    const stats = fs.lstatSync(userPath);
    if (stats.isFile()) {
        await showFileContents(userPath, str);
    }
    const nextDir = stats.isDirectory(userPath) ? userPath : dir;
    try {
        browse(nextDir, str);
    } catch {
        browse(dir, str);
    }
};

module.exports = browse;
