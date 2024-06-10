import PathAnimation from "@/compornent/PathAnimation";
import { easeInOut, motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
    display: "grid",
  },
  animate: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      delay: 3,
      duration: 1, // フェードアウトの時間を設定
      ease: easeInOut,
    },
  },
};

export default function Home() {
  return (
    <>
      <motion.div
        className="fixed text-dark min-h-screen w-screen bg-dark z-30"
        variants={quote}
        initial="initial"
        animate="animate"
      >
        <PathAnimation />
      </motion.div>
      <main className="grid min-h-screen w-screen bg-dark place-items-center">
        <h1 className="text-6xl text-light">
          Hello <span className="text-primary">&#9834;</span> I'm Ari!
        </h1>
      </main>
    </>
  );
}
