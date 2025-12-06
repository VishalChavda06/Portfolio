import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, staggerItem } from "../../utils/animations";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contacts = [
    {
      type: "Email",
      value: "vc229067@gmail.com",
      href: "mailto:vc229067@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/vishal-chavda-02559432b/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <motion.section 
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="contact" 
      className="bg-gray-800/50 p-10 md:p-12 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-gray-600/70 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: "conic-gradient(from 0deg, white, transparent, white)",
        }}
      />

      <motion.div className="relative z-10">
        <motion.h2 
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-12 text-white tracking-tight"
        >
          Let's Connect
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.type}
              variants={staggerItem}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-6 bg-gray-700/50 hover:bg-gray-700 p-8 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-gray-500 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="bg-gray-800 p-5 rounded-full relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-gray-300"
                  animate={isInView ? {
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5
                  }}
                >
                  {contact.icon}
                </motion.div>
              </motion.div>
              
              <div className="relative z-10">
                <motion.p 
                  className="font-semibold text-white text-xl mb-1"
                  whileHover={{ x: 5 }}
                >
                  {contact.type}
                </motion.p>
                <p className="text-gray-400 text-sm">{contact.value}</p>
              </div>

              <motion.div
                className="absolute right-6 text-gray-600 opacity-0 group-hover:opacity-100"
                initial={{ x: -20 }}
                whileHover={{ x: 0 }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

