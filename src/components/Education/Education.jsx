import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationData = [
    {
      degree: "BCA - Bachelor of Computer Applications",
      university: "Bhagwan Mahavir University",
      period: "2023 - 2026",
      status: "Currently Running",
      type: "graduation"
    },
    {
      degree: "GSEB - HSC (12th)",
      university: "P.B SHAH Amroli, Surat",
      period: "March 2023",
      status: "Completed",
      type: "12th"
    },
    {
      degree: "GSEB - SSC (10th)",
      university: "Devkurba Vidhiylay Dabholi, Surat",
      period: "May 2021",
      status: "Completed",
      type: "10th"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="education" 
      className="bg-gray-800/50 p-10 md:p-12 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-gray-600/70 relative overflow-hidden"
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div className="relative z-10">
        <motion.h2 
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-12 text-white tracking-tight"
        >
          Education
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 relative"
            >
              <motion.h3 
                className="text-lg md:text-xl font-bold text-white mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {edu.degree}
              </motion.h3>
              
              <motion.p 
                className="text-sm md:text-base text-gray-300 mb-3 font-medium"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {edu.university}
              </motion.p>
              
              <div className="space-y-2">
                <motion.span 
                  className="text-gray-400 text-sm block"
                  whileHover={{ scale: 1.05 }}
                >
                  {edu.period}
                </motion.span>
                <motion.span 
                  className="text-white font-semibold text-sm bg-gray-700/50 px-3 py-1 rounded-md inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  {edu.status}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Education;

