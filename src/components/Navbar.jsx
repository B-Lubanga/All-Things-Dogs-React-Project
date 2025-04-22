import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold">
          🐶 Dog Adoption
        </a>
        <ul className="flex space-x-6 font-bold">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#adopt" className="hover:underline">
              Adopt
            </a>
          </li>
          <li>
            <a href="#rescue" className="hover:underline">
              Rescue
            </a>
          </li>
          <li>
            <a href="#found-dog" className="hover:underline">
              Found a Dog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
