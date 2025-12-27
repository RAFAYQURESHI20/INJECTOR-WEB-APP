import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Github, Mail, Check } from "lucide-react";
import { Link } from "react-router-dom";

const CreateAccountPage = () => {
  const features = [
    "14-day free trial",
    "No credit card required", 
    "Instant API access",
    "Enterprise-grade security",
    "24/7 technical support",
    "Cancel anytime"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <span className="text-2xl font-display font-bold text-gradient">INJECTOR</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
                Start Protecting Your Database Today
              </h1>
              <p className="text-xl text-muted-foreground">
                Join thousands of developers who trust INJECTOR to secure their applications against SQL injection attacks.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-primary font-medium">
                💡 Pro Tip: Start with our free tier to test integration, then upgrade as you scale.
              </p>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <Card className="glass border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display">Create Your Account</CardTitle>
              <CardDescription>
                Get started with your 14-day free trial
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
                    Or sign up with email
                  </span>
                </div>
              </div>

              {/* Registration Form */}
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" required className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="marketing" className="rounded" />
                  <Label htmlFor="marketing" className="text-sm">
                    Send me security updates and product news
                  </Label>
                </div>

                <Button variant="cyber" type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              {/* Sign In Link */}
              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
