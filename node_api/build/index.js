"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Numbers } from "./numbers";
// import { splitNumber } from "./util";
// import { Gpio } from "onoff";
var easytimer_js_1 = require("easytimer.js");
// var numbers = new Numbers(1,1,1,1,1,1,1,1,1,1 ,1);
// var date = new Date();
// var gotDate = false;
// var H1 = 0;
// var H2 = 0;
// var M1 = 0;
// var M2 = 0;
// var currentMode = 1; // 1 = time, 2 = cronometro
// var showSeconds = false;
// var reset = new Gpio(0, "in", "both");
// var mode = new Gpio(0, "in", "both");
// function handleDisplay() // millisecond
// {
//     if (!gotDate)
//     {
//         date = new Date();
//         var hours = splitNumber(date.getHours());
//         H1 = hours[0];
//         H2 = hours[1];
//         var minutes = splitNumber(date.getMinutes());
//         M1 = minutes[0];
//         M2 = minutes[1];
//         gotDate = true;
//     }
//     numbers.switchNumbers();
//     if (numbers.firstNumberState)
//     {
//         numbers.setNumberParam(H1);
//     }
//     else if (numbers.secondNumberState)
//     {
//         numbers.setNumberParam(H2);
//     }
//     else if (numbers.thirdNumberState)
//     {
//         numbers.setNumberParam(M1);
//     }
//     else if (numbers.fourthNumberState)
//     {
//         numbers.setNumberParam(M2);
//         gotDate = false;
//     }
// }
var chronoStarted = false;
var timer = new easytimer_js_1.Timer();
function handleResetPin() {
    if (!chronoStarted) {
        timer.start({ precision: 'seconds' });
        chronoStarted = true;
    }
}
// var modePinState = 0;
// var startTime = 0;
// function handleLongPress(modeToChange: number)
// {
//     if (modePinState == 1)
//         startTime = Date.now();
//     else
//     {
//         if (modePinState == 1)
//         {
//             if (Date.now() - startTime > 1500)
//                 showSeconds = !showSeconds;
//             return;
//         }
//         else
//         {
//             currentMode = modeToChange;
//         }
//     }
// }
// function handleModePin()
// {
//     if (currentMode == 1)
//     {
//         // change to cronometro
//         handleLongPress(2);
//     }
//     else if (currentMode == 2)
//     {
//         // check hold and release time
//         handleLongPress(1);
//     }
// }
// setInterval(function()
// {
//     handleDisplay();
//     var mps = mode.readSync();
//     if (mps != modePinState)
//     {
//         handleModePin();
//         modePinState = mps;
//     }
// }, 1);
handleResetPin();
setInterval(function () {
    console.log(timer.getTimeValues().hours);
    console.log(timer.getTimeValues().minutes);
    console.log(timer.getTimeValues().seconds);
    console.log(timer.getTimeValues().secondTenths);
}, 500);
