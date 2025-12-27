import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Shield, Zap, Star, CheckCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "99.9% Detection Rate",
    "<1ms Response Time", 
    "24/7 Protection",
    "Enterprise Support"
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border border-secondary/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Particle-like dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="container px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Enhanced badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-intense mb-8 group"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-muted-foreground">Enterprise Security</span>
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced main heading */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight">
              <motion.span
                className="text-foreground"
                initial={{ opacity: 1 }}
                animate={{
                  textShadow: [
                    "0 0 10px hsl(160 100% 50% / 0.3)",
                    "0 0 20px hsl(160 100% 50% / 0.5)",
                    "0 0 10px hsl(160 100% 50% / 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Ready to
              </motion.span>
              <br />
              <motion.span
                className="text-gradient text-primary"
                initial={{ opacity: 1 }}
                animate={{
                  textShadow: [
                    "0 0 20px hsl(160 100% 50% / 0.5)",
                    "0 0 40px hsl(160 100% 50% / 0.8)",
                    "0 0 20px hsl(160 100% 50% / 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Secure
              </motion.span>
              <br />
              <motion.span
                className="text-primary"
                initial={{ opacity: 1, x: 0 }}
                animate={{
                  textShadow: [
                    "0 0 20px hsl(160 100% 50% / 0.5)",
                    "0 0 40px hsl(160 100% 50% / 0.8)",
                    "0 0 20px hsl(160 100% 50% / 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.6
                }}
              >
                Your Database?
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Join thousands of companies protecting their data with INJECTOR's advanced SQL injection prevention system.
            Experience next-generation security with zero compromise on performance.
          </motion.p>

          {/* Benefits grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="glass-advanced rounded-lg p-4 text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="holographic" 
                size="xl" 
                className="min-w-[200px] relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="magnetic" 
                size="xl" 
                className="min-w-[200px] relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  Contact Sales
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced contact info with better styling */}
          <motion.div
            className="glass-intense rounded-2xl p-8 inline-flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px hsl(160 100% 50% / 0.1)"
            }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Need Help Getting Started?
              </h3>
              <p className="text-muted-foreground mb-3">
                Our security experts are here to help you implement the best protection for your database.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
                <span className="text-muted-foreground">Email us at:</span>
                <a 
                  href="mailto:rafayq13@gmail.com" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  <span className="group-hover:underline">rafayq13@gmail.com</span>
                </a>
              </div>
            </div>
            
            <motion.div
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
};

export default CTA;
