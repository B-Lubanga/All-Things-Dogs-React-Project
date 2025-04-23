// src/pages/FoundDog.jsx
import React, { useState } from "react";
import Main from "../components/Main";

const FoundDog = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    purpose: "adoption",
    url: "",
    imageFile: null,
    ownerName: "",
    ownerContact: "",
    ownerLocation: "",
    cost: "",
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let imageUrl = formData.url;
    if (formData.imageFile) {
      // For now, we'll mock the upload. In a real app, you would upload to Cloudinary, Firebase, etc.
      imageUrl = URL.createObjectURL(formData.imageFile);
    }

    const dataToSend = {
      ...formData,
      url: imageUrl,
    };

    delete dataToSend.imageFile;

    try {
      const response = await fetch("http://localhost:4000/dogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
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
          imageFile: null,
          ownerName: "",
          ownerContact: "",
          ownerLocation: "",
          cost: "",
        });
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
      <section className="py-20 container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Found a Dog? 🐶</h2>
        <p className="text-center mt-4">
          If you've found a stray dog or want to list a dog for sale or
          adoption, please provide the details below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        >
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

          {/* Image input options */}
          <div>
            <label className="block font-semibold mb-1">
              Dog Image Link (optional):
            </label>
            <input
              className="input"
              name="url"
              placeholder="Image URL"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Or Upload an Image:
            </label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Owner details */}
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

          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
            Submit Dog Details
          </button>
        </form>
      </section>
    </Main>
  );
};

export default FoundDog;
