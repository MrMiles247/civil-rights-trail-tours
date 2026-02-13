import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-foreground">About</span>{" "}
                <span className="text-primary">Our Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Honoring history, inspiring change, and creating transformative experiences 
                through the Civil Rights Trail.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                    <span className="text-primary font-semibold">Founder & Guide</span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">Miles Tibbs</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Miles Tibbs founded Civil Rights Trail Tours in 2018 with a vision to create 
                      meaningful connections between past struggles and present opportunities. Based 
                      in Huntsville, Alabama, Miles brings deep historical knowledge and personal 
                      passion to every tour.
                    </p>
                    <p>
                      With over 100 tours completed, Miles has guided hundreds of visitors through 
                      the profound landscapes of the Civil Rights Movement, from the musical streets 
                      of Memphis to the memorials of Montgomery, creating experiences that educate, 
                      inspire, and transform.
                    </p>
                    <p>
                      Each tour is carefully curated to honor the courage of those who fought for 
                      justice while providing context for today's ongoing journey toward equality 
                      and understanding.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="text-6xl font-bold text-primary">100+</div>
                      <div className="text-xl text-foreground">Tours Completed</div>
                      <div className="text-muted-foreground">Since 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Our <span className="text-primary">Core Values</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide every tour we conduct
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-background border-border">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <Heart className="text-primary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Respect</h3>
                    <p className="text-muted-foreground">
                      We approach every site and story with the dignity and reverence it deserves, 
                      honoring those who sacrificed for justice.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Target className="text-secondary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Education</h3>
                    <p className="text-muted-foreground">
                      We provide historically accurate, contextually rich narratives that deepen 
                      understanding of the Civil Rights Movement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <Eye className="text-primary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Inspiration</h3>
                    <p className="text-muted-foreground">
                      We connect past courage to present action, inspiring visitors to carry 
                      forward the torch of justice and equality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  The <span className="text-primary">Journey</span> We Offer
                </h2>
                <p className="text-xl text-muted-foreground">
                  More than a tour—a transformative pilgrimage through history
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Memphis</h3>
                    <p className="text-muted-foreground">
                      Begin where blues and the fight for equality resonate through the air, 
                      walking paths that legends once walked.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Birmingham</h3>
                    <p className="text-muted-foreground">
                      Experience the city where the movement's indomitable spirit refused to be 
                      quenched, offering lessons still relevant today.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Selma</h3>
                    <p className="text-muted-foreground">
                      Stand on the Edmund Pettus Bridge, a symbol of courage and a beacon for 
                      change that echoes through generations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    4
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Montgomery</h3>
                    <p className="text-muted-foreground">
                      Engage with the stirring narratives of the Equal Justice Initiative that 
                      challenge, educate, and inspire.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    5
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Tuskegee</h3>
                    <p className="text-muted-foreground">
                      Discover the legacy of innovation and resistance that speaks through time 
                      at this historic institution.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    6
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Atlanta</h3>
                    <p className="text-muted-foreground">
                      Conclude with a celebration of Civil Rights achievements and an invitation 
                      to carry its torch forward.
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
