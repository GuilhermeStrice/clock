'use strict'

const Numbers = require("./numbers");

var currentHour = 0;
var currentMinute = 0;

var numbers = new Numbers();

function handleClock()
{

}

setInterval(function()
{
    handleClock();
}, 1);