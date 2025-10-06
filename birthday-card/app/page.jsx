"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [popup, setPopup] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "sans-serif" }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "100px" }}
      >
        🎂
      </motion.div>

      <button
        onClick={() => {
          setPopup(true);
          setTimeout(() => setPopup(false), 3500);
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Blow
      </button>

      {popup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "20px",
            fontSize: "24px",
            color: "crimson",
          }}
        >
          Happiest birthday to my cute little baby! ❤️
        </motion.div>
      )}
    </div>
  );
}
