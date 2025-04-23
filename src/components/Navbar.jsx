import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          🐶 Dog Adoption
        </Link>
        <ul className="flex space-x-6 font-bold">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/adopt" className="hover:underline">
              Adopt
            </Link>
          </li>
          <li>
            <Link to="/found" className="hover:underline">
              Found a Dog
            </Link>
          </li>
          <li>
            <Link to="/rescue" className="hover:underline">
              Rescue Center
            </Link>
          </li>
          <li>
            <Link to="/vet" className="hover:underline">
              Vet Clinic
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
