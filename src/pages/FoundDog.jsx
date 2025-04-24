
import React, { useState } from "react";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";


const FoundDog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    purpose: "adoption",
    url: "",
    ownerName: "",
    ownerContact: "",
    ownerLocation: "",
    cost: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/dogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Dog listed successfully!");
        setFormData({
          name: "",
          breed: "",
          age: "",
          location: "",
          purpose: "adoption",
          url: "",
          ownerName: "",
          ownerContact: "",
          ownerLocation: "",
          cost: "",
        });
        navigate("/adopt");
      } else {
        alert("Failed to list the dog.");
      }
    } catch (err) {
      alert("Error submitting dog info.");
      console.error(err);
    }
  }

  return (
    <Main>
      <section className="py-20 px-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-red-600">Found a Dog? 🐶</h2>
          <p className="mt-3 text-gray-600">
            If you've found a stray or want to list a dog for sale or adoption, fill out the form below with the details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Dog Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              name="name"
              placeholder="Dog's Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="input"
              name="breed"
              placeholder="Breed"
              value={formData.breed}
              onChange={handleChange}
            />
            <input
              className="input"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />
            <input
              className="input"
              name="location"
              placeholder="Dog Location"
              value={formData.location}
              onChange={handleChange}
            />
            <select
              name="purpose"
              className="input"
              value={formData.purpose}
              onChange={handleChange}
            >
              <option value="adoption">Adoption</option>
              <option value="rescue">Rescue</option>
              <option value="sale">Sale</option>
            </select>
            <input
              className="input"
              name="url"
              placeholder="Dog Image URL"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <hr className="my-6" />

          {/* Owner Info */}
          <h3 className="text-xl font-semibold text-gray-800">Owner Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              name="ownerName"
              placeholder="Owner Name"
              value={formData.ownerName}
              onChange={handleChange}
            />
            <input
              className="input"
              name="ownerContact"
              placeholder="Owner Contact"
              value={formData.ownerContact}
              onChange={handleChange}
            />
            <input
              className="input"
              name="ownerLocation"
              placeholder="Owner Location"
              value={formData.ownerLocation}
              onChange={handleChange}
            />
            <input
              className="input"
              name="cost"
              placeholder="Cost (if for sale)"
              value={formData.cost}
              onChange={handleChange}
            />
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg shadow-md transition">
            Submit Dog Details
          </button>
        </form>
      </section>
    </Main>
  );
};

export default FoundDog;
