const Forecasts = ({ title }) => {
  return (
    <div>
      <div className="mt-5">
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <hr className="my-3" />

      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">02:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-icon"
            className="w-12 my-1"
          />
          <p className="font-medium">19°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">02:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-icon"
            className="w-12 my-1"
          />
          <p className="font-medium">19°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">02:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-icon"
            className="w-12 my-1"
          />
          <p className="font-medium">19°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">02:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-icon"
            className="w-12 my-1"
          />
          <p className="font-medium">19°</p>
        </div>
        <div className="font-light flex flex-col items-center justify-center">
          <p className="font-light text-sm">02:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather-icon"
            className="w-12 my-1"
          />
          <p className="font-medium">19°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecasts;
