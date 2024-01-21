export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,

      // direction ini sangat berpengaruh pada layar, kenapa saya kasih 20 karean biar start awal nya tidak terlalu luar sehingga tidak mengubah ukuran layar
      x: direction === "left" ? 10 : direction === "right" ? -10 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
