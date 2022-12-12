/*
 * HTTPS Secured Client GET Request
 * Copyright (c) 2019, circuits4you.com
 * All rights reserved.
 * https://circuits4you.com 
 * Connects to WiFi HotSpot. */

#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h> 
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

/* Set these to your desired credentials. */
const char *ssid = "Titi";  //ENTER YOUR WIFI SETTINGS
const char *password = "27827575thiago";

//Link to read data from https://jsonplaceholder.typicode.com/comments?postId=7
//Web/Server address to read/write from 
const char *host = "drfsimplecrud-test-ktne.onrender.com";
//const char *host = "127.0.0.1";
const int httpsPort = 443;  //HTTPS= 443 and HTTP = 80
//const int httpsPort = 8000;  //LOCAL HOST
//SHA1 finger print of certificate use web browser to view and copy
const char fingerprint[] PROGMEM = "6F 4E 36 68 61 78 B7 28 03 09 D9 D9 B1 98 EC E8 97 11 F6 12";

//=======================================================================
//                  Serializer JSON
//=======================================================================
//-37.8446822440932, -57.660958062409954
String json;
float latvar = -37.8446822440932;
float longvar = -57.660958062409954;
float diflat =  0.001;
float diflon =  0.0001;
//=======================================================================
//                    Power on setup
//=======================================================================

void setup() {
  delay(1000);
  Serial.begin(115200);
  WiFi.mode(WIFI_OFF);        //Prevents reconnection issue (taking too long to connect)
  delay(1000);
  WiFi.mode(WIFI_STA);        //Only Station No AP, This line hides the viewing of ESP as wifi hotspot
  
  WiFi.begin(ssid, password);     //Connect to your WiFi router
  Serial.println("");

  Serial.print("Connecting");
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  //If connection successful show IP address in serial monitor
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //IP address assigned to your ESP
}

//=======================================================================
//                    Main Program Loop
//=======================================================================
void loop() {
  WiFiClientSecure httpsClient;    //Declare object of class WiFiClient

  Serial.println(host);

  Serial.printf("Using fingerprint '%s'\n", fingerprint);
  httpsClient.setFingerprint(fingerprint);
  httpsClient.setTimeout(15000); // 15 Seconds
  delay(1000);
  
  Serial.print("HTTPS Connecting");
  int r=0; //retry counter
  while((!httpsClient.connect(host, httpsPort)) && (r < 30)){
      delay(100);
      Serial.print(".");
      r++;
  }
  if(r==30) {
    Serial.println("Connection failed");
  }
  else {
    Serial.println("Connected to web");
  }
  
  String getData, Link;
  
  //POST Data
  Link = "/api/projects/1/";

  Serial.print("requesting URL: ");
  Serial.println(host);
  Serial.print("----------lat sin modificar---------");
  Serial.println(latvar);
  Serial.print("----------long sin modificar---------");
  Serial.println(longvar);
  //-38.0054771
  latvar = latvar - diflat;
  //-57.5426106
  longvar = longvar - diflon;
  
  String msg = "{\"title\":\"Juan Pedro\",\"description\":\"Grupo 1\",\"technology\":\"Bici Rutera\",\"latitud\":\""+ String(latvar) +"\",\"longitud\":\""+String(longvar)+"\",\"velocidad\":\"25\"}";
  httpsClient.print(String("PUT ") + Link + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "Content-Type: application/json"+ "\r\n" +
               "Content-Length: " + msg.length() + "\r\n" + "\r\n" +
                msg+ "\r\n" +
               
               "Connection: close\r\n\r\n");

  //("{\"title\":\"Tercera\",\"description\":\"Tercera\",\"technology\":\"Tercera\",\"latitud\":\"49.54\",\"longitud\":\"1005.14\",\"velocidad\":\"14\"}");
 
  Serial.println("request sent");
                  
  while (httpsClient.connected()) {
    String line = httpsClient.readStringUntil('\n');
    if (line == "\r") {
      Serial.println("headers received");
      break;
    }
  }

  Serial.println("reply was:");
  Serial.println("==========");
  String line;
  while(httpsClient.available()){        
    line = httpsClient.readStringUntil('\n');  //Read Line by Line
    Serial.println(line); //Print response
  }
  Serial.println("==========");
  Serial.println("closing connection");
    
  delay(4000);  //POST Data at every 2 seconds
}
//=======================================================================
