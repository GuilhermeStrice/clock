"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitNumber = void 0;
function splitNumber(number) {
    var digits = number.toString().split('');
    var realDigits = digits.map(Number);
    return realDigits;
}
exports.splitNumber = splitNumber;
