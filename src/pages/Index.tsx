import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, MapPin, Star } from "lucide-react";

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
