import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/framer-motion-utils';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Clinton Owoseni. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};