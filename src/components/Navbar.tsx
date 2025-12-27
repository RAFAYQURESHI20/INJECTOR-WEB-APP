import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Sparkles, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Demo", path: "/demo" },
    { name: "SQL Lab", path: "/sql-injection-lab" },
    { name: "Docs", path: "/docs" },
    { name: "Blog", path: "/blog" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-intense backdrop-blur-2xl border-b border-border/30" 
          : "glass backdrop-blur-xl"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3 group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo background glow */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="relative p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/logo.svg" 
                  alt="INJECTOR Logo" 
                  className="w-8 h-8 text-primary relative z-10"
                />
              </motion.div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black text-gradient group-hover:animate-neon-pulse transition-all duration-300">
                  INJECTOR
                </span>
                <motion.div
                  className="text-xs text-muted-foreground opacity-70"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  SQL Security Suite
                </motion.div>
              </div>
            </motion.div>
          </Link>

          {/* Enhanced Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link key={link.name} to={link.path}>
                  <motion.div
                    className="relative px-4 py-2 rounded-lg group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {link.name}
                    </span>
                    
                    {/* Sparkle effect on hover */}
                    <motion.div
                      className="absolute top-1 right-1 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -45 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Sparkles className="w-3 h-3 text-accent" />
                    </motion.div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/signin">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <span className="relative z-10">Sign In</span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/signup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="holographic" 
                  size="sm"
                  className="relative overflow-hidden group min-w-[120px]"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Get Started
                  </div>
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <motion.button
            className="lg:hidden relative p-2 rounded-lg glass-advanced group"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
            
            <motion.div
              className="relative z-10"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="py-6 border-t border-border/30 mt-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                            isActive 
                              ? "text-primary bg-primary/10 border border-primary/30" 
                              : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {link.name}
                          
                          {/* Active indicator for mobile */}
                          {isActive && (
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                              layoutId="activeMobileTab"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    );
                  })}
                  
                  <motion.div
                    className="flex flex-col gap-3 pt-4 mt-4 border-t border-border/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.3 }}
                  >
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button variant="holographic" size="sm" className="w-full">
                        <Zap className="w-4 h-4" />
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
