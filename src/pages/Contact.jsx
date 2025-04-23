import React, { useState } from "react";
import Main from "../components/Main";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  return (
    <Main>
      <section className="py-20 container mx-auto px-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-700 mb-6">
          Whether you need help, want to report something, or simply share
          feedback—we’re here for you. Reach out anytime.
        </p>

        {/* Contact Info */}
        <div className="text-center mb-10">
          <p className="text-lg font-semibold">📞 Phone: +254 712 345 678</p>
          <p className="text-lg font-semibold">
            ✉️ Email: support@allthingsdogs.com
          </p>
          <p className="text-lg font-semibold">📍 Location: Nairobi, Kenya</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            className="input"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="input h-32 resize-none"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    </Main>
  );
};

export default Contact;
