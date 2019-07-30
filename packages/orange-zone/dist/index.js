"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zoneAwareAddEventListener_1 = require("./core/zoneAwareAddEventListener");
var zoneInit = function () {
    window.prototype.addEventListener = zoneAwareAddEventListener_1.zoneAwareAddEventListener;
};
