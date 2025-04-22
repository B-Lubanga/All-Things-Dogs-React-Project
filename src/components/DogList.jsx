import React, { useEffect, useState } from "react";
import OwnerModal from "./OwnerModal";

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [modalData, setModalData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/dogs")
      .then((res) => res.json())
      .then(setDogs);
  }, []);

  const categorized = {
    adoption: dogs.filter((d) => d.purpose === "adoption"),
    rescue: dogs.filter((d) => d.purpose === "rescue"),
    sale: dogs.filter((d) => d.purpose === "sale"),
  };

  return (
    <div className="space-y-10 m-4">
      {["adoption", "rescue", "sale"].map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold capitalize mb-4 text-center">
            {category} Dogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categorized[category].map((dog) => (
              <div
                key={dog.id}
                className="bg-white p-4 rounded shadow cursor-pointer hover:bg-blue-50"
                onClick={() => setModalData(dog)}
              >
                <img
                  src={dog.url}
                  alt={dog.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-2">{dog.name}</h3>
                <p className="text-gray-600">
                  {dog.breed}, {dog.age}
                </p>
                <p className="text-sm text-gray-400">{dog.location}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {modalData && (
        <OwnerModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          data={modalData}
        />
      )}
    </div>
  );
}
