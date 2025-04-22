import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8 p-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          🐾 Dog Adoption Platform - Helping Dogs Find Homes 🏡
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <img
              src="assets/icons8-facebook-48.png"
              alt="Facebook"
              className="w-9 h-9"
            />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <img
              src="assets/icons8-instagram-logo-94.png"
              alt="Instagram"
              className="w-9 h-9"
            />
            <span>Instagram</span>
          </a>
          <a
            href="https://twitter.com/login?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <img
              src="assets/icons8-twitter-48.png"
              alt="Twitter"
              className="w-9 h-9"
            />
            <span>Twitter</span>
          </a>
        </div>
        <p className="mt-4 text-gray-400">
          &copy; 2025 Dog Adoption. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
