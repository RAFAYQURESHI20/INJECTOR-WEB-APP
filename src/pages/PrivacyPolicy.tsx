import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database } from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Account information (name, email, company details)",
        "Usage data (API calls, protection metrics, performance data)",
        "Technical information (IP addresses, browser type, device information)",
        "SQL queries submitted for protection analysis (anonymized)"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "Provide and improve INJECTOR protection services",
        "Monitor and analyze threat patterns for better protection",
        "Provide customer support and technical assistance",
        "Send security updates and important service notifications"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "All data is encrypted in transit and at rest",
        "We never store raw SQL queries in plain text",
        "Access is restricted to authorized personnel only",
        "Regular security audits and compliance reviews"
      ]
    },
    {
      icon: Eye,
      title: "Data Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "Service providers may access data only for operational purposes",
        "We may share anonymized threat intelligence for security research",
        "Legal compliance may require disclosure in specific circumstances"
      ]
    }
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is paramount to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: March 15, 2025
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  At INJECTOR Security, we are committed to protecting your privacy and ensuring the security of your data.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                  our INJECTOR SQL injection protection service. By using our service, you agree to the collection and 
                  use of information in accordance with this policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Sections */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="glass border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <section.icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We retain your information only for as long as necessary to provide our services and comply with legal obligations:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Account data: Until account deletion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Usage analytics: 24 months for performance optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Security logs: 90 days for threat detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Support communications: 3 years for customer service</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Access your personal data",
                    "Correct inaccurate information",
                    "Delete your account and data",
                    "Port your data to another service",
                    "Opt-out of marketing communications",
                    "Object to certain processing activities"
                  ].map((right, index) => (
                    <div key={right} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{right}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <Card className="glass border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> rafayq13@gmail.com</p>
                  <p><strong>Address:</strong> 123 Security Blvd, Suite 100, San Francisco, CA 94105</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
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

export default PrivacyPolicyPage;
