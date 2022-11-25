import { useEffect, useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import { formattedWeatherData } from "./services/WeatherServices";

function App() {
  const [query, setQuery] = useState({ q: "kansas" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      await formattedWeatherData({ ...query, units }).then((data) =>
        setWeather(data)
      );
    };
    fetchWeatherData();
  }, [query, units]);

  const changeBackgroundColor = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 25 : 70;

    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit 
    bg-gradient-to-br ${changeBackgroundColor()} 
    shadow-xl shadow-gray-500`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
