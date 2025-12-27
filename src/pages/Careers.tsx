import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Heart, Zap } from "lucide-react";

const CareersPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours"
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Industry-leading salary and equity packages"
    },
    {
      icon: Users,
      title: "Growth Opportunities",
      description: "Professional development and learning budget"
    }
  ];

  const positions = [
    {
      title: "Senior Security Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of advanced threat detection algorithms and security features.",
      requirements: [
        "Strong background in cybersecurity",
        "Experience with SQL injection detection",
        "Knowledge of machine learning applications in security",
        "Excellent communication skills"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time", 
      experience: "3+ years",
      description: "Drive product strategy and roadmap for our security platform.",
      requirements: [
        "Experience in B2B SaaS products",
        "Background in cybersecurity products",
        "Data-driven decision making",
        "Cross-functional team leadership"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain our scalable infrastructure and deployment pipelines.",
      requirements: [
        "Experience with cloud platforms (AWS, GCP)",
        "Kubernetes and container orchestration",
        "CI/CD pipeline management",
        "Security best practices"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Help enterprise customers maximize value from our security platform.",
      requirements: [
        "Enterprise customer success experience",
        "Technical background preferred",
        "Strong relationship building skills",
        "Understanding of cybersecurity landscape"
      ]
    }
  ];

  const values = [
    "Security-first mindset",
    "Continuous learning",
    "Collaborative teamwork",
    "Customer obsession",
    "Innovation and creativity",
    "Integrity and transparency"
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
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us build the future of database security. Join a team of passionate security experts dedicated to protecting the world's data.
            </p>
          </motion.div>

          {/* Why Work With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-display text-gradient">Why INJECTOR Security?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just building another security tool—we're creating the infrastructure that protects 
                  the digital world. Our team combines deep security expertise with cutting-edge AI to solve 
                  one of the most critical challenges in cybersecurity. Join us and make a real impact on 
                  global data security.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Benefits & Perks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="glass border-border/50 text-center">
                  <CardHeader>
                    <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Our Values
            </h2>
            <Card className="glass border-border/50 max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {values.map((value, index) => (
                    <div key={value} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={position.title} className="glass border-border/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <CardDescription className="text-base">
                          {position.department} • {position.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="w-3 h-3 mr-1" />
                          {position.type}
                        </Badge>
                        <Badge variant="secondary">
                          {position.experience}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="cyber">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Don't see your role? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Card className="glass border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">
                  Don't see your perfect role?
                </CardTitle>
                <CardDescription>
                  We're always looking for talented people to join our team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Send us your resume and tell us how you'd like to contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cyber">
                    Send General Application
                  </Button>
                  <Button variant="outline">
                    Contact HR
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
