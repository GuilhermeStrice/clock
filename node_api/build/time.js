"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
var util_1 = require("./util");
var Time = /** @class */ (function () {
    function Time(numbers) {
        this.date = new Date();
        this.showSeconds = false;
        this.H1 = 0;
        this.H2 = 0;
        this.M1 = 0;
        this.M2 = 0;
        this.numbers = numbers;
    }
    Time.prototype.handleDateTime = function () {
        this.date = new Date();
        //if (!this.showSeconds)
        //{
        var hours = this.date.getHours();
        var hoursArr = util_1.SplitNumber(hours);
        var minutes = this.date.getMinutes();
        var minutesArr = util_1.SplitNumber(minutes);
        this.H1 = hoursArr[0];
        this.H2 = hoursArr[1];
        this.M1 = minutesArr[0];
        this.M2 = minutesArr[1];
        //}
        //else
        // {
        //     var seconds = SplitNumber(this.date.getSeconds());
        //     this.H1 = seconds[0];
        //     this.H2 = seconds[1];
        //     var milliseconds = SplitNumber(this.date.getMilliseconds());
        //     this.M1 = milliseconds[0];
        //     this.M2 = milliseconds[1];
        // }
    };
    Time.prototype.handleDisplay = function () {
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
        }
        this.numbers.switchNumbers();
    };
    return Time;
}());
exports.Time = Time;
