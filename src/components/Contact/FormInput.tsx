import { motion } from 'framer-motion';

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export function FormInput({ name, label, type, placeholder }: FormInputProps) {
  return (
    <motion.div 
      className="space-y-2"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      <label className="block text-sm font-medium text-gray-400">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white
                   border border-gray-700/50 focus:border-blue-500/50
                   focus:outline-none focus:ring-2 focus:ring-blue-500/20
                   transition-all duration-300"
        placeholder={placeholder}
      />
    </motion.div>
  );
}