import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Award, MapPin, Building2, GraduationCap, HeartHandshake, Landmark, Church, BriefcaseBusiness } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const previousClients = [
  { name: "Church Groups", detail: "Faith communities planning reflective heritage travel", icon: Church },
  { name: "Educators & Students", detail: "Schools, colleges, and learning cohorts", icon: GraduationCap },
  { name: "Community Organizations", detail: "Local leaders, nonprofits, and civic groups", icon: HeartHandshake },
  { name: "Heritage Travelers", detail: "Families and reunion groups honoring shared history", icon: Landmark },
  { name: "Corporate ERGs", detail: "Employee resource groups and leadership teams", icon: BriefcaseBusiness },
  { name: "Travel Clubs", detail: "Private groups seeking meaningful guided experiences", icon: Building2 },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg"
            alt="Civil Rights Trail Tours Group"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="max-w-full text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Journey Through</span>
                <br />
                <span className="text-primary">America's Civil Rights History</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Experience a profound exploration of pivotal moments that shaped our nation. 
                From Memphis to Atlanta, walk where history was made.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tours">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Explore Tours
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 pt-12">
              <div className="min-w-0 space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Tours Completed</div>
              </div>
              <div className="min-w-0 space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Historic Cities</div>
              </div>
              <div className="min-w-0 space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-primary">2018</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
              <div className="min-w-0 space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">★★★★★</div>
                <div className="text-sm text-muted-foreground">Guest Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Our Tours</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide an immersive, educational experience that honors the past and inspires the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Expert Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Led by knowledgeable historians passionate about Civil Rights heritage
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-foreground">Authentic Sites</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Visit actual locations where pivotal Civil Rights events unfolded
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Calendar className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Multiple tour dates available with easy online booking system
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Award className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-foreground">VIP Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Curated accommodations and Southern cuisine throughout your journey
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Clients Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Trusted Tour Experiences
            </p>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Previous <span className="text-primary">Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Civil Rights Trail Tours has supported meaningful journeys for groups who want history, hospitality, and careful coordination handled with respect.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl rounded-lg border border-border bg-card/70 p-4 sm:p-6">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {previousClients.map((client) => (
                <div
                  key={client.name}
                  className="group rounded-md border border-border bg-background/80 p-5 transition-all hover:border-primary hover:bg-background"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary group-hover:bg-secondary/20 group-hover:text-secondary">
                    <client.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{client.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{client.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Begin Your <span className="text-primary">Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us for a transformative experience that honors the struggle, celebrates the strength, 
              and carries forward the legacy of the Civil Rights Movement.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12">
                Book Your Tour Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
