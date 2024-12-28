import { motion } from 'framer-motion';

export function FormTextArea() {
  return (
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <label className="block text-sm font-medium text-gray-400">Message</label>
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
  );
}