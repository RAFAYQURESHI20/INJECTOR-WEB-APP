import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Users, Award, Globe, Heart } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "50M+", label: "Queries Protected Daily" },
    { number: "99.9%", label: "Detection Accuracy" },
    { number: "1000+", label: "Enterprise Clients" },
    { number: "24/7", label: "Security Monitoring" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former security engineer at major tech companies with 15+ years in cybersecurity.",
      image: "/logo.svg"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Led security teams at Fortune 500 companies, expert in database security.",
      image: "/logo.svg"
    },
    {
      name: "Abdul Rafay",
      role: "AI Engineer",
      bio: "AI Engineer with internship experience at NESCOM, specializing in intelligent security solutions.",
      image: "/logo.svg"
    },
    {
      name: "Alex Kim",
      role: "VP of Engineering",
      bio: "Built scalable security systems for millions of users worldwide.",
      image: "/logo.svg"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of your data above all else."
    },
    {
      icon: Target,
      title: "Precision Protection",
      description: "Our AI-powered detection provides accurate protection with minimal false positives."
    },
    {
      icon: Users,
      title: "Developer Focused",
      description: "Built by developers, for developers, with seamless integration in mind."
    },
    {
      icon: Award,
      title: "Continuous Innovation",
      description: "Constantly evolving to defend against emerging threats and attack vectors."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CodeRain />
      <Navbar />
      <div className="pt-16">
        <div className="container px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
              About INJECTOR Security
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make database security accessible, intelligent, and foolproof for every developer and organization.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-display text-gradient">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In an era where data breaches cost organizations millions and destroy trust, 
                  we believe every database deserves enterprise-grade protection. INJECTOR represents 
                  the next evolution in SQL injection defense—combining cutting-edge AI, real-time 
                  threat detection, and seamless developer experience to keep your data safe.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <Card key={stat.label} className="glass border-border/50 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="glass border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <value.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={member.name} className="glass border-border/50">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Our Journey
            </h2>
            <div className="space-y-8">
              {[
                { year: "2022", event: "Founded INJECTOR Security with seed funding" },
                { year: "2023", event: "Launched INJECTOR beta with 100+ early adopters" },
                { year: "2024", event: "Reached 1,000+ enterprise customers and 50M+ queries protected" },
                { year: "2025", event: "Expanding globally with new data centers and features" }
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-center gap-6">
                  <Badge variant="outline" className="font-mono text-lg px-4 py-2">
                    {milestone.year}
                  </Badge>
                  <div className="text-muted-foreground">{milestone.event}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a developer, security researcher, or business leader, 
              there's a place for you in our fight against SQL injection attacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg">
                View Careers
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
