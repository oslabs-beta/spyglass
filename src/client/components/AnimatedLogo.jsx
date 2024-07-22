import * as React from 'react';
import spyglass from '../../../assets/logo-no-background.png';
import { motion } from 'framer-motion';

function AnimatedLogo() {
  return (
    // wrap motion.div around spyglass logo to add rotating animations
    <motion.div
      animate={{ rotate: 0 }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0 }}
    >
      <img src={spyglass} className="spyglass-logo" alt="spyglass-logo" />
    </motion.div>
  );
}
export default AnimatedLogo;
