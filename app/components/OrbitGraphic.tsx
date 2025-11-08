"use client";
import { motion } from "framer-motion";

export default function OrbitGraphic() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="relative w-80 h-80">
        {/* Central circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-white font-bold">JS</span>
        </motion.div>

        {/* Orbit rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-8 h-8 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-xs text-white">TS</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-8 h-8 bg-cyan-500 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-xs text-white">⚛️</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-8 h-8 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-xs text-white">📱</span>
          </motion.div>
        </motion.div>

        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${50 + 30 * Math.sin((i * Math.PI) / 4)}%`,
              left: `${50 + 30 * Math.cos((i * Math.PI) / 4)}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}