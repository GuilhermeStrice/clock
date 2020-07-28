#ifndef UTIL_HPP
#define UTIL_HPP

#pragma once

#include <Arduino.h>

extern "C"
{
    typedef void(*split_fn)(const char *);

    void splitString(String str, String delimiter, split_fn callback);

    bool startsWith(const char *pre, const char *str);

    void digitalWriteBool(byte pin, bool state);
}

#endif