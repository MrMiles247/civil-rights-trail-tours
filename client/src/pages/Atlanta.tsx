import { Link } from "wouter";
import {
  ArrowRight,
  CalendarClock,
  ChefHat,
  Landmark,
  MapPin,
  Mountain,
  Music2,
  Palmtree,
  Sparkles,
  TreePine,
  Waves,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const route = ["Montego Bay", "Ocho Rios", "Blue Mountain", "Kingston"];

const experiences = [
  {
    title: "History & Heritage",
    description:
      "Follow Jamaica's layered story through a guided history tour, the living legacy of a Maroon village, and the cultural grounding of a Rastafari village.",
    icon: Landmark,
  },
  {
    title: "Food & Everyday Culture",
    description:
      "Learn through flavor and conversation in a hands-on Jamaican cooking class that connects food, family, and place.",
    icon: ChefHat,
  },
  {
    title: "Music & Creative Legacy",
    description:
      "Visit the Bob Marley Museum and take part in a music lesson that brings Jamaica's global sound back to its local roots.",
    icon: Music2,
  },
  {
    title: "Land & Water",
    description:
      "Make time for a beach day, waterfalls, and the Blue Mountains, meeting Jamaica through its natural landscape as well as its history.",
    icon: Mountain,
  },
];

export default function JamaicaHeritageTrail() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-border bg-[#163b2b] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,transparent_46%,#e1b74e_46%,#e1b74e_49%,transparent_49%),linear-gradient(45deg,transparent_46%,#a23d2f_46%,#a23d2f_49%,transparent_49%)] [background-size:94px_94px]" />
          <div className="pointer-events-none absolute -right-12 top-10 h-72 w-72 rotate-45 border-[26px] border-[#e1b74e]/25" />
          <div className="container relative py-16 md:py-24">
            <div className="max-w-4xl space-y-7">
              <div className="inline-flex items-center gap-2 border border-[#e1b74e]/70 bg-black/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f5dd8b]">
                <CalendarClock size={16} />
                Coming Soon
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#f5dd8b]">
                  Civil Rights Trail Tours International
                </p>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                  7-Day Jamaica
                  <span className="block text-[#e1b74e]">Heritage Trail</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
                  An upcoming cultural journey for travelers who want to learn more about Jamaica's history, creativity, and enduring influence, including members of the international Jamaican diaspora.
                </p>
              </div>

              <div className="grid max-w-3xl grid-cols-2 gap-px border border-white/20 bg-white/20 md:grid-cols-4">
                {[
                  ["Duration", "7 Days"],
                  ["Country", "Jamaica"],
                  ["Focus", "Heritage & Culture"],
                  ["Status", "Coming Soon"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#163b2b] p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                      {label}
                    </p>
                    <p className="mt-1 font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-[#e1b74e] px-8 text-[#153a2a] hover:bg-[#f5dd8b]">
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
                  A Diaspora Homecoming
                </p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Meet Jamaica through the stories that shaped it.
                </h2>
                <div className="space-y-4 text-lg leading-8 text-muted-foreground">
                  <p>
                    CRTT is curating a seven-day heritage experience for people who want a deeper relationship with Jamaica. The journey is designed to move beyond the familiar vacation view and into the people, traditions, landscapes, and cultural expressions that continue to shape the island.
                  </p>
                  <p>
                    The itinerary is in development. Travel dates, pricing, lodging, and final inclusions will be announced when the tour is ready to open.
                  </p>
                </div>
              </div>
              <aside className="border-l-4 border-[#e1b74e] bg-background p-6">
                <Sparkles className="mb-5 text-[#b66038]" size={32} />
                <p className="text-xl font-semibold leading-8">
                  This is a journey of connection: to the island's past, its living culture, and the global community shaped by Jamaica.
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
              <h2 className="text-4xl font-bold">History You Can Feel</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A well-rounded agenda that connects heritage, food, music, community, and the landscapes that make Jamaica unforgettable.
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
                ["History tour", MapPin],
                ["Maroon village", TreePine],
                ["Rastafari village", Sparkles],
                ["Bob Marley Museum", Music2],
                ["Jamaican cooking class", ChefHat],
                ["Music lesson", Music2],
                ["Beach day", Palmtree],
                ["Waterfalls", Waves],
              ].map(([label, Icon]) => {
                const ExperienceIcon = Icon as typeof MapPin;
                return (
                  <div key={label as string} className="flex items-center gap-3 text-sm font-semibold">
                    <ExperienceIcon className="shrink-0 text-[#b66038]" size={17} />
                    {label as string}
                  </div>
                );
              })}
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
              <h2 className="text-4xl font-bold">Be first to hear when Jamaica calls.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Join the interest list for launch details, travel dates, and the final Jamaica Heritage Trail itinerary from Civil Rights Trail Tours.
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
