import { Link } from "wouter";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <div className="text-2xl font-bold">
                <span className="text-primary">Civil Rights</span>
                <span className="text-foreground"> Trail Tours</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
            </Link>
            <Link href="/tours">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Tours
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </Link>
            <Link href="/contact">
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link href="/">
              <a
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </Link>
            <Link href="/tours">
              <a
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </Link>
            <Link href="/contact">
              <Button
                variant="default"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
