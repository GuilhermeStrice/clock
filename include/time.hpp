#ifndef TIME_HPP
#define TIME_HPP

#pragma once

extern "C"
{
    extern bool isCounting;

    extern bool setting_minutes;

    extern unsigned long startMillis;

    extern const char *apiEndpoint;

    void split_callback(const char *str);
    bool grabCurrentTimestamp();

    void setFourDigits(int first, int second, int third, int fourth);

    void handleTime();
    void handleDate();

    void light_led_strips(int index);
    void handleCronometro();
}

#endif