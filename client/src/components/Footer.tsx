import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Civil Rights Trail Tours
            </h3>
            <p className="text-muted-foreground mb-4">
              Honoring history, inspiring change. Experience the profound journey through America's Civil Rights heritage since 2018.
            </p>
            <p className="text-sm text-muted-foreground">
              Over 100 tours completed
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tours">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Our Tours
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact & Booking
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-muted-foreground">
                  Huntsville, Alabama
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a
                  href="tel:+12565551234"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (256) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a
                  href="mailto:info@civilrightstrailtours.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@civilrightstrailtours.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Civil Rights Trail Tours. All rights reserved.
            <span className="mx-2">|</span>
            Founded by Miles Tibbs
          </p>
        </div>
      </div>
    </footer>
  );
}
