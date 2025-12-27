import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Play } from "lucide-react";

const sqlExamples = [
  { 
    query: "' OR '1'='1' --", 
    type: "Classic Authentication Bypass",
    risk: "critical" 
  },
  { 
    query: "1; DROP TABLE users--", 
    type: "Destructive Query",
    risk: "critical" 
  },
  { 
    query: "UNION SELECT * FROM admin_users", 
    type: "Data Extraction",
    risk: "high" 
  },
  { 
    query: "'; EXEC xp_cmdshell('cmd')--", 
    type: "Command Injection",
    risk: "critical" 
  },
];

const SQLDemo = () => {
  const [input, setInput] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<null | { safe: boolean; message: string }>(null);

  const analyzeQuery = () => {
    setScanning(true);
    setResult(null);
    
    setTimeout(() => {
      const isMalicious = sqlExamples.some(ex => 
        input.toLowerCase().includes(ex.query.toLowerCase().slice(0, 5)) ||
        input.includes("'") ||
        input.includes("--") ||
        input.toLowerCase().includes("drop") ||
        input.toLowerCase().includes("union") ||
        input.toLowerCase().includes("exec")
      );
      
      setResult({
        safe: !isMalicious,
        message: isMalicious 
          ? "⚠️ SQL INJECTION DETECTED - Query blocked and logged"
          : "✓ Query is safe - No injection patterns detected"
      });
      setScanning(false);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Live Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Test our SQL injection detection in real-time
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 text-muted-foreground text-sm font-mono">
                riq_scanner.exe
              </span>
            </div>

            {/* Input area */}
            <div className="relative mb-6">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a SQL query or input to analyze..."
                className="w-full h-32 bg-background/50 border border-border rounded-lg p-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            {/* Quick examples */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {sqlExamples.map((ex, i) => (
                  <motion.button
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono bg-muted/50 rounded border border-border hover:border-primary hover:text-primary transition-colors"
                    onClick={() => setInput(ex.query)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {ex.type}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Scan button */}
            <Button
              variant="cyber"
              size="lg"
              onClick={analyzeQuery}
              disabled={!input || scanning}
              className="w-full"
            >
              {scanning ? (
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Analyzing Query...
                </motion.div>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run Analysis
                </>
              )}
            </Button>

            {/* Result */}
            {result && (
              <motion.div
                className={`mt-6 p-4 rounded-lg border ${
                  result.safe 
                    ? "border-primary bg-primary/10" 
                    : "border-destructive bg-destructive/10"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3">
                  {result.safe ? (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  )}
                  <span className={`font-mono text-sm ${result.safe ? "text-primary" : "text-destructive"}`}>
                    {result.message}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SQLDemo;
