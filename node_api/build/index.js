"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = require("./numbers");
var numbers = new numbers_1.Numbers(4, 17, 27, 22, 18, 23, 24, 25, 8, 7, 16);
//var time = new Time(numbers);
//var btn_modes = new ButtonsModes();
//var up = new Gpio(0, "in", "both");
//var down = new Gpio(0, "in", "both");
//var left = new Gpio(0, "in", "both");
//var right = new Gpio(0, "in", "both");
//var reset = new Gpio(0, "in", "both");
//setInterval(function()
//{
//    time.handleDisplay();
//}, 1);
//setInterval(function()
//{
//    time.handleDateTime();
//     btn_modes.handleModesPin();
//     btn_modes.handleResetPin();
// }, 300);
// var on = false;
// var currentSelectedNumber = 3; // from 0 - 2 // first number max 23 // second number max 59
// setInterval(function()
// {
//     if (btn_modes.currentMode == Modes.Cronometer)
//     {
//     }
// }, 500);
numbers.switchFirstNumber();
var number = 1;
setInterval(function () {
    if (number > 9)
        number = 1;
    numbers.setNumberParam(number);
    number++;
}, 2000);
