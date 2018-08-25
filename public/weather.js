var milwaukeeTemp;
var milwaukeeRain;
var milwaukeeCloud;
var milwaukeeHumid;
var milwaukeePressure;
var minneapolisTemp;
var minneapolisRain;
var minneapolisCloud;
var minneapolisHumid;
var minneapolisPressure;
var chicagoTemp;
var chicagoRain;
var chicagoCloud;
var chicagoHumid;
var chicagoPressure;
var dallasTemp;
var dallasRain;
var dallasCloud;
var dallasHumid;
var dallasPressure;
var milwaukeeWeather;
var chicagoWeather;
var dallasWeather;
var minneapolisWeather;
let request = require('request');


request('http://api.openweathermap.org/data/2.5/weather?q=milwaukee&units=imperial&appid=4fe1c7e65933e930a574065c4246077d', function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        milwaukeeWeather = JSON.parse(body);
        milwaukeeTemp = milwaukeeWeather.main.temp + '°F';
        if (((milwaukeeWeather.weather.description == "rain") || (milwaukeeWeather.weather.description == "shower rain")) || (milwaukeeWeather.weather.description == "thunderstorm")) {
            milwaukeeRain = "Currently Raining"
        }
        else {
            milwaukeeRain = "No Current Rain";
        }
        milwaukeeCloud = milwaukeeWeather.description;
        milwaukeeHumid = milwaukeeWeather.main.humidity + "%";
        milwaukeePressure = milwaukeeWeather.main.milwaukeePressure;
        console.log(milwaukeeHumid);
    }
});

request('http://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=4fe1c7e65933e930a574065c4246077d', function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        chicagoWeather = JSON.parse(body);
        chicagoTemp = chicagoWeather.main.temp + '°F';
        if (((chicagoWeather.weather.description == "rain") || (chicagoWeather.weather.description == "shower rain")) || (chicagoWeather.weather.description == "thunderstorm")) {
            chicagoRain = "Currently Raining"
        }
        else {
            chicagoRain = "No Current Rain";
        }
        chicagoCloud = chicagoWeather.description;
        chicagoHumid = chicagoWeather.main.humidity + "%";
        chicagoPressure = chicagoWeather.main.chicagoPressure;
        console.log(chicagoHumid);
    }
});

request('http://api.openweathermap.org/data/2.5/weather?q=minneapolis&units=imperial&appid=4fe1c7e65933e930a574065c4246077d', function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        minneapolisWeather = JSON.parse(body);
        minneapolisTemp = minneapolisWeather.main.temp + '°F';
        if (((minneapolisWeather.weather.description == "rain") || (minneapolisWeather.weather.description == "shower rain")) || (minneapolisWeather.weather.description == "thunderstorm")) {
            minneapolisRain = "Currently Raining"
        }
        else {
            minneapolisRain = "No Current Rain";
        }
        minneapolisCloud = minneapolisWeather.description;
        minneapolisHumid = minneapolisWeather.main.humidity + "%";
        minneapolisPressure = minneapolisWeather.main.minneapolisPressure;
        console.log(minneapolisHumid);
    }
});

request('http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=4fe1c7e65933e930a574065c4246077d', function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        dallasWeather = JSON.parse(body);
        dallasTemp = dallasWeather.main.temp + '°F';
        if (((dallasWeather.weather.description == "rain") || (dallasWeather.weather.description == "shower rain")) || (dallasWeather.weather.description == "thunderstorm")) {
            dallasRain = "Currently Raining"
        }
        else {
            dallasRain = "No Current Rain";
        }
        dallasCloud = dallasWeather.description;
        dallasHumid = dallasWeather.main.humidity + "%";
        dallasPressure = dallasWeather.main.dallasPressure;
        console.log(dallasHumid);
    }
});





document.getElementById('milwaukeeTemp').innerHTML = milwaukeeTemp;
document.getElementById('milwaukeeRain').innerHTML = milwaukeeRain;
document.getElementById('milwaukeeCloud').innerHTML = milwaukeeCloud;
document.getElementById('milwaukeeHumid').innerHTML = milwaukeeHumid;
document.getElementById('milwaukeePressure').innerHTML = milwaukeePressure;

document.getElementById('minneapolisTemp').innerHTML = minneapolisTemp;
document.getElementById('minneapolisRain').innerHTML = minneapolisRain;
document.getElementById('minneapolisCloud').innerHTML = minneapolisCloud;
document.getElementById('minneapolisHumid').innerHTML = minneapolisHumid;
document.getElementById('minneapolisPressure').innerHTML = minneapolisPressure;

document.getElementById('chicagoTemp').innerHTML = chicagoTemp;
document.getElementById('chicagoRain').innerHTML = chicagoRain;
document.getElementById('chicagoCloud').innerHTML = chicagoCloud;
document.getElementById('chicagoHumid').innerHTML = chicagoHumid;
document.getElementById('chicagoPressure').innerHTML = chicagoPressure;

document.getElementById('dallasTemp').innerHTML = dallasTemp;
document.getElementById('dallasRain').innerHTML = dallasRain;
document.getElementById('dallasCloud').innerHTML = dallasCloud;
document.getElementById('dallasHumid').innerHTML = dallasHumid;
document.getElementById('dallasPressure').innerHTML = dallasPressure;