import * as React from 'react';
import spyglass from '../../../assets/logo-no-background.png';
import { motion } from 'framer-motion';

function AnimatedLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1, rotate: 25 }}
      whileTap={{ scale: 1, rotate: -25 }}
    >
      <img src={spyglass} className="spyglass-logo" alt="spyglass-logo" />
    </motion.div>
  );
}
export default AnimatedLogo;
