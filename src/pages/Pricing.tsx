import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Shield, Check, Zap, Crown, Star } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Developer",
      description: "Perfect for individual developers and small projects",
      icon: Shield,
      price: { monthly: 0, annual: 0 },
      color: "secondary",
      features: [
        "1,000 queries protected/month",
        "Basic SQL injection detection",
        "Community support",
        "Basic reporting dashboard",
        "REST API access",
        "MySQL & PostgreSQL support"
      ],
      limitations: [
        "Limited to development environments",
        "Email support only",
        "Basic threat intelligence"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and production applications",
      icon: Zap,
      price: { monthly: 49, annual: 39 },
      color: "primary",
      popular: true,
      features: [
        "100,000 queries protected/month",
        "Advanced AI-powered detection",
        "Priority email support",
        "Real-time monitoring dashboard",
        "Full API access with webhooks",
        "Multi-database support (MySQL, PostgreSQL, MongoDB, Oracle)",
        "Custom rule configuration",
        "Threat intelligence feeds",
        "Basic compliance reporting (SOC 2, HIPAA)"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced security requirements",
      icon: Crown,
      price: { monthly: 199, annual: 159 },
      color: "accent",
      features: [
        "Unlimited queries protection",
        "Enterprise AI detection engine",
        "24/7 phone & email support",
        "Real-time threat monitoring",
        "White-label deployment options",
        "Complete database support (all major vendors)",
        "Advanced rule engine with ML",
        "Premium threat intelligence",
        "Full compliance suite (SOC 2, HIPAA, PCI-DSS, GDPR)",
        "Custom integrations & SSO",
        "Dedicated account manager",
        "On-premise deployment option"
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "What counts as a 'query' in your protection?",
      answer: "Each database query that passes through our protection system counts as one query. This includes SELECT, INSERT, UPDATE, DELETE, and other SQL operations."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer a free trial for paid plans?",
      answer: "Yes, we offer a 14-day free trial for both Professional and Enterprise plans. No credit card required to start."
    },
    {
      question: "What happens if I exceed my query limit?",
      answer: "We'll notify you when you approach your limit. You can upgrade your plan or purchase additional query credits to continue protection."
    },
    {
      question: "Is my data secure with INJECTOR?",
      answer: "Absolutely. We use end-to-end encryption, never store your actual data, and comply with SOC 2, HIPAA, and GDPR standards."
    },
    {
      question: "Can I deploy INJECTOR on-premise?",
      answer: "Yes, Enterprise customers can choose between cloud deployment or on-premise installation for maximum security control."
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your security needs. Start free, scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  Save 20%
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`glass border-border/50 h-full ${plan.popular ? 'border-primary/50 shadow-lg shadow-primary/20' : ''}`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-lg bg-${plan.color}/10 flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                    </div>
                    
                    <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-display font-bold">
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                        {plan.price.monthly > 0 && (
                          <span className="text-muted-foreground">
                            /{isAnnual ? 'month' : 'month'}
                          </span>
                        )}
                      </div>
                      {isAnnual && plan.price.monthly > 0 && (
                        <div className="text-sm text-muted-foreground mt-1">
                          Billed annually (${plan.price.annual * 12}/year)
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      variant={plan.popular ? "cyber" : "outline"} 
                      className="w-full mb-6"
                      size="lg"
                    >
                      {plan.price.monthly === 0 ? "Start Free" : "Start Free Trial"}
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                        <div className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="text-xs text-muted-foreground/70">
                              • {limitation}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-20"
          >
            <Card className="glass border-primary/30 max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-gradient mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For organizations with unique requirements, we offer custom enterprise solutions 
                  with tailored features, dedicated support, and flexible deployment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cyber" size="lg">
                    Contact Sales
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold text-gradient mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
