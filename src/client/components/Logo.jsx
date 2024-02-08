import * as React from 'react';
import spyglass from '../../../assets/logo-no-background.png';
import { motion } from 'framer-motion';

function Logo() {
  return (
    <div>
      <img src={spyglass} className="spyglass-logo" alt="spyglass-logo" />
    </div>  
  );
}
export default Logo;
