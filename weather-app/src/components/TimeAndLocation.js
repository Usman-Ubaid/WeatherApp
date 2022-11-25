import { formatToLocalTime } from "../services/WeatherServices";

const TimeAndLocation = ({ weather: { name, country, timezone, dt } }) => {
  return (
    <div>
      <div className="text-center my-4">
        <p className="text-white text-lg font-light">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="text-center my-4">
        <p className="text-white text-2xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
