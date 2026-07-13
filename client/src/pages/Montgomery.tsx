import { Link } from "wouter";
import {
  ArrowRight,
  Bus,
  Check,
  Hotel,
  Landmark,
  MapPin,
  Music2,
  Plane,
  ShipWheel,
  Users,
  Utensils,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const route = ["Nashville", "Memphis", "Clarksdale", "Jackson", "New Orleans"];

const days = [
  {
    day: "01",
    city: "Nashville, TN",
    title: "Arrival in Music City",
    description:
      "Welcome to Nashville. Check into your hotel and join fellow travelers for a welcome dinner as we set the stage for a week tracing music history through the American South.",
    stops: ["Hotel Check-in", "Welcome Dinner"],
  },
  {
    day: "02",
    city: "Nashville, TN",
    title: "Sit-Ins & Soul",
    description:
      "Begin at the Woolworth's Building on 5th Avenue, site of the historic 1960 lunch counter sit-ins that helped launch a movement. Spend the afternoon at the National Museum of African American Music, tracing genres born from Black artistry, then explore Broadway in the evening.",
    stops: [
      "Woolworth's Sit-In Site",
      "National Museum of African American Music",
      "Explore Broadway",
    ],
  },
  {
    day: "03",
    city: "Memphis, TN",
    title: "Soul, Stax & Sacred Ground",
    description:
      "Travel to Memphis and step into the world of the Queen of Rock 'n' Roll at the Tina Turner Home and Museum. Continue to Stax Records, the legendary soul label that shaped a sound felt worldwide, then pay respects at the National Civil Rights Museum before an evening exploring Beale Street.",
    stops: [
      "Tina Turner Home & Museum",
      "Stax Records",
      "National Civil Rights Museum",
      "Explore Beale Street",
    ],
  },
  {
    day: "04",
    city: "Clarksdale, MS",
    title: "Where the Blues Was Born",
    description:
      "Descend into the Mississippi Delta, birthplace of the blues. Visit Ground Zero Blues Club and the Delta Blues Museum, tracing the sound from cotton fields to concert halls, then close the day with dinner at The Iron Horse.",
    stops: ["Ground Zero Blues Club", "Delta Blues Museum", "Dinner at The Iron Horse"],
  },
  {
    day: "05",
    city: "Jackson, MS",
    title: "Movement & Melody",
    description:
      "Confront history at the Mississippi Civil Rights Museum before visiting the home of Medgar Evers, a defining figure of the movement. Round out the day watching the Jackson State University marching band rehearse, a living tradition of Black musical excellence.",
    stops: [
      "Mississippi Civil Rights Museum",
      "Medgar Evers Home",
      "Jackson State University Band Practice",
    ],
  },
  {
    day: "06",
    city: "New Orleans, LA",
    title: "Arrival & Remembrance",
    description:
      "Arrive in New Orleans by way of the Whitney Plantation, a sobering and essential stop dedicated to telling the stories of the enslaved. In the evening, enjoy dinner in the historic Garden District before experiencing the energy of Bourbon Street.",
    stops: ["Whitney Plantation", "Garden District Dinner", "Explore Bourbon Street"],
  },
  {
    day: "07",
    city: "New Orleans, LA",
    title: "Second Line Send-Off",
    description:
      "Spend your final day on a guided city tour of New Orleans, followed by an intimate performance at Preservation Hall, home of authentic New Orleans jazz. Celebrate the journey with a farewell dinner cruise on the Mississippi River.",
    stops: ["New Orleans City Tour", "Preservation Hall", "Farewell Dinner Cruise"],
  },
];

const destinations = [
  "Woolworth's Sit-In Site",
  "National Museum of African American Music",
  "Tina Turner Home & Museum",
  "Stax Records",
  "National Civil Rights Museum, Memphis",
  "Ground Zero Blues Club",
  "Delta Blues Museum",
  "Mississippi Civil Rights Museum",
  "Medgar Evers Home",
  "Jackson State University",
  "Whitney Plantation",
  "Preservation Hall, New Orleans",
];

const included = [
  "6 nights in 3-4 star hotels",
  "7 breakfasts, 3 lunches, and 4 dinners",
  "Luxury motorcoach with air conditioning and WiFi throughout",
  "All ground transportation",
  "Entry to all 12 featured museums and sites",
  "Professional tour director throughout",
  "Live music experiences on Beale Street and at Preservation Hall",
  "Farewell dinner cruise",
];

const notIncluded = [
  "Round-trip airfare",
  "Personal travel insurance, strongly recommended",
  "Meals not listed in the itinerary",
  "Personal shopping and souvenirs",
  "Gratuities for the tour director and drivers",
];

export default function BlackAmericanMusicHistoryTour() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        <section className="relative min-h-[74vh] overflow-hidden border-b border-border">
          <img
            src="/gallery/origins-music/stax-soulsville-group.jpg"
            alt="Travelers visiting Stax Museum during a Civil Rights Trail Tours music journey"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="container relative flex min-h-[74vh] items-end py-14 md:items-center md:py-20">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Guided Music & Culture Journey
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                7-Day Black American
                <span className="block text-primary">Music History Tour</span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-foreground/90 md:text-xl">
                Trace the genres, places, and people who built America's sound,
                from spirituals and blues to soul and jazz, across the American South.
              </p>

              <div className="grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
                {[
                  ["Duration", "7 Days"],
                  ["Start", "Nashville, TN"],
                  ["End", "New Orleans, LA"],
                  ["From", "$1,950 / person"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-card p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 font-bold text-foreground">{value}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                  Reserve Your Place
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
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About This Journey</p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Hear the roots. Follow the rhythm. Know the story.
                </h2>
                <div className="space-y-4 text-lg leading-8 text-muted-foreground">
                  <p>
                    Travel through the American South and trace the roots of the music that shaped the nation. This immersive seven-day experience explores spirituals, blues, soul, and jazz born from Black communities' struggle, faith, joy, and imagination.
                  </p>
                  <p>
                    Along the way, the journey connects music to the Civil Rights Movement itself, visiting places where courage rang out alongside the sound, from lunch counter sit-ins to the halls where soul records were cut.
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-secondary bg-background p-6">
                <Music2 className="mb-5 text-secondary" size={32} />
                <p className="text-xl font-semibold leading-8">
                  From Nashville to New Orleans, learn how Black musical genius transformed local traditions into America's enduring soundtrack.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-6xl border-y border-border py-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your Route</p>
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
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Day by Day</p>
              <h2 className="text-4xl font-bold">Your 7-Day Itinerary</h2>
            </div>
            <div className="mx-auto max-w-5xl space-y-4">
              {days.map(item => (
                <article key={item.day} className="overflow-hidden rounded-md border border-border bg-card">
                  <div className="grid md:grid-cols-[120px_1fr]">
                    <div className="flex items-center justify-between bg-secondary px-5 py-4 text-secondary-foreground md:flex-col md:justify-center md:py-6">
                      <span className="text-xs font-semibold uppercase tracking-widest">Day</span>
                      <span className="text-3xl font-bold">{item.day}</span>
                    </div>
                    <div className="border-b border-border px-5 py-5 md:px-7">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">{item.city}</p>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="px-5 py-5 md:ml-[120px] md:px-7">
                    <p className="mb-5 leading-7 text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.stops.map(stop => (
                        <span key={stop} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">12 Featured Sites</p>
                <h2 className="text-4xl font-bold">The Soundtrack of the South</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Sacred spaces, museums, historic venues, and neighborhoods that reveal the sound, spirit, and stories behind Black American music.
                </p>
              </div>
              <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {destinations.map((destination, index) => (
                  <li key={destination} className="flex items-start gap-3 border-b border-border pb-3">
                    <span className="font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{destination}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-7 flex items-center gap-3 text-3xl font-bold"><Check className="text-primary" />Included in Your Package</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {included.map((item, index) => {
                    const Icon = [Hotel, Utensils, Bus, MapPin, Landmark, Users, Music2, ShipWheel][index];
                    return <div key={item} className="flex gap-3 border-b border-border pb-4"><Icon className="mt-1 shrink-0 text-primary" size={18} /><span className="text-sm leading-6 text-muted-foreground">{item}</span></div>;
                  })}
                </div>
              </div>
              <div>
                <h2 className="mb-7 flex items-center gap-3 text-3xl font-bold"><X className="text-secondary" />Not Included</h2>
                <div className="space-y-4">
                  {notIncluded.map((item, index) => (
                    <div key={item} className="flex gap-3 border-b border-border pb-4">
                      {index === 0 ? <Plane className="mt-1 shrink-0 text-secondary" size={18} /> : <X className="mt-1 shrink-0 text-secondary" size={18} />}
                      <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
              <h2 className="text-4xl font-bold">Choose Your Stay</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">All ground transportation and museum admissions are included. Airfare is not included.</p>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <article className="relative overflow-hidden rounded-md border-2 border-primary bg-background p-8">
                  <span className="absolute right-0 top-0 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">Best Value</span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">Double Occupancy</p>
                  <p className="mt-5 text-5xl font-bold">$1,950</p>
                  <p className="mt-2 text-muted-foreground">Per person, shared room</p>
                  <p className="mt-7 border-t border-border pt-5 font-semibold text-primary">Deposit and balance schedule available at booking</p>
                </article>
                <article className="rounded-md border border-border bg-background p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">Single Occupancy</p>
                  <p className="mt-5 text-4xl font-bold">Contact Us</p>
                  <p className="mt-2 text-muted-foreground">Private-room pricing available on request</p>
                  <Link href="/contact"><Button variant="outline" className="mt-7 border-primary text-primary hover:bg-primary hover:text-primary-foreground">Request Pricing <ArrowRight className="ml-2" size={16} /></Button></Link>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
