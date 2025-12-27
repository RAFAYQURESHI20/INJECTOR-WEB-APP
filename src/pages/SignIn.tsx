import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2">
              <Shield className="w-10 h-10 text-primary" />
              <span className="text-2xl font-display font-bold text-gradient">INJECTOR</span>
            </Link>
          </div>

          <Card className="glass border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your INJECTOR account to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  Continue with GitHub
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Continue with Google
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Email/Password Form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded" />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Button variant="cyber" type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-muted-foreground">
              Protected by enterprise-grade security • SOC 2 Type II certified
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;
