import {
  UilTemperature,
  UilWind,
  UilTear,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime } from "../services/WeatherServices";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    feels_like,
    speed,
    humidity,
    sunrise,
    sunset,
    timezone,
    temp_max,
    temp_min,
  },
}) => {
  return (
    <div>
      <div className="text-center py-4">
        <p className="text-cyan-300 text-lg">{details}</p>
      </div>
      <div className="flex items-center justify-between text-white py-3">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weather-icon"
          className="w-20"
        />
        <p className=" text-4xl">{`${temp.toFixed()}`}°</p>
        <div className="flex flex-col text-xs space-y-2 font-light">
          <div className="flex items-center justify-center">
            <UilTemperature size={20} className="mr-1" />
            Real Feel:
            <span className="pl-1 font-medium">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex items-center justify-center">
            <UilWind size={20} className="mr-1" />
            Wind:{" "}
            <span className="pl-1 font-medium">{`${speed.toFixed()}`}km/h</span>
          </div>
          <div className="flex items-center justify-center">
            <UilTear size={20} className="mr-1" />
            Humidity: <span className="pl-1 font-medium">{`${humidity}`}%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white text-xs space-x-1 py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p>|</p>
        <UilSunset />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p>|</p>
        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p>|</p>
        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
