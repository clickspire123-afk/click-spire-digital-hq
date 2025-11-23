import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import processImage from "@/assets/process-image.jpg";
import techInnovation from "@/assets/tech-innovation.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, MapPin, Star, Target, TrendingUp, Users, Award, BarChart3, Clock, Shield, Zap } from "lucide-react";

const Index = () => {
  const whyChooseUs = [
    "MSME Registered & Verified Business",
    "3+ Years of Proven Experience",
    "Affordable Pricing for All Budgets",
    "Local Expertise in Tamil Nadu Markets",
    "Dedicated Support & Communication",
    "Results-Driven Strategies",
  ];

  const serviceAreas = [
    "Kallakurichi",
    "Chinnasalem",
    "Thiyagadurugam",
    "Thiruvannamalai",
    "Ulundurpet",
    "Cuddalore",
    "Virudhachalam",
    "Villupuram",
    "Puducherry",
    "Sankarapuram",
    "Attur-Salem",
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Local Restaurant Owner",
      text: "Click Spire helped us get more customers through Google. Our sales increased by 40% in just 3 months!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      business: "Fashion Boutique",
      text: "Their social media marketing brought so many new customers. Very professional and affordable service!",
      rating: 5,
    },
    {
      name: "Arun Selvam",
      business: "Educational Institute",
      text: "The website they built is beautiful and our student inquiries have doubled. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="gradient-text">Click Spire Digital?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We're not just another agency. We're your growth partner, committed to
                delivering real results for your business.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((point) => (
                  <li key={point} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary-light hover:shadow-glow transition-smooth group"
                asChild
              >
                <a href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-3xl opacity-50 animate-float" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-secondary to-secondary-light rounded-full blur-3xl opacity-50 animate-float-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Our Proven <span className="gradient-text">4-Step Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From strategy to execution, we follow a systematic approach to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                step: "01",
                title: "Discovery & Strategy",
                description: "We analyze your business, competitors, and target audience to create a customized digital marketing strategy that aligns with your goals."
              },
              {
                icon: BarChart3,
                step: "02",
                title: "Planning & Design",
                description: "Our team develops detailed campaign plans, creates compelling content, and designs engaging visuals that resonate with your audience."
              },
              {
                icon: Zap,
                step: "03",
                title: "Implementation",
                description: "We execute the strategy across all channels - SEO, ads, social media, and more - ensuring consistent brand messaging and maximum impact."
              },
              {
                icon: TrendingUp,
                step: "04",
                title: "Optimize & Scale",
                description: "Continuous monitoring, A/B testing, and data-driven optimizations ensure your campaigns deliver the best ROI and sustainable growth."
              }
            ].map((process, index) => (
              <Card 
                key={process.step}
                className="relative overflow-hidden hover:shadow-glow transition-smooth group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-smooth">
                  {process.step}
                </div>
                <CardContent className="pt-6 space-y-4 relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <process.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={processImage}
                  alt="Digital marketing analytics and strategy"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-secondary to-secondary-light rounded-full blur-3xl opacity-50 animate-pulse-glow" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-3xl opacity-50 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why Businesses Choose <span className="gradient-text">Click Spire Digital</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  We combine local market expertise with cutting-edge digital strategies to help your business thrive online
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Proven Track Record", desc: "3+ years delivering measurable results" },
                  { icon: Users, title: "Client-Focused", desc: "Your success is our priority" },
                  { icon: Clock, title: "Fast Turnaround", desc: "Quick implementation, faster results" },
                  { icon: Award, title: "Quality Assured", desc: "MSME registered and verified" }
                ].map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="flex space-x-4 p-4 rounded-xl bg-card hover:shadow-card transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              We Serve <span className="gradient-text">Tamil Nadu</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Providing digital marketing services across major cities and towns
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center space-x-2 bg-card px-6 py-3 rounded-full border shadow-card hover:shadow-glow transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Results That <span className="gradient-text">Speak for Themselves</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our data-driven approach consistently delivers exceptional outcomes for our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Successful Campaigns", icon: Award },
              { value: "85%", label: "Average ROI Increase", icon: TrendingUp },
              { value: "50+", label: "Active Clients", icon: Users },
              { value: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center hover:shadow-glow transition-smooth group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark group-hover:scale-110 transition-smooth mb-2">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses we've helped grow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold">
                Stay Ahead with <span className="gradient-text">Digital Marketing Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                In today's competitive digital landscape, having a strong online presence isn't optional—it's essential for business growth and sustainability.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Local SEO Dominance",
                    desc: "97% of consumers search online for local businesses. We ensure you're found when they're looking."
                  },
                  {
                    title: "Social Media Impact",
                    desc: "With 4.9 billion social media users worldwide, your target audience is online. We help you connect with them effectively."
                  },
                  {
                    title: "Mobile-First Strategy",
                    desc: "60% of searches happen on mobile devices. Our strategies ensure you capture this growing audience."
                  },
                  {
                    title: "Data-Driven Decisions",
                    desc: "We use advanced analytics to track performance, identify opportunities, and optimize your campaigns for maximum ROI."
                  }
                ].map((insight, index) => (
                  <div 
                    key={insight.title}
                    className="flex space-x-4 p-5 rounded-xl bg-card border hover:shadow-card transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{insight.title}</h4>
                      <p className="text-muted-foreground">{insight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-right order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={techInnovation}
                  alt="Digital marketing innovation and technology"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-3xl opacity-40 animate-pulse-glow" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-secondary-light rounded-full blur-3xl opacity-40 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Get a free consultation and discover how we can help you achieve your
              digital marketing goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 shadow-glow text-lg px-8"
                asChild
              >
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
