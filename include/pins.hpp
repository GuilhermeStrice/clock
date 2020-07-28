#ifndef PINS_HPP
#define PINS_HPP

#pragma once

#define byte unsigned char

extern "C"
{
    extern const byte H1;
    extern const byte H2;
    extern const byte M1;
    extern const byte M2;

    extern const byte A;
    extern const byte B;
    extern const byte C;
    extern const byte D;
    extern const byte E;
    extern const byte F;
    extern const byte G;

    extern const byte BUZZER;

    extern const byte TRACO;
    extern const byte PONTOS;

    extern const byte RESET_TIME;
    extern const byte START;

    extern const byte LEFT;
    extern const byte RIGHT;
    extern const byte UP;
    extern const byte DOWN;

    extern const byte MODE;

    extern const byte LED_R;
    extern const byte LED_G;
    extern const byte LED_B;

    extern const byte LED_STRIP_HOURS;
    extern const byte LED_STRIP_MINUTES;

    void setupPins();

    extern unsigned long current_reset_millis;

    extern bool resetButtonActive;
    extern bool resetLongPressActive;

    // 0 - nothing
    // 1 - reset time
    // 2 - reset all
    byte handleResetPin(int milliseconds);

    void setLED(bool r, bool g, bool b);
}

#undef byte

#endif 