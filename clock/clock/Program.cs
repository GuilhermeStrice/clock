using System;
using System.Threading;
using Unosquare.RaspberryIO;
using Unosquare.WiringPi;

namespace clock
{
    class Program
    {
        static void Main(string[] args)
        {
            Pi.Init<BootstrapWiringPi>();
            Numbers.Init(17, 27, 22, 10, 5, 6, 13, 19, 26, 21, 20);

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
