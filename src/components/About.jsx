import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import about from '../assets/about.jpg'

const skills = [
  { icon: <FaCode />, title: 'Frontend Development', description: 'Creating responsive and interactive user interfaces using React, Vue, and Angular.' },
  { icon: <FaServer />, title: 'Backend Development', description: 'Building robust server-side applications with Node.js, Express, and Django.' },
  { icon: <FaLaptopCode />, title: 'Full Stack Development', description: 'Integrating frontend and backend to create complete web applications.' },
  { icon: <FaMobileAlt />, title: 'Mobile App Development', description: 'Developing cross-platform mobile apps using React Native and Flutter.' },
];

function About() {
  return (
    <section id="about" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-amber-400"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={about}
              alt="Your Name"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 md:pl-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-300">Hi, I'm Sanjai</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with experience in creating
              beautiful, functional, and user-centered digital experiences. With a strong
              foundation in both frontend and backend technologies, I love bringing ideas to life
              in the browser.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new hiking trails, experimenting
              with new recipes in the kitchen, or contributing to open-source projects. I believe
              in continuous learning and staying up-to-date with the latest web technologies.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-amber-600 transition duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-amber-300">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl text-amber-400 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-amber-300">{skill.title}</h4>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;