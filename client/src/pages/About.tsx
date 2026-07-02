import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Bus,
  Eye,
  Handshake,
  Heart,
  Target,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teamCapabilities = [
  {
    title: "Research & Interpretation",
    description:
      "Our historians, educators, and local experts build accurate, context-rich journeys that connect landmark events to the people and communities behind them.",
    icon: BookOpen,
  },
  {
    title: "Guest Experience & Operations",
    description:
      "Our tour directors, planners, guides, and transportation partners coordinate every detail so guests can travel safely, comfortably, and with purpose.",
    icon: Bus,
  },
  {
    title: "Community Partnerships",
    description:
      "Our team collaborates with historic sites, cultural institutions, local businesses, and community voices to create responsible, locally connected tourism.",
    icon: Handshake,
  },
];

const journeyStops = [
  {
    city: "Memphis",
    description:
      "Begin where blues and the fight for equality resonate through the air, walking paths that legends once walked.",
  },
  {
    city: "Birmingham",
    description:
      "Experience the city where the movement's indomitable spirit refused to be quenched, offering lessons still relevant today.",
  },
  {
    city: "Selma",
    description:
      "Stand on the Edmund Pettus Bridge, a symbol of courage and a beacon for change that echoes through generations.",
  },
  {
    city: "Montgomery",
    description:
      "Engage with stirring narratives of resistance, remembrance, and justice that challenge, educate, and inspire.",
  },
  {
    city: "Tuskegee",
    description:
      "Discover a legacy of education, innovation, service, and resistance that continues to speak across generations.",
  },
  {
    city: "Atlanta",
    description:
      "Conclude with a celebration of Civil Rights achievements and an invitation to carry the work of equality forward.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="relative min-h-[72vh] overflow-hidden border-b border-border">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg"
            alt="Civil Rights Trail Tours guests and team"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="container relative flex min-h-[72vh] items-center py-16">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Civil Rights Trail Tours
              </p>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                History is not behind us.
                <span className="block text-primary">It is a journey we enter together.</span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-foreground/90 sm:text-xl">
                Our staff designs and leads immersive journeys that preserve Civil Rights history,
                center the voices of the communities who shaped it, and inspire honest conversation
                about justice, equity, and our shared future.
              </p>
              <Link href="/tours">
                <Button size="lg" className="bg-primary px-7 text-primary-foreground hover:bg-primary/90">
                  Explore Our Tours
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="border-l-4 border-primary pl-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Our Mission
                </p>
                <h2 className="text-4xl font-bold leading-tight text-foreground">
                  Preserve the truth.
                  <span className="block text-primary">Move people toward change.</span>
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  At Civil Rights Trail Tours, our mission is to empower communities, preserve
                  history, and inspire meaningful change through immersive travel, education,
                  honest conversation, and cultural storytelling.
                </p>
                <p>
                  Our historians, educators, tour directors, travel planners, guides, and community
                  partners work as one team to bring guests face-to-face with the places, people,
                  and untold stories that shaped the Civil Rights Movement. Every itinerary is
                  researched, coordinated, and led with care so youth and adult travelers can build
                  empathy, deepen understanding, and connect the past to the choices we make today.
                </p>
                <p>
                  We are committed to responsible tourism that supports historic sites, local
                  businesses, cultural institutions, and marginalized voices. By traveling with
                  respect and investing in host communities, we help protect this history while
                  creating a more inclusive and sustainable future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                One Team, One Purpose
              </p>
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                How We Bring the <span className="text-primary">Journey to Life</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Every experience is supported by a full team before, during, and after the tour.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {teamCapabilities.map((capability) => (
                <Card
                  key={capability.title}
                  className="border-border bg-background transition-colors hover:border-primary"
                >
                  <CardContent className="space-y-5 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <capability.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{capability.title}</h3>
                    <p className="leading-7 text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-foreground">
                  Our <span className="text-primary">Core Values</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  The principles our staff brings to every story, site, and guest experience.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="border-t-2 border-primary pt-6">
                  <Heart className="mb-5 text-primary" size={30} />
                  <h3 className="mb-3 text-2xl font-bold text-foreground">Respect</h3>
                  <p className="leading-7 text-muted-foreground">
                    We approach every person, place, and story with dignity, honoring those who
                    sacrificed and the communities carrying their legacy.
                  </p>
                </div>

                <div className="border-t-2 border-secondary pt-6">
                  <Target className="mb-5 text-secondary" size={30} />
                  <h3 className="mb-3 text-2xl font-bold text-foreground">Education</h3>
                  <p className="leading-7 text-muted-foreground">
                    We pair careful research with lived experience to provide historically grounded,
                    contextually rich interpretation.
                  </p>
                </div>

                <div className="border-t-2 border-primary pt-6">
                  <Eye className="mb-5 text-primary" size={30} />
                  <h3 className="mb-3 text-2xl font-bold text-foreground">Transformation</h3>
                  <p className="leading-7 text-muted-foreground">
                    We create space for reflection and honest conversation that turns historical
                    understanding into empathy and purposeful action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  The Journey We Offer
                </p>
                <h2 className="text-4xl font-bold leading-tight text-foreground">
                  More than sightseeing.
                  <span className="block text-primary">A living encounter with history.</span>
                </h2>
                <div className="mt-8 flex items-center gap-3 text-muted-foreground">
                  <Users className="text-secondary" size={24} />
                  <span>Thoughtfully designed for youth, adults, and private groups.</span>
                </div>
              </div>

              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {journeyStops.map((stop, index) => (
                  <div key={stop.city} className="flex gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md font-bold ${
                        index % 2 === 0
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{stop.city}</h3>
                      <p className="leading-7 text-muted-foreground">{stop.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Travel with a team committed to <span className="text-primary">doing history justice.</span>
              </h2>
              <p className="text-xl leading-8 text-muted-foreground">
                Let our staff plan a meaningful Civil Rights journey for your school, church,
                organization, family, or private group.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                  Plan Your Journey
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
