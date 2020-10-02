import { Numbers } from "./numbers";
import { Gpio } from "onoff";
import { Timer } from 'easytimer.js';
import { Time } from "./time";
import { ButtonsModes, Modes } from "./buttons_modes";

var numbers = new Numbers(4, 17, 27, 22, 18, 23, 24, 25, 12, 20, 16);

var time = new Time(numbers);

//var btn_modes = new ButtonsModes();

//var up = new Gpio(0, "in", "both");
//var down = new Gpio(0, "in", "both");
//var left = new Gpio(0, "in", "both");
//var right = new Gpio(0, "in", "both");

//var reset = new Gpio(0, "in", "both");

setInterval(function()
{
    time.handleDisplay();
}, 10);

setInterval(function()
{
    time.handleDateTime();

//     btn_modes.handleModesPin();
//     btn_modes.handleResetPin();
}, 300);

// var on = false;
// var currentSelectedNumber = 3; // from 0 - 2 // first number max 23 // second number max 59

// setInterval(function()
// {
//     if (btn_modes.currentMode == Modes.Cronometer)
//     {
        
//     }
// }, 500);

// var number = 1;

// numbers.switchFirstNumber(false);
// numbers.switchSecondNumber(true);
// numbers.switchThirdNumber(false);
// numbers.switchFourthNumber(false);

// setInterval(function()
// {
//     if (number > 9)
//         number = 1;
//     numbers.setNumberParam(number);
//     number++;
//     console.log("running");
// }, 1000);