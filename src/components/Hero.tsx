import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Enlarged profile picture */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75" />
              <img
                src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1735415739/q8gx1ukrogfepizumxtk.jpg"
                alt="Profile"
                className="relative rounded-full w-64 h-64 object-cover mx-auto md:mx-0 border-4 border-white/30"
              />
            </div>
          </motion.div>

          {/* Enlarged content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Abdellah Talemsi
            </h1>
            <h2 className="text-3xl text-blue-400 mb-6 font-light">
              Full Stack Developer
            </h2>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Passionate full-stack developer specializing in Java/Spring Boot
              and React. Focused on creating efficient, scalable web
              applications with clean architecture.
            </p>

            <motion.div
              className="flex gap-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdellah-talemsi-534b88218/", label: "LinkedIn" },
                { icon: MdEmail, href: "mailto:mohamadtalemsi@gmail.com", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-400 transition-opacity">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
