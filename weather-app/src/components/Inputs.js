import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex justify-between items-center my-6 ">
      <div className="flex justify-start items-center gap-x-3 w-3/4 ">
        <input
          type="text"
          placeholder="Search a city..."
          className="outline-none p-1.5 text-base w-full capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-slate-100 cursor-pointer transition ease-out hover:scale-125"
        />
        <UilMapMarker
          size={25}
          className="text-slate-100 cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex justify-end items-center gap-2 w-1/4 text-slate-100 font-normal text-lg">
        <button name="metric"> °C </button>
        <p>|</p>
        <button name="imperial"> °F </button>
      </div>
    </div>
  );
};

export default Inputs;
