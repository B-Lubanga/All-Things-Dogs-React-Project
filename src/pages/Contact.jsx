import React, { useState } from "react";
import Main from "../components/Main";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <Main>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you need help, want to report something, or simply share
            feedback — we’re here for you. Reach out anytime!
          </p>

          {/* Info Section */}
          <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">📞 Phone</p>
              <p className="text-gray-700">+254 712 345 678</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">✉️ Email</p>
              <p className="text-gray-700">support@allthingsdogs.com</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">📍 Location</p>
              <p className="text-gray-700">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 max-w-2xl mx-auto"
          >
            <input
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-3 rounded-xl shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
