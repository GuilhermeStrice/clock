using System;
using System.Collections.Generic;
using System.Text;
using Unosquare.PiGpio.NativeEnums;
using Unosquare.PiGpio.NativeMethods;

namespace clock
{
    public static class Numbers
    {
        static bool first_number_state = false, second_number_state = false, third_number_state = false, fourth_number_state = false;

        static SystemGpio H1, H2, M1, M2;
        static SystemGpio A, B, C, D, E, F, G;

        public static void Init(SystemGpio H1, SystemGpio H2, SystemGpio M1, SystemGpio M2,
            SystemGpio A, SystemGpio B, SystemGpio C, SystemGpio D, SystemGpio E, SystemGpio F, SystemGpio G)
        {
            IO.GpioSetMode(H1, PinMode.Output);
            IO.GpioSetMode(H2, PinMode.Output);
            IO.GpioSetMode(M1, PinMode.Output);
            IO.GpioSetMode(M2, PinMode.Output);
            IO.GpioSetMode(A, PinMode.Output);
            IO.GpioSetMode(B, PinMode.Output);
            IO.GpioSetMode(C, PinMode.Output);
            IO.GpioSetMode(D, PinMode.Output);
            IO.GpioSetMode(E, PinMode.Output);
            IO.GpioSetMode(F, PinMode.Output);
            IO.GpioSetMode(G, PinMode.Output);
        }

        public static void CurrentNumber(uint number)
        {
            if (number > 9)
                throw new ArgumentOutOfRangeException();

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
                    break;
            }
        }

        public static void setNumber(bool a, bool b, bool c, bool d, bool e, bool f, bool g)
        {
            IO.GpioWrite(A, a);
            IO.GpioWrite(B, b);
            IO.GpioWrite(C, c);
            IO.GpioWrite(D, d);
            IO.GpioWrite(E, e);
            IO.GpioWrite(F, f);
            IO.GpioWrite(G, g);
        }

        static void zero()
        {
            setNumber(true, true, true, true, true, true, false);
        }

        static void one()
        {
            setNumber(false, true, true, false, false, false, false);
        }

        static void two()
        {
            setNumber(true, true, false, true, true, false, true);
        }

        static void three()
        {
            setNumber(true, true, true, true, false, false, true);
        }

        static void four()
        {
            setNumber(false, true, true, false, false, true, true);
        }

        static void five()
        {
            setNumber(true, false, true, true, false, true, true);
        }

        static void six()
        {
            setNumber(true, false, true, true, true, true, true);
        }

        static void seven()
        {
            setNumber(true, false, false, false, true, true, true);
        }

        static void eight()
        {
            setNumber(true, true, true, true, true, true, true);
        }

        static void nine()
        {
            setNumber(true, true, true, true, false, true, true);
        }

        public static void ShowNumber(uint index)
        {
            if (index > 3)
                throw new ArgumentOutOfRangeException();

            if (index == 0)
            {
                IO.GpioWrite(H1, true);
                IO.GpioWrite(H2, false);
                IO.GpioWrite(M1, false);
                IO.GpioWrite(M2, false);
            }
            else if (index == 1)
            {
                IO.GpioWrite(H1, false);
                IO.GpioWrite(H2, true);
                IO.GpioWrite(M1, false);
                IO.GpioWrite(M2, false);
            }
            else if (index == 2)
            {
                IO.GpioWrite(H1, false);
                IO.GpioWrite(H2, false);
                IO.GpioWrite(M1, true);
                IO.GpioWrite(M2, false);
            }
            else // should be 3
            {
                IO.GpioWrite(H1, false);
                IO.GpioWrite(H2, false);
                IO.GpioWrite(M1, false);
                IO.GpioWrite(M2, true);
            }
        }
    }
}
