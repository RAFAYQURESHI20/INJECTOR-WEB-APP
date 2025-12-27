import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, ArrowRight, Tag } from "lucide-react";

const BlogPage = () => {
  const featuredPost = {
    title: "The Evolution of SQL Injection Attacks in 2025",
    excerpt: "Understanding modern attack vectors and how INJECTOR's AI-powered detection stays ahead of threats.",
    author: "Dr. Emily Watson",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Security Research",
    image: "/logo.svg"
  };

  const posts = [
    {
      title: "5 Signs Your Database Needs Better Protection",
      excerpt: "Learn the warning signs that indicate your application might be vulnerable to SQL injection attacks.",
      author: "Marcus Rodriguez",
      date: "March 12, 2025",
      readTime: "5 min read",
      category: "Best Practices"
    },
    {
      title: "Case Study: How Company X Prevented a $2M Data Breach",
      excerpt: "Real-world example of how INJECTOR's real-time detection stopped a sophisticated attack in its tracks.",
      author: "Sarah Chen",
      date: "March 8, 2025", 
      readTime: "6 min read",
      category: "Case Study"
    },
    {
      title: "API Security: Beyond Authentication",
      excerpt: "Why API protection requires more than just tokens and how to build comprehensive security layers.",
      author: "Alex Kim",
      date: "March 5, 2025",
      readTime: "7 min read",
      category: "Technical"
    },
    {
      title: "The Cost of Security vs. The Cost of Breach",
      excerpt: "Breaking down the real numbers behind cybersecurity investment and ROI for enterprise organizations.",
      author: "Sarah Chen",
      date: "March 1, 2025",
      readTime: "10 min read",
      category: "Business"
    },
    {
      title: "Zero-Day SQL Injection: Detection and Response",
      excerpt: "How our threat research team discovered and responded to a previously unknown attack pattern.",
      author: "Dr. Emily Watson",
      date: "February 28, 2025",
      readTime: "12 min read",
      category: "Research"
    },
    {
      title: "Building Secure Database Connections",
      excerpt: "Best practices for establishing and maintaining secure connections between applications and databases.",
      author: "Marcus Rodriguez",
      date: "February 25, 2025",
      readTime: "9 min read",
      category: "Technical"
    }
  ];

  const categories = ["All", "Security Research", "Best Practices", "Technical", "Case Study", "Business", "Research"];

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
              Security Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, research, and best practices from our team of security experts.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="glass border-border/50 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Tag className="w-16 h-16 text-primary/50" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="destructive">Featured</Badge>
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-display">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="cyber">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {posts.map((post, index) => (
              <Card key={post.title} className="glass border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Card className="glass border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-gradient">
                  Stay Updated
                </CardTitle>
                <CardDescription>
                  Get the latest security insights and threat intelligence delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="cyber">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
