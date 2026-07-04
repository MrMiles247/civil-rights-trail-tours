import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Award, MapPin, Building2, GraduationCap, HeartHandshake, Landmark, BriefcaseBusiness } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { clientLogos } from "@/data/clientLogos";
import { schoolLogos } from "@/data/schoolLogos";

const previousClients = [
  {
    name: "Corporate Leadership",
    detail: "Purposeful retreats that unite leadership teams through history, reflection, and shared perspective.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Educators & Students",
    detail: "Schools and universities that support travel education through immersive, place-based learning.",
    icon: GraduationCap,
  },
  {
    name: "Community Organizations",
    detail: "Local leaders, nonprofits, and civic groups",
    icon: HeartHandshake,
  },
  {
    name: "Heritage Travelers",
    detail: "Families and reunion groups honoring shared history",
    icon: Landmark,
  },
  {
    name: "Corporate ERGs",
    detail: "Employee resource groups and leadership teams",
    icon: BriefcaseBusiness,
  },
  {
    name: "Travel Clubs",
    detail: "Private groups seeking meaningful guided experiences",
    icon: Building2,
  },
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
                Experience a profound exploration of pivotal moments that shaped our nation. From Memphis to Atlanta, walk where history was made.
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We provide an immersive, educational experience that honors the past and inspires the future.</p>
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
                <CardDescription className="text-muted-foreground">Led by knowledgeable historians passionate about Civil Rights heritage</CardDescription>
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
                <CardDescription className="text-muted-foreground">Visit actual locations where pivotal Civil Rights events unfolded</CardDescription>
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
                <CardDescription className="text-muted-foreground">Multiple tour dates available with easy online booking system</CardDescription>
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
                <CardDescription className="text-muted-foreground">Curated accommodations and Southern cuisine throughout your journey</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Clients Section */}
      <section className="overflow-hidden bg-background py-20">
        <div className="container">
          <div className="mx-auto mb-12 grid max-w-6xl gap-6 border-b border-border pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Trusted Tour Experiences</p>
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Previous <span className="text-primary">Clients</span>
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              Civil Rights Trail Tours creates meaningful journeys for organizations seeking history, hospitality, and thoughtful coordination delivered with respect.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {previousClients.map(client => (
                <div key={client.name} className="group min-h-48 border-b border-r border-border bg-card/50 p-6 transition-colors hover:bg-card">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <client.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{client.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{client.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <div className="mb-6 flex items-center gap-4">
                <p className="shrink-0 text-sm font-semibold uppercase tracking-widest text-primary">Organizations We Have Served</p>
                <div className="h-px w-full bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {clientLogos.map(client => (
                  <figure
                    key={client.name}
                    className="flex aspect-[4/3] min-w-0 items-center justify-center rounded-md border border-border bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                  >
                    <img src={client.src} alt={`${client.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                    <figcaption className="sr-only">{client.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="mb-6 flex items-center gap-4">
                <p className="shrink-0 text-sm font-semibold uppercase tracking-widest text-primary">Educational Partners We Have Served</p>
                <div className="h-px w-full bg-border" />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {schoolLogos.map(school => (
                  <figure
                    key={school.name}
                    className="flex aspect-[4/3] min-w-0 items-center justify-center rounded-md border border-border bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src={school.src} alt={`${school.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                    <figcaption className="sr-only">{school.name}</figcaption>
                  </figure>
                ))}
              </div>
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
              Join us for a transformative experience that honors the struggle, celebrates the strength, and carries forward the legacy of the Civil Rights Movement.
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
