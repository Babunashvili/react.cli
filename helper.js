var fs = require('fs');

module.exports.toCapitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports.removeDirectory = function (path) {
    fs.readdirSync(path).forEach(function (file, index) {
        var curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) {
            fs.readdirSync(curPath).forEach(function (file, index) {
                var curSubPath = curPath + "/" + file;
                if (fs.lstatSync(curSubPath).isDirectory()) {
                    fs.rmdirSync(curSubPath);
                } else {
                    fs.unlinkSync(curSubPath);
                }
            });
            fs.rmdirSync(curPath);
        } else {
            fs.unlinkSync(curPath);
        }
    });
    fs.rmdirSync(path);
}

// Logger
module.exports.logger = function (type, msg) {
    var successColor = "\x1b[32m";
    var failColor = "\x1b[31m";

    if (type === 'success') {
        console.log(successColor, msg);
    } else if (type === 'fail') {
        console.log(failColor, msg);
    } else {
        console.log(msg);
    }
}