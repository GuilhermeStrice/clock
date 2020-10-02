import { SplitNumber } from "./util";
import { Numbers } from "./numbers";

export class Time
{
    date: Date = new Date();
    showSeconds: boolean = false;
    numbers: any;

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
        this.date = new Date();

        if (!this.showSeconds)
        {
            var hours = this.date.getHours();
            if (hours <= 10)
            {
                var hoursArr = SplitNumber(this.date.getHours());
                this.H1 = hoursArr[0];
                this.H2 = hoursArr[1];
            }
            else
            {
                this.H1 = 0;
                this.H2 = hours;
            }

            var minutes = this.date.getMinutes();
            if (minutes <= 10)
            {
                var minutesArr = SplitNumber(this.date.getMinutes());
                this.M1 = minutesArr[0];
                this.M2 = minutesArr[1];
            }
            else
            {
                this.M1 = 0;
                this.M2 = minutes;
            }
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
    }

    handleDisplay() // millisecond
    {
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
        }

        this.numbers.switchNumbers();
    }
}