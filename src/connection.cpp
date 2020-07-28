#include "connection.hpp"

#include <Arduino.h>
#include <WiFi.h>

#include "globals.hpp"

bool isConnected()
{
    return WiFi.waitForConnectResult() == WL_CONNECTED;
}

bool connectToWifi()
{
    WiFi.mode(WIFI_STA);

    byte tries = 5;

    while (!isConnected() && tries != 0)
    {
        WiFi.begin(ssid, password);
        tries--;
    }

    return isConnected();
}

void setupWebServerAp()
{
    WiFi.softAP(ssidAp, passwordAp);
}