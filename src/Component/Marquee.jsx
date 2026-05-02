"use client";

import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div>
      <div className=" my-8 overflow-hidden whitespace-nowrap bg-[#63483a] text-[#edd0b9] py-3">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          <span>🔥 Best Quality Tiles</span>
          <span>✨ New Collection Available</span>
          <span>🏠 Modern Design Flooring</span>
          <span>💎 Premium Ceramic Tiles</span>
          <span>🔥 Best Quality Tiles</span>
          <span>✨ New Collection Available</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
