import React, { useState } from "react";

const Adopt = () => {
  const [searchBreed, setSearchBreed] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for breed: ${searchBreed} in location: ${searchLocation}`
    );
    // Add logic to filter the dogs based on breed and location
  };

  return (
    <section
      id="adopt"
      className="pt-20 container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center">
        Find Your Perfect Dog 🐕
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 mb-4">
        <input
          className="w-full md:w-1/3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="searchBreed"
          placeholder="Search by breed (e.g., Labrador, Husky)"
          value={searchBreed}
          onChange={(e) => setSearchBreed(e.target.value)}
        />
        <input
          type="text"
          id="searchLocation"
          placeholder="Enter location (e.g., Nairobi, Machakos)"
          className="w-full md:w-1/3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
      <div
        id="dogGallery"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {/* Dog cards will be dynamically generated here */}
        {/* Example dog card */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Dog"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Dog Name</h3>
            <p className="text-sm text-gray-600">Breed: Labrador</p>
            <p className="text-sm text-gray-600">Age: 2 years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adopt;
