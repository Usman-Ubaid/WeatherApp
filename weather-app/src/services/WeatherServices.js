const API_KEY = "31d3557018d19764d8c330acef9882cd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

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

const formattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  return formattedCurrentWeather;
};

export default formattedWeatherData;
