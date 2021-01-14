import { Digit } from "./digit";
import { Time } from "./time";

export class Clock
{
    H1: Digit;
    H2: Digit;
    M1: Digit;
    M2: Digit;

    time: Time = new Time();

    constructor(H1: Digit, H2: Digit, M1: Digit, M2: Digit)
    {
        this.H1 = H1;
        this.H2 = H2;
        this.M1 = M1;
        this.M2 = M2;
    }

    update()
    {
        this.time.update();

        this.H1.writeNumber(this.time.H1);
        this.H2.writeNumber(this.time.H2);
        this.M1.writeNumber(this.time.M1);
        this.M2.writeNumber(this.time.M2);
    }
}