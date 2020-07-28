#include "numbers.hpp"

#include <Arduino.h>

#include "pins.hpp"
#include "util.hpp"

bool firstNumberState = false;
bool secondNumberState = false;
bool thirdNumberState = false;
bool fourthNumberState = false;

void setNumber(bool a, bool b, bool c, bool d, bool e, bool f, bool g)
{
	digitalWriteBool(A, a);
	digitalWriteBool(B, b);
	digitalWriteBool(C, c);
	digitalWriteBool(D, d);
	digitalWriteBool(E, e);
	digitalWriteBool(F, f);
	digitalWriteBool(G, g);
}

void allOn()
{
	setNumber(true, true, true, true, true, true, true);
}

void zero()
{
    setNumber(true, true, true, true, true, true, false);
}

void one()
{
    setNumber(false, true, true, false, false, false, false);
}

void two()
{
    setNumber(true, true, false, true, true, false, true);
}

void three()
{
    setNumber(true, true, true, true, false, false, true);
}

void four()
{
    setNumber(false, true, true, false, false, true, true);
}

void five()
{
    setNumber(true, false, true, true, false, true, true);
}

void six()
{
    setNumber(true, false, true, true, true, true, true);
}

void seven()
{
	setNumber(true, false, false, false, true, true, true);
}

void eight()
{
    setNumber(true, true, true, true, true, true, true);
}

void nine()
{
    setNumber(true, true, true, true, false, true, true);
}

void setNumberParam(int number)
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

void switchFirstNumber()
{
	firstNumberState = !firstNumberState;
	digitalWriteBool(H1, firstNumberState);
}

void switchSecondNumber()
{
	secondNumberState = !secondNumberState;
	digitalWriteBool(H2, secondNumberState);
}

void switchThirdNumber()
{
	thirdNumberState = !thirdNumberState;
	digitalWriteBool(M1, thirdNumberState);
}

void switchFourthNumber()
{
	fourthNumberState = !fourthNumberState;
	digitalWriteBool(M2, fourthNumberState);
}