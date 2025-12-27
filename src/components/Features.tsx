import { motion } from "framer-motion";
import { Shield, Zap, Eye, Lock, Database, Code, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Real-Time Protection",
    description: "Advanced AI-powered detection system that identifies and blocks SQL injection attempts instantly.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Eye,
    title: "Deep Analysis",
    description: "Comprehensive scanning of all input vectors to identify potential vulnerabilities before exploitation.",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Lock,
    title: "Secure Queries",
    description: "Automatic parameterization and sanitization of database queries to prevent injection attacks.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-millisecond response times ensure your application performance remains unaffected.",
    color: "primary",
    gradient: "from-primary/20 to-secondary/5",
  },
  {
    icon: Database,
    title: "Database Agnostic",
    description: "Works with MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, and more.",
    color: "secondary",
    gradient: "from-secondary/20 to-accent/5",
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Simple API integration with any programming language or framework in minutes.",
    color: "accent",
    gradient: "from-accent/20 to-primary/5",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Next-Gen Security</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
            <motion.span
              className="text-gradient glow-text"
              animate={{
                textShadow: [
                  "0 0 20px hsl(160 100% 50% / 0.5)",
                  "0 0 30px hsl(160 100% 50% / 0.8)",
                  "0 0 20px hsl(160 100% 50% / 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Powerful Features
            </motion.span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade SQL injection protection with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                rotateX: 5,
                scale: 1.03,
              }}
            >
              {/* Enhanced card with 3D effects */}
              <motion.div
                className={`glass-advanced rounded-2xl p-8 h-full relative overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500 perspective-1000 transform-3d`}
                whileHover={{
                  boxShadow: [
                    "0 20px 40px hsl(160 100% 50% / 0.1)",
                    "0 40px 80px hsl(160 100% 50% / 0.2)",
                    "0 20px 40px hsl(160 100% 50% / 0.1)",
                  ],
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />
                
                {/* Enhanced icon container with better animations */}
                <motion.div
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <feature.icon className={`w-8 h-8 text-${feature.color} relative z-10`} />
                </motion.div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Enhanced hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "hsl(160 100% 50% / 0.2)",
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full border border-primary/30"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
