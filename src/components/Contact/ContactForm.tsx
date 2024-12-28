import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { SubmitButton } from './SubmitButton';

// Initialize EmailJS with your public key
emailjs.init("service_8y8kteh");

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        'service_8y8kteh', // Your EmailJS service ID
        'template_epayr9l', // Your EmailJS template ID
        formRef.current,
        '7WZA9yn7WA1gMwu5s' // Your EmailJS public key
      );
      
      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          name="from_name"
          label="Name"
          type="text"
          placeholder="Enter your name"
        />
        <FormInput
          name="from_email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      
      <FormTextArea />
      <SubmitButton isSubmitting={isSubmitting} />
    </motion.form>
  );
}