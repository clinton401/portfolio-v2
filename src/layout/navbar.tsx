import {type FC, useState} from "react";
import { Link, useLocation } from "react-router";
import {Divide as Hamburger} from "hamburger-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { X } from "lucide-react";
import {appearAnimation} from "@/lib/framer-motion-utils";

 const links = [
  { name: "About", url: "/#about" },
  { name: "Projects", url: "/#projects" },
  { name: "Contacts", url: "/#contacts" },
];

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      delay: 0.2,
    },
  },
};

const hamMenuVariant = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: -50,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.84, 0],
      when: "afterChildren",
    },
  },
} as const;

const linksVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const {pathname } = useLocation();

  const isHomePage = pathname === "/"
  
  return (
    <motion.header 
      className={`w-full px-[5%] flex items-center justify-between pt-4 ${isHomePage? "pb-16 sm:pb-18" : "pb-6"} relative`}   
      variants={appearAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Desktop/Mobile Logo */}
      <nav>
        <Link to="/" className="text-white font-fira hidden sm:flex hover:opacity-80 transition-opacity">
          Clinton <br />
          Owoseni
        </Link>
        <Link to="/" className="text-white font-fira font-bold flex sm:hidden hover:opacity-80 transition-opacity">
          CLINTON
        </Link>
      </nav>

      {/* Desktop Navigation */}
      <nav>
        <ul className="items-center hidden sm:flex gap-6">
          {links.map((link) => (
            <li key={link.url}>
              <a 
                href={link.url}
                className="relative group text-white/80 hover:text-white transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Resume Button */}
      <nav className="hidden sm:flex flex-col gap-1 items-center">
        <Button 
          variant="secondary" 
          className="rounded-full hover:scale-105 transition-transform duration-300" 
          asChild
        >
          <a
            href="https://drive.google.com/file/d/1LNe_KEkNUR7YRsZytinpY8ImTISC8Z-d/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Button>
      </nav>

      {/* Mobile Hamburger Menu */}
      <nav className="flex sm:hidden relative z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          distance="md"
          rounded
        />
        
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop with blur */}
              <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
                onClick={() => setOpen(false)}
              />

              {/* Menu Panel */}
              <motion.section
                key="modal"
                variants={hamMenuVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-8 right-[5%] w-[85%] max-w-sm rounded-2xl bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden"
              >
                {/* Close Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-4 h-10 w-10 rounded-full z-10 hover:scale-110 transition-transform"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Menu Content */}
                <motion.ul
                  className="flex flex-col gap-2 p-8 pt-16"
                  initial="hidden"
                  animate="visible"
                  variants={ulVariants}
                >
                  {links.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={linksVariants}
                    >
                      <a 
                        href={link.url} 
                        className="block w-full text-center py-4 px-6 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                  
                  <motion.li
                    variants={linksVariants}
                    className="mt-4"
                  >
                    <Button
                      variant="secondary"
                      className="w-full rounded-xl py-6 text-base font-medium hover:scale-[1.02] transition-transform"
                      asChild
                    >
                      <a
                        href="https://drive.google.com/file/d/1LNe_KEkNUR7YRsZytinpY8ImTISC8Z-d/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                      >
                        Resume
                      </a>
                    </Button>
                  </motion.li>
                </motion.ul>
              </motion.section>
            </>
          )}
        </AnimatePresence>
      </nav>

      <div className="w-[250px] pointer-events-none aspect-square rounded-full border border-white/10 absolute top-[-80px] right-[-120px]"/>
    </motion.header>
  );
}