const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');

var value = false;

while (true)
{
    led.writeSync(value);
    value = !value;
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
}