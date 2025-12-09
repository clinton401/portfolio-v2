import {type Variants} from "motion/react"
const hamMenu :Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        type: "spring",
        damping: 10,
        stiffness: 100,
        //   when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  const navLinks :Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    hover: {
      x: 50,
      transition: {
        duration: 0.3,
        //   ease: "easeIn",
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const appearAnimation :Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  const blurAnimation :Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  const hAppear :Variants = {
    hidden: {
      opacity: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      rotate: "90deg",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  const scaleAnimation :Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      // scale: [0.8, 1, 1.1, 1],
      scale: 1,
      transition: {
        duration: 0.3,
        //   type: "spring",
        //   damping: 10,
        //     stiffness: 100,
        //   times: [0, 0.3, 0.7 , 1],
        // repeatDelay: 1
      },
    },
  };
  const scaleAnimation2 :Variants = {
    hidden: {
      // opacity: 0,
      filter: "blur(20px)",
      // rotate: 0,
      scale: 0,
    },
    visible: {
      scale: 1,
      // opacity: 1,
      filter: "blur(0px)",
      // rotate: "360deg",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const gradientSpan :Variants = {
    hidden: {
      x: 0,
      // opacity: 0.4
    },
    visible: {
      x: "150%",
      // opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  const gradientH3 :Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  
  const parentCompAnimation :Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.3,
        when: "beforeChildren",
      },
    },
    //   exit: {
    //     opacity: 0,
    //     transition: {
    //       ease: "easeIn",
    //       duration: 0.3,
  
    //     },
    //   },
  };
  
  const rightAnimation :Variants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        type: "spring",
        mass: 0.4,
        damping: 8,
      },
    },
  };
  const leftAnimation :Variants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        type: "spring",
        mass: 0.4,
        damping: 8,
      },
    },
  };
  
  const headerAnimation :Variants = {
    hidden: {
      y: -100,
      // opacity: 0,
    },
    visible: {
      y: 0,
      // opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        
      },
    },
    exit: {
      y: -100,
      // opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        
      },
    },
  };

   const staggerVariants :Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }


  export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.28,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const hoverLift: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.18,
      ease: 'easeOut',
    },
  },
};

export const hoverScale: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.18,
    },
  },
};

export const tapScale: Variants = {
  tap: {
    scale: 0.98,
  },
};

export const menuSlide: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.36,
      ease: 'easeInOut',
    },
  },
  open: {
    x: '0%',
    transition: {
      duration: 0.36,
      ease: 'easeInOut',
    },
  },
};

export const backdropFade: Variants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.28,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
};

export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.36,
    },
  },
};

// Timeline specific variant
export const timelineItem = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.28,
      ease: 'easeOut',
    },
  },
});

  export {
    hamMenu,
    appearAnimation,
    hAppear,
    navLinks,
    scaleAnimation,
    scaleAnimation2,
    gradientSpan,
    gradientH3,
    parentCompAnimation,
    rightAnimation,
    leftAnimation,
    headerAnimation,
    staggerVariants,
    blurAnimation
  } ;


