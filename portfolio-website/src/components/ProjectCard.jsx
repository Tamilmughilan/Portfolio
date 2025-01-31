import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2}}
      transition={{ type: 'spring', stiffness: 300 }}
      className="project-card"
    >
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
}

export default ProjectCard;
