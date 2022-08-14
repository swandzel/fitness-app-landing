export const h2Animation = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const headerText = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const cardContainer = {
  show: {
    transition: {
      staggerChildren: 0.5,
      type: "spring",
      bounce: 0.8,
    },
  },
};

export const cardItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const navAnim = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
};

export const picAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const arrowAnim = {
  rest: { opacity: 1, x: 0 },
  hover: { opacity: 1, x: 5 },
};
