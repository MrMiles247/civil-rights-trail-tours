import { Link } from "wouter";
import {
  ArrowRight,
  Bus,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  Hotel,
  Landmark,
  MapPin,
  Music,
  Plane,
  Train,
  Utensils,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ScheduleItem = {
  time: string;
  activity: string;
  note?: string;
};

const hotels = [
  {
    name: "Marriott Marquis DC",
    location: "Convention Center / Shaw",
    distinction: "Black-developed",
    description:
      "Walking distance to NMAAHC with access to multiple Metro lines and strong cultural proximity.",
    price: "$220-$320 / night",
    level: "4-Star",
  },
  {
    name: "Capital Hilton",
    location: "Downtown / White House",
    description:
      "A historic property on the National Register of Historic Places with three Metro lines within two blocks.",
    price: "$200-$300 / night",
    level: "4-Star",
  },
  {
    name: "Salamander Washington DC",
    location: "Southwest Waterfront",
    distinction: "Black-owned",
    description:
      "A prestigious waterfront hotel and home of Dogon restaurant, offering the itinerary's premium stay.",
    price: "$280-$420 / night",
    level: "4-Star",
  },
  {
    name: "Hampton Inn DC - Convention Center",
    location: "Gallery Place / Shaw",
    description:
      "Two blocks from Metro and near Ben's Chili Bowl, Howard University, and NMAAHC.",
    price: "$160-$220 / night",
    level: "3-Star",
  },
  {
    name: "Holiday Inn Capitol - National Mall",
    location: "Capitol Hill",
    description:
      "A five-minute walk to Smithsonian museums with easy access to Capitol Hill, Anacostia, and Arlington.",
    price: "$150-$210 / night",
    level: "3-Star",
  },
];

const days: Array<{
  day: string;
  location: string;
  title: string;
  introduction: string;
  schedule: ScheduleItem[];
}> = [
  {
    day: "01",
    location: "Washington, D.C.",
    title: "The Capital, the Constitution & the Untold Story",
    introduction:
      "Move from the halls of American democracy to the neighborhoods and landmarks that built Black Washington.",
    schedule: [
      {
        time: "9:00 AM",
        activity: "U.S. Capitol - Black History Tour",
        note: "A guided tour highlighting Black legislators, enslaved labor in the Capitol's construction, and the long road to representation.",
      },
      {
        time: "11:00 AM",
        activity: "DC Black History Driving Tour",
        note: "Narrated luxury coach travel through Shaw, U Street, LeDroit Park, and Anacostia.",
      },
      {
        time: "1:00 PM",
        activity: "Lunch - Oohhs & Aahhs",
        note: "Black-owned U Street soul food institution. Average meal cost: $20-$28 per person.",
      },
      {
        time: "2:30 PM",
        activity: 'U Street / Shaw "Black Broadway" Walk',
        note: "Explore the Lincoln Theatre, True Reformer Building, historic murals, and the Harlem Renaissance of the South.",
      },
      {
        time: "4:30 PM",
        activity: "Ben's Chili Bowl - Photo Stop & Light Snack",
        note: "A Black-owned civil rights landmark serving Washington since 1958.",
      },
      { time: "6:00 PM", activity: "Hotel Check-in / Freshen Up" },
      {
        time: "7:30 PM",
        activity: "Welcome Dinner - Florida Avenue Grill",
        note: "Black-owned and operating since 1944, with home-style dinners, cornbread, and classic sides.",
      },
    ],
  },
  {
    day: "02",
    location: "Washington, D.C.",
    title: "The Smithsonian & the Sound of Black DC",
    introduction:
      "The centerpiece day pairs an unhurried NMAAHC experience with the living soundtrack of Black Washington.",
    schedule: [
      { time: "8:30 AM", activity: "Breakfast at Hotel" },
      {
        time: "9:30 AM",
        activity: "National Museum of African American History & Culture",
        note: "Begin in the Slavery and Freedom galleries and move chronologically through Civil Rights and Culture. Timed entry is reserved in advance.",
      },
      {
        time: "12:30 PM",
        activity: "Lunch - Sweet Home Cafe",
        note: "Award-winning regional American cuisine inside NMAAHC. Average meal cost: $22-$30 per person.",
      },
      {
        time: "2:00 PM",
        activity: "Continue NMAAHC - Culture Galleries",
        note: "Music, sports, visual arts, and the Contemplative Court.",
      },
      {
        time: "4:30 PM",
        activity: "GoGo Music Museum - Congress Heights",
        note: "Interactive exhibits on Chuck Brown, Trouble Funk, and Washington's homegrown musical genre.",
      },
      {
        time: "7:00 PM",
        activity: "Dinner - Hen Quarter Prime",
        note: "Black-owned elevated Southern dining by Thompson Hospitality on The Wharf.",
      },
    ],
  },
  {
    day: "03",
    location: "Mount Vernon & Arlington",
    title: "Enslaved Lives, Fallen Heroes & the Fight for Freedom",
    introduction:
      "A day of reckoning, from the enslaved community at Mount Vernon to African American heroes at rest in Arlington.",
    schedule: [
      { time: "8:00 AM", activity: "Depart by Luxury Coach to Mount Vernon" },
      {
        time: "9:00 AM",
        activity: "Mount Vernon - The Enslaved Community Tour",
        note: "Center the lives of more than 300 enslaved people who sustained the estate, including Hercules and Ona Judge.",
      },
      { time: "11:30 AM", activity: "Coach to Arlington National Cemetery" },
      {
        time: "12:30 PM",
        activity: "Lunch - Arlington Cafe or Packed Coach Lunch",
        note: "A 45-minute rest before the afternoon heritage walk.",
      },
      {
        time: "1:30 PM",
        activity:
          "Arlington National Cemetery - African American Heritage Walk",
        note: "Honor Gen. Benjamin O. Davis Sr., Medgar Evers, Matthew Henson, Justice Thurgood Marshall, formerly enslaved freedmen, and U.S. Colored Troops.",
      },
      {
        time: "4:00 PM",
        activity: "African American Civil War Memorial",
        note: "The Spirit of Freedom sculpture and Wall of Honor commemorate 209,145 Black Union soldiers and sailors.",
      },
      { time: "5:30 PM", activity: "Return to Hotel / Rest" },
      {
        time: "7:30 PM",
        activity: "Dinner - Doro Soul Food",
        note: "Black-owned, Michelin-recognized Ethiopian-soul cuisine in Shaw.",
      },
    ],
  },
  {
    day: "04",
    location: "Washington, D.C.",
    title: "Howard University, Banneker & Frederick Douglass",
    introduction:
      "Celebrate Black intellectual achievement across three centuries, from the Mecca to Cedar Hill.",
    schedule: [
      {
        time: "9:00 AM",
        activity: "Howard University Campus Tour",
        note: "Visit Founders Library, Cramton Auditorium, and the Freedmen's Hospital site.",
      },
      {
        time: "11:00 AM",
        activity: "LeDroit Park Neighborhood Walk",
        note: "Stories of Paul Laurence Dunbar, Anna Julia Cooper, and generations of Black Washington's intellectual leadership.",
      },
      {
        time: "12:30 PM",
        activity: "Lunch - DC Food Hall",
        note: "Multiple Black-owned vendors with soul food, Caribbean cuisine, and flexible group choices.",
      },
      {
        time: "2:00 PM",
        activity: "Benjamin Banneker History Park & Memorial",
        note: "Interpretive panels and a contemplative garden honoring the mathematician and astronomer who helped survey Washington.",
      },
      {
        time: "3:45 PM",
        activity: "Frederick Douglass National Historic Site",
        note: "Ranger-led tour of Cedar Hill, Douglass's Anacostia home from 1877 to 1895.",
      },
      { time: "6:00 PM", activity: "Return to Hotel / Freshen Up" },
      {
        time: "7:30 PM",
        activity: "Dinner - St. James DC",
        note: "Black-owned, Michelin-recognized Pan-Caribbean dining rooted in the African diaspora.",
      },
    ],
  },
  {
    day: "05",
    location: "Washington, D.C.",
    title: "Monuments, Memory & a Farewell to Remember",
    introduction:
      "Connect the week's history to the National Mall, then close with a celebrated Black-owned dining experience.",
    schedule: [
      {
        time: "9:00 AM",
        activity: "Lincoln Memorial & Reflecting Pool",
        note: 'Stand where Dr. King delivered "I Have a Dream" on August 28, 1963.',
      },
      {
        time: "10:00 AM",
        activity: "Vietnam Veterans Memorial",
        note: "Pause to honor the 272 Black veterans named on the Wall.",
      },
      {
        time: "10:45 AM",
        activity: "Washington Monument Grounds & Group Reflection",
        note: "Optional pre-booked interior tickets, group photos, and a final guided reflection.",
      },
      {
        time: "12:30 PM",
        activity: "Farewell Lunch - Dogon",
        note: "Chef Kwame Onwuachi's Black-owned Afro-Caribbean restaurant at the Salamander Hotel.",
      },
      {
        time: "2:30 PM",
        activity: "National Archives - Optional",
        note: "View the founding documents and records of enslaved individuals.",
      },
      {
        time: "4:00 PM",
        activity: "Free Time - Shopping & Exploration",
        note: "NMAAHC gift shop, Penn Quarter, Georgetown, or local boutiques.",
      },
      { time: "6:00 PM", activity: "Farewell Reflection & Group Departure" },
    ],
  },
];

const dining = [
  [
    "Ben's Chili Bowl",
    "American / Soul Food",
    "$12-$18",
    "U Street civil rights landmark since 1958.",
    true,
  ],
  [
    "Florida Avenue Grill",
    "Soul Food",
    "$25-$35",
    "Historic home-style dining in Shaw since 1944.",
    true,
  ],
  [
    "Oohhs & Aahhs",
    "Soul Food",
    "$20-$28",
    "Award-winning wings, catfish, and grits.",
    true,
  ],
  [
    "Sweet Home Cafe",
    "American Regional",
    "$22-$30",
    "Cultural heritage menus inside NMAAHC.",
    false,
  ],
  [
    "Doro Soul Food",
    "Ethiopian-Soul Fusion",
    "$28-$38",
    "Michelin-recognized berbere fried chicken and soulful sides.",
    true,
  ],
  [
    "Hen Quarter Prime",
    "Elevated Southern",
    "$35-$45",
    "Waterfront Southern dining by Thompson Hospitality.",
    true,
  ],
  [
    "St. James DC",
    "Pan-Caribbean",
    "$35-$45",
    "Fine dining rooted in the African diaspora.",
    true,
  ],
  [
    "Dogon",
    "Afro-Caribbean",
    "$45-$65",
    "Chef Kwame Onwuachi's celebrated Salamander Hotel restaurant.",
    true,
  ],
  [
    "DC Food Hall",
    "Multi-Vendor",
    "$18-$28",
    "Flexible group dining with multiple Black-owned vendors.",
    false,
  ],
] as const;

const included = [
  "5 nights in a 3-4 star hotel",
  "Luxury coach and airport transportation",
  "Guided Capitol, Howard, Mount Vernon, and Cedar Hill tours",
  "Pre-booked timed NMAAHC entry",
  "Arlington African American heritage walk",
  "Narrated DC Black History Driving Tour",
  "GoGo Music Museum group entry",
  "Banneker Memorial guided visit",
  "African American Civil War Memorial visit",
  "5 breakfasts, 3 lunches, and 4 dinners",
  "SME-certified Tour Manager and Assistant Tour Director",
  "Gift book, swag bag, evening drinks, and snacks",
];

const excluded = [
  "Round-trip airfare to and from Washington, D.C.",
  "Personal travel insurance",
  "Meals not listed in the itinerary",
  "Museum gift shop purchases",
  "Gratuities; suggested amount is $5 per day for the Tour Director",
];

export default function WashingtonBlackHeritageTour() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        <section className="relative min-h-[72vh] overflow-hidden border-b border-primary/30">
          <img
            src="https://washington.org/sites/default/files/2025-09/NMAAHC_002_7402359_20220817.jpg"
            alt="National Museum of African American History and Culture in Washington, D.C."
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/88" />
          <div className="container relative flex min-h-[72vh] items-center py-16">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
                5-Day Guided Heritage Tour
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                Washington, D.C.
                <span className="block text-primary">Black Heritage Tour</span>
              </h1>
              <p className="mt-5 text-xl font-semibold text-foreground">
                Black History. Culture. Legacy.
              </p>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">
                A curated journey for experienced travelers ages 35-65, bridging
                Black history and culture through powerful sites, authentic
                dining, and vibrant neighborhoods.
              </p>

              <div className="mt-8 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5">
                {[
                  ["Duration", "5 Days"],
                  ["Location", "Washington, D.C."],
                  ["Sites", "8+ Landmarks"],
                  ["Travelers", "Ages 35-65"],
                  ["From", "$1,995 / person"],
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
                  className="mt-7 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                >
                  Request This Tour
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-l-4 border-primary pl-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  About This Journey
                </p>
                <h2 className="text-4xl font-bold leading-tight">
                  The hidden capital of
                  <span className="block text-primary">
                    Black history and resilience.
                  </span>
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  Washington is the living capital of American democracy and a
                  vital center of African American history, culture, and
                  resilience. This immersive five-day experience follows stories
                  that built the nation, from enslaved laborers at Mount Vernon
                  to aviators, mathematicians, civil rights leaders, and
                  cultural icons.
                </p>
                <p>
                  Designed for seasoned travelers who value depth, quality, and
                  meaning, the journey balances powerful historic sites with
                  authentic dining, vibrant neighborhoods, and the music and
                  culture that make Black Washington unlike anywhere else.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Stay in the Story
              </p>
              <h2 className="text-4xl font-bold">Recommended Hotels</h2>
              <p className="mt-4 text-muted-foreground">
                Centrally located near the National Mall and Metro, including
                Black-owned and Black-developed properties.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hotels.map((hotel, index) => (
                <article
                  key={hotel.name}
                  className={`rounded-md border p-6 ${
                    index === 0 || index === 2
                      ? "border-primary/40 bg-card"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {hotel.level}
                    </span>
                    {hotel.distinction && (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                        {hotel.distinction}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-secondary">
                    {hotel.location}
                  </p>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {hotel.description}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 font-bold text-primary">
                    {hotel.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Day by Day
              </p>
              <h2 className="text-4xl font-bold">
                Washington in Five Meaningful Days
              </h2>
            </div>

            <div className="mx-auto max-w-5xl space-y-7">
              {days.map(item => (
                <article
                  key={item.day}
                  className="overflow-hidden rounded-md border border-border bg-background"
                >
                  <div className="grid md:grid-cols-[110px_1fr]">
                    <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground md:flex-col md:justify-center md:py-6">
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Day
                      </span>
                      <span className="text-3xl font-bold">{item.day}</span>
                    </div>
                    <div className="bg-background px-5 py-5 md:px-7">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        {item.location}
                      </p>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>

                  <div className="px-5 py-6 md:ml-[110px] md:px-7">
                    <p className="mb-6 border-l-2 border-secondary pl-4 italic leading-7 text-muted-foreground">
                      {item.introduction}
                    </p>
                    <div className="space-y-1">
                      {item.schedule.map(entry => (
                        <div
                          key={`${entry.time}-${entry.activity}`}
                          className="grid grid-cols-[78px_1fr] gap-4 py-3 sm:grid-cols-[100px_1fr]"
                        >
                          <p className="pt-1 text-right text-xs font-bold text-primary sm:text-sm">
                            {entry.time}
                          </p>
                          <div className="border-l-2 border-primary/50 pl-4">
                            <p className="font-semibold text-foreground">
                              {entry.activity}
                            </p>
                            {entry.note && (
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                {entry.note}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Eat With the City
              </p>
              <h2 className="text-4xl font-bold">
                Black Washington Dining Guide
              </h2>
              <p className="mt-4 text-muted-foreground">
                Average meal costs are per person and exclude beverages.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
              {dining.map(([name, cuisine, cost, note, blackOwned]) => (
                <article
                  key={name}
                  className="grid overflow-hidden rounded-md border border-border sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="bg-card p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold">{name}</h3>
                      {blackOwned && (
                        <span className="rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                          Black-owned
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cuisine}
                    </p>
                  </div>
                  <div className="bg-background p-5">
                    <p className="font-bold text-primary">{cost} / person</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-7 flex items-center gap-3 text-3xl font-bold">
                  <Check className="text-primary" />
                  Included in Your Package
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {included.map((item, index) => {
                    const Icon = [
                      Hotel,
                      Bus,
                      Landmark,
                      Train,
                      MapPin,
                      Music,
                      GraduationCap,
                      Utensils,
                    ][index % 8];
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
                <h2 className="mb-7 flex items-center gap-3 text-3xl font-bold">
                  <X className="text-secondary" />
                  Not Included
                </h2>
                <div className="space-y-4">
                  {excluded.map((item, index) => (
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

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Pricing
                </p>
                <h2 className="text-4xl font-bold">Choose Your Stay</h2>
                <p className="mt-4 text-muted-foreground">
                  Ground transportation, timed museum entry, and guided tours
                  are included. A $99 deposit reserves your place, with the
                  balance due 60 days before departure.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <article className="relative overflow-hidden rounded-md border-2 border-primary bg-card p-8">
                  <span className="absolute right-0 top-0 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Best Value
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Double Occupancy
                  </p>
                  <p className="mt-5 text-5xl font-bold">$1,995</p>
                  <p className="mt-2 text-muted-foreground">
                    Per person, shared room
                  </p>
                  <p className="mt-7 border-t border-border pt-5 font-semibold text-primary">
                    $99 deposit
                  </p>
                </article>
                <article className="rounded-md border border-border bg-card p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Single Occupancy
                  </p>
                  <p className="mt-5 text-5xl font-bold">$2,395</p>
                  <p className="mt-2 text-muted-foreground">
                    Per person, private room
                  </p>
                  <p className="mt-7 border-t border-border pt-5 font-semibold text-primary">
                    $99 deposit
                  </p>
                </article>
              </div>

              <div className="mt-5 flex flex-col gap-5 rounded-md border-l-4 border-primary bg-card p-7 sm:flex-row sm:items-center">
                <p className="text-5xl font-bold text-primary">10%</p>
                <p className="leading-7 text-muted-foreground">
                  <strong className="text-foreground">
                    Group discount available.
                  </strong>{" "}
                  Book 10 or more travelers and every passenger receives 10%
                  off. Private group travel with custom departure dates is also
                  available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <CalendarDays className="mx-auto text-primary" size={38} />
              <h2 className="text-4xl font-bold">
                Ready to Experience Black Washington?
              </h2>
              <p className="text-xl leading-8 text-muted-foreground">
                Reserve your place or ask our team about group and private
                travel dates.
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
