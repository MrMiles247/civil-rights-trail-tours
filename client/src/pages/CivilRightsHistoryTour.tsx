import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Bus,
  CalendarDays,
  Check,
  Hotel,
  Landmark,
  MapPin,
  Plane,
  Users,
  Utensils,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const route = [
  "Nashville",
  "Memphis",
  "Birmingham",
  "Selma",
  "Montgomery",
  "Tuskegee",
  "Atlanta",
];

const days = [
  {
    day: "01",
    city: "Nashville, TN",
    title: "Arrival & The Music of Resistance",
    description:
      "Welcome to Music City. Check into your hotel and gather for a welcome dinner. Begin your evening at the National Museum of African American Music, an immersive journey through the sounds that powered a movement, from spirituals to soul to hip-hop.",
    stops: [
      "National Museum of African American Music",
      "Welcome Dinner",
      "Hotel Check-in",
    ],
  },
  {
    day: "02",
    city: "Nashville, TN",
    title: "Civil Rights & Higher Learning",
    description:
      "Spend a full day in Nashville's cultural corridor. Explore the National Civil and Human Rights Museum, followed by a guided tour of Fisk University, one of America's most storied HBCUs and home of the historic Jubilee Singers. Lunch is included.",
    stops: [
      "National Civil & Human Rights Museum",
      "Fisk University HBCU Campus",
      "Southern Lunch Included",
    ],
  },
  {
    day: "03",
    city: "Memphis, TN",
    title: "Soul, Stax & the Legacy of Dr. King",
    description:
      "Board the luxury coach to Memphis. Visit the National Civil Rights Museum at the Lorraine Motel for a profoundly moving experience, then continue to the STAX Soulsville Museum and the Slave Haven Underground Railroad Museum.",
    stops: [
      "National Civil Rights Museum",
      "STAX Soulsville Music Museum",
      "Slave Haven",
      "Dinner Included",
    ],
  },
  {
    day: "04",
    city: "Birmingham, AL",
    title: "Courage Under Fire",
    description:
      "Travel south to Birmingham, the crucible of the movement. Walk the Birmingham Civil Rights District and stand inside the 16th Street Baptist Church, where four little girls lost their lives in 1963. The evening concludes with dinner alongside local civil rights activists.",
    stops: [
      "Birmingham Civil Rights District",
      "16th Street Baptist Church",
      "Kelly Ingram Park",
      "Activist Dinner",
    ],
  },
  {
    day: "05",
    city: "Selma & Montgomery, AL",
    title: "Bloody Sunday & the March to Justice",
    description:
      "Cross the Edmund Pettus Bridge in Selma, one of the most powerful walks in American history. Visit the National Voting Rights Museum, then continue to Montgomery for the Memorial for Peace and Justice.",
    stops: [
      "Edmund Pettus Bridge",
      "National Voting Rights Museum",
      "Memorial for Peace & Justice",
      "Lunch Included",
    ],
  },
  {
    day: "06",
    city: "Montgomery & Tuskegee, AL",
    title: "Legacy & The Airmen",
    description:
      "Begin at the New Legacy Museum in Montgomery. In the afternoon, travel to Tuskegee to visit the Tuskegee Airmen National Historic Site and walk the grounds of Tuskegee University, a crown jewel of HBCU history.",
    stops: [
      "The New Legacy Museum",
      "Tuskegee Airmen National Historic Site",
      "Tuskegee University Campus",
      "Dinner Included",
    ],
  },
  {
    day: "07",
    city: "Atlanta, GA",
    title: "The Cradle of the Movement",
    description:
      "Arrive in Atlanta, Dr. King's birthplace. Visit the MLK Memorial Park and Sweet Auburn. Tour the Atlanta University Center, including Morehouse, Spelman, and Clark Atlanta University, before gathering for a farewell dinner.",
    stops: [
      "MLK Memorial Park",
      "Sweet Auburn Historic District",
      "AUC HBCU Campuses",
      "Farewell Dinner",
    ],
  },
  {
    day: "08",
    city: "Atlanta, GA",
    title: "Reflection & Departure",
    description:
      "Share a final breakfast and reflection session with your Tour Director. Receive your Civil Rights History Trail Gift Book and swag bag, then depart carrying the stories of those who changed the world.",
    stops: [
      "Final Breakfast",
      "Group Reflection Session",
      "Gift Book & Swag Bag",
      "Hotel Check-out",
    ],
  },
];

