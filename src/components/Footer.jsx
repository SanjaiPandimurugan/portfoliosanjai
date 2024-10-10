import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sanjai Pandimurugan</h3>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-blue-500 transition duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;