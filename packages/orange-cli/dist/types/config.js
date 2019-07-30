"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 组件类型
 */
var IItemType;
(function (IItemType) {
    IItemType[IItemType["input"] = 0] = "input";
    IItemType[IItemType["date"] = 1] = "date";
    IItemType[IItemType["select"] = 2] = "select";
})(IItemType || (IItemType = {}));
/**
 * 数据类型 此处不考虑symbol undefined null
 */
var IBasicType;
(function (IBasicType) {
    IBasicType[IBasicType["string"] = 0] = "string";
    IBasicType[IBasicType["number"] = 1] = "number";
    IBasicType[IBasicType["object"] = 2] = "object";
    IBasicType[IBasicType["Array"] = 3] = "Array";
})(IBasicType || (IBasicType = {}));