const destinations = [
  "The New Legacy Museum",
  "National Civil & Human Rights Museum",
  "National Museum of African American Music",
  "National Civil Rights Museum",
  "STAX Soulsville Music Museum",
  "Slave Haven Underground Railroad",
  "Birmingham Civil Rights District",
  "16th Street Baptist Church",
  "Edmund Pettus Bridge, Selma",
  "National Voting Rights Museum",
  "Tuskegee Airmen National Historic Site",
  "Memorial for Peace & Justice",
  "MLK Memorial Park, Atlanta",
];

const included = [
  "6 nights in 3-4 star hotels",
  "8 breakfasts, 4 lunches, and 5 dinners with wine",
  "Evening drinks and snacks nightly",
  "Luxury coach with air conditioning and WiFi",
  "All ground and airport transportation",
  "Entry to all 13 featured museums and sites",
  "One SME-certified Tour Manager",
  "One Assistant Tour Director",
  "Guided HBCU campus tours",
  "Civil rights activist meet-and-greet sessions",
  "Civil Rights History Trail Gift Book",
  "Civil Rights Trail swag bag",
];

const notIncluded = [
  "Round-trip airfare; group airfare can be arranged separately",
  "Personal travel insurance, which is strongly recommended",
  "Meals not listed in the itinerary",
  "Personal shopping and souvenirs",
  "Gratuities; suggested amount is $5 per day for the Tour Director",
];

