import React from "react";
import Main from "../components/Main";

import { Link } from "react-router-dom";
import HeroImage from "../assets/found a home.jpeg";

const Home = () => {
  return (
    <Main>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-4">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Dog Adoption 🐾
            </h1>
            <p className="mb-4 text-gray-700">
              Find your perfect furry friend and give them a loving home. Browse
              a variety of breeds and connect with owners or shelters. Every dog
              deserves a second chance.
            </p>
            <p className="text-gray-700">
              Whether you're looking to adopt, foster, or just show some
              love—you're in the right place. Start your journey today.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 w-full shadow-2xl rounded-lg overflow-hidden">
            <img
              src={HeroImage}
              alt="Adopted dog with happy family"
              className="rounded-lg transform hover:scale-105 transition-transform duration-500 w-full"
            />
            <div className="absolute bottom-4 right-4">
              <Link
                to="/adopt"
                className="bg-green-600 text-white px-6 py-2 rounded shadow-lg hover:bg-green-500 transition"
              >
                Click to Adopt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Home;
