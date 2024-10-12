import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaStar, FaCrown } from 'react-icons/fa';

const achievements = [
  { icon: <FaTrophy />, year: '2024', title: 'Solvethon SDG Sairam Goal 17', description: '1st Place in Hackathon' },
  { icon: <FaMedal />, year: '2022', title: 'Anna University Startup Cafe', description: 'Top 30 in 5000+participants' },
  { icon: <FaAward />, year: '2021', title: 'Game Development Club', description: '1st Prize in Figma Fusion' },
  { icon: <FaCertificate />, year: '2020', title: 'AWS Certification', description: 'Certified AWS Solutions Architect' },
  { icon: <FaStar />, year: '2019', title: 'GitHub Star', description: 'Recognized as GitHub Star' },
  { icon: <FaCrown />, year: '2018', title: 'Startup Weekend', description: 'Winner of Startup Weekend' },
];

function AchievementItem({ achievement, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''} mb-12`}
    >
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="text-3xl text-amber-400 mb-2">{achievement.icon}</div>
          <h3 className="text-xl font-bold text-amber-300 mb-2">{achievement.title}</h3>
          <p className="text-gray-300 mb-1">{achievement.description}</p>
          <span className="text-amber-400 font-semibold">{achievement.year}</span>
        </motion.div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-amber-500 rounded-full relative">
          <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-amber-400"
        >
          Achievements
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500"></div>
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;