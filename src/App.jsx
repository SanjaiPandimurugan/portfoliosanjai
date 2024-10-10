import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/achievements'; // Import Achievements
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import back from './assets/back.mp4';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={back} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <main>
            <Hero />
            <About />
            <Skills />
            <Achievements /> {/* Add Achievements component here */}
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default App;