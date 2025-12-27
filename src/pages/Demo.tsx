import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import SQLDemo from "@/components/SQLDemo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DemoPage = () => {
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
              Live Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how INJECTOR protects against SQL injection attacks in real-time.
            </p>
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <SQLDemo />
          </motion.div>

          {/* Demo Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Attack Detection</CardTitle>
                  <CardDescription>
                    Watch as malicious SQL queries are detected and blocked in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SQL injection patterns</li>
                    <li>• Union-based attacks</li>
                    <li>• Boolean-based blind SQL</li>
                    <li>• Time-based blind SQL</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Protection Metrics</CardTitle>
                  <CardDescription>
                    Real-time analytics showing protection status and attack statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Attack detection rate: 99.9%</li>
                    <li>• False positive rate: {"<0.1%"}</li>
                    <li>• Response time: {"<10ms"}</li>
                    <li>• Zero-day protection</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Integration Ready</CardTitle>
                  <CardDescription>
                    Ready to deploy in any environment with minimal configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• REST API endpoints</li>
                    <li>• Database connections</li>
                    <li>• Web application firewalls</li>
                    <li>• Microservices architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-4">
              Ready to Protect Your Application?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust INJECTOR to secure their databases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
