import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/animations";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center p-12 text-gray-400 bg-gray-900/50 border-t border-gray-800 mt-16 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 text-lg"
      >
        <motion.span variants={staggerItem}>
          © 2025 Vishal Chavada
        </motion.span>
        <motion.span 
          variants={staggerItem}
          className="text-gray-600 hidden md:inline"
        >
          •
        </motion.span>
        <motion.span variants={staggerItem}>
          Built with
        </motion.span>
        <motion.span 
          variants={staggerItem}
          className="text-white font-medium"
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          React
        </motion.span>
        <motion.span 
          variants={staggerItem}
          className="text-gray-600 hidden md:inline"
        >
          &
        </motion.span>
        <motion.span 
          variants={staggerItem}
          className="text-white font-medium"
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          Framer Motion
        </motion.span>
        <motion.span
          variants={staggerItem}
          className="text-xl ml-2"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          💼
        </motion.span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

