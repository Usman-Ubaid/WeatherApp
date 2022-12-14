import { DateTime } from "luxon";

const API_KEY = "31d3557018d19764d8c330acef9882cd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// One Call API:  https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  // searchParams is an object. It could be longitude, latitude or city name.
  // infoType in this case would be weather.
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    weather,
    main: { temp, feels_like, humidity, temp_min, temp_max },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    name,
    timezone,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    humidity,
    temp_min,
    temp_max,
    timezone,
    speed,
    dt,
    country,
    sunrise,
    sunset,
    name,
    details,
    icon,
  };
};

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });
//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

const formattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  return formattedCurrentWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local Time:'hh:mm a "
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export { formattedWeatherData, formatToLocalTime };
