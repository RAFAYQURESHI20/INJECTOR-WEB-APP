import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import Features from "@/components/Features";
import { motion } from "framer-motion";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CodeRain />
      <Navbar />
      <div className="pt-16">
        <div className="container px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
              Advanced Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SQL injection protection with enterprise-grade features designed for modern applications.
            </p>
          </motion.div>
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
