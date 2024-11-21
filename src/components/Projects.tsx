import { motion } from "framer-motion";
import { turboTrash } from "../Assets";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Turbo Trash",
      description:
        "turbo trash is a mobile hyper-casual game aimed at teaching waste management with an eco-conscious twist. you play as a sorting robot using 'TecLev' levitation technology to grab and fling various objects into the correct bins: glass, paper, plastic, organic, and metals/e-waste. the game has a strict yet friendly boss (a voice on the speaker) encouraging you to do your best, rewarding accuracy, and penalizing mistakes by draining your energy. objects roll down an increasingly fast conveyor belt, with overtime periods intensifying the pace. you can also unlock perks and different antennas to tweak gameplay and adapt to challenges. the ultimate goal? to become 'employee of the month' and beat high scores on the leaderboard. visually, it’s a mix of futuristic tech and cartoonish style, with a 'clean industrial' look, despite being set in a waste collection center.",
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
          "Sound design",
        ],
      },
    },
    {
      title: "Lost Balance",
      description:
        "Lost Balance is a survival horror game that revolves around maintaining equilibrium on three emotional axes: anxiety/calm, fear/rashness, and depression/euphoria. players navigate these axes in response to various environmental factors and objects, balancing their emotions to prevent hitting an extreme, which would lead to game over.",
      image:
        "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unreal Engine", "Blueprint", "Narrative Design"],
      details: {
        engine: "Unreal Engine 5",
        role: "Game Designer",
        duration: "6 months",
        responsibilities: [
          "Story development",
          "Core gameplay mechanics and systems",
          "Gameplay testing and iteration",
          "Sound design",
        ],
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() =>
              navigate(
                `/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`
              )
            }
            className="relative group cursor-pointer rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
