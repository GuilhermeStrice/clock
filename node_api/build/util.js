"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitNumber = void 0;
function SplitNumber(number) {
    var digits = number.toString().split('');
    var realDigits = digits.map(Number);
    return realDigits;
}
exports.SplitNumber = SplitNumber;
