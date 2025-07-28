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