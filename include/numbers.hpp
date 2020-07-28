#ifndef NUMBERS_HPP
#define NUMBERS_HPP

#pragma once

extern "C"
{
    extern bool firstNumberState;
    extern bool secondNumberState;
    extern bool thirdNumberState;
    extern bool fourthNumberState;

    void setNumber(bool a, bool b, bool c, bool d, bool e, bool f, bool g);

    void allOn();

    void zero();
    void one();
    void two();
    void three();
    void four();
    void five();
    void six();
    void seven();
    void eight();
    void nine();

    void setNumberParam(int number);

    void switchFirstNumber();

    void switchSecondNumber();

    void switchThirdNumber();

    void switchFourthNumber();
}

#endif