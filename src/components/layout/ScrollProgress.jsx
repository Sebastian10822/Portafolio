import React from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = ({ scaleX }) => {
  return (
    <motion.div
      className="scroll-indicator"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;