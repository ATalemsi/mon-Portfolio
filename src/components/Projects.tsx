import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const projects: Project[] = [
    {
      title: "Medical Cabinet Management",
      description: "Development of a web application for managing a medical cabinet, including appointments, records, and billing.",
      image: "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
      tags: ["Laravel", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/ATalemsi/Gestion-Cabinet"
    },
    {
      title: "Music Catalogue",
      description: "A REST API built with Spring Boot for managing IoT sensors with stateless authentication (USER/ADMIN) and DevOps integration.",
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
      tags: ["Java", "Spring Boot", "Spring Security", "Docker", "Jenkins", "MongoDB"],
      demoUrl: "#",
      githubUrl: "https://github.com/ATalemsi/Catalogue-de-Musique-avec-Authentification-JWT"
    },
    {
      title: "Task Management Application",
      description: "Development of a modern web application for task management using Angular 17, featuring advanced categorization, statistical tracking, and real-time notifications.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1",
      tags: ["Angular", "TypeScript", "Responsive Design", "Real-time Notifications"],
      demoUrl: "#",
      githubUrl: "https://github.com/ATalemsi/First-Angular-Project"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700/30"
            whileHover={{ y: -5 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="rounded-lg h-48 w-full object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaCode size={16} /> Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
