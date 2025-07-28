import {type FC, useState} from "react";
import { Link } from "react-router";
import {Divide as Hamburger} from "hamburger-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import {appearAnimation} from "@/lib/framer-motion-utils";

export const links = [
  { name: "About", url: "/#about" },
  { name: "Projects", url: "/#projects" },
  { name: "Contacts", url: "/#contacts" },
];

const hamMenuVariant = {
  hidden: {
    x: "100vw",
    
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",

    },
    exit: {
      x: "100vw",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }
  }
} as const

const linksVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    },
  },
} as const;
const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.header className="w-full px-[5%] flex items-center justify-between pt-4 pb-16 sm:pb-18 relative"   variants={appearAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}>
      <nav>
        <Link to="/" className=" text-white font-fira  hidden sm:flex">
          Clinton <br />
          Owoseni
        </Link>
        <Link to="/" className=" text-white font-fira font-bold flex sm:hidden">
          CLINTON
        </Link>
      </nav>
      <nav>
        <ul className="items-center hidden sm:flex gap-4">
          {links.map((link) => {
            return (
              <li className="" key={link.url}>
                <a href={link.url}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="hidden sm:flex flex-col gap-1 items-center">
        <Button variant="secondary" className="rounded-full" asChild>
          <a
            href="https://drive.google.com/file/d/1LNe_KEkNUR7YRsZytinpY8ImTISC8Z-d/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Button>
      </nav>
      <nav className="flex sm:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          distance="md"
          rounded
        />
        <AnimatePresence>
          {isOpen && (
            <motion.section
              key="modal"
              variants={hamMenuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-dvh ham-menu  w-full   flex items-center justify-end "
            >
              <div
                className="w-full fixed top-0 left-0 h-full  z-10 blur-sm backdrop-blur-sm"
                onClick={() => setOpen(false)}
              ></div>
              <motion.section className="h-dvh w-[70%] overflow-y-auto    fixed flex z-[30] gap-4 flex-col bg-background items-center  justify-center ">
                <Button
                  variant="secondary"
                  className="rounded-full cursor-pointer fixed right-[5%] h-[40px] aspect-square  top-4"
                  onClick={() => setOpen(false)}
                >
                  <X />
                </Button>

                <motion.ul
                  className="h-full w-full  flex  gap-4 flex-col items-center  justify-center "
                  initial="hidden"
                  animate="visible"
                  variants={ulVariants}
                >
                  {links.map((link) => {
                    return (
                      <motion.li
                        key={link.name}
                        variants={linksVariants}
                        className="w-full flex justify-center  items-center"
                      >
                        <a href={link.url} className="w-full text-center"
                          onClick={() => setOpen(false)}
                          >
                          {link.name}
                        </a>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    variants={linksVariants}
                    className="w-full flex justify-center items-center"
                  >
                    <Button
                      variant="secondary"
                      className="rounded-full"
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
                  </motion.li>
                </motion.ul>
              </motion.section>
            </motion.section>
          )}
        </AnimatePresence>
      </nav>
      <div className="w-[250px] pointer-events-none aspect-square rounded-full border absolute top-[-80px] right-[-120px]"/>
    </motion.header>
  );
}