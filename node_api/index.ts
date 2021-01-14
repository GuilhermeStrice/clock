import { Clock } from "./clock";
import { Digit } from "./digit";

var H1 = new Digit(0, 0, 0, 0);
var H2 = new Digit(0, 0, 0, 0);
var M1 = new Digit(0, 0, 0, 0);
var M2 = new Digit(0, 0, 0, 0);

var clock = new Clock(H1, H2, M1, M2);

setInterval(function()
{
	clock.update();
}, 500);