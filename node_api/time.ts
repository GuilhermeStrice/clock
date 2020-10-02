import { SplitNumber } from "./util";
import { Numbers } from "./numbers";

export class Time
{
    gotDate: boolean = false;
    date: Date = new Date();
    showSeconds: boolean = false;
    numbers: Numbers = new Numbers(0,0,0,0,0,0,0,0,0,0,0);

    H1: number = 0;
    H2: number = 0;
    M1: number = 0;
    M2: number = 0;

    constructor(numbers: Numbers)
    {
        this.numbers = numbers;
    }

    handleDateTime()
    {
        if (!this.gotDate)
        {
            this.date = new Date();

            if (!this.showSeconds)
            {
                var hours = SplitNumber(this.date.getHours());
                this.H1 = hours[0];
                this.H2 = hours[1];

                var minutes = SplitNumber(this.date.getMinutes());
                this.M1 = minutes[0];
                this.M2 = minutes[1];
            }
            else
            {
                var seconds = SplitNumber(this.date.getSeconds());
                this.H1 = seconds[0];
                this.H2 = seconds[1];

                var milliseconds = SplitNumber(this.date.getMilliseconds());
                this.M1 = milliseconds[0];
                this.M2 = milliseconds[1];
            }

            this.gotDate = true;
        }
    }

    handleDisplay() // millisecond
    {
        this.numbers.switchNumbers();

        if (this.numbers.firstNumberState)
        {
            this.numbers.setNumberParam(this.H1);
        }
        else if (this.numbers.secondNumberState)
        {
            this.numbers.setNumberParam(this.H2);
        }
        else if (this.numbers.thirdNumberState)
        {
            this.numbers.setNumberParam(this.M1);
        }
        else if (this.numbers.fourthNumberState)
        {
            this.numbers.setNumberParam(this.M2);
            this.gotDate = false;
        }
    }
}