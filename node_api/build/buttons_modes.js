"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsModes = exports.Modes = void 0;
var easytimer_js_1 = __importDefault(require("easytimer.js"));
var onoff_1 = require("onoff");
var Modes;
(function (Modes) {
    Modes[Modes["Time"] = 0] = "Time";
    Modes[Modes["Cronometer"] = 1] = "Cronometer";
})(Modes = exports.Modes || (exports.Modes = {}));
var ButtonsModes = /** @class */ (function () {
    function ButtonsModes() {
        this.currentMode = Modes.Time;
        this.showSeconds = false;
        this.chronoStarted = false;
        this.reseted = false;
        this.timer = new easytimer_js_1.default();
        this.modePinState = 0;
        this.startTime = 0;
    }
    ButtonsModes.prototype.construct = function (modePin) {
        this.mode = new onoff_1.Gpio(modePin, "in", "both");
    };
    ButtonsModes.prototype.handleModesPin = function () {
        var mps = this.mode.readSync();
        if (mps != this.modePinState) {
            this.handleModePin();
            this.modePinState = mps;
        }
    };
    ButtonsModes.prototype.handleResetPin = function () {
        if (!this.chronoStarted && this.reseted) {
            this.timer.start({ precision: 'seconds' });
            this.chronoStarted = true;
            this.reseted = false;
        }
        else if (this.chronoStarted && !this.reseted) {
            this.timer.stop();
            this.chronoStarted = false;
            this.reseted = true;
        }
    };
    ButtonsModes.prototype.handleLongPress = function (modeToChange) {
        if (this.modePinState == 1)
            this.startTime = Date.now();
        else {
            if (this.modePinState == 1) {
                if (Date.now() - this.startTime > 1500)
                    this.showSeconds = !this.showSeconds;
                return;
            }
            else {
                this.currentMode = modeToChange;
            }
        }
    };
    ButtonsModes.prototype.handleModePin = function () {
        if (this.currentMode == Modes.Time) {
            // change to cronometro
            this.handleLongPress(Modes.Cronometer);
        }
        else if (this.currentMode == Modes.Cronometer) {
            // check hold and release time
            this.handleLongPress(Modes.Time);
        }
    };
    return ButtonsModes;
}());
exports.ButtonsModes = ButtonsModes;
