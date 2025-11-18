import { Search, Megaphone, Share2, Globe, Palette, MessageCircle, Mail, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Search,
    title: "SEO & Local SEO",
    description: "Rank higher on Google with our proven SEO strategies. Dominate local search results in your area.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Get instant visibility with targeted Google Search, Display, and Video campaigns that convert.",
    gradient: "from-secondary to-secondary-light",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    description: "Reach your audience on Facebook & Instagram with highly targeted ad campaigns that drive results.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage your audience across all major social media platforms.",
    gradient: "from-secondary to-secondary-light",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, fast, and mobile-responsive websites built with WordPress, Elementor, or custom code.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching designs for social media, branding, posters, and all your marketing materials.",
    gradient: "from-secondary to-secondary-light",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing",
    description: "Connect directly with your customers through targeted WhatsApp campaigns and automation.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Build relationships and drive conversions with personalized email campaigns that get opened.",
    gradient: "from-secondary to-secondary-light",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital marketing solutions tailored to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-card`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
