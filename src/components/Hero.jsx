import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// Import your video file
import backgroundVideo from '../assets/back.mp4';

// You might need to adjust this import based on your project structure
import profileImage from '../assets/profile.png';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Sanjai Pandimurugan", "a Developer", "a Designer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left side - Image with subtle animation */}
        <motion.div
          className="mb-10 md:mb-0 md:w-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={profileImage}
            alt="Your Name"
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg border-4 border-amber-500"
          />
        </motion.div>

        {/* Right side - Typing effect and content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-amber-400">{text}</span>
            <span className="text-amber-400 animate-blink">|</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Web Developer
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a href="https://github.com/SanjaiPandimurugan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition duration-300">
              <FiGithub size={24} />
            </a>
            <a href="www.linkedin.com/in/sanjai-p-308864257" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition duration-300">
              <FiLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition duration-300">
              <FiTwitter size={24} />
            </a>
          </div>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition duration-300"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Hero;