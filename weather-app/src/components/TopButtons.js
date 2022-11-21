function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Toronto",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "Berlin",
    },
  ];
  return (
    <div className="flex justify-between items-center my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium hover:text-gray-200 "
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
