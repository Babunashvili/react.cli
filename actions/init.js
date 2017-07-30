'use strict';

const nodegit = require('nodegit'),
    path = require('path');

const url = "https://github.com/david-babunashvili/React-Redux-Boilerplate.git",
    local = "./",
    cloneOpts = {};

module.exports = function () {
    nodegit.Clone(url, local, cloneOpts).then(function (repo) {
        console.log("Cloned " + path.basename(url) + " to " + repo.workdir());
    }).catch(function (err) {
        console.log(err);
    });
}