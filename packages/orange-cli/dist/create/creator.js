"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var memFs = require("mem-fs");
var editor = require("mem-fs-editor");
var util_1 = require("../util");
var Creator = /** @class */ (function () {
    function Creator() {
        var store = memFs.create();
        this.fs = editor.create(store);
        this._rootPath = this.sourceRoot(path.join(util_1.getRootPath()));
        this.init();
    }
    Creator.prototype.init = function () { };
    Creator.prototype.sourceRoot = function (rootPath) {
        return path.resolve(rootPath);
    };
    return Creator;
}());
exports.default = Creator;
