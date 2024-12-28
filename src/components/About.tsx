import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6 backdrop-blur-sm bg-gray-800/30 p-8 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-semibold text-blue-400">Background</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a full-stack developer based in Safi Morroco, specializing in building
              exceptional websites and applications. I focus on writing clean, elegant
              and efficient code.
            </p>
          </div>

          <div className="space-y-6 backdrop-blur-sm bg-gray-800/30 p-8 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-semibold text-blue-400">What I Do</h3>
            <p className="text-gray-300 leading-relaxed">
              I enjoy turning complex problems into simple, beautiful and intuitive
              solutions. When I'm not coding, you'll find me exploring new technologies
              or contributing to open source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}