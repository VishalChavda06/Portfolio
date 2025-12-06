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
      status: "Current Semester: 6",
      type: "graduation"
    },
    {
      degree: "Higher Secondary (12th)",
      university: "Completed in March 2023",
      period: "2023",
      status: "PR: 60.86%",
      type: "12th"
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
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ x: 5, scale: 1.02 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 relative pl-8 border-l-4 border-l-white/20 hover:border-l-white/40"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {edu.degree}
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-3 font-medium"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {edu.university}
              </motion.p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <motion.span 
                  className="text-gray-400 text-base"
                  whileHover={{ scale: 1.1 }}
                >
                  {edu.period}
                </motion.span>
                <span className="text-gray-600">•</span>
                <motion.span 
                  className="text-white font-semibold text-base bg-gray-700/50 px-4 py-1.5 rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {edu.status}
                </motion.span>
              </div>

              {/* Decorative dot */}
              <motion.div
                className="absolute -left-4 top-8 w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Education;

