import React, { useState } from "react";

export default function DogForm() {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert(`Dog listed for ${formData.purpose}.`);
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
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center">Add a Dog</h2>
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
        className="input"
        name="purpose"
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
        placeholder="Image URL"
        value={formData.url}
        onChange={handleChange}
      />
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
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
