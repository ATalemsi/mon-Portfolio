import { motion } from 'framer-motion';
import { ContactItemType } from './types';

interface ContactInfoItemProps {
  item: ContactItemType;
  delay: number;
}

export function ContactInfoItem({ item, delay }: ContactInfoItemProps) {
  return (
    <motion.div 
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
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
          <motion.a
            href={item.href}
            className="inline-block text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {item.value}
          </motion.a>
        ) : (
          <p className="text-white">{item.value}</p>
        )}
      </div>
    </motion.div>
  );
}