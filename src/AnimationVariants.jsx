export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 15, // Subtle slide up from bottom
    scale: 0.99, // Very subtle scale to add depth
    filter: "blur(2px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier(0.25, 0.1, 0.25, 1.0) - similar to easeOutQuad but smoother
    },
  },
  exit: {
    opacity: 0,
    y: -10, // Slight slide up on exit
    filter: "blur(2px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
