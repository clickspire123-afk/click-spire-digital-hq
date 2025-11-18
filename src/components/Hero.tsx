import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import FloatingElements from "./FloatingElements";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <FloatingElements />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              MSME Registered • 3+ Years Experience
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Grow Your Business with{" "}
            <span className="gradient-text">Digital Marketing</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Affordable, results-driven digital marketing services for businesses in
            Kallakurichi and across Tamil Nadu
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="px-4 py-2 bg-card rounded-full border shadow-card">
              SEO & Local SEO
            </span>
            <span className="px-4 py-2 bg-card rounded-full border shadow-card">
              Google & Meta Ads
            </span>
            <span className="px-4 py-2 bg-card rounded-full border shadow-card">
              Website Development
            </span>
            <span className="px-4 py-2 bg-card rounded-full border shadow-card">
              Social Media Marketing
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow transition-smooth group text-lg px-8"
              asChild
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <a href="#services">View Our Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">3+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">50+</h3>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">100+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">10+</h3>
              <p className="text-sm text-muted-foreground">Service Areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
