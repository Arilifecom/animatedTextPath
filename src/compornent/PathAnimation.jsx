import React from "react";
import { motion } from "framer-motion";

const PathAnimation = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="grid w-screen h-screen place-items-center z-30">
      <motion.svg
        width="374"
        height="65"
        viewBox="0 0 374 65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M339.926 49.7099V39.2639H365.4H366.9V37.7639V27.3059V25.8059H365.4H339.926V16.1899H368.969H370.469V14.6899V3.8999V2.3999H368.969H325.062H323.562V3.8999V61.9999V63.4999H325.062H370.048H371.548V61.9999V51.2099V49.7099H370.048H339.926Z"
          stroke="rgba(61, 181, 194, 1)"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M282.019 61.9999V42.3349H307.411H308.911V40.8349V30.0449V28.5449H307.411H282.019V16.1899H310.98H312.48V14.6899V3.8999V2.3999H310.98H267.073H265.573V3.8999V61.9999V63.4999H267.073H280.519H282.019V61.9999Z"
          stroke="rgba(61, 156, 194, 1)"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M233.358 61.9999V63.4999H234.858H248.304H249.804V61.9999V3.8999V2.3999H248.304H234.858H233.358V3.8999V61.9999Z"
          stroke="rgba(61, 156, 194, 1) "
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M178.286 61.9999V63.4999H179.786H222.365H223.865V61.9999V51.0439V49.5439H222.365H194.732V3.8999V2.3999H193.232H179.786H178.286V3.8999V61.9999Z"
          stroke="rgba(88, 150, 202, 1) "
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M146.072 61.9999V63.4999H147.572H161.018H162.518V61.9999V3.8999V2.3999H161.018H147.572H146.072V3.8999V61.9999Z"
          stroke="rgba(115, 144, 210, 1)"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M80.0579 61.9999V63.4999H81.5579H95.0039H96.5039V61.9999V47.3149H106.554L117.258 62.8509L117.705 63.4999H118.493H133.018H135.891L134.249 61.1423L122.279 43.9663C125.559 42.253 128.187 39.9388 130.119 37.0138L130.119 37.0138L130.126 37.0036C132.354 33.572 133.439 29.5438 133.439 24.9819C133.439 20.3688 132.356 16.3118 130.126 12.8772C127.907 9.45796 124.766 6.87041 120.767 5.1042C116.767 3.28257 112.065 2.3999 106.707 2.3999H81.5579H80.0579V3.8999V61.9999ZM105.96 33.6079H96.5039V16.3559H105.96C109.934 16.3559 112.613 17.2092 114.275 18.6465C115.931 20.0787 116.827 22.1192 116.827 24.9819C116.827 27.7743 115.939 29.828 114.266 31.3248C112.604 32.7576 109.927 33.6079 105.96 33.6079Z"
          stroke="rgba(121, 143, 212, 1)"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M4.02495 61.3892L3.0842 63.4999H5.39502H19.173H20.1738L20.558 62.5759L25.3512 51.0499H50.2805L55.0542 62.574L55.4378 63.4999H56.44H70.55H72.8639L71.9194 61.3876L45.9404 3.28761L45.5434 2.3999H44.571H31.291H30.3173L29.9209 3.28924L4.02495 61.3892ZM37.8401 21.0181L44.8088 37.8409H30.8443L37.8401 21.0181Z"
          stroke="rgba(153, 135, 221, 1)"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
};

export default PathAnimation;
