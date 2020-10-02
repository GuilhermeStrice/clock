import Timer from "easytimer.js";
import { Gpio } from "onoff";

export enum Modes
{
    Time,
    Cronometer
}

export class ButtonsModes
{
    currentMode: Modes = Modes.Time;
    showSeconds: boolean = false;
    chronoStarted: boolean = false;
    reseted: boolean = false;
    timer: Timer = new Timer();
    modePinState: number = 0;
    startTime: number = 0;

    mode: any;

    construct(modePin: number)
    {
        this.mode = new Gpio(modePin, "in", "both");
    }

    handleModesPin()
    {
        var mps = this.mode.readSync();

        if (mps != this.modePinState)
        {
            this.handleModePin();
            this.modePinState = mps;
        }
    }

    handleResetPin() // reset cronometro
    {
        if (!this.chronoStarted && this.reseted)
        {
            this.timer.start({precision: 'seconds'});

            this.chronoStarted = true;
            this.reseted = false;
        }
        else if (this.chronoStarted && !this.reseted)
        {
            this.timer.stop();
            this.chronoStarted = false;
            this.reseted = true;
        }
    }

    handleLongPress(modeToChange: Modes)
    {
        if (this.modePinState == 1)
            this.startTime = Date.now();
        else
        {
            if (this.modePinState == 1)
            {
                if (Date.now() - this.startTime > 1500)
                    this.showSeconds = !this.showSeconds;
                return;
            }
            else
            {
                this.currentMode = modeToChange;
            }
        }
    }

    handleModePin()
    {
        if (this.currentMode == Modes.Time)
        {
            // change to cronometro
            this.handleLongPress(Modes.Cronometer);
        }
        else if (this.currentMode == Modes.Cronometer)
        {
            // check hold and release time
            this.handleLongPress(Modes.Time);
        }
    }
}