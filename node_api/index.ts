//import { Numbers } from "./numbers";
import { Gpio } from "onoff";
//import { Timer } from 'easytimer.js';
//import { Time } from "./time";
//import { ButtonsModes, Modes } from "./buttons_modes";

//var numbers = new Numbers(4, 17, 27, 22, 18, 23, 24, 25, 12, 20, 16);

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
//},5);

//setInterval(function()
//{
//    time.handleDateTime();

//     btn_modes.handleModesPin();
//     btn_modes.handleResetPin();
//}, 700);

 var on = false;
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

//var First = new Gpio(8, "out");
//var um1 = new Gpio(6, "out");
//var dois1 = new Gpio(12, "out");
//var tres1 = new Gpio(16, "out");
//var quatro1 = new Gpio(20, "out");

//var um2 = new Gpio(10, "out");
//var dois2 = new Gpio(5, "out");
//var tres2 = new Gpio(11, "out");
//var quatro2 = new Gpio(9, "out");

//var um3 = new Gpio(18, "out");
//var dois3 = new Gpio(22, "out");
//var tres3 = new Gpio(27, "out");
//var quatro3 = new Gpio(17, "out");

//var um4 = new Gpio(26, "out");
//var dois4 = new Gpio(23, "out");
//var tres4 = new Gpio(24, "out");
//var quatro4 = new Gpio(25, "out");

//setInterval(function()
//{
//    if (on)
//    {
//        //First.writeSync(0);
//        um1.writeSync(0);
//        dois1.writeSync(0);
//        tres1.writeSync(0);
//        quatro1.writeSync(0);

//        um2.writeSync(0);
//        dois2.writeSync(0);
//        tres2.writeSync(0);
//        quatro2.writeSync(0);

//        um3.writeSync(0);
//        dois3.writeSync(0);
//        tres3.writeSync(0);
//        quatro3.writeSync(0);

//        um4.writeSync(0);
//        dois4.writeSync(0);
//        tres4.writeSync(0);
//        quatro4.writeSync(0);

//        console.log("off");
//    }
//    else
//    {
        //First.writeSync(1);
//        quatro1.writeSync(1);

//        quatro2.writeSync(1);

//        quatro3.writeSync(1);

//        quatro4.writeSync(1);
//        console.log("on");
//    }
//
//    on = !on;
//}, 750);

import { Gpio } from "onoff";
var MCP23017 = require('node-mcp23017');
 
var mcp = new MCP23017({
  address: 0x20, //default: 0x20
  device: '/dev/i2c-1', // '/dev/i2c-1' on model B | '/dev/i2c-0' on model A
  debug: true //default: false
});
 
/*
  By default all GPIOs are defined as INPUTS.
  You can set them all the be OUTPUTs by using the pinMode-Methode (see below),
  You can also disable the debug option by simply not passing it to the constructor
  or by setting it to false
*/
 
//set all GPIOS to be OUTPUTS
for (var i = 0; i < 16; i++) {
  mcp.pinMode(i, mcp.OUTPUT);
  //mcp.pinMode(i, mcp.INPUT); //if you want them to be inputs
  //mcp.pinMode(i, mcp.INPUT_PULLUP); //if you want them to be pullup inputs
}
 
mcp.digitalWrite(0, mcp.HIGH); //set GPIO A Pin 0 to state HIGH
mcp.digitalWrite(0, mcp.LOW); //set GPIO A Pin 0 to state LOW