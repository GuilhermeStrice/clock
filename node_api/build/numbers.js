"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
var onoff_1 = require("onoff");
var types_1 = require("./types");
var Numbers = /** @class */ (function () {
    function Numbers(H1, H2, M1, M2, A, B, C, D, E, F, G) {
        this.firstNumberState = false;
        this.secondNumberState = false;
        this.thirdNumberState = false;
        this.fourthNumberState = false;
        if (H1 == 0 || H2 == 0 || M1 == 0 || M2 == 0 ||
            A == 0 || B == 0 || C == 0 || D == 0 || E == 0 || F == 0 || G == 0)
            return;
        this.H1 = new onoff_1.Gpio(H1, 'out');
        this.H2 = new onoff_1.Gpio(H2, 'out');
        this.M1 = new onoff_1.Gpio(M1, 'out');
        this.M2 = new onoff_1.Gpio(M2, 'out');
        this.A = new onoff_1.Gpio(A, 'out');
        this.B = new onoff_1.Gpio(B, 'out');
        this.C = new onoff_1.Gpio(C, 'out');
        this.D = new onoff_1.Gpio(D, 'out');
        this.E = new onoff_1.Gpio(E, 'out');
        this.F = new onoff_1.Gpio(F, 'out');
        this.G = new onoff_1.Gpio(G, 'out');
        this.firstNumberState = false;
        this.secondNumberState = false;
        this.thirdNumberState = false;
        this.fourthNumberState = false;
    }
    Numbers.prototype.setNumber = function (a, b, c, d, e, f, g) {
        this.A.writeSync(a ? types_1.High : types_1.Low);
        this.B.writeSync(b ? types_1.High : types_1.Low);
        this.C.writeSync(c ? types_1.High : types_1.Low);
        this.D.writeSync(d ? types_1.High : types_1.Low);
        this.E.writeSync(e ? types_1.High : types_1.Low);
        this.F.writeSync(f ? types_1.High : types_1.Low);
        this.G.writeSync(g ? types_1.High : types_1.Low);
    };
    Numbers.prototype.allOn = function () {
        this.setNumber(true, true, true, true, true, true, true);
    };
    Numbers.prototype.zero = function () {
        this.setNumber(true, true, true, true, true, true, false);
    };
    Numbers.prototype.one = function () {
        this.setNumber(false, true, true, false, false, false, false);
    };
    Numbers.prototype.two = function () {
        this.setNumber(true, true, false, true, true, false, true);
    };
    Numbers.prototype.three = function () {
        this.setNumber(true, true, true, true, false, false, true);
    };
    Numbers.prototype.four = function () {
        this.setNumber(false, true, true, false, false, true, true);
    };
    Numbers.prototype.five = function () {
        this.setNumber(true, false, true, true, false, true, true);
    };
    Numbers.prototype.six = function () {
        this.setNumber(true, false, true, true, true, true, true);
    };
    Numbers.prototype.seven = function () {
        this.setNumber(true, false, false, false, true, true, true);
    };
    Numbers.prototype.eight = function () {
        this.setNumber(true, true, true, true, true, true, true);
    };
    Numbers.prototype.nine = function () {
        this.setNumber(true, true, true, true, false, true, true);
    };
    Numbers.prototype.setNumberParam = function (number) {
        switch (number) {
            case 1:
                this.one();
                break;
            case 2:
                this.two();
                break;
            case 3:
                this.three();
                break;
            case 4:
                this.four();
                break;
            case 5:
                this.five();
                break;
            case 6:
                this.six();
                break;
            case 7:
                this.seven();
                break;
            case 8:
                this.eight();
                break;
            case 9:
                this.nine();
                break;
            default:
                this.zero();
        }
    };
    Numbers.prototype.switchNumbers = function () {
        if (!this.firstNumberState && !this.secondNumberState && !this.thirdNumberState && !this.fourthNumberState)
            this.switchFirstNumber();
        else {
            if (this.firstNumberState) {
                this.switchFirstNumber();
                this.switchSecondNumber();
            }
            else if (this.secondNumberState) {
                this.switchSecondNumber();
                this.switchThirdNumber();
            }
            else if (this.thirdNumberState) {
                this.switchThirdNumber();
                this.switchFourthNumber();
            }
            else if (this.fourthNumberState) {
                this.switchFourthNumber();
                this.switchFirstNumber();
            }
        }
    };
    Numbers.prototype.switchFirstNumber = function () {
        this.firstNumberState = !this.firstNumberState;
        this.H1.writeSync(this.firstNumberState ? types_1.High : types_1.Low);
    };
    Numbers.prototype.switchSecondNumber = function () {
        this.secondNumberState = !this.secondNumberState;
        this.H2.writeSync(this.secondNumberState ? types_1.High : types_1.Low);
    };
    Numbers.prototype.switchThirdNumber = function () {
        this.thirdNumberState = !this.thirdNumberState;
        this.M1.writeSync(this.thirdNumberState ? types_1.High : types_1.Low);
    };
    Numbers.prototype.switchFourthNumber = function () {
        this.fourthNumberState = !this.fourthNumberState;
        this.M2.writeSync(this.fourthNumberState ? types_1.High : types_1.Low);
    };
    return Numbers;
}());
exports.Numbers = Numbers;
