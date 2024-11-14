import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';
import { turboTrash } from '../Assets';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Turbo Trash",
      description: "turbo trash is a mobile hyper-casual game aimed at teaching waste management with an eco-conscious twist. you play as a sorting robot using 'TecLev' levitation technology to grab and fling various objects into the correct bins: glass, paper, plastic, organic, and metals/e-waste. the game has a strict yet friendly boss (a voice on the speaker) encouraging you to do your best, rewarding accuracy, and penalizing mistakes by draining your energy. objects roll down an increasingly fast conveyor belt, with overtime periods intensifying the pace. you can also unlock perks and different antennas to tweak gameplay and adapt to challenges. the ultimate goal? to become 'employee of the month' and beat high scores on the leaderboard. visually, it’s a mix of futuristic tech and cartoonish style, with a 'clean industrial' look, despite being set in a waste collection center.",
      image: turboTrash,
      tags: ["Unity", "C#"],
      details: {
        engine: "Unity",
        role: "Game Designer",
        duration: "6 months",
        responsibilities: [
          "Core gameplay mechanics and systems",
          "Level design and progression",
          "Player feedback systems",
          "Gameplay testing and iteration",
          "Sound design"
        ]
      }
    },
    {
      title: "Lost Balance",
      description: "Lost Balance is a survival horror game that revolves around maintaining equilibrium on three emotional axes: anxiety/calm, fear/rashness, and depression/euphoria. players navigate these axes in response to various environmental factors and objects, balancing their emotions to prevent hitting an extreme, which would lead to game over.",
      image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unreal Engine", "Blueprint", "Narrative Design"],
      details: {
        engine: "Unreal Engine 5",
        role: "Game Designer",
        duration: "6 months",
        responsibilities: [
          "Story development",
          "Core gameplay mechanics and systems",
          "Gameplay testing and iteration",
          "Sound design"
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