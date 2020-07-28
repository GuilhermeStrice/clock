#include "time.hpp"

#include <HTTPClient.h>

#include "util.hpp"
#include "globals.hpp"
#include "numbers.hpp"
#include "pins.hpp"

bool isCounting = false;

bool setting_minutes = true;

unsigned long startMillis = 0;

const char *apiEndpoint = "http://worldtimeapi.org/api/timezone/Europe/Lisbon.txt";

void split_callback(const char *str)
{
    if (startsWith(str, "unixtime"))
    {
        char *timestamp = (char*)str + 10;
        current_timestamp = strtoull(timestamp, NULL, 10);
    }
}

bool grabCurrentTimestamp()
{
    HTTPClient http;
    http.begin(apiEndpoint);

    bool retValue = false;

    if (http.GET() == 200)
    {
        splitString(http.getString(), "\r\n", split_callback);
        retValue = true;
    }
    
    // Free resources
    http.end();

    return retValue;
}

void setFourDigits(int first, int second, int third, int fourth)
{
    setNumberParam(first);
    switchFirstNumber();
    delayMicroseconds(10);
    setNumberParam(second);
    switchSecondNumber();
    delayMicroseconds(10);
    setNumberParam(third);
    switchThirdNumber();
    delayMicroseconds(10);
    setNumberParam(fourth);
    switchFourthNumber();
    delayMicroseconds(10);
}

void handleTime()
{
    struct tm *time_info = localtime(&current_timestamp);

    int current_minute = time_info->tm_min;

    int current_minute_B = current_minute % 10;
    current_minute /= 10;
    int current_minute_A = current_minute % 10;

    int current_hour = time_info->tm_hour;
    int current_hour_B = current_hour % 10;
    current_hour /= 10;
    int current_hour_A = current_hour % 10;

    setFourDigits(current_hour_A, current_hour_B, current_minute_A, current_minute_B);
}

void handleDate()
{
    struct tm *time_info = localtime(&current_timestamp);
    int current_month = time_info->tm_mon;

    int current_month_B = current_month % 10;
    current_month /= 10;
    int current_month_A = current_month % 10;

    int current_day = time_info->tm_mday;
    int current_day_B = current_day % 10;
    current_day /= 10;
    int current_day_A = current_day % 10;

    setFourDigits(current_month_A, current_month_B, current_day_A, current_day_B);
}

void light_led_strips(int index)
{
	if (index == 0)
	{
		digitalWrite(LED_STRIP_HOURS, HIGH);
        digitalWrite(LED_STRIP_MINUTES, LOW);
	}
	else if (index == 1)
	{
		digitalWrite(LED_STRIP_HOURS, LOW);
        digitalWrite(LED_STRIP_MINUTES, HIGH);
	}
    else if (index == -1)
    {
        digitalWrite(LED_STRIP_HOURS, LOW);
        digitalWrite(LED_STRIP_MINUTES, LOW);
    }
}

void handleCronometro()
{
    if (isCounting)
    {
        startMillis = millis();
        light_led_strips(-1);
        // all set up
    }
    else
    {
        if (setting_minutes)
        {
            light_led_strips(1);
        }
        else
        {
            // hours
            light_led_strips(0);
        }
    }
}