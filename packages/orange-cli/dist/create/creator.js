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
        var filepath = path.join.apply(path, args);
        filepath = path.join(this._rootPath, 'templates', filepath);
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
        return filepath;
    };
    Creator.prototype.configPath = function (args) {
        var filepath = path.join(args);
        if (!path.isAbsolute(filepath)) {
            filepath = path.join(process.cwd(), filepath);
        }
        return filepath;
    };
    Creator.prototype.initConfig = function (data) {
        if (data.config) {
            data.isConfig = true;
            var path_1 = this.configPath(data.config);
            try {
                var res = fs.readFileSync(path_1, { encoding: 'utf8' });
                data.configData = JSON.parse(res);
            }
            catch (e) {
                data.isConfig = false;
            }
        }
        else {
            data.isConfig = false;
        }
    };
    /**
     * 生成文件
     * @param templateDir 模版文件夹
     * @param source 模版名称
     * @param dest 目标
     * @param data  数据
     * @param cb 回调函数
     */
    Creator.prototype.template = function (templateDir, source, dest, data, cb) {
        try {
            this.fs.copyTpl(this.templatePath(templateDir, source), this.destinationPath(dest), Object.assign({}, this, data));
            this.fs.commit(function () {
                cb();
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return Creator;
}());
exports.default = Creator;
