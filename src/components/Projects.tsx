import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

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
