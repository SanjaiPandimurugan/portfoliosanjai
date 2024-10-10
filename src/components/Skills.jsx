import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 88 },
  { name: 'React', icon: <FaReact />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'Python', icon: <FaPython />, level: 75 },
  { name: 'SQL', icon: <FaDatabase />, level: 78 },
  { name: 'Git', icon: <FaGitAlt />, level: 82 },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex items-center mb-2">
        <motion.div 
          className="text-3xl text-amber-400 mr-3"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {skill.icon}
        </motion.div>
        <span className="text-lg font-medium text-gray-300">{skill.name}</span>
        <span className="ml-auto text-sm font-medium text-amber-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-amber-500 h-full rounded-full"
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-amber-400"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;