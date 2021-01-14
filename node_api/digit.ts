import { Gpio } from "onoff";

export class Digit
{
    pin_a: Gpio;
    pin_b: Gpio;
    pin_c: Gpio;
    pin_d: Gpio;

    constructor(pin_a: number, pin_b: number, pin_c: number, pin_d: number)
    {
        this.pin_a = new Gpio(pin_a, "out");
        this.pin_b = new Gpio(pin_b, "out");
        this.pin_c = new Gpio(pin_c, "out");
        this.pin_d = new Gpio(pin_d, "out");
    }

    writeNumber(n: number)
    {
        if (n < 0 || n > 9)
            throw "numbers must be between 0 and 9";

        if (n == 0)
        {
            this.pin_a.writeSync(0);
            this.pin_b.writeSync(0);
            this.pin_c.writeSync(0);
            this.pin_d.writeSync(0);
        }
        else if (n == 1)
        {
            this.pin_a.writeSync(1);
            this.pin_b.writeSync(0);
            this.pin_c.writeSync(0);
            this.pin_d.writeSync(0);
        }
        else if (n == 2)
        {
            this.pin_a.writeSync(0);
            this.pin_b.writeSync(1);
            this.pin_c.writeSync(0);
            this.pin_d.writeSync(0);
        }
        else if (n == 3)
        {
            this.pin_a.writeSync(1);
            this.pin_b.writeSync(1);
            this.pin_c.writeSync(0);
            this.pin_d.writeSync(0);
        }
        else if (n == 4)
        {
            this.pin_a.writeSync(0);
            this.pin_b.writeSync(0);
            this.pin_c.writeSync(1);
            this.pin_d.writeSync(0);
        }
        else if (n == 5)
        {
            this.pin_a.writeSync(1);
            this.pin_b.writeSync(0);
            this.pin_c.writeSync(1);
            this.pin_d.writeSync(0);
        }
        else if (n == 6)
        {
            this.pin_a.writeSync(0);
            this.pin_b.writeSync(1);
            this.pin_c.writeSync(1);
            this.pin_d.writeSync(0);
        }
        else if (n == 7)
        {
            this.pin_a.writeSync(1);
            this.pin_b.writeSync(1);
            this.pin_c.writeSync(1);
            this.pin_d.writeSync(0);
        }
        else if (n == 8)
        {
            this.pin_a.writeSync(0);
            this.pin_b.writeSync(0);
            this.pin_c.writeSync(0);
            this.pin_d.writeSync(1);
        }
        else
        {
            this.pin_a.writeSync(1);
            this.pin_b.writeSync(0);
            this.pin_c.writeSync(0);
            this.pin_d.writeSync(1);
        }
    }
}