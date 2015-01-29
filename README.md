# Proyecto del curso de Desarrollo Web by [Platzi](http://platzi.com)

[API KEY](http://openweathermap.org/register)

APPID (API key) 80114c7878f599621184a687fc500a12

[API KEY](http://www.wunderground.com/weather/api/d/pricing.html) de Wunderground Weather API

595a3b8f36177305
WeatherProject
http://carlosazaustre.es

## Ejemplo

* **GET** forecast of San Francisco CA.

```json
{
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "forecast": 1
    }
  },
  "forecast": {
    "txt_forecast": {
      "date": "1:09 AM PST",
      "forecastday": [
        {
          "period": 0,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Thursday",
          "fcttext": "Abundant sunshine. High around 65F. Winds NW at 5 to 10 mph.",
          "fcttext_metric": "Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 17C. Winds NW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 1,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Thursday Night",
          "fcttext": "Mainly clear early, then a few clouds later on. Low 49F. Winds light and variable.",
          "fcttext_metric": "Partly cloudy. Low 9C. Winds light and variable.",
          "pop": "0"
        },
        {
          "period": 2,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Friday",
          "fcttext": "Partly cloudy skies. High 64F. Winds WSW at 5 to 10 mph.",
          "fcttext_metric": "Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 18C. Winds WSW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 3,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Friday Night",
          "fcttext": "Clear skies. Low 52F. Winds light and variable.",
          "fcttext_metric": "Clear. Low 11C. Winds light and variable.",
          "pop": "0"
        },
        {
          "period": 4,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Saturday",
          "fcttext": "Mainly sunny. High 69F. Winds N at 5 to 10 mph.",
          "fcttext_metric": "Mainly sunny. High near 20C. Winds N at 10 to 15 km/h.",
          "pop": "0"
          },
          {
            "period": 5,
            "icon": "nt_clear",
            "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
            "title": "Saturday Night",
            "fcttext": "A few clouds overnight. Low 49F. Winds light and variable.",
            "fcttext_metric": "Mainly clear early, then a few clouds later on. Low 9C. Winds light and variable.",
            "pop": "0"
            },
            {
              "period": 6,
              "icon": "partlycloudy",
              "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
              "title": "Sunday",
              "fcttext": "Partly cloudy skies. High 66F. Winds light and variable.",
              "fcttext_metric": "Intervals of clouds and sunshine. High 18C. Winds light and variable.",
              "pop": "0"
              },
              {
                "period": 7,
                "icon": "nt_partlycloudy",
                "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
                "title": "Sunday Night",
                "fcttext": "Partly cloudy. Low 51F. Winds light and variable.",
                "fcttext_metric": "Partly cloudy skies. Low 11C. Winds light and variable.",
                "pop": "0"
              }
              ]
              },
              "simpleforecast": {
                "forecastday": [
                {
                  "date": {
                    "epoch": "1422586800",
                    "pretty": "7:00 PM PST on January 29, 2015",
                    "day": 29,
                    "month": 1,
                    "year": 2015,
                    "yday": 28,
                    "hour": 19,
                    "min": "00",
                    "sec": 0,
                    "isdst": "0",
                    "monthname": "January",
                    "monthname_short": "Jan",
                    "weekday_short": "Thu",
                    "weekday": "Thursday",
                    "ampm": "PM",
                    "tz_short": "PST",
                    "tz_long": "America/Los_Angeles"
                    },
                    "period": 1,
                    "high": {
                      "fahrenheit": "65",
                      "celsius": "18"
                      },
                      "low": {
                        "fahrenheit": "49",
                        "celsius": "9"
                        },
                        "conditions": "Clear",
                        "icon": "clear",
                        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                        "skyicon": "",
                        "pop": 0,
                        "qpf_allday": {
                          "in": 0,
                          "mm": 0
                          },
                          "qpf_day": {
                            "in": 0,
                            "mm": 0
                            },
                            "qpf_night": {
                              "in": 0,
                              "mm": 0
                              },
                              "snow_allday": {
                                "in": 0,
                                "cm": 0
                                },
                                "snow_day": {
                                  "in": 0,
                                  "cm": 0
                                  },
                                  "snow_night": {
                                    "in": 0,
                                    "cm": 0
                                    },
                                    "maxwind": {
                                      "mph": 10,
                                      "kph": 16,
                                      "dir": "NW",
                                      "degrees": 320
                                      },
                                      "avewind": {
                                        "mph": 8,
                                        "kph": 13,
                                        "dir": "NW",
                                        "degrees": 320
                                        },
                                        "avehumidity": 75,
                                        "maxhumidity": 0,
                                        "minhumidity": 0
                                        },
                                        {
                                          "date": {
                                            "epoch": "1422673200",
                                            "pretty": "7:00 PM PST on January 30, 2015",
                                            "day": 30,
                                            "month": 1,
                                            "year": 2015,
                                            "yday": 29,
                                            "hour": 19,
                                            "min": "00",
                                            "sec": 0,
                                            "isdst": "0",
                                            "monthname": "January",
                                            "monthname_short": "Jan",
                                            "weekday_short": "Fri",
                                            "weekday": "Friday",
                                            "ampm": "PM",
                                            "tz_short": "PST",
                                            "tz_long": "America/Los_Angeles"
                                            },
                                            "period": 2,
                                            "high": {
                                              "fahrenheit": "64",
                                              "celsius": "18"
                                              },
                                              "low": {
                                                "fahrenheit": "52",
                                                "celsius": "11"
                                                },
                                                "conditions": "Partly Cloudy",
                                                "icon": "partlycloudy",
                                                "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                                                "skyicon": "",
                                                "pop": 0,
                                                "qpf_allday": {
                                                  "in": 0,
                                                  "mm": 0
                                                  },
                                                  "qpf_day": {
                                                    "in": 0,
                                                    "mm": 0
                                                    },
                                                    "qpf_night": {
                                                      "in": 0,
                                                      "mm": 0
                                                      },
                                                      "snow_allday": {
                                                        "in": 0,
                                                        "cm": 0
                                                        },
                                                        "snow_day": {
                                                          "in": 0,
                                                          "cm": 0
                                                          },
                                                          "snow_night": {
                                                            "in": 0,
                                                            "cm": 0
                                                            },
                                                            "maxwind": {
                                                              "mph": 10,
                                                              "kph": 16,
                                                              "dir": "WSW",
                                                              "degrees": 255
                                                              },
                                                              "avewind": {
                                                                "mph": 8,
                                                                "kph": 13,
                                                                "dir": "WSW",
                                                                "degrees": 255
                                                                },
                                                                "avehumidity": 76,
                                                                "maxhumidity": 0,
                                                                "minhumidity": 0
                                                                },
                                                                {
                                                                  "date": {
                                                                    "epoch": "1422759600",
                                                                    "pretty": "7:00 PM PST on January 31, 2015",
                                                                    "day": 31,
                                                                    "month": 1,
                                                                    "year": 2015,
                                                                    "yday": 30,
                                                                    "hour": 19,
                                                                    "min": "00",
                                                                    "sec": 0,
                                                                    "isdst": "0",
                                                                    "monthname": "January",
                                                                    "monthname_short": "Jan",
                                                                    "weekday_short": "Sat",
                                                                    "weekday": "Saturday",
                                                                    "ampm": "PM",
                                                                    "tz_short": "PST",
                                                                    "tz_long": "America/Los_Angeles"
                                                                    },
                                                                    "period": 3,
                                                                    "high": {
                                                                      "fahrenheit": "69",
                                                                      "celsius": "21"
                                                                      },
                                                                      "low": {
                                                                        "fahrenheit": "49",
                                                                        "celsius": "9"
                                                                        },
                                                                        "conditions": "Clear",
                                                                        "icon": "clear",
                                                                        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                                                                        "skyicon": "",
                                                                        "pop": 0,
                                                                        "qpf_allday": {
                                                                          "in": 0,
                                                                          "mm": 0
                                                                          },
                                                                          "qpf_day": {
                                                                            "in": 0,
                                                                            "mm": 0
                                                                            },
                                                                            "qpf_night": {
                                                                              "in": 0,
                                                                              "mm": 0
                                                                              },
                                                                              "snow_allday": {
                                                                                "in": 0,
                                                                                "cm": 0
                                                                                },
                                                                                "snow_day": {
                                                                                  "in": 0,
                                                                                  "cm": 0
                                                                                  },
                                                                                  "snow_night": {
                                                                                    "in": 0,
                                                                                    "cm": 0
                                                                                    },
                                                                                    "maxwind": {
                                                                                      "mph": 10,
                                                                                      "kph": 16,
                                                                                      "dir": "N",
                                                                                      "degrees": 351
                                                                                      },
                                                                                      "avewind": {
                                                                                        "mph": 6,
                                                                                        "kph": 10,
                                                                                        "dir": "N",
                                                                                        "degrees": 351
                                                                                        },
                                                                                        "avehumidity": 53,
                                                                                        "maxhumidity": 0,
                                                                                        "minhumidity": 0
                                                                                        },
                                                                                        {
                                                                                          "date": {
                                                                                            "epoch": "1422846000",
                                                                                            "pretty": "7:00 PM PST on February 01, 2015",
                                                                                            "day": 1,
                                                                                            "month": 2,
                                                                                            "year": 2015,
                                                                                            "yday": 31,
                                                                                            "hour": 19,
                                                                                            "min": "00",
                                                                                            "sec": 0,
                                                                                            "isdst": "0",
                                                                                            "monthname": "February",
                                                                                            "monthname_short": "Feb",
                                                                                            "weekday_short": "Sun",
                                                                                            "weekday": "Sunday",
                                                                                            "ampm": "PM",
                                                                                            "tz_short": "PST",
                                                                                            "tz_long": "America/Los_Angeles"
                                                                                            },
                                                                                            "period": 4,
                                                                                            "high": {
                                                                                              "fahrenheit": "66",
                                                                                              "celsius": "19"
                                                                                              },
                                                                                              "low": {
                                                                                                "fahrenheit": "51",
                                                                                                "celsius": "11"
                                                                                                },
                                                                                                "conditions": "Partly Cloudy",
                                                                                                "icon": "partlycloudy",
                                                                                                "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                                                                                                "skyicon": "",
                                                                                                "pop": 0,
                                                                                                "qpf_allday": {
                                                                                                  "in": 0,
                                                                                                  "mm": 0
                                                                                                  },
                                                                                                  "qpf_day": {
                                                                                                    "in": 0,
                                                                                                    "mm": 0
                                                                                                    },
                                                                                                    "qpf_night": {
                                                                                                      "in": 0,
                                                                                                      "mm": 0
                                                                                                      },
                                                                                                      "snow_allday": {
                                                                                                        "in": 0,
                                                                                                        "cm": 0
                                                                                                        },
                                                                                                        "snow_day": {
                                                                                                          "in": 0,
                                                                                                          "cm": 0
                                                                                                          },
                                                                                                          "snow_night": {
                                                                                                            "in": 0,
                                                                                                            "cm": 0
                                                                                                            },
                                                                                                            "maxwind": {
                                                                                                              "mph": 5,
                                                                                                              "kph": 8,
                                                                                                              "dir": "NNW",
                                                                                                              "degrees": 333
                                                                                                              },
                                                                                                              "avewind": {
                                                                                                                "mph": 4,
                                                                                                                "kph": 6,
                                                                                                                "dir": "NNW",
                                                                                                                "degrees": 333
                                                                                                                },
                                                                                                                "avehumidity": 65,
                                                                                                                "maxhumidity": 0,
                                                                                                                "minhumidity": 0
                                                                                                              }
                                                                                                              ]
                                                                                                            }
                                                                                                          }
                                                                                                        }
```
