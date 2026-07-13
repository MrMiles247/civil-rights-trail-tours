import { Link } from "wouter";
import {
  ArrowRight,
  CalendarClock,
  Dumbbell,
  Languages,
  MapPin,
  Palmtree,
  Sailboat,
  Sparkles,
  Sun,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const route = ["Cancun", "Playa del Carmen", "Cozumel", "Tulum"];

const experiences = [
  {
    title: "Real Estate Orientation",
    description:
      "Explore the questions, neighborhoods, and practical considerations that shape a move to the Riviera Maya.",
    icon: MapPin,
  },
  {
    title: "Language & Culture",
    description:
      "Build confidence through a Spanish lesson and dance experience designed to make everyday cultural connection feel more accessible.",
    icon: Languages,
  },
  {
    title: "Wellness & Community",
    description:
      "Join a community fitness workout and see how local rhythms, relationships, and routines can shape life abroad.",
    icon: Dumbbell,
  },
  {
    title: "Coast & Heritage",
    description:
      "Experience a boat cruise, Tulum's ancient ruins, a beach day, and a cenote visit while learning the region beyond the postcards.",
    icon: Sailboat,
  },
];

export default function MayanRivieraExpatTour() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-border bg-[#154c47] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.55)_50%,transparent_51%),linear-gradient(transparent_49%,rgba(255,255,255,0.55)_50%,transparent_51%)] [background-size:64px_64px]" />
          <div className="pointer-events-none absolute -right-20 top-12 h-72 w-72 rounded-full border-[30px] border-[#e9c46a]/30" />
          <div className="container relative py-16 md:py-24">
            <div className="max-w-4xl space-y-7">
              <div className="inline-flex items-center gap-2 border border-[#e9c46a]/60 bg-black/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f4dfa1]">
                <CalendarClock size={16} />
                Coming Soon
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#f4dfa1]">
                  Civil Rights Trail Tours International
                </p>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                  7-Day Mayan Riviera
                  <span className="block text-[#e9c46a]">Expat Tour</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
                  An upcoming, guided introduction for people who want to explore life beyond the United States, even if they are starting with no international living experience.
                </p>
              </div>

              <div className="grid max-w-3xl grid-cols-2 gap-px border border-white/20 bg-white/20 md:grid-cols-4">
                {[
                  ["Duration", "7 Days"],
                  ["Region", "Mayan Riviera"],
                  ["Format", "Expat Discovery"],
                  ["Status", "Coming Soon"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#154c47] p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                      {label}
                    </p>
                    <p className="mt-1 font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-[#e9c46a] px-8 text-[#173b37] hover:bg-[#f4dfa1]">
                  Join the Interest List
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-card py-16">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  An Expat-Living Introduction
                </p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  See the Riviera Maya as a place to live, not just visit.
                </h2>
                <div className="space-y-4 text-lg leading-8 text-muted-foreground">
                  <p>
                    CRTT is curating an immersive Mayan Riviera experience for future expats who want a thoughtful first look at living outside the United States. This is not a relocation sales pitch. It is a guided opportunity to ask better questions, meet the region through daily life, and imagine what a new chapter could feel like.
                  </p>
                  <p>
                    The itinerary is in development. Dates, pricing, lodging, and final inclusions will be announced when the experience is ready to open.
                  </p>
                </div>
              </div>
              <aside className="border-l-4 border-[#e9c46a] bg-background p-6">
                <Sparkles className="mb-5 text-[#c58c2f]" size={32} />
                <p className="text-xl font-semibold leading-8">
                  Come curious. Leave with a clearer picture of what it could take to build community, routine, and confidence abroad.
                </p>
              </aside>
            </div>

            <div className="mx-auto mt-12 max-w-6xl border-y border-border py-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Planned Route
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {route.map((city, index) => (
                  <div key={city} className="flex items-center gap-2 sm:gap-3">
                    <span className="font-semibold text-foreground">{city}</span>
                    {index < route.length - 1 && <ArrowRight className="text-primary" size={16} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Planned Experience
              </p>
              <h2 className="text-4xl font-bold">What You Will Explore</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A balanced agenda that pairs practical discovery with culture, wellness, and time in the Riviera Maya.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
              {experiences.map(({ title, description, icon: Icon }) => (
                <article key={title} className="border border-border bg-card p-7 transition-colors hover:border-primary">
                  <Icon className="mb-6 text-primary" size={28} />
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-4 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Real estate tour",
                "Spanish lesson",
                "Dance lesson",
                "Community fitness workout",
                "Boat cruise",
                "Tulum ruins",
                "Beach time",
                "Cenote visit",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                  <Sun className="shrink-0 text-[#c58c2f]" size={17} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Palmtree className="mx-auto mb-5 text-primary" size={36} />
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Coming Soon
              </p>
              <h2 className="text-4xl font-bold">Be first to hear when this journey opens.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Join the interest list for launch details, travel dates, and the final itinerary from Civil Rights Trail Tours.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="mt-8 border-primary px-8 text-primary hover:bg-primary hover:text-primary-foreground">
                  Get Tour Updates
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
