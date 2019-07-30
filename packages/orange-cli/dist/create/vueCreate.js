"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var creator_1 = require("./creator");
var path = require('path');
var VueCreate = /** @class */ (function (_super) {
    __extends(VueCreate, _super);
    function VueCreate(options) {
        var _this = _super.call(this) || this;
        _this.rootPath = _this._rootPath;
        _this.conf = options;
        _this.initConfig(_this.conf);
        return _this;
    }
    VueCreate.prototype.create = function () {
    };
    VueCreate.prototype.createComponent = function () {
        console.log(this.conf);
        this.template(VueCreate.templateDir, VueCreate.templateComponent, path.join(this.conf.projectDir, this.conf.name + '.vue'), this.conf, function () {
            console.log('组件创建完成');
        });
    };
    VueCreate.prototype.createVuex = function () {
    };
    VueCreate.templateDir = 'vue';
    VueCreate.templateComponent = 'component';
    VueCreate.templateVuex = 'vuex';
    return VueCreate;
}(creator_1.default));
exports.default = VueCreate;
