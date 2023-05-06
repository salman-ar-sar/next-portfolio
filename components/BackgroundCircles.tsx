"use client";

import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-cyan-900 opacity-50 rounded-full h-[12rem] w-[12rem] mt-52 animate-ping" />
      <div className="absolute border border-cyan-900 opacity-50 rounded-full h-[20rem] w-[20rem] mt-52" />
      <div className="absolute border border-cyan-900 opacity-50 rounded-full h-[28rem] w-[28rem] mt-52" />
      <div className="absolute border border-cyan-400 opacity-20 rounded-full h-[36rem] w-[36rem] mt-52 animate-pulse" />
      <div className="absolute border border-cyan-900 opacity-50 rounded-full h-[44rem] w-[44rem] mt-52" />
    </motion.div>
  );
}
