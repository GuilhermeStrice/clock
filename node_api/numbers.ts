import { Gpio } from "onoff";
import { High, Low } from "./types";

export class Numbers
{
    H1: any;
    H2: any;
    M1: any;
    M2: any;
    A: any;
    B: any;
    C: any;
    D: any;
    E: any;
    F: any;
    G: any;

    firstNumberState: boolean = false;
    secondNumberState: boolean = false;
    thirdNumberState: boolean = false;
    fourthNumberState: boolean = false;

    constructor(H1: number, H2: number, M1: number, M2: number, 
        A: number, B: number, C: number, D: number, E: number, F: number, G: number)
    {
        if (H1 == 0 || H2 == 0 || M1 == 0 || M2 == 0 || 
            A == 0 || B == 0 || C == 0 || D == 0 || E == 0 || F == 0 || G == 0)
            return;
        this.H1 = new Gpio(H1, 'out');
        this.H2 = new Gpio(H2, 'out');
        this.M1 = new Gpio(M1, 'out');
        this.M2 = new Gpio(M2, 'out');
        this.A = new Gpio(A, 'out');
        this.B = new Gpio(B, 'out');
        this.C = new Gpio(C, 'out');
        this.D = new Gpio(D, 'out');
        this.E = new Gpio(E, 'out');
        this.F = new Gpio(F, 'out');
        this.G = new Gpio(G, 'out');

        this.firstNumberState = false;
        this.secondNumberState = false;
        this.thirdNumberState = false;
        this.fourthNumberState = false;

        this.switchFirstNumber(true);
        this.switchSecondNumber(true);
        this.switchThirdNumber(true);
        this.switchFourthNumber(true);
    }

    setNumber(a: boolean, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean)
    {
        this.A.writeSync(a ? High : Low);
        this.B.writeSync(b ? High : Low);
        this.C.writeSync(c ? High : Low);
        this.D.writeSync(d ? High : Low);
        this.E.writeSync(e ? High : Low);
        this.F.writeSync(f ? High : Low);
        this.G.writeSync(g ? High : Low);
    }

    allOn()
    {
        this.setNumber(true, true, true, true, true, true, true);
    }

    zero()
    {
        this.setNumber(true, true, true, true, true, true, false);
    }

    one()
    {
        this.setNumber(false, true, true, false, false, false, false);
    }

    two()
    {
        this.setNumber(true, true, false, true, true, false, true);
    }

    three()
    {
        this.setNumber(true, true, true, true, false, false, true);
    }

    four()
    {
        this.setNumber(false, true, true, false, false, true, true);
    }

    five()
    {
        this.setNumber(true, false, true, true, false, true, true);
    }

    six()
    {
        this.setNumber(true, false, true, true, true, true, true);
    }

    seven()
    {
        this.setNumber(true, true, true, false, false, false, false);
    }

    eight()
    {
        this.setNumber(true, true, true, true, true, true, true);
    }

    nine()
    {
        this.setNumber(true, true, true, true, false, true, true);
    }

    setNumberParam(number: number)
    {
        switch (number)
        {
            case 1:
                this.one();
                break;
            case 2:
                this.two();
                break;
            case 3:
                this.three();
                break;
            case 4:
                this.four();
                break;
            case 5:
                this.five();
                break;
            case 6:
                this.six();
                break;
            case 7:
                this.seven();
                break;
            case 8:
                this.eight();
                break;
            case 9:
                this.nine();
                break;
            default:
                this.zero();
        }
    }

    switchNumbers()
    {
        if (!this.firstNumberState && !this.secondNumberState && !this.thirdNumberState && !this.fourthNumberState)
            this.switchFirstNumber();
        else
        {
            if (this.firstNumberState)
            {
                this.switchFirstNumber();
                this.switchSecondNumber();
            }
            else if (this.secondNumberState)
            {
                this.switchSecondNumber();
                this.switchThirdNumber();
            }
            else if (this.thirdNumberState)
            {
                this.switchThirdNumber();
                this.switchFourthNumber();
            }
            else if (this.fourthNumberState)
            {
                this.switchFourthNumber();
                this.switchFirstNumber();
            }
        }
    }

    switchFirstNumber(setState: boolean = false)
    {
        this.H1.writeSync(setState ? High : Low);
    }

    switchSecondNumber(setState: boolean = false)
    {
        this.H2.writeSync(setState ? High : Low);
    }

    switchThirdNumber(setState: boolean = false)
    {
        this.M1.writeSync(setState ? High : Low);
    }

    switchFourthNumber(setState: boolean = false)
    {
        this.M2.writeSync(setState ? High : Low);
    }
}