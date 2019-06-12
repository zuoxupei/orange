"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs-extra");
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
    Creator.prototype.templatePath = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var filepath = path.join.apply(this._rootPath, args);
        console.log(filepath);
        console.log(this._rootPath);
        return filepath;
    };
    Creator.prototype.destinationRoot = function (rootPath) {
        if (typeof rootPath === 'string') {
            this._destinationRoot = path.resolve(rootPath);
            if (!fs.existsSync(rootPath)) {
                fs.ensureDirSync(rootPath);
            }
            process.chdir(rootPath);
        }
        return this._destinationRoot || process.cwd();
    };
    Creator.prototype.destinationPath = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var filepath = path.join.apply(path, args);
        if (!path.isAbsolute(filepath)) {
            filepath = path.join(this.destinationRoot(), filepath);
        }
        console.log(filepath, '123123123');
        return filepath;
    };
    /**
     * 生成文件
     * @param templateUrl 模版路径
     * @param source 模版名称
     * @param dest 目标
     * @param data  数据
     * @param options 选项
     */
    Creator.prototype.template = function (templateUrl, source, dest, data, options) {
        try {
            this.fs.copyTpl(this.templatePath('templates', 'vue', source), this.destinationPath(dest), Object.assign({}, this, data), options);
            this.fs.commit(function () {
                console.log('123');
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return Creator;
}());
exports.default = Creator;
