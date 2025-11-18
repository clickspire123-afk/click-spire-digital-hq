import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Megaphone, Share2, Globe, Palette, MessageCircle, Mail, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Local SEO",
      description: "Dominate search results in your local area and beyond",
      features: [
        "Keyword research and optimization",
        "On-page and technical SEO",
        "Local business listing optimization",
        "Google My Business management",
        "Link building strategies",
        "Monthly SEO reports and analytics",
      ],
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Megaphone,
      title: "Google Ads (PPC)",
      description: "Get instant visibility and qualified leads",
      features: [
        "Search ads campaign management",
        "Display advertising campaigns",
        "YouTube video advertising",
        "Shopping ads for e-commerce",
        "Remarketing campaigns",
        "ROI-focused optimization",
      ],
      gradient: "from-secondary to-secondary-light",
    },
    {
      icon: Share2,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Reach your target audience on social platforms",
      features: [
        "Facebook & Instagram ad campaigns",
        "Audience targeting and segmentation",
        "Creative design and copywriting",
        "A/B testing and optimization",
        "Lead generation campaigns",
        "E-commerce catalog ads",
      ],
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Build and engage your community",
      features: [
        "Social media strategy development",
        "Content creation and scheduling",
        "Community management",
        "Influencer collaboration",
        "Social media analytics",
        "Reputation management",
      ],
      gradient: "from-secondary to-secondary-light",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, fast, mobile-responsive websites",
      features: [
        "WordPress website development",
        "Elementor custom designs",
        "Custom coded solutions",
        "E-commerce website setup",
        "Mobile-responsive design",
        "Website maintenance and support",
      ],
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional designs for all your needs",
      features: [
        "Social media graphics and posts",
        "Logo design and branding",
        "Marketing materials and posters",
        "Business cards and stationery",
        "Infographics and presentations",
        "Ad creatives and banners",
      ],
      gradient: "from-secondary to-secondary-light",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      description: "Direct communication with your customers",
      features: [
        "WhatsApp Business setup",
        "Broadcast campaigns",
        "Automated messaging",
        "Customer support setup",
        "Catalog integration",
        "Campaign analytics",
      ],
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Engage and convert through email",
      features: [
        "Email campaign strategy",
        "Newsletter design and creation",
        "Email automation setup",
        "List management and segmentation",
        "A/B testing and optimization",
        "Performance tracking",
      ],
      gradient: "from-secondary to-secondary-light",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="overflow-hidden hover:shadow-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    <div className="md:col-span-1 space-y-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-card`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-4 text-lg">What's Included:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              How we deliver results for your business
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience" },
              { step: "02", title: "Strategy", description: "We create a customized digital marketing plan" },
              { step: "03", title: "Execution", description: "We implement the strategy with expert precision" },
              { step: "04", title: "Optimize", description: "We continuously monitor and improve performance" },
            ].map((step, index) => (
              <div
                key={step.step}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Let's discuss which services are right for your business. Get a free
              consultation today!
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
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="/contact">
                  Contact Form
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
