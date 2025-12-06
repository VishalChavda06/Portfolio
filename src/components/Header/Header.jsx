import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { generateResumePDF } from "../../utils/generateResumePDF";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = async () => {
    try {
      setIsGenerating(true);
      
      // Generate PDF with all portfolio information
      generateResumePDF();
      
      // Reset loading state after a short delay
      setTimeout(() => {
        setIsGenerating(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error generating resume PDF:', error);
      setIsGenerating(false);
      alert('Error generating resume. Please try again.');
    }
  };

  return (
    <motion.header 
      style={{ opacity: headerOpacity }}
      className={`bg-gray-900/80 backdrop-blur-md p-6 border-b border-gray-800 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.h1 
            className="text-3xl font-bold text-white tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Vishal Chavda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base font-normal mt-1"
          >
            Fullstack Developer | BCA Student
          </motion.p>
        </motion.div>
        
        <motion.button
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.8,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResumeDownload}
          className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gray-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.svg 
            className="w-5 h-5 relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </motion.svg>
          <span className="relative z-10">
            {isGenerating ? 'Generating...' : 'Download Resume'}
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;

