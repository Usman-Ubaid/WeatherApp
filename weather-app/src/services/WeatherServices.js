const API_KEY = "31d3557018d19764d8c330acef9882cd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  // searchParams is an object
  // infoType in this case would be weather.
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  console.log(url.search);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
// getWeatherData
export default getWeatherData;
