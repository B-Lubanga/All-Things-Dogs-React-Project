import React from "react";
import { GiDogBowl, GiSniffingDog } from "react-icons/gi";
import { FaDog } from "react-icons/fa6";

export default function DogCard({ dog, onClick, onDelete }) {
  return (
    <div
      key={dog.id}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
    >
      <div onClick={() => onClick(dog)} className="cursor-pointer">
        <div className="relative h-60">
          <img
            src={dog.url}
            alt={dog.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bottom-0 px-3 z-10 py-2 backdrop-blur-md flex justify-between items-center">
            <div className="text-white text-sm font-bold">
              <GiDogBowl />
            </div>
            <div className="text-white">
              <FaDog />
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-bold">{dog.name}</p>
              <p className="text-sm">{dog.breed}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">{dog.age}</p>
              <p className="text-sm font-bold">{dog.location}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onDelete(dog.id)}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800 bg-white bg-opacity-80 rounded-full p-1 shadow-md transition"
        title="Delete"
      >
        <GiSniffingDog className="w-5 h-5" />
      </button>
    </div>
  );
}
