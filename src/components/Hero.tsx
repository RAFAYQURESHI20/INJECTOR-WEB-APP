import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Terminal, Zap, Sparkles, Code, Database, Lock } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "SELECT * FROM vulnerabilities WHERE protection = 'INJECTOR'";
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Floating icons data
  const floatingIcons = [
    { Icon: Shield, delay: 0, x: 20, y: 20 },
    { Icon: Database, delay: 0.5, x: -30, y: 40 },
    { Icon: Lock, delay: 1, x: 40, y: -20 },
    { Icon: Code, delay: 1.5, x: -20, y: -40 },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Enhanced floating orbs with multiple layers */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute w-12 h-12 text-primary/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, x, 0],
            y: [0, y, 0],
          }}
          transition={{
            delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 20}%`,
          }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}

      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Enhanced badge with animation */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-intense mb-10 group"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-muted-foreground">Advanced SQL Security Platform</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </motion.div>

          {/* Enhanced main title with dynamic effects */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Background overlay for better contrast */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-3xl -mx-8" />
            
            <motion.h1
              className="relative text-7xl md:text-9xl lg:text-[12rem] font-display font-black leading-none py-8"
              animate={{
                textShadow: [
                  "0 0 30px hsl(160 100% 50% / 0.8)",
                  "0 0 50px hsl(160 100% 50% / 1)",
                  "0 0 30px hsl(160 100% 50% / 0.8)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-gradient-enhanced relative z-10" data-text="INJECTOR">
                INJECTOR
              </span>
            </motion.h1>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1, duration: 1.5 }}
            />
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground mb-12 font-mono font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            SQL Injection Detection & Prevention Suite
          </motion.p>

          {/* Enhanced terminal effect */}
          <motion.div
            className="glass-intense rounded-2xl p-6 mb-12 max-w-3xl mx-auto text-left relative overflow-hidden border border-border/50"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.02, borderColor: "hsl(160 100% 50% / 0.3)" }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-destructive/80" 
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-4 h-4 rounded-full bg-yellow-500/80" 
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-4 h-4 rounded-full bg-primary/80" 
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground font-mono">riq@security:sql-scanner</span>
              </div>
            </div>
            
            {/* Terminal content */}
            <div className="font-mono text-base md:text-lg space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="text-muted-foreground">riq@security:~$</span>{" "}
                <span className="text-secondary">sql-scan</span>{" "}
                <span className="text-accent">--deep-analysis</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="pl-4"
              >
                <span className="text-muted-foreground">➤</span>{" "}
                <span className="text-primary">{displayText}</span>
                {isTyping && (
                  <motion.span
                    className="inline-block w-2 h-6 bg-primary ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="pl-4 text-green-400"
              >
                <span className="text-muted-foreground">➤</span>{" "}
                <span>Threat detected and neutralized ✓</span>
              </motion.div>
            </div>

            {/* Terminal glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Enhanced CTA buttons with better animations */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="holographic" size="xl" className="min-w-[200px]">
                <Terminal className="w-5 h-5" />
                Start Scanning
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="magnetic" size="xl" className="min-w-[200px]">
                <Zap className="w-5 h-5" />
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced stats with better animations */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[
              { value: "99.9%", label: "Detection Rate", icon: Shield },
              { value: "10M+", label: "Attacks Blocked", icon: Lock },
              { value: "<1ms", label: "Response Time", icon: Zap },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="glass-advanced rounded-2xl p-6 h-full border border-border/30 hover:border-primary/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px hsl(160 100% 50% / 0.15)",
                  }}
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-display font-bold text-primary glow-text mb-2"
                    animate={{
                      textShadow: [
                        "0 0 20px hsl(160 100% 50% / 0.5)",
                        "0 0 30px hsl(160 100% 50% / 0.8)",
                        "0 0 20px hsl(160 100% 50% / 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scanline overlay */}
      <motion.div 
        className="absolute inset-0 scanline pointer-events-none"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;
