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


Request('http://api.openweathermap.org/data/2.5/weather?q=milwaukee&units=imperial&appid=4fe1c7e65933e930a574065c4246077d',
    function (error, response, body) {
        if (error) {
            milwaukeeTemp = "Error collecting data";
        }
        else {
            milwaukeeWeather = JSON.parse(body);
            milwaukeeTemp = milwaukeeWeather.main.temp + "°F";
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