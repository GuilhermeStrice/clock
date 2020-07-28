#ifndef CONNECTION_HPP
#define CONNECTION_HPP

#pragma once

extern "C"
{
    // check if its connected to the selected wifi network
    bool isConnected();
    
    // connects to selected wifi network, 5 tries
    bool connectToWifi();

    // setup access point web server to select wifi network
    void setupWebServerAp();
}

#endif