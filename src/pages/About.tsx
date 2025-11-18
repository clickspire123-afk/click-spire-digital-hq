import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is focused on delivering measurable results for your business.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality, delivering excellence in every project.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We stay updated with latest trends to keep your business ahead of competition.",
    },
  ];

  const milestones = [
    { number: "3+", label: "Years in Business" },
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "10+", label: "Service Areas" },
  ];

  const expertise = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click Advertising (PPC)",
    "Social Media Marketing & Management",
    "Website Design & Development",
    "Content Marketing & Strategy",
    "Graphic Design & Branding",
    "Email & WhatsApp Marketing",
    "Analytics & Reporting",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="gradient-text">Click Spire Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for affordable, results-driven digital marketing in Tamil Nadu
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Click Spire Digital was founded by <strong>Thirumalai</strong> with a simple mission:
                to make professional digital marketing accessible and affordable for businesses
                across Tamil Nadu.
              </p>
              <p className="text-lg text-muted-foreground">
                With over <strong>3 years of experience</strong> in the digital marketing industry,
                we've helped dozens of local businesses grow their online presence, attract more
                customers, and increase their revenue.
              </p>
              <p className="text-lg text-muted-foreground">
                As an <strong>MSME Registered</strong> business, we understand the challenges that
                small and medium businesses face. That's why we've designed our services to be
                effective, affordable, and results-focused.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow transition-smooth group"
                  asChild
                >
                  <a href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img
                src={aboutImage}
                alt="Click Spire Digital Team"
                className="rounded-2xl shadow-glow w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-secondary-light rounded-full blur-3xl opacity-50 animate-float" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-3xl opacity-50 animate-float-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.label}
                className="text-center space-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-5xl md:text-6xl font-bold gradient-text">
                  {milestone.number}
                </h3>
                <p className="text-muted-foreground font-medium">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center space-y-4 p-6 rounded-xl bg-card border shadow-card hover:shadow-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive digital marketing services to grow your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:border-primary/50 transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-primary-foreground/90">
              Ready to take your business to the next level? Get in touch with us today
              for a free consultation.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-glow text-lg px-8"
              asChild
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                Contact Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
