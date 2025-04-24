import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import OwnerModal from "../components/OwnerModal";
import SearchBar from "../components/SearchBar";
import DogCard from "../components/DogCard";

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

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/dogs/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedDogs = dogs.filter((dog) => dog.id !== id);
          const updatedFilteredDogs = filteredDogs.filter(
            (dog) => dog.id !== id
          );
          setDogs(updatedDogs);
          setFilteredDogs(updatedFilteredDogs);
        } else {
          console.error("Failed to delete dog from database.");
        }
      })
      .catch((error) => {
        console.error("Error deleting dog:", error);
      });
  };

  const uniqueBreeds = [...new Set(dogs.map((dog) => dog.breed))];
  const uniqueLocations = [...new Set(dogs.map((dog) => dog.location))];

  return (
    <Main>
      <h1 className="text-3xl font-bold mb-6 text-center">Adoptable Pets</h1>

      <SearchBar
        searchBreed={searchBreed}
        setSearchBreed={setSearchBreed}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
        uniqueBreeds={uniqueBreeds}
        uniqueLocations={uniqueLocations}
        handleFilter={handleFilter}
      />

      <div className="m-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDogs.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            onClick={handleCardClick}
            onDelete={handleDelete}
          />
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
