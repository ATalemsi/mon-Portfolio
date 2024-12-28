import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_8y8kteh',
        'template_epayr9l',
        formRef.current,
        '7WZA9yn7WA1gMwu5s'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="relative py-20">
      <Toaster position="top-right" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-blue-400">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: FaEnvelope, label: "Email", value: "mohamadtalemsi@gmail.com", href: "mailto:mohamadtalemsi@gmail.com" },
                { icon: FaPhone, label: "Phone", value: "+212-639-72-6393", href: "tel:+212-639-72-6393" },
                { icon: FaMapMarkerAlt, label: "Location", value: "Safi - Morocco" }
              ].map((item) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  variants={itemVariants}
                >
                  <motion.div 
                    className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="text-blue-400 w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-white hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "user_name", label: "Name", type: "text" },
                { name: "user_email", label: "Email", type: "email" }
              ].map(({ name, label, type }) => (
                <motion.div 
                  key={name}
                  whileHover={{ y: -2 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
                  <input
                    required
                    type={type}
                    name={name}
                    className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white
                             border border-gray-700/50 focus:border-blue-500/50
                             focus:outline-none focus:ring-2 focus:ring-blue-500/20
                             transition-all duration-300"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white
                          border border-gray-700/50 focus:border-blue-500/50
                          focus:outline-none focus:ring-2 focus:ring-blue-500/20
                          transition-all duration-300 resize-none"
                placeholder="Write your message here..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500
                       text-white rounded-lg font-medium
                       hover:from-blue-600 hover:to-purple-600
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}