using System;
using System.Threading;
using Unosquare.PiGpio.NativeEnums;
using Unosquare.PiGpio.NativeMethods;
using Unosquare.RaspberryIO;

namespace clock
{
    class Program
    {
        static void Main(string[] args)
        {
            Setup.GpioInitialise();

            Numbers.Init(SystemGpio.Bcm17, SystemGpio.Bcm27, SystemGpio.Bcm22, SystemGpio.Bcm10, 
                SystemGpio.Bcm05, SystemGpio.Bcm06, SystemGpio.Bcm13, SystemGpio.Bcm19, SystemGpio.Bcm26, SystemGpio.Bcm21, SystemGpio.Bcm20);

            bool state = false;

            while (true)
            {
                if (state)
                    Numbers.setNumber(true, true, true, true, true, true, true);
                else
                    Numbers.setNumber(false, false, false, false, false, false, false);
                state = !state;
                Thread.Sleep(1000);
            }
        }
    }
}
