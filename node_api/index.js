const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');

var value = false;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

while (true)
{
    led.writeSync(value);
    value = !value;
    await sleep(2000);
}