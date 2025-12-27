import { motion } from "framer-motion";

const CodeRain = () => {
  const columns = 20;
  const chars = "01アイウエオカキクケコSQLINJECT{}[];'\"--DROP";
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary font-mono text-sm"
          style={{
            left: `${(i / columns) * 100}%`,
            top: -100,
          }}
          animate={{
            y: ["0vh", "100vh"],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {Array.from({ length: 30 }).map((_, j) => (
            <div
              key={j}
              className="opacity-70"
              style={{
                opacity: 1 - j * 0.03,
              }}
            >
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeRain;
