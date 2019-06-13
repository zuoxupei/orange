"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InsFactory = [];
function InjectIns() {
    return function (target) {
        InsFactory.push(new target());
    };
}
exports.InjectIns = InjectIns;
function Autowired(type) {
    return function (target, propertyName) {
        var ins = InsFactory.find(function (ins) { return ins instanceof type; });
        if (ins) {
            target[propertyName] = ins;
        }
        else {
            console.log("\u8BF7\u6CE8\u5165" + type);
        }
    };
}
exports.Autowired = Autowired;
