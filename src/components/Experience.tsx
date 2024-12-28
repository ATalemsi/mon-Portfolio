import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences: Experience[] = [
    {
      title: "Full-Stack Developer Intern",
      company: "OneDustry (Technopark, Casablanca)",
      period: "05/2024-07/2024",
      description: [
        "Developed an interactive web application allowing users to search, view, and list restaurants",
        "Implemented features to display restaurant menus and prices",
      ],
      technologies: ["Nest.js", "React.js", "MongoDB", "Node.js", "HTML", "CSS", "AWS"]
    },
    {
      title: "Web Developer Intern",
      company: "Mzlouafi (Technopark, Casablanca)",
      period: "11/2022-02/2023",
      description: [
        "Developed WordPress templates and deployed them on hosting platforms",
        "Collaborated with clients to customize website designs"
      ],
      technologies: ["HTML", "CSS", "PHP", "WordPress"]
    }
  ];
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

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6
                         hover:bg-gray-700/50 transition-all duration-300
                         border border-gray-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaBriefcase className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                      <p className="text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-300">• {desc}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-sm bg-gray-700/50 px-3 py-1 rounded-full text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}