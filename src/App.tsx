import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import Documentation from "./pages/Documentation";
import APIRef from "./pages/APIRef";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SQLInjectionLab from "./pages/SQLInjectionLab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Custom hook for scroll progress
const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress(currentScroll / scrollHeight);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scrollProgress;
};

// Page transition variants for 2025-style animations
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  duration: 0.6,
};

// Animated page wrapper component
const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

// Route transitions component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <AnimatedPage>
              <Index />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/features" 
          element={
            <AnimatedPage>
              <Features />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <AnimatedPage>
              <Pricing />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/demo" 
          element={
            <AnimatedPage>
              <Demo />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/docs" 
          element={
            <AnimatedPage>
              <Documentation />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/api" 
          element={
            <AnimatedPage>
              <APIRef />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/about" 
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <AnimatedPage>
              <Blog />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <AnimatedPage>
              <Careers />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/signin" 
          element={
            <AnimatedPage>
              <SignIn />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <AnimatedPage>
              <CreateAccount />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <AnimatedPage>
              <PrivacyPolicy />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <AnimatedPage>
              <TermsOfService />
            </AnimatedPage>
          } 
        />
        <Route 
          path="/sql-injection-lab" 
          element={
            <AnimatedPage>
              <SQLInjectionLab />
            </AnimatedPage>
          } 
        />
        <Route 
          path="*" 
          element={
            <AnimatedPage>
              <NotFound />
            </AnimatedPage>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground antialiased">
          {/* Global loading indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          
          {/* Page routes with animations */}
          <AnimatedRoutes />
          
          {/* Global scroll indicator */}
          <motion.div
            className="fixed top-0 left-0 h-1 bg-primary z-50 origin-left"
            style={{
              scaleX: useScrollProgress(),
            }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
