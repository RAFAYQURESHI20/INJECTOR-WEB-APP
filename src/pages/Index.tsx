import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SQLDemo from "@/components/SQLDemo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CodeRain />
      <Navbar />
      <Hero />
      <Features />
      <SQLDemo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
