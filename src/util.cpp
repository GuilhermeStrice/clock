#include "util.hpp"

void splitString(String str, String delimiter, split_fn callback)
{
    char *token = strtok((char*)str.c_str(), (char*)delimiter.c_str());
    // loop through the string to extract all other tokens
    while( token != NULL ) 
    {
        callback(token);
        token = strtok(NULL, (char*)delimiter.c_str());
    }
}

bool startsWith(const char *pre, const char *str)
{
    return strncmp(pre, str, strlen(str)) == 0;
}

void digitalWriteBool(byte pin, bool state)
{
    digitalWrite(pin, state ? HIGH : LOW);
}