import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-center">
          <motion.div
            className={`flex items-center space-x-6 bg-gray-800 rounded-full px-6 py-2 ${
              scrolled ? 'bg-opacity-90 shadow-lg' : 'bg-opacity-50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;