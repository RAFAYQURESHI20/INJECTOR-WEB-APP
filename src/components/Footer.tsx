import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", path: "/features" },
      { name: "Pricing", path: "/pricing" },
      { name: "Documentation", path: "/docs" },
      { name: "API Reference", path: "/api" }
    ],
    company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Security", path: "/security" }
    ],
  };

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-display font-bold text-gradient">INJECTOR</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Enterprise-grade SQL injection protection for modern applications.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:rafayq13@gmail.com"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-display font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 INJECTOR Security. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">$</span> Protecting databases worldwide
          </p>
        </div>

        {/* Made by section */}
        <div className="pt-4 text-center">
          <p className="text-muted-foreground text-sm">
            Made by <span className="text-primary font-medium">AbdulRafay</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
