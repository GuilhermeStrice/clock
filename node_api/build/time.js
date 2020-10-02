"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
var util_1 = require("./util");
var Time = /** @class */ (function () {
    function Time(numbers) {
        this.gotDate = false;
        this.date = new Date();
        this.showSeconds = false;
        this.H1 = 0;
        this.H2 = 0;
        this.M1 = 0;
        this.M2 = 0;
        this.numbers = numbers;
    }
    Time.prototype.handleDateTime = function () {
        if (!this.gotDate) {
            this.date = new Date();
            if (!this.showSeconds) {
                var hours = util_1.SplitNumber(this.date.getHours());
                this.H1 = hours[0];
                this.H2 = hours[1];
                var minutes = util_1.SplitNumber(this.date.getMinutes());
                this.M1 = minutes[0];
                this.M2 = minutes[1];
            }
            else {
                var seconds = util_1.SplitNumber(this.date.getSeconds());
                this.H1 = seconds[0];
                this.H2 = seconds[1];
                var milliseconds = util_1.SplitNumber(this.date.getMilliseconds());
                this.M1 = milliseconds[0];
                this.M2 = milliseconds[1];
            }
            this.gotDate = true;
        }
    };
    Time.prototype.handleDisplay = function () {
        this.numbers.switchNumbers();
        if (this.numbers.firstNumberState) {
            this.numbers.setNumberParam(this.H1);
        }
        else if (this.numbers.secondNumberState) {
            this.numbers.setNumberParam(this.H2);
        }
        else if (this.numbers.thirdNumberState) {
            this.numbers.setNumberParam(this.M1);
        }
        else if (this.numbers.fourthNumberState) {
            this.numbers.setNumberParam(this.M2);
            this.gotDate = false;
        }
    };
    return Time;
}());
exports.Time = Time;
