'use strict';

var fs = require('fs');
var colors = require('colors');

colors.setTheme({
    info: 'green',
    white: 'white',
    help: 'cyan',
    warn: 'yellow',
    error: 'red',
    bgRed: 'bgRed',
    bgGreen: 'bgGreen'
});

module.exports.toCapitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports.removeDirectory = function (path) {
    try {
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
        return {
            msg: '',
            success: true
        }
    } catch (err) {
        return {
            success: false,
            msg: err.message
        }
    }
}

// Logger
module.exports.logger = function (type, msg) {

    if (type === 'success') {
        console.log(' success '.bgGreen.white + ' ' + msg.info);
    } else if (type === 'fail') {
        console.log(' error '.bgRed.white + ' ' + msg.error);
    } else {
        console.log(msg);
    }
}