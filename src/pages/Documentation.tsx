import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Code, Shield, Zap, Users, Download } from "lucide-react";

const DocumentationPage = () => {
  const guides = [
    {
      icon: Shield,
      title: "Getting Started",
      description: "Quick setup guide to integrate INJECTOR into your application",
      difficulty: "Beginner",
      time: "5 min"
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Comprehensive guide to using our REST API endpoints",
      difficulty: "Intermediate",
      time: "15 min"
    },
    {
      icon: Zap,
      title: "Advanced Configuration",
      description: "Fine-tune protection rules and detection parameters",
      difficulty: "Advanced",
      time: "30 min"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Set up user roles, permissions, and team collaboration",
      difficulty: "Intermediate",
      time: "10 min"
    }
  ];

  const resources = [
    "Quick Start Guide",
    "API Reference",
    "Integration Examples",
    "Best Practices",
    "Troubleshooting",
    "Security Guidelines"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CodeRain />
      <Navbar />
      <div className="pt-16">
        <div className="container px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to implement and optimize SQL injection protection in your applications.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="cyber" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download SDK
            </Button>
            <Button variant="outline" size="lg">
              <Book className="w-4 h-4 mr-2" />
              Interactive Tutorial
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          >
            {resources.map((resource, index) => (
              <Button
                key={resource}
                variant="ghost"
                className="h-auto p-4 flex flex-col items-center text-center"
              >
                <Book className="w-6 h-6 mb-2 text-primary" />
                <span className="text-sm">{resource}</span>
              </Button>
            ))}
          </motion.div>

          {/* Getting Started Guides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Getting Started Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <Card key={guide.title} className="glass border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <guide.icon className="w-8 h-8 text-primary" />
                      <div className="flex gap-2">
                        <Badge variant={guide.difficulty === 'Beginner' ? 'default' : guide.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                          {guide.difficulty}
                        </Badge>
                        <Badge variant="outline">{guide.time}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Quick Integration
            </h2>
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  JavaScript Integration
                </CardTitle>
                <CardDescription>
                  Add SQL injection protection to your application in under 30 seconds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-green-400">
{`// Install via npm
npm install @riq/injector

// Import and initialize
import { Injector } from '@riq/injector';

const injector = new Injector({
  apiKey: 'your-api-key',
  mode: 'production'
});

// Protect your database queries
const result = await injector.protect(
  'SELECT * FROM users WHERE id = ?', 
  [userId]
);`}
                  </code>
                </pre>
                <div className="flex gap-2 mt-4">
                  <Button variant="cyber" size="sm">Copy Code</Button>
                  <Button variant="outline" size="sm">View Full Example</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-4">
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our documentation team and community are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg">
                Join Community
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
