import React from "react";

export default function SearchBar({
  searchBreed,
  setSearchBreed,
  searchLocation,
  setSearchLocation,
  uniqueBreeds,
  uniqueLocations,
  handleFilter,
}) {
  return (
    <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        list="breedName"
        placeholder="Search by breed"
        value={searchBreed}
        onChange={(e) => setSearchBreed(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <datalist id="breedName">
        {uniqueBreeds.map((breed, index) => (
          <option key={index} value={breed} />
        ))}
      </datalist>

      <input
        list="locationList"
        placeholder="Search by location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <datalist id="locationList">
        {uniqueLocations.map((location, index) => (
          <option key={index} value={location} />
        ))}
      </datalist>

      <button
        onClick={handleFilter}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-2 rounded shadow-md transition"
      >
        Search
      </button>
    </div>
  );
}
