import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Project 1",
      description: "A challenging puzzle-platformer that tests players' problem-solving abilities through innovative mechanics and intricate level design. Features dynamic environment interactions and a unique art style.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unreal Engine", "Blueprint", "Level Design"],
      details: {
        engine: "Unreal Engine 5",
        role: "Lead Game Designer",
        duration: "8 months",
        responsibilities: [
          "Core gameplay mechanics design",
          "Level design and progression",
          "Player feedback systems"
        ]
      }
    },
    {
      title: "Project 2",
      description: "An atmospheric narrative-driven adventure game where player choices shape the story. Incorporates branching dialogues and multiple endings, creating a highly replayable experience.",
      image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unity", "Ink", "Narrative Design"],
      details: {
        engine: "Unity",
        role: "Game Designer & Narrative Lead",
        duration: "6 months",
        responsibilities: [
          "Story development and branching narratives",
          "Character design",
          "Dialogue system implementation"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my game design work, demonstrating my ability to create engaging 
            and innovative gaming experiences across different genres and platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-gray-800/30 backdrop-blur-sm"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/70 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-sm bg-violet-600/30 text-violet-300 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className="text-violet-300">Engine: {project.details.engine}</p>
                        <p className="text-violet-300">Role: {project.details.role}</p>
                        <p className="text-violet-300">Duration: {project.details.duration}</p>
                        <div className="mt-2">
                          <p className="text-violet-300 mb-1">Key Responsibilities:</p>
                          <ul className="list-disc list-inside text-gray-300">
                            {project.details.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                      >
                        <PlayCircle size={20} /> View Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                      >
                        <ExternalLink size={20} /> Project Details
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}