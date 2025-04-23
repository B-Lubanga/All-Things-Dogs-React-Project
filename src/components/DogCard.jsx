import React from "react";

const DogCard = ({ dog, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(dog)}
    >
      <img
        src={dog.image}
        alt={dog.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{dog.name}</h3>
      <p className="text-sm text-gray-600">{dog.breed}</p>
      <p className="text-sm text-gray-600">{dog.location}</p>
    </div>
  );
};

export default DogCard;
