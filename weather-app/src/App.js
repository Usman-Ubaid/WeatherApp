import "./App.css";
import Forecasts from "./components/Forecasts";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import formattedWeatherData from "./services/WeatherServices";
import getWeatherData from "./services/WeatherServices";

function App() {
  const fetchWeatherData = async () => {
    const data = await formattedWeatherData({ q: "london" });
    console.log(data);
  };

  fetchWeatherData();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-500">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecasts title="Hourly Forecast" />
      <Forecasts title="Daily Forecast" />
    </div>
  );
}

export default App;
