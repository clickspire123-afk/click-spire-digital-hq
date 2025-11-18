import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "SEO Services",
    "Google Ads",
    "Meta Ads",
    "Social Media Marketing",
    "Website Development",
    "Graphic Design",
  ];

  const locations = [
    "Kallakurichi",
    "Chinnasalem",
    "Thiruvannamalai",
    "Villupuram",
    "Puducherry",
    "Cuddalore",
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">CS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-background">Click Spire</h3>
                <p className="text-sm text-background/70">Digital Marketing</p>
              </div>
            </div>
            <p className="text-sm text-background/80">
              MSME Registered Digital Marketing Agency with 3+ years of experience
              helping businesses grow online.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-background/80 hover:text-primary transition-smooth"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location} className="text-sm text-background/80">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-background/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Kallakurichi, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/80">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-smooth">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/80">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@clickspiredigital.com"
                  className="hover:text-primary transition-smooth"
                >
                  info@clickspiredigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/70">
            © {currentYear} Click Spire Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/70">
            <Link to="/" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
