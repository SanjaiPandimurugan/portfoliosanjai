  import React, { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
  
  const projects = [
    // ... Your existing project data ...
      {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com"
  },
    {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com"
  },
  ];
  
  function ProjectCard({ project, setSelectedProject }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-700"
      >
        <div className="relative overflow-hidden group">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-amber-500 text-gray-900 px-4 py-2 rounded-full font-semibold"
            >
              View Details
            </motion.button>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-amber-400 mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap mb-4">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className="bg-amber-800 bg-opacity-30 text-amber-200 text-sm px-2 py-1 rounded mr-2 mb-2"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(217, 119, 6, 0.5)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-between">
            <motion.a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:text-amber-300 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="inline mr-2" /> GitHub
            </motion.a>
            <motion.a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:text-amber-300 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt className="inline mr-2" /> Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }
  
  function ProjectModal({ project, setSelectedProject }) {
    if (!project) return null;
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-gray-900 bg-opacity-90 rounded-lg overflow-hidden shadow-2xl max-w-3xl w-full border border-amber-700"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap mb-6">
              {project.technologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="bg-amber-800 bg-opacity-30 text-amber-200 text-sm px-2 py-1 rounded mr-2 mb-2"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(217, 119, 6, 0.5)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-between">
              <motion.a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="inline mr-2" /> GitHub
              </motion.a>
              <motion.a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt className="inline mr-2" /> Live Demo
              </motion.a>
            </div>
          </div>
          <motion.button
            className="absolute top-4 right-4 text-amber-400 hover:text-amber-300 transition duration-300"
            onClick={() => setSelectedProject(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }
  
  function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
  
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-amber-400"
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} setSelectedProject={setSelectedProject} />
            ))}
          </motion.div>
        </div>
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} setSelectedProject={setSelectedProject} />
          )}
        </AnimatePresence>
      </section>
    );
  }
  
  export default Projects;