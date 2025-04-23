import React from "react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "/assets/icons8-facebook-48.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "/assets/icons8-instagram-logo-94.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "/assets/icons8-twitter-48.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8 p-6">
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
              <img src={icon} alt={`${name} icon`} className="w-8 h-8 mb-1" />
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
