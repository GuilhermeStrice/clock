#ifndef GLOBALS_HPP
#define GLOBALS_HPP

#pragma once

extern "C"
{
    extern const char* ssid;
    extern const char* password;

    extern const char* ssidAp;
    extern const char* passwordAp;

    extern unsigned long currentMillis;
    extern unsigned long oldMillis;

    extern long current_timestamp;

    extern bool show_time;

    extern bool time_mode;
}

#endif