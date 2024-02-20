"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLegal = exports.num = void 0;
exports.num = 10;
function isLegal(age) {
    if (age > 18)
        return true;
    else
        return false;
}
exports.isLegal = isLegal;
function getName(name) {
    return name;
}
exports.default = getName; //default export mei name change kr skte while importing but not in simple export-- No need of Destructure
//simple export mei destructure krna pdtaa hai unlike Defualt export
