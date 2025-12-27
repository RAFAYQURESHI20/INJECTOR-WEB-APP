import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, CheckCircle, Shield, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LoginResult {
  success: boolean;
  message: string;
  explanation: string;
  payload: string;
}

const SQLInjectionLab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<LoginResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Define the SQL injection payloads to detect
  const sqlInjectionPayloads = [
    "' OR '1'='1",
    "admin' --",
    "' OR 1=1 --"
  ];

  const detectSQLInjection = (input: string): string | null => {
    for (const payload of sqlInjectionPayloads) {
      if (input.toLowerCase().includes(payload.toLowerCase())) {
        return payload;
      }
    }
    return null;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setResult(null);

    // Simulate processing delay
    setTimeout(() => {
      const detectedPayload = detectSQLInjection(username);
      
      if (detectedPayload) {
        // SQL Injection detected - simulate authentication bypass
        setResult({
          success: true,
          message: "Login Successful (SQL Injection Detected)",
          explanation: "The injected condition always evaluates to TRUE, simulating an authentication bypass. In a real vulnerable system, this would allow unauthorized access.",
          payload: detectedPayload
        });
      } else {
        // Normal login attempt - always fail
        setResult({
          success: false,
          message: "Login Failed",
          explanation: "No injection detected. Authentication denied. This demonstrates how normal login attempts should behave in a secure system.",
          payload: "N/A"
        });
      }
      
      setIsProcessing(false);
    }, 1000);
  };

  const quickFillPayload = (payload: string) => {
    setUsername(payload);
    setPassword("");
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Fake Server – SQL Injection Simulation
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Educational simulation demonstrating how SQL injection vulnerabilities work
        </p>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="border-amber-500/50 bg-amber-500/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-amber-800 dark:text-amber-200 font-medium">
                  Educational Simulation Notice
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  This is an educational simulation. No real server or database is used. 
                  This demo is designed to help you understand how SQL injection vulnerabilities 
                  work in a controlled, safe environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Payload Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Try These SQL Injection Payloads</CardTitle>
            <CardDescription>
              Click any payload to auto-fill the username field and see the simulation in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {sqlInjectionPayloads.map((payload, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-colors font-mono text-xs"
                  onClick={() => quickFillPayload(payload)}
                >
                  {payload}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle>Simulated Vulnerable Login</CardTitle>
            <CardDescription>
              This form simulates a vulnerable login system. Try different inputs to see how it behaves.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="font-mono"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="font-mono"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="cyber"
                size="lg"
                className="w-full"
                disabled={!username || !password || isProcessing}
              >
                {isProcessing ? (
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </motion.div>
                ) : (
                  "Attempt Login"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Result Display */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className={`border-2 ${
            result.success 
              ? "border-green-500/50 bg-green-500/10" 
              : "border-red-500/50 bg-red-500/10"
          }`}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                {result.success ? (
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                )}
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className={`font-semibold ${
                      result.success ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                    }`}>
                      {result.message}
                    </h3>
                    {result.payload !== "N/A" && (
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        Detected payload: {result.payload}
                      </p>
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    result.success 
                      ? "bg-green-500/20 border border-green-500/30" 
                      : "bg-red-500/20 border border-red-500/30"
                  }`}>
                    <p className="text-sm text-foreground">
                      <strong>Educational Explanation:</strong> {result.explanation}
                    </p>
                  </div>
                  {result.success && (
                    <div className="p-3 bg-amber-500/20 border border-amber-500/30 rounded-lg">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <strong>Ethical Reminder:</strong> This demonstration is for educational purposes only. 
                        Never attempt to exploit real systems without explicit permission.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default SQLInjectionLab;
