import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Gamepad2, Layout, Briefcase } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skills = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-violet-400" />,
      title: "Game Engines",
      description: "Proficient in Unreal Engine and Unity, with experience in creating engaging gameplay mechanics and systems"
    },
    {
      icon: <Code2 className="w-8 h-8 text-violet-400" />,
      title: "Development",
      description: "Skilled in Ink scripting language for narrative design, with a focus on creating branching storylines"
    },
    {
      icon: <Layout className="w-8 h-8 text-violet-400" />,
      title: "Design Tools",
      description: "Expert in Figma for UI/UX design and prototyping, creating intuitive and engaging user experiences"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-violet-400" />,
      title: "Project Management",
      description: "Experienced in Scrum Agile methodology, ensuring efficient and organized game development workflows"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At 24 years old, I'm a passionate game designer from Italy with a unique blend of technical expertise 
            and creative vision. My approach combines innovative gameplay mechanics with compelling narratives 
            to create unforgettable gaming experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/50 transition-colors border border-violet-900/50"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-violet-900/30"
        >
          <h3 className="text-2xl font-bold mb-4">Location & Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-violet-400">Based in</h4>
              <p className="text-gray-300">Italy</p>
              <p className="text-gray-400 mt-2">Available for remote work and collaborations worldwide</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-violet-400">Contact</h4>
              <p className="text-gray-300">andrea@mrmoon.com</p>
              <p className="text-gray-400 mt-2">Feel free to reach out for collaborations or opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}