import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Tours() {
  const { data: tours, isLoading } = trpc.tours.list.useQuery();

  const cities = [
    {
      name: "6-Day RTJ Golf Trail Tour",
      slug: "rtj-golf-trail-tour",
      description:
        "Championship golf, Black history, culture, dining, and spirited competition across Alabama",
      highlights: [
        "4 Robert Trent Jones Trail sites",
        "6 curated days",
        "Packages from $1,950",
      ],
    },
    {
      name: "8-Day Civil Rights History Tour",
      slug: "civil-rights-history-tour",
      description:
        "Our signature guided journey from Nashville to Atlanta through the heart of the movement",
      highlights: [
        "8 guided days",
        "13 historic landmarks",
        "Packages from $2,195",
      ],
    },
    {
      name: "5-Day Washington, D.C. Black Heritage Tour",
      slug: "washington-dc-black-heritage-tour",
      description:
        "A curated journey through Black history, culture, dining, neighborhoods, and national landmarks",
      highlights: [
        "5 curated days",
        "8+ historic landmarks",
        "Packages from $1,995",
      ],
    },
    {
      name: "Montgomery",
      slug: "montgomery",
      description:
        "Birthplace and culmination point of the Civil Rights Movement",
      highlights: [
        "Rosa Parks Museum",
        "Dexter Avenue Church",
        "Legacy Museum",
      ],
    },
    {
      name: "Tuskegee",
      slug: "tuskegee",
      description: "Where innovation and resistance speak through time",
      highlights: [
        "Tuskegee University",
        "George Washington Carver Museum",
        "Tuskegee Airmen Site",
      ],
    },
    {
      name: "Atlanta",
      slug: "atlanta",
      description:
        "A celebration of civil rights achievements and an invitation to carry the torch forward",
      highlights: [
        "MLK Birth Home",
        "Ebenezer Baptist Church",
        "The King Center",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-foreground">Our</span>{" "}
                <span className="text-primary">Tours</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Immersive journeys through the pivotal sites of the Civil Rights
                Movement, from Memphis to Atlanta.
              </p>
            </div>
          </div>
        </section>

        {/* City Destinations Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Explore <span className="text-primary">Our Routes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose a focused city experience or follow our signature
                multi-city journey through the Civil Rights Trail
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {cities.map(city => (
                <Card
                  key={city.slug}
                  className="bg-card border-border hover:border-primary transition-all hover:shadow-lg flex flex-col group"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {city.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {city.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">
                        Key Sites
                      </div>
                      <ul className="space-y-1">
                        {city.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Link href={`/${city.slug}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      >
                        View Detailed Itinerary
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Tour <span className="text-primary">Packages</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the journey that speaks to you
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-muted-foreground">Loading tours...</p>
              </div>
            ) : tours && tours.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map(tour => {
                  const cities = JSON.parse(tour.cities);
                  const highlights = JSON.parse(tour.highlights);
                  const priceInDollars = (tour.price / 100).toFixed(2);

                  return (
                    <Card
                      key={tour.id}
                      className="bg-background border-border hover:border-primary transition-all hover:shadow-lg flex flex-col"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                            {tour.duration}
                          </Badge>
                          <div className="text-2xl font-bold text-primary">
                            ${priceInDollars}
                          </div>
                        </div>
                        <CardTitle className="text-2xl text-foreground">
                          {tour.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {tour.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 space-y-4">
                        {/* Cities */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <MapPin size={16} className="text-primary" />
                            Cities Visited
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cities.map((city: string, index: number) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {city}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-foreground">
                            Tour Highlights
                          </div>
                          <ul className="space-y-1">
                            {highlights
                              .slice(0, 3)
                              .map((highlight: string, index: number) => (
                                <li
                                  key={index}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="flex flex-col gap-3">
                        <Link href="/contact" className="w-full">
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <Calendar className="mr-2" size={16} />
                            Book This Tour
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-8">
                  Tours are currently being scheduled. Please check back soon or
                  contact us for more information.
                </p>
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Contact Us
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  What's <span className="text-primary">Included</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Every tour includes these premium features
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-muted-foreground">
                      Led by knowledgeable historians with deep understanding of
                      Civil Rights history
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Authentic Sites
                    </h3>
                    <p className="text-muted-foreground">
                      Visit actual locations where pivotal Civil Rights events
                      took place
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Curated Accommodations
                    </h3>
                    <p className="text-muted-foreground">
                      Comfortable lodging selected for convenience and quality
                      throughout your journey
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Calendar className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Southern Cuisine
                    </h3>
                    <p className="text-muted-foreground">
                      Carefully curated culinary experiences showcasing
                      authentic Southern flavors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
