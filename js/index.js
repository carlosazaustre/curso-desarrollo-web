// Petición AJAX con jQuery
"use strict";

(function() {

  // Namespace
  var weatherApp = {};

  weatherApp.pais;
  weatherApp.ciudad;
  weatherApp.forecastData = {};
  weatherApp.hourlyData = {};
  weatherApp.t;
  weatherApp.clone;

  // En el modo "strict" declaramos las funciones al principio

  function errorGeolocalizando(error) {
    alert('Un error ocurrió: ' + error.code);
    // El código de error puede ser:
    // 0: Error desconocido
    // 1: Permiso spodenegado
    // 2: Posición no disponible
    // 3: Timeout
  }

  function posicionEncontrada(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.getJSON("http://api.wunderground.com/api/595a3b8f36177305/geolookup/q/" + lat + "," + lon + ".json", initApp);
  }

  function initApp(data) {
    console.log(data);
    weatherApp.pais = data.location.country_name;
    weatherApp.ciudad = data.location.city;
    // Petición AJAX al API de Weather para pedir los datos del clima
    // de la ciudad en la que nos ha geolocalizado el navegador.

    // Ésta es otra forma de hacerlo, como $.getJSON()
    $.ajax({
      dataType: "jsonp",
      url: "http://api.wunderground.com/api/595a3b8f36177305/forecast/q/"+ weatherApp.pais +"/"+ weatherApp.ciudad +".json",
      context: document.body
    }).done(getCurrentTemperature);
  }

  function getCurrentTemperature(data) {
    console.log(data);
    weatherApp.forecastData = data;

    $.ajax({
      dataType: "jsonp",
      url: "http://api.wunderground.com/api/595a3b8f36177305/hourly/q/"+ weatherApp.pais +"/"+ weatherApp.ciudad +".json",
      context: document.body
    }).done(renderTemplate);
  }

  function renderTemplate(data) {
    weatherApp.hourlyData = data;

    // Activar el template
    weatherApp.t = document.querySelector("#plantilla");
    weatherApp.clone = document.importNode(weatherApp.t.content, true);

    // Pinta los datos
    var temperaturaHoy = weatherApp.hourlyData.hourly_forecast[0].temp.metric;
    var descripcion = weatherApp.forecastData.forecast.txt_forecast.forecastday[0].fcttext_metric;
    var climaHoy = weatherApp.forecastData.forecast.simpleforecast.forecastday[0];

    var iconoTiempo = climaHoy.icon_url;
    var textoTiempo = climaHoy.conditions;
    var temperaturaMinima = climaHoy.low.celsius;
    var temperaturaMaxima = climaHoy.high.celsius;
    var fechaActual = {
      semana: climaHoy.date.weekday,
      dia: climaHoy.date.day,
      mes: climaHoy.date.monthname,
      ano: climaHoy.date.year
    };

    weatherApp.clone.querySelector(".weatherImagen").src = iconoTiempo;
    weatherApp.clone.querySelector(".tempMin").innerHTML = temperaturaMinima;
    weatherApp.clone.querySelector(".tempMax").innerHTML = temperaturaMaxima;
    weatherApp.clone.querySelector(".descripcionClima").innerHTML = descripcion;
    weatherApp.clone.querySelector(".fechaSemana").innerHTML = fechaActual.semana + ", " + fechaActual.dia + " " + fechaActual.mes + " of " + fechaActual.ano;
    weatherApp.clone.querySelector(".temperaturaHoy").innerHTML = temperaturaHoy + "º C.";

    document.body.appendChild(weatherApp.clone);
  }

  // Geolocaliza tu ciudad
  if (navigator.geolocation) {
    //habría que ejecutar window.onload, pero con el closure, no hace falta
    navigator.geolocation.getCurrentPosition(posicionEncontrada, errorGeolocalizando);
  } else {
    alert('Tu navegador no soporta Geolocation :(');
  }

})();
