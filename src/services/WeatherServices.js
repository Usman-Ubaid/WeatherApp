import { DateTime } from "luxon";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(process.env.REACT_APP_BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: `${process.env.REACT_APP_API_KEY}`,
  });

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
