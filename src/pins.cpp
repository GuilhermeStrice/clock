#include "pins.hpp"

#include <Arduino.h>

#include "globals.hpp"
#include "util.hpp"

const byte H1 = 34;
const byte H2 = 35;
const byte M1 = 32;
const byte M2 = 33;

const byte A = 14;
const byte B = 12;
const byte C = 13;
const byte D = 19;
const byte E = 18;
const byte F = 5;
const byte G = 4;

const byte BUZZER = 27;

const byte TRACO = 0;
const byte PONTOS = 0;

const byte RESET_TIME = 0;
const byte START = 0;

const byte LEFT = 0;
const byte RIGHT = 0;
const byte UP = 0;
const byte DOWN = 0;

const byte MODE = 0;

const byte LED_R = 0;
const byte LED_G = 0;
const byte LED_B = 0;

const byte LED_STRIP_HOURS = 0;
const byte LED_STRIP_MINUTES = 0;

unsigned long current_reset_millis = 0;

bool resetButtonActive = false;
bool resetLongPressActive = false;

void setupPins()
{
    pinMode(H1, OUTPUT);
	pinMode(H2, OUTPUT);
	pinMode(M1, OUTPUT);
	pinMode(M2, OUTPUT);

	pinMode(A, OUTPUT);
	pinMode(B, OUTPUT);
	pinMode(C, OUTPUT);
	pinMode(D, OUTPUT);
	pinMode(E, OUTPUT);
	pinMode(F, OUTPUT);
	pinMode(G, OUTPUT);

    pinMode(BUZZER, OUTPUT);
	pinMode(TRACO, OUTPUT);
	pinMode(PONTOS, OUTPUT);

	pinMode(RESET_TIME, INPUT);
	pinMode(START, INPUT);

	pinMode(LEFT, INPUT);
	pinMode(RIGHT, INPUT);
	pinMode(UP, INPUT);
	pinMode(DOWN, INPUT);

	pinMode(MODE, INPUT);

	pinMode(LED_R, OUTPUT);
	pinMode(LED_G, OUTPUT);
	pinMode(LED_B, OUTPUT);

	pinMode(LED_STRIP_HOURS, OUTPUT);
	pinMode(LED_STRIP_MINUTES, OUTPUT);
}

byte handleResetPin(int milliseconds)
{
	if (digitalRead(RESET_TIME) == HIGH)
	{
		if (!resetButtonActive) 
		{
			resetButtonActive = true;
			current_reset_millis = millis();
		}

		if (currentMillis - current_reset_millis >= 0 && resetLongPressActive == false)
			resetLongPressActive = true;
	}
	else
	{
		if (resetButtonActive)
		{
			if (resetLongPressActive)
			{
				resetLongPressActive = false;
				return 2;
			}
			else
			{
				return 1;
			}

			resetButtonActive = false;
		}
	}

	return 0;
}

void setLED(bool r, bool g, bool b)
{
	digitalWriteBool(LED_R, r);
	digitalWriteBool(LED_G, g);
	digitalWriteBool(LED_B, b);
}