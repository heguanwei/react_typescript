const path = require("path");
const fs = require("fs");
const os = require("os");
const appDirectory = fs.realpathSync(process.cwd());
console.log(appDirectory, '--------------------appDirectory');
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    appSrc: resolveApp("src"),
}