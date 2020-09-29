const Gpio = require('onoff').Gpio;
const led = new Gpio(4, 'out');

var value = false;

while (true)
{
    led.writeSync(value ? 1 : 0);
    value = !value;
    console.log((value ? "on" : "off"));
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
}