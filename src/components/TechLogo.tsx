import { 
  FaReact, FaAngular, FaVuejs, FaJava, FaGit, FaDocker, FaAws,
  FaDatabase, FaNodeJs, FaLaravel, FaNpm
} from 'react-icons/fa';
import { 
  SiSpring, SiTypescript, SiPostgresql, SiTailwindcss, 
  SiMongodb, SiNestjs, SiMysql, SiKeycloak
} from 'react-icons/si';
import { motion } from 'framer-motion';

type TechLogoProps = {
  name: string;
  className?: string;
  size?: number;
};

export function TechLogo({ name, size = 24 }: TechLogoProps) {
  const logos: Record<string, JSX.Element> = {
    "React": <FaReact className="text-blue-400" size={size} />,
    "Angular": <FaAngular className="text-red-500" size={size} />,
    "Vue.js": <FaVuejs className="text-green-500" size={size} />,
    "Java": <FaJava className="text-brown-500" size={size} />,
    "Spring Framework": <SiSpring className="text-green-500" size={size} />,
    "Spring Boot": <SiSpring className="text-green-500" size={size} />,
    "TypeScript": <SiTypescript className="text-blue-500" size={size} />,
    "PostgreSQL": <SiPostgresql className="text-blue-400" size={size} />,
    "Docker": <FaDocker className="text-blue-500" size={size} />,
    "TailwindCSS": <SiTailwindcss className="text-cyan-400" size={size} />,
    "REST API": <FaNodeJs className="text-green-500" size={size} />,
    "Git": <FaGit className="text-orange-500" size={size} />,
    "Maven": <FaNpm className="text-red-500" size={size} />,
    "MySQL": <SiMysql className="text-blue-600" size={size} />,
    "MongoDB": <SiMongodb className="text-green-500" size={size} />,
    "Laravel": <FaLaravel className="text-red-500" size={size} />,
    "NestJS": <SiNestjs className="text-red-600" size={size} />,
    "AWS": <FaAws className="text-yellow-400" size={size} />,
    "Keycloak": <SiKeycloak className="text-red-500" size={size} />
  };

  const IconComponent = logos[name];
  
  return (
    <motion.div 
      whileHover={{ scale: 1.2 }} 
      className="flex items-center gap-2"
    >
      {IconComponent}
    </motion.div>
  );
}