"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [blown, setBlown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (blown) {
      setShowPopup(true);
      const t = setTimeout(() => setShowPopup(false), 3500);
      return () => clearTimeout(t);
    }
  }, [blown]);

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff7fb", fontFamily: "Inter, system-ui, sans-serif", padding: 24 }}>
      <div style={{ maxWidth: 720, width: "100%", textAlign: "center", padding: 36, borderRadius: 20, boxShadow: "0 6px 30px rgba(0,0,0,0.06)", background: "white" }}>
        {/* Cake */}
        {!blown && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{ fontSize: 72, marginBottom: 24 }}
          >
            🎂
          </motion.div>
        )}

        {/* Blow button */}
        {!blown && (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setBlown(true)}
            style={{ padding: "12px 24px", borderRadius: 999, border: "none", background: "#ff6b9a", color: "white", fontWeight: 700, cursor: "pointer", fontSize: 16 }}
          >
            🎈 Blow
          </motion.button>
        )}

        {/* Popup message */}
        <AnimatePresence>
          {showPopup && (
            <motion.div key="popup" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} style={{ marginTop: 24, color: "#ff4c8b", fontSize: 20, fontWeight: 600 }}>
              Happiest birthday to my cute little baby 💖
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint for next steps */}
        <div style={{ marginTop: 28, color: "#666", fontSize: 13 }}>
          (Next: reveal sections — Letter, Song, Gift. I can add them next.)
        </div>
      </div>
    </main>
  );
}
