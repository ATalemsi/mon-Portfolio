import { motion } from 'framer-motion';
import { ContactInfoItem } from './ContactInfoItem';
import { contactItems } from './contactData';

export function ContactInfo() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-blue-400">Contact Information</h3>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <ContactInfoItem 
            key={item.label} 
            item={item} 
            delay={index * 0.1} 
          />
        ))}
      </div>
    </motion.div>
  );
}