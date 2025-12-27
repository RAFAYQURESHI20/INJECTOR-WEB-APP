import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare, Shield } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "rafayq13@gmail.com",
      description: "Get in touch with our team"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+923045759899",
      description: "Mon-Fri, 9AM-6PM PKT"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Rawalpindi, Pakistan",
      description: "B3 758/68 Khurram Colony"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 hours",
      description: "Average response time"
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Shield,
      title: "Security Issues",
      description: "Report security vulnerabilities",
      availability: "24/7 emergency response"
    },
    {
      icon: Mail,
      title: "Technical Support",
      description: "Get help with integration and setup",
      availability: "Mon-Fri, 9AM-6PM EST"
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about INJECTOR? Need technical support? Want to discuss enterprise solutions? We're here to help.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="glass border-border/50 text-center">
                <CardHeader>
                  <info.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {info.details}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardHeader>
              </Card>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-gradient">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="cyber" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold text-gradient">
                Other Ways to Reach Us
              </h2>
              
              {supportOptions.map((option, index) => (
                <Card key={option.title} className="glass border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <option.icon className="w-6 h-6 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{option.title}</CardTitle>
                        <CardDescription>{option.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {option.availability}
                    </p>
                    <Button variant="outline" size="sm">
                      {option.title === "Live Chat" ? "Start Chat" : 
                       option.title === "Security Issues" ? "Report Issue" : "Contact Support"}
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* FAQ Section */}
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        q: "How quickly can I get started?",
                        a: "You can integrate INJECTOR in under 30 minutes with our quick start guide."
                      },
                      {
                        q: "Do you offer enterprise support?",
                        a: "Yes, we provide 24/7 support for enterprise customers with dedicated account managers."
                      },
                      {
                        q: "Is there a free trial?",
                        a: "Absolutely! We offer a 14-day free trial with full access to all features."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border-b border-border/50 pb-3 last:border-b-0">
                        <h4 className="font-medium text-sm mb-1">{faq.q}</h4>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
