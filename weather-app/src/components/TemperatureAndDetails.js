import {
  UilTemperature,
  UilWind,
  UilTear,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="text-center py-4">
        <p className="text-cyan-300 text-lg">Clear</p>
      </div>
      <div className="flex items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather-icon"
          className="w-20"
        />
        <p className=" text-4xl">34°</p>
        <div className="flex flex-col text-xs space-y-2 font-light">
          <div className="flex items-center justify-center">
            <UilTemperature size={20} className="mr-1" />
            Real Feel: <span className="pl-1 font-medium">32°</span>
          </div>
          <div className="flex items-center justify-center">
            <UilWind size={20} className="mr-1" />
            Wind: <span className="pl-1 font-medium">12km/h</span>
          </div>
          <div className="flex items-center justify-center">
            <UilTear size={20} className="mr-1" />
            Humidity: <span className="pl-1 font-medium">50%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white text-xs space-x-1 py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">7:14 AM</span>
        </p>
        <p>|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">04:43 PM</span>
        </p>
        <p>|</p>
        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">12:24 PM</span>
        </p>
        <p>|</p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">02:54 PM</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
