import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: FaTwitter
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white my-2 p-6 rounded-b-lg m-1">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">
          🐾 Dog Adoption Platform - Helping Dogs Find Homes 🏡
        </p>

        <div className="flex justify-center items-center space-x-6">

          {socialLinks.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-sm hover:text-blue-400 transition"
            >
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                {typeof icon === "string" ? (
                  <img src={icon} alt={`${name} icon`} className="w-full h-full" />
                ) : (
                  React.createElement(icon, { className: "w-full h-full" })
                )}
              </div>
              <span>{name}</span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dog Adoption. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
