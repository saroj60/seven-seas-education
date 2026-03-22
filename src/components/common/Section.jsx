import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  id = '', 
  background = 'bg-transparent',
  padding = true
}) => {
  return (
    <section 
      id={id} 
      className={`${background} ${padding ? 'section-padding' : ''} ${className} relative overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-custom"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
