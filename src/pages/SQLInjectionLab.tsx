import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SQLInjectionLab from "@/components/SQLInjectionLab";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";

const SQLInjectionLabPage = () => {
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
            className="mb-16"
          >
            <SQLInjectionLab />
          </motion.div>

          {/* Additional Educational Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-gradient mb-4">
                  Understanding SQL Injection
                </h2>
                <p className="text-muted-foreground text-lg">
                  Learn how these attacks work and how to prevent them
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="glass rounded-xl p-6 h-full">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      How SQL Injection Works
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        SQL injection occurs when user input is not properly sanitized 
                        and is directly included in SQL queries.
                      </p>
                      <p>
                        Malicious users can manipulate queries to bypass authentication, 
                        extract data, or execute harmful commands.
                      </p>
                      <p>
                        The vulnerable login form doesn't validate input, allowing 
                        attackers to inject malicious SQL code.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="glass rounded-xl p-6 h-full">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Prevention Techniques
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong>Input Validation:</strong> Validate and sanitize all user inputs
                      </p>
                      <p>
                        <strong>Prepared Statements:</strong> Use parameterized queries 
                        to separate SQL logic from data
                      </p>
                      <p>
                        <strong>Least Privilege:</strong> Limit database user permissions 
                        to minimum required
                      </p>
                      <p>
                        <strong>Web Application Firewalls:</strong> Filter malicious requests 
                        before they reach the application
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Real-World Impact
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-destructive">$4.35M</div>
                    <div className="text-sm text-muted-foreground">Average data breach cost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-destructive">65%</div>
                    <div className="text-sm text-muted-foreground">Of attacks are web-based</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-destructive">280</div>
                    <div className="text-sm text-muted-foreground">Days to identify & contain</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SQLInjectionLabPage;
