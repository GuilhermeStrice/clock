#include <Arduino.h>
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoOTA.h>

#include "numbers.hpp"
#include "time.hpp"
#include "connection.hpp"
#include "pins.hpp"
#include "globals.hpp"

#include <HTTPClient.h>

// C time
#include "time.h"

AsyncWebServer server(80);

void resetServer()
{
	server.end();
	server.reset();
}

void notFound(AsyncWebServerRequest *request) 
{
    request->send(404, "text/plain", "Not found");
}

void setupClockWebServer()
{
	grabCurrentTimestamp();

	server.on("/", HTTP_GET, [] (AsyncWebServerRequest *request) 
	{
		HTTPClient http;

		const char *serverPath = "http://localhost:6969/relogio";
      
		http.begin(serverPath);
		
		if (http.GET() > 0) 
			request->send(200, "text/html", http.getString());
		else 
			request->send(500);
		
		http.end();
	});

	server.on("/post", HTTP_POST, [](AsyncWebServerRequest *request)
	{
		request->send(200, "text/plain", "Hello, POST: ");
	});

	server.onNotFound(notFound);

	server.begin();
}

void setupNetworkSelectionServer()
{
	server.on("/", HTTP_GET, [] (AsyncWebServerRequest *request) 
	{
		request->send(200, "text/html", "");
	});

	server.on("/set_network", HTTP_POST, [] (AsyncWebServerRequest *request)
	{
		if (!request->hasParam("ssid", true) || !request->hasParam("password", true))
		{
			request->send(500);
		}

		ssid = request->getParam("ssid", true)->value().c_str();
		password = request->getParam("password", true)->value().c_str();

		bool connected = connectToWifi();

		if (connected)
			request->send(200);
		else
			request->send(500);
	});

	server.onNotFound(notFound);

	server.begin();
}

void setup() 
{
	setupPins();
  	btStop();

	//allOn();

	//while (true)
	//{
	//	delay(500);
	//	switchFirstNumber();
	//	switchSecondNumber();
	//	switchThirdNumber();
	//	switchFourthNumber();
	//	delay(500);
	//}

    Serial.begin(115200);
	
	connectToWifi();

	ArduinoOTA.onStart([]() 
	{
		Serial.println("Inicio...");
	});

	ArduinoOTA.onEnd([]() 
	{
		Serial.println("nFim!");
	});

	ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) 
	{
		Serial.printf("Progresso: %u%%r", (progress / (total / 100)));
	});

	ArduinoOTA.onError([](ota_error_t error) 
	{
		Serial.printf("Erro [%u]: ", error);
		if (error == OTA_AUTH_ERROR) Serial.println("Autenticacao Falhou");
		else if (error == OTA_BEGIN_ERROR) Serial.println("Falha no Inicio");
		else if (error == OTA_CONNECT_ERROR) Serial.println("Falha na Conexao");
		else if (error == OTA_RECEIVE_ERROR) Serial.println("Falha na Recepcao");
		else if (error == OTA_END_ERROR) Serial.println("Falha no Fim");
	});

	ArduinoOTA.begin();
}

bool previously_connected = false;
unsigned long switch_millis = 0;
unsigned long mode_millis = 0;

bool cronometro_setup = false;

void loop()
{
	// restart after 30 days because of unsigned long overflow (50 days)
	if (currentMillis > 2592000)
		ESP.restart();

	// connection checking
	if (isConnected())
	{
		if (!previously_connected)
		{
			previously_connected = true;
			resetServer();
			setupClockWebServer();
			setLED(false, true, false);
		}
	}
	else
	{
		previously_connected = false;
		resetServer();
		setupWebServerAp();
		setupNetworkSelectionServer();
		setLED(true, false, false);
	}

	// change between time mode and chronometer mode. after one button press only change after one second
	if (digitalRead(MODE) == HIGH && currentMillis - mode_millis < 1000)
	{
		mode_millis = currentMillis;
		time_mode = !time_mode;
	}

	if (time_mode)
	{
		cronometro_setup = false;
		byte reset_result = handleResetPin(5000);
		if (reset_result == 2)
		{
			// reset EVERYTHING
		}
		else if (reset_result == 1)
		{
			grabCurrentTimestamp();
		}

		// second counter
		currentMillis = millis();
		if (currentMillis - oldMillis >= 1000)
		{
			current_timestamp += 1;
			oldMillis = currentMillis;
		}

		// show time for 30 seconds
		if (currentMillis - switch_millis < 30000 && show_time)
		{
			handleTime();
			switch_millis = currentMillis;
			show_time = false;

			digitalWrite(TRACO, LOW);
			digitalWrite(PONTOS, HIGH);
		}
		// show date for 5 seconds
		else if (currentMillis - switch_millis < 5000 && !show_time)
		{
			handleDate();
			switch_millis = currentMillis;
			show_time = true;

			digitalWrite(TRACO, HIGH);
			digitalWrite(PONTOS, LOW);
		}
	}
	else
	{
		// cronometro
		if (!cronometro_setup)
		{
			cronometro_setup = !cronometro_setup;
			setFourDigits(0, 0, 0, 0);
			digitalWrite(TRACO, LOW);
			digitalWrite(PONTOS, HIGH);
			setting_minutes = true;
			isCounting = false;
			light_led_strips(1);
		}

		handleCronometro();
	}

	ArduinoOTA.handle();
}