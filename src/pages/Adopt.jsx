import React, { useEffect, useState } from "react";
import Main from "../components/Main";

import OwnerModal from "../components/OwnerModal";

export default function Adopt() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [searchBreed, setSearchBreed] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedDog, setSelectedDog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/dogs")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data);
        setFilteredDogs(data);
      })
      .catch((error) => console.error("Error loading dog data:", error));
  }, []);

  const handleFilter = () => {
    const filtered = dogs.filter(
      (dog) =>
        dog.breed.toLowerCase().includes(searchBreed.toLowerCase()) &&
        dog.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredDogs(filtered);
  };

  const handleCardClick = (dog) => {
    setSelectedDog(dog);
    setIsModalOpen(true);
  };

  const uniqueBreeds = [...new Set(dogs.map((dog) => dog.breed))];
  const uniqueLocations = [...new Set(dogs.map((dog) => dog.location))];

  return (
    <Main>
      <h1 className="text-3xl font-bold mb-6">Adopt a Dog</h1>

      <div className="mb-4 flex gap-4 flex-wrap">
        <div>
          <input
            list="breedName"
            placeholder="Search by breed"
            value={searchBreed}
            onChange={(e) => setSearchBreed(e.target.value)}
            className="p-2 border rounded"
          />
          <datalist id="breedName">
            {uniqueBreeds.map((breed, index) => (
              <option key={index} value={breed} />
            ))}
          </datalist>
        </div>

        <div>
          <input
            list="locationList"
            placeholder="Search by location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="p-2 border rounded"
          />
          <datalist id="locationList">
            {uniqueLocations.map((location, index) => (
              <option key={index} value={location} />
            ))}
          </datalist>
        </div>

        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 transition"
            onClick={() => handleCardClick(dog)}
          >
            <img
              src={dog.url}
              alt={dog.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{dog.name}</h2>
            <p className="text-gray-600">
              {dog.breed}, {dog.age}
            </p>
            <p className="text-gray-500">{dog.location}</p>
          </div>
        ))}
      </div>

      <OwnerModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        data={selectedDog}
      />
    </Main>
  );
}
