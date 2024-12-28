import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TechLogo } from './TechLogo';

export function Skills() {
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

  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "Spring Framework", "Spring Boot", "Laravel", "NestJS"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "Vue.js", "TypeScript", "TailwindCSS"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "JWT", "Maven", "AWS", "Keycloak"]
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
        Skills
      </motion.h2>
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700/30"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <motion.li 
                  key={skill} 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <TechLogo name={skill} size={24} />
                  <span className="text-gray-300">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}