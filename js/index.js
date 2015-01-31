"use strict";

(function() {

  // -- Constantes -------------------------------------------------------------

  var API_GOOGLEMAPS = "https://maps.googleapis.com/maps/api/timezone/json?"; //location=39.6034810,-119.6822510&timestamp=1331161200"

  var API_WORLDTIME_KEY = "d6a4075ceb419113c64885d9086d5";
  var API_WORLDTIME = "https://api.worldweatheronline.com/free/v2/tz.ashx?format=json&key="+ API_WORLDTIME_KEY +"&q=";
  var API_WEATHER_KEY = "80114c7878f599621184a687fc500a12";
  var API_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY + "&";
  var API_FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + API_WEATHER_KEY + "&";
  var IMG_WEATHER = "http://openweathermap.org/img/w/";

  // -- Variables --------------------------------------------------------------

  var cities = [];
  var cityWeather = {};
  cityWeather.zone;
  cityWeather.icon;
  cityWeather.temp;
  cityWeather.temp_max;
  cityWeather.temp_min;
  cityWeather.sunrise;
  cityWeather.sundown;
  cityWeather.description;
  cityWeather.main;

  var today = new Date();
  //var timeNow = moment().locale('es').format('hh:mm:ss a');
  var timeNow = today.toLocaleTimeString().split(" ")[0];
  //var dateNow = moment().locale('es').format('dddd[, ] D [de] MMMM [de] YYYY');
  var dateNow = today.getDate() + "/" + today.getMonth()+1 + "/" + today.getFullYear();

  // -- Cacheado de elementos --------------------------------------------------

  var $body = $("body");
  var $loader = $(".loader");
  var $buttonAdd = $("#buttonAdd");
  var $nombreNuevaCiudad = $("#nombreNuevaCiudad");
  var $formAddNuevaCiudad = $('#formAddNuevaCiudad');

  // -- Funciones --------------------------------------------------------------

  function onLoad() {
    // Eventos
    $( $formAddNuevaCiudad ).hide();
    $( $buttonAdd ).on('click', addNewCity);
    $( $nombreNuevaCiudad ).on('keypress', function(e) {
      if(e.which == 13) {
        addNewCity(e);
      }
    });

    // Detecta la posición e inicia la aplicación
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords, errorFound);
    } else {
      alert("Tu navegador no soporta GeoLocation");
    }
  };

  function errorFound(error) {
    alert('Un error ocurrió: ' + error.code);
    // El código de error puede ser:
    // 0: Error desconocido
    // 1: Permiso spodenegado
    // 2: Posición no disponible
    // 3: Timeout
  };

  function getCoords(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.getJSON(API_WEATHER_URL + "lat=" + lat + "&lon=" + lon, getCurrentWeather);
  }

  function getCurrentWeather(data) {
    console.log(data);
    cityWeather.zone        = data.name;
    cityWeather.icon        = IMG_WEATHER + data.weather[0].icon + ".png";
    cityWeather.temp        = data.main.temp - 273.15;
    cityWeather.temp_max    = data.main.temp_max - 273.15;
    cityWeather.temp_min    = data.main.temp_min - 273.15;
    cityWeather.sunrise     = data.sys.sunrise;
    cityWeather.sunset      = data.sys.sunset;
    cityWeather.description = data.weather[0].description;
    cityWeather.main        = data.weather[0].main;

    renderTemplate(cityWeather, null);
  }

  function renderTemplate(city, localTime) {
    // Activar el template
    var t = document.querySelector("#plantillaCiudad");
    var clone = document.importNode(t.content, true);
    var timeToShow;

    if (localTime) {
      timeToShow = localTime.split(" ")[1];
    } else {
      timeToShow = timeNow;
    }

    // Pinta los datos
    clone.querySelector(".horaActual").innerHTML        = timeToShow;
    clone.querySelector(".fechaSemana").innerHTML       = dateNow;
    clone.querySelector(".nombreCiudad").innerHTML      = city.zone;
    clone.querySelector(".weatherImagen").src           = city.icon;
    clone.querySelector(".tempMin").innerHTML           = city.temp_max + "º C.";
    clone.querySelector(".tempMax").innerHTML           = city.temp_min + "º C.";
    clone.querySelector(".descripcionClima").innerHTML  = city.description;
    clone.querySelector(".temperaturaHoy").innerHTML    = city.temp + "º C.";

    $( $loader ).hide();
    $( $formAddNuevaCiudad ).show();
    $( $body ).append(clone);
  }

  function addNewCity(e) {
    e.preventDefault();
    console.log( $( $nombreNuevaCiudad).val() );
    $.getJSON(API_WEATHER_URL + "q=" + $( $nombreNuevaCiudad).val(), getWeatherNewCity);
  }

  function getWeatherNewCity(data) {
    if(data.cod && data.cod == '404') {
      alert("Error: No existe esa ciudad en la base de datos")
    }

    $.getJSON(API_WORLDTIME + $( $nombreNuevaCiudad ).val(), function(response) {
      var newCity = {};
      newCity.zone        = data.name;
      newCity.icon        = IMG_WEATHER + data.weather[0].icon + ".png";
      newCity.temp        = data.main.temp - 273.15;
      newCity.temp_max    = data.main.temp_max - 273.15;
      newCity.temp_min    = data.main.temp_min - 273.15;
      newCity.sunrise     = data.sys.sunrise;
      newCity.sunset      = data.sys.sunset;
      newCity.description = data.weather[0].description;
      newCity.main        = data.weather[0].main;

      renderTemplate(newCity, response.data.time_zone[0].localtime);

      cities.push(newCity);
      localStorage.setItem( 'cities', JSON.stringify(cities) );
    });
  }

  // -- Inicia la aplicación ---------------------------------------------------

  onLoad();

})();
