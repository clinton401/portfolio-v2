import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import type { NavLink } from '@/types';
import { menuSlide, staggerVariants, fadeInUp } from '@/lib/framer-motion-utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  resumeUrl?: string;
}

export const MobileMenu = ({ isOpen, onClose, links, resumeUrl }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* 30% Blurred backdrop - clicking closes menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* 70% Menu panel */}
          <motion.div
            variants={menuSlide}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 h-full w-[70%] bg-card border-l border-border flex flex-col items-center justify-center p-8"
          >
            <motion.nav
              className="flex flex-col items-center gap-8 w-full"
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
            >
              {links.map((link) => (
                <motion.div key={link.url} variants={fadeInUp}>
                  <a
                    href={link.url}
                    onClick={onClose}
                    className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              {resumeUrl && (
                <motion.div variants={fadeInUp} className="mt-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};