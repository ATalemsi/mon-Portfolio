import { motion } from 'framer-motion';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
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
  );
}