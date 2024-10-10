import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa'; // Import the logo icon

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-center px-4 transition-all duration-300" style={{ top: isScrolled ? '10px' : '20px' }}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center space-x-4 py-2 px-6 rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-gray-900 bg-opacity-50'
        }`}
      >
        <a href="#" className="flex items-center space-x-2">
          <FaCode className="text-amber-400 text-2xl" />

        </a>
        <div className="space-x-4">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-amber-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;