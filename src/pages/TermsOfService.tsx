import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: "Service Description",
      content: [
        "INJECTOR provides SQL injection protection and threat detection services",
        "We offer various service tiers based on usage and enterprise requirements",
        "Service availability and features may vary by subscription plan",
        "We continuously update our protection algorithms and threat intelligence"
      ]
    },
    {
      icon: Shield,
      title: "Acceptable Use",
      content: [
        "Use our services only for legitimate security protection purposes",
        "Do not attempt to reverse engineer or analyze our detection methods",
        "Comply with all applicable laws and regulations in your jurisdiction",
        "Do not use our services to test attacks against systems you don't own",
        "Respect rate limits and fair usage policies"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations & Disclaimers",
      content: [
        "While we strive for 99.9% accuracy, no security system is perfect",
        "We provide services 'as is' without warranties of any kind",
        "You are responsible for maintaining the security of your own systems",
        "We are not liable for damages resulting from security breaches",
        "Service uptime commitments apply only to paid enterprise plans"
      ]
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: [
        "INJECTOR technology and algorithms are proprietary to INJECTOR Security",
        "You retain ownership of your data and SQL queries",
        "We may use anonymized threat data for improving our services",
        "Our trademarks and branding materials are protected intellectual property"
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our INJECTOR security service.
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
                  These Terms of Service ("Terms") govern your use of the INJECTOR SQL injection protection 
                  service provided by INJECTOR Security ("Company", "we", "us", or "our").
                  our service, you agree to be bound by these Terms. If you disagree with any part of these 
                  terms, then you may not access the service.
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

          {/* Subscription Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">Subscription & Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our service offers different subscription tiers with varying features and usage limits:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Free tier: Limited to 1,000 queries per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Professional: Up to 100,000 queries per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Enterprise: Unlimited queries with custom SLAs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">All paid plans include 24/7 support and API access</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    Subscriptions are billed monthly or annually. You may cancel your subscription at any time, 
                    but no refunds are provided for partial months.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="glass border-border/50 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">Data Processing Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    For enterprise customers, we provide a Data Processing Agreement (DPA) that includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "GDPR compliance provisions",
                      "SOC 2 Type II certification",
                      "Data residency options",
                      "Audit trail capabilities",
                      "Incident response procedures",
                      "Regular security assessments"
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
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
                <CardTitle className="text-2xl font-display text-gradient">Questions About Terms?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact our legal team:
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

export default TermsOfServicePage;
