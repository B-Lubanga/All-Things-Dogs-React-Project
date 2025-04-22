import React from "react";

const FoundDog = () => {
  return (
    <section
      id="found-dog"
      className="pt-20 container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center">Found a Dog? 🐶</h2>
      <p className="text-center mt-4">
        If you've found a stray dog or want to list a dog for sale or adoption,
        please provide the details below.
      </p>

      <form
        id="dogForm"
        className="mt-6 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
      >
        {/* Dog Image Link */}
        <label className="block font-semibold mb-2" htmlFor="dogImage">
          Dog Image Link:
        </label>
        <input
          type="text"
          id="dogImage"
          name="dogImage"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Paste image URL here"
        />

        {/* Dog Name */}
        <label className="block font-semibold mt-4 mb-2" htmlFor="dogName">
          Dog Name:
        </label>
        <input
          type="text"
          id="dogName"
          name="dogName"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter dog's name"
        />

        {/* Dog Breed */}
        <label className="block font-semibold mt-4 mb-2" htmlFor="dogBreed">
          Dog Breed:
        </label>
        <input
          type="text"
          id="dogBreed"
          name="dogBreed"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter dog's breed"
        />

        {/* Dog Age */}
        <label className="block font-semibold mt-4 mb-2" htmlFor="dogAge">
          Dog Age:
        </label>
        <input
          type="text"
          id="dogAge"
          name="dogAge"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter dog's age"
        />

        {/* Location */}
        <label className="block font-semibold mt-4 mb-2" htmlFor="dogLocation">
          Location:
        </label>
        <input
          type="text"
          id="dogLocation"
          name="dogLocation"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter location (e.g., Nairobi, Machakos)"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Submit Dog Details
        </button>
      </form>
    </section>
  );
};

export default FoundDog;
