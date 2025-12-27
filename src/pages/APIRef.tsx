import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Shield, Activity, Settings } from "lucide-react";

const APIRefPage = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/protect",
      description: "Protect a SQL query from injection attacks",
      status: "stable"
    },
    {
      method: "GET", 
      path: "/api/v1/analytics",
      description: "Get real-time protection analytics",
      status: "stable"
    },
    {
      method: "POST",
      path: "/api/v1/configure",
      description: "Update protection rules and settings",
      status: "beta"
    },
    {
      method: "GET",
      path: "/api/v1/health",
      description: "Check service health and status",
      status: "stable"
    }
  ];

  const codeExamples = {
    protect: `// Protect a SQL query
const response = await fetch('/api/v1/protect', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'SELECT * FROM users WHERE id = ?',
    params: [userId],
    database: 'postgresql'
  })
});

const result = await response.json();
// { protected: true, query: "...", risk: "low" }`,
    
    analytics: `// Get protection analytics
const response = await fetch('/api/v1/analytics?period=24h', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const data = await response.json();
// { attacks_blocked: 156, detection_rate: "99.9%" }`,
    
    configure: `// Update protection settings
const response = await fetch('/api/v1/configure', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    rules: {
      strict_mode: true,
      custom_patterns: ["'; DROP TABLE"]
    },
    database: 'mysql'
  })
});`
  };

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
              API Reference
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete REST API documentation for integrating INJECTOR protection into your applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            <Card className="glass border-border/50 text-center">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">API key-based authentication</p>
              </CardContent>
            </Card>
            
            <Card className="glass border-border/50 text-center">
              <CardHeader>
                <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Rate Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">1000 requests per minute</p>
              </CardContent>
            </Card>
            
            <Card className="glass border-border/50 text-center">
              <CardHeader>
                <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">99.99% SLA guarantee</p>
              </CardContent>
            </Card>
            
            <Card className="glass border-border/50 text-center">
              <CardHeader>
                <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Version</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">API v1.0 stable</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Endpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8">
              API Endpoints
            </h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={endpoint.path} className="glass border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'default' : 'destructive'}
                          className="font-mono"
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono text-primary">{endpoint.path}</code>
                      </div>
                      <Badge 
                        variant={endpoint.status === 'stable' ? 'default' : 'secondary'}
                      >
                        {endpoint.status}
                      </Badge>
                    </div>
                    <CardDescription>{endpoint.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Code Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Code Examples
            </h2>
            <Tabs defaultValue="protect" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="protect">Protect Query</TabsTrigger>
                <TabsTrigger value="analytics">Get Analytics</TabsTrigger>
                <TabsTrigger value="configure">Configure Rules</TabsTrigger>
              </TabsList>
              
              <TabsContent value="protect">
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle>Protect SQL Query</CardTitle>
                    <CardDescription>
                      Send a SQL query for protection analysis and sanitization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                      <code className="text-green-400">{codeExamples.protect}</code>
                    </pre>
                    <Button variant="outline" size="sm" className="mt-4">Copy Code</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle>Get Protection Analytics</CardTitle>
                    <CardDescription>
                      Retrieve real-time statistics about protection performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                      <code className="text-green-400">{codeExamples.analytics}</code>
                    </pre>
                    <Button variant="outline" size="sm" className="mt-4">Copy Code</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="configure">
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle>Configure Protection Rules</CardTitle>
                    <CardDescription>
                      Update detection rules and protection parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                      <code className="text-green-400">{codeExamples.configure}</code>
                    </pre>
                    <Button variant="outline" size="sm" className="mt-4">Copy Code</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* SDK Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8">
              Official SDKs
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['JavaScript', 'Python', 'Java', 'Go'].map((lang) => (
                <Button key={lang} variant="outline" size="lg">
                  {lang}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APIRefPage;