export default function CivilRightsHistoryTour() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        <section className="relative min-h-[74vh] overflow-hidden border-b border-border">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg"
            alt="Travelers walking the Civil Rights Trail"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="container relative flex min-h-[74vh] items-end py-14 md:items-center md:py-20">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Signature Guided Journey
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                8-Day Civil Rights
                <span className="block text-primary">History Tour</span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-foreground/90 md:text-xl">
                A journey through the heart of the American Civil Rights
                Movement, from Nashville to Atlanta, guided by history, music,
                education, courage, and community.
              </p>

              <div className="grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
                {[
                  ["Duration", "8 Days"],
                  ["Start", "Nashville, TN"],
                  ["End", "Atlanta, GA"],
                  ["From", "$2,195 / person"],
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
                <Button
                  size="lg"
                  className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                >
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
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  About This Journey
                </p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Walk the path. Hear the stories. Carry the legacy.
                </h2>
                <div className="space-y-4 text-lg leading-8 text-muted-foreground">
                  <p>
                    Travel through the American South and step into the living
                    history of the Civil Rights Movement. This immersive
                    experience traces the footsteps of the ordinary people,
                    including children, students, and women, who changed the
                    world through courage, activism, and an unshakable
                    commitment to justice and education.
                  </p>
                  <p>
                    Visit legendary HBCUs, hear first-hand stories from civil
                    rights activists, walk the Edmund Pettus Bridge, and stand
                    inside the 16th Street Baptist Church. Along the way,
                    explore 13 iconic museums and landmarks, savor Southern
                    cuisine, and connect with the communities that kept the
                    dream alive.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-secondary bg-background p-6">
                <Landmark className="mb-5 text-secondary" size={32} />
                <p className="text-xl font-semibold leading-8">
                  Explore the hallowed paths of the Civil Rights Trail, where
                  the heroes of the past beckon us to carry their torch forward.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-6xl border-y border-border py-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Your Route
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {route.map((city, index) => (
                  <div key={city} className="flex items-center gap-2 sm:gap-3">
                    <span className="font-semibold text-foreground">
                      {city}
                    </span>
                    {index < route.length - 1 && (
                      <ArrowRight className="text-primary" size={16} />
                    )}
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
                Day by Day
              </p>
              <h2 className="text-4xl font-bold">Your 8-Day Itinerary</h2>
            </div>

            <div className="mx-auto max-w-5xl space-y-4">
              {days.map(item => (
                <article
                  key={item.day}
                  className="overflow-hidden rounded-md border border-border bg-card"
                >
                  <div className="grid md:grid-cols-[120px_1fr]">
                    <div className="flex items-center justify-between bg-secondary px-5 py-4 text-secondary-foreground md:flex-col md:justify-center md:py-6">
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Day
                      </span>
                      <span className="text-3xl font-bold">{item.day}</span>
                    </div>
                    <div className="border-b border-border px-5 py-5 md:px-7">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        {item.city}
                      </p>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="px-5 py-5 md:ml-[120px] md:px-7">
                    <p className="mb-5 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.stops.map(stop => (
                        <span
                          key={stop}
                          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
                        >
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
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  13 Historic Sites
                </p>
                <h2 className="text-4xl font-bold">Featured Destinations</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Museums, sacred spaces, campuses, memorials, and neighborhoods
                  that place the movement's people and turning points directly
                  before you.
                </p>
              </div>
              <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {destinations.map((destination, index) => (
                  <li
                    key={destination}
                    className="flex items-start gap-3 border-b border-border pb-3"
                  >
                    <span className="font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{destination}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Your Package
              </p>
              <h2 className="text-4xl font-bold">What's Included</h2>
            </div>

            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Check className="text-primary" />
                  Included
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {included.map((item, index) => {
                    const Icon = [
                      Hotel,
                      Utensils,
                      Bus,
                      MapPin,
                      Landmark,
                      Users,
                      BookOpen,
                    ][index % 7];
                    return (
                      <div
                        key={item}
                        className="flex gap-3 border-b border-border pb-4"
                      >
                        <Icon
                          className="mt-1 shrink-0 text-primary"
                          size={18}
                        />
                        <span className="text-sm leading-6 text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <X className="text-secondary" />
                  Not Included
                </h3>
                <div className="space-y-4">
                  {notIncluded.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-3 border-b border-border pb-4"
                    >
                      {index === 0 ? (
                        <Plane
                          className="mt-1 shrink-0 text-secondary"
                          size={18}
                        />
                      ) : (
                        <X className="mt-1 shrink-0 text-secondary" size={18} />
                      )}
                      <span className="text-sm leading-6 text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Pricing
                </p>
                <h2 className="text-4xl font-bold">Choose Your Room</h2>
                <p className="mt-4 text-muted-foreground">
                  Ground transportation and museum admissions are included. A
                  $99 deposit reserves your place, with the balance due 60 days
                  before departure.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
                <div className="bg-background p-7">
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Double Occupancy
                  </p>
                  <p className="mt-4 text-4xl font-bold text-primary">$2,195</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Per person, shared room
                  </p>
                </div>
                <div className="bg-background p-7">
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Single Occupancy
                  </p>
                  <p className="mt-4 text-4xl font-bold text-primary">$2,595</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Per person, private room
                  </p>
                </div>
                <div className="bg-secondary p-7 text-secondary-foreground">
                  <p className="text-sm font-semibold uppercase tracking-widest">
                    Group Travel
                  </p>
                  <p className="mt-4 text-4xl font-bold">10% off</p>
                  <p className="mt-2 text-sm text-secondary-foreground/80">
                    For 10 or more travelers, with private departure dates
                    available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <CalendarDays className="mx-auto text-primary" size={38} />
              <h2 className="text-4xl font-bold">Ready to Walk the Trail?</h2>
              <p className="text-xl leading-8 text-muted-foreground">
                Reserve your place or ask our team about private group travel
                and custom departure dates.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                  >
                    Request This Tour
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <a href="tel:+12565251203">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Call (256) 525-1203
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
