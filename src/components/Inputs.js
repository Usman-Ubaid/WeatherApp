import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import { useState } from "react";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex justify-between items-center my-6 ">
      <div className="flex justify-start items-center gap-x-3 w-3/4 ">
        <input
          value={city}
          type="text"
          placeholder="Search a city..."
          className="outline-none p-1.5 rounded text-base w-full capitalize placeholder:lowercase"
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <UilSearch
          size={25}
          className="text-slate-100 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilMapMarker
          size={25}
          className="text-slate-100 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex justify-end items-center gap-2 w-1/4 text-slate-100 font-normal text-lg">
        <button
          name="metric"
          className="transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p>|</p>
        <button
          name="imperial"
          className="transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
