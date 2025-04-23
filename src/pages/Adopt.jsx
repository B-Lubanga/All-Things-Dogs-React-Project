import React, { useEffect, useState } from "react";
import Main from "../components/Main";

import OwnerModal from "../components/OwnerModal";
import { FaDog } from "react-icons/fa6";
import { GiDogBowl } from "react-icons/gi";

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
      <h1 className="text-3xl font-bold mb-6 text-center">Adoptable pets</h1>
      <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-4">

        <div  className="w-full">
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
        </div>

        <div  className="w-full">
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
        </div>

       

        <div  className="w-full">


        <button
          onClick={handleFilter}
          className=" inline-block bg-red-500 hover:bg-red-600 text-white text-base px-6 py-2 rounded shadow-md transition"
        >
          Search
        </button>
        </div>
      </div>     

      <div className="flex justify-between gap-1 m-10 flex-wrap">

      {filteredDogs.map((dog) => (

        <div onClick={() => handleCardClick(dog)} key={dog.id}  className="w-[300px] hover:scale-105 transition md:w-[20%]">
            <div className="max-w-sm my-2 rounded-lg overflow-hidden shadow-lg h-[340px] w-full bg-white">
              <div className="relative h-60">
                <img
                  src={dog.url}
                  alt={dog.name}  
                  className="w-full h-full object-cover"
                />

                <div className="absolute w-full bottom-0 px-3 z-10 py-2 backdrop-blur-md">
                  <div className="flex justify-between items-center">
                    {/* Left side text */}
                    <div className="p-1 rounded-lg  ">
                      <p className="text-sm font-bold text-white">
                      <GiDogBowl />
                      </p>
                      
                    </div>
                    {/* Right side text */}
                    <div className="text-white px-3 py-2">
                      <span className="text-sm font-medium">
                      <FaDog className="text-blue" />
                      </span>
                     
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-2 bg-white">
              <div className="flex justify-between items-center">
                    {/* Left side text */}
                    <div className="p-1 rounded-lg  ">
                      <p className="text-sm font-bold p-1 ">
                      {dog.name}
                      </p>
                      <p className="text-sm font-normal p-1">
                      {dog.breed}
                      </p>
                    </div>
                    {/* Right side text */}
                    <div className=" px-3 py-2">
                      <span className="text-sm font-medium p-1">
                      {dog.age}
                      </span>
                      <p className="text-sm font-bold p-1 ">
                      {dog.location}
                      </p>
                    </div>
                  </div>

              </div>

              
            </div>
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
