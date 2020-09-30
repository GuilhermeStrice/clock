'use strict'

const Gpio = require('onoff').Gpio;

module.exports = {
    class Numbers
{
    constructor(H1, H2, M1, M2, A, B, C, D, E, F, G)
    {
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
    }

    setNumber(a, b, c, d, e, f, g)
    {
        this.A.writeSync(a);
        this.B.writeSync(a);
        this.C.writeSync(a);
        this.D.writeSync(a);
        this.E.writeSync(a);
        this.F.writeSync(a);
        this.G.writeSync(a);
    }

    allOn()
    {
        setNumber(true, true, true, true, true, true, true);
    }

    zero()
    {
        setNumber(true, true, true, true, true, true, false);
    }

    one()
    {
        setNumber(false, true, true, false, false, false, false);
    }

    two()
    {
        setNumber(true, true, false, true, true, false, true);
    }

    three()
    {
        setNumber(true, true, true, true, false, false, true);
    }

    four()
    {
        setNumber(false, true, true, false, false, true, true);
    }

    five()
    {
        setNumber(true, false, true, true, false, true, true);
    }

    six()
    {
        setNumber(true, false, true, true, true, true, true);
    }

    seven()
    {
        setNumber(true, false, false, false, true, true, true);
    }

    eight()
    {
        setNumber(true, true, true, true, true, true, true);
    }

    nine()
    {
        setNumber(true, true, true, true, false, true, true);
    }

    setNumberParam(number)
    {
        switch (number)
        {
            case 1:
                one();
                break;
            case 2:
                two();
                break;
            case 3:
                three();
                break;
            case 4:
                four();
                break;
            case 5:
                five();
                break;
            case 6:
                six();
                break;
            case 7:
                seven();
                break;
            case 8:
                eight();
                break;
            case 9:
                nine();
                break;
            default:
                zero();
        }
    }

    switchFirstNumber()
    {
        this.firstNumberState = !this.firstNumberState;
        this.H1.writeSync(this.firstNumberState ? 1 : 0);
    }

    switchSecondNumber()
    {
        this.secondNumberState = !this.secondNumberState;
        this.H2.writeSync(this.secondNumberState ? 1 : 0);
    }

    switchThirdNumber()
    {
        this.thirdNumberState = !this.thirdNumberState;
        this.M1.writeSync(this.thirdNumberState ? 1 : 0);
    }

    switchFourthNumber()
    {
        this.fourthNumberState = !this.fourthNumberState;
        this.M2.writeSync(this.fourthNumberState ? 1 : 0);
    }
}
}