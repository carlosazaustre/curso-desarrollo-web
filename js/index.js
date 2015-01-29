// Petición AJAX con jQuery
"use strict";

(function() {

  // Activar el template
  var t = document.querySelector("#plantilla");
  var clone = document.importNode(t.content, true);

  // Geolocaliza tu ciudad
  if (navigator.geolocation) {
    window.onload = function() {
      navigator.geolocation.getCurrentPosition(function(pos) {
        posicion = pos;
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        $.getJSON("http://api.wunderground.com/api/595a3b8f36177305/geolookup/q/" + lat + "," + lon + ".json", showData);

        function showData(data) {
          console.log(data);
        }
      });
    }
  }



  // Llamada AJAX al API de Weather, para pedir datos del clima
  /*var forecastData = {};
  var hourlyData = {};

  $.ajax({
    dataType: "jsonp",
    url: "http://api.wunderground.com/api/595a3b8f36177305/forecast/q/CA/San_Francisco.json",
    context: document.body
  }).done(function(data) {
    forecastData = data;

    // Llamada AJAX al API Weather para ver temperatura actual
    $.ajax({
      dataType: "jsonp",
      url: "http://api.wunderground.com/api/595a3b8f36177305/hourly/q/CA/San_Francisco.json",
      context: document.body,
    }).done(function(data) {

      hourlyData = data;

      var descripcion = forecastData.forecast.txt_forecast.forecastday[0].fcttext_metric;
      var climaHoy = forecastData.forecast.simpleforecast.forecastday[0];
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
      clone.querySelector(".weatherImagen").src = iconoTiempo;
      clone.querySelector(".tempMin").innerHTML = temperaturaMinima;
      clone.querySelector(".tempMax").innerHTML = temperaturaMaxima;
      clone.querySelector(".descripcionClima").innerHTML = descripcion;
      clone.querySelector(".fechaSemana").innerHTML = fechaActual.semana + ", " + fechaActual.dia + " " + fechaActual.mes + " of " + fechaActual.ano;

      var temperaturaHoy = hourlyData.hourly_forecast[0].temp.metric;
      clone.querySelector(".temperaturaHoy").innerHTML = temperaturaHoy + "º C.";

      document.body.appendChild(clone);
    });


  });*/

})();
