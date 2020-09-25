using System;
using System.Collections.Generic;
using System.Text;
using Unosquare.RaspberryIO;
using Unosquare.RaspberryIO.Abstractions;
using Unosquare.RaspberryIO.Camera;

namespace clock
{
    public static class Numbers
    {
        static bool first_number_state = false, second_number_state = false, third_number_state = false, fourth_number_state = false;

        static int H1, H2, M1, M2;
        static int A, B, C, D, E, F, G;

        public static void Init(int H1, int H2, int M1, int M2, int A, int B, int C, int D, int E, int F, int G)
        {
            Pi.Gpio[H1].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[H2].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[M1].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[M1].PinMode = GpioPinDriveMode.Output;
            
            Pi.Gpio[A].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[B].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[C].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[D].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[E].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[F].PinMode = GpioPinDriveMode.Output;
            Pi.Gpio[G].PinMode = GpioPinDriveMode.Output;
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
            Pi.Gpio[A].Write(a);
            Pi.Gpio[B].Write(b);
            Pi.Gpio[C].Write(c);
            Pi.Gpio[D].Write(d);
            Pi.Gpio[E].Write(e);
            Pi.Gpio[F].Write(f);
            Pi.Gpio[G].Write(g);
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
                Pi.Gpio[H1].Write(true);
                Pi.Gpio[H2].Write(false);
                Pi.Gpio[M1].Write(false);
                Pi.Gpio[M2].Write(false);
            }
            else if (index == 1)
            {
                Pi.Gpio[H1].Write(false);
                Pi.Gpio[H2].Write(true);
                Pi.Gpio[M1].Write(false);
                Pi.Gpio[M2].Write(false);
            }
            else if (index == 2)
            {
                Pi.Gpio[H1].Write(false);
                Pi.Gpio[H2].Write(false);
                Pi.Gpio[M1].Write(true);
                Pi.Gpio[M2].Write(false);
            }
            else // should be 3
            {
                Pi.Gpio[H1].Write(false);
                Pi.Gpio[H2].Write(false);
                Pi.Gpio[M1].Write(false);
                Pi.Gpio[M2].Write(true);
            }
        }
    }
}
