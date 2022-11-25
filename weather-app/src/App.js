import { useEffect, useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import { formattedWeatherData } from "./services/WeatherServices";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      await formattedWeatherData({ ...query, units }).then((data) =>
        setWeather(data)
      );
    };
    fetchWeatherData();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-500">
      <TopButtons />
      <Inputs />

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
