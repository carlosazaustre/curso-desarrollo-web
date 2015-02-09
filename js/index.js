"use strict";

(function() {

  // -- Constantes -------------------------------------------------------------

  var API_WORLDTIME_KEY = "d6a4075ceb419113c64885d9086d5";
  var API_WORLDTIME = "https://api.worldweatheronline.com/free/v2/tz.ashx?format=json&key="+ API_WORLDTIME_KEY +"&q=";
  var API_WEATHER_KEY = "80114c7878f599621184a687fc500a12";
  var API_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY + "&";
  var API_FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + API_WEATHER_KEY + "&";
  var IMG_WEATHER = "http://openweathermap.org/img/w/";

  // -- Variables -----------------------fa-------------------------------------

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
  var timeNow = today.toLocaleTimeString().split(" ")[0];
  var dateNow = today.getDate() + "/" + today.getMonth()+1 + "/" + today.getFullYear();

  // -- Cacheado de elementos --------------------------------------------------

  var $body              = $("body");
  var loader             = $(".loader");
  var formAddNuevaCiudad = $('.search');
  var buttonAdd          = $("[data-button='add']");
  var buttonLoad         = $("[data-button='loadCities']");
  var nombreNuevaCiudad  = $("[data-input='cityAdd']");

  // -- Funciones --------------------------------------------------------------

  function onLoad() {
    // Eventos
    $(formAddNuevaCiudad).hide();
    $(buttonAdd).on('click', addNewCity);
    $(nombreNuevaCiudad).on('keypress', function(e) {
      if(e.which == 13) {
        addNewCity(e);
      }
    });

    $(buttonLoad).on('click', loadSavedCities);


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
    // 1: Permiso denegado
    // 2: Posición no disponible
    // 3: Timeout
  };

  function getCoords(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.getJSON(API_WEATHER_URL + "lat=" + lat + "&lon=" + lon, getCurrentWeather);
  }

  function getCurrentWeather(data) {
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
    var t = document.querySelector("#template--city");
    var clone = document.importNode(t.content, true);
    var timeToShow;

    if (localTime) {
      timeToShow = localTime.split(" ")[1];
    } else {
      timeToShow = timeNow;
    }

    // Pinta los datos
    clone.querySelector("[data-time]").innerHTML            = timeToShow;
    //clone.querySelector("[data-date]").innerHTML            = dateNow;
    clone.querySelector("[data-city]").innerHTML            = city.zone;
    clone.querySelector("[data-icon]").src                  = city.icon;
    clone.querySelector("[data-temp='max']").innerHTML      = city.temp_max.toFixed(1);
    clone.querySelector("[data-temp='min']").innerHTML      = city.temp_min.toFixed(1);
    //clone.querySelector("[data-description]").innerHTML     = city.description;
    clone.querySelector("[data-temp='current']").innerHTML  = city.temp.toFixed(1);

    $(loader).hide();
    $(formAddNuevaCiudad).show();
    $($body).append(clone);
  }

  function addNewCity(e) {
    e.preventDefault();
    $.getJSON(API_WEATHER_URL + "q=" + $(nombreNuevaCiudad).val(), getWeatherNewCity);
  }

  function getWeatherNewCity(data) {
    if(data.cod && data.cod == '404') {
      alert("Error: No existe esa ciudad en la base de datos")
    }

    $.getJSON(API_WORLDTIME + $(nombreNuevaCiudad).val(), function(response) {
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

  function loadSavedCities(e) {
    e.preventDefault();
    var cities = JSON.parse( localStorage.getItem('cities') );
    cities.forEach(function(city) {
      var cityLoad = city;
      renderTemplate(cityLoad);
    });

    // Detecta eventos de click en cada ciudad
    $(".card").on("click", function(e) {
      var i = $(".ciudad").index(this);
      console.log(i);
    });

  }

  // -- Inicia la aplicación ---------------------------------------------------

  onLoad();

})();
