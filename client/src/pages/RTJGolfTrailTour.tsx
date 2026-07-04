import { Link } from "wouter";
import {
  ArrowRight,
  Award,
  Bus,
  CalendarDays,
  Check,
  CircleDollarSign,
  Flag,
  Hotel,
  Landmark,
  MapPin,
  Plane,
  Trophy,
  Utensils,
  Wine,
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

const tournamentRules = [
  [
    "Golf Scoring",
    "Eagle 5 pts, birdie 3 pts, par 1 pt, bogey 0, double bogey -1 pt.",
  ],
  [
    "Culture Bonus",
    "+2 points for a correct Black history trivia answer on the ninth tee.",
  ],
  [
    "Closest to the Pin",
    "+3 points on one designated par-3 during each round.",
  ],
  [
    "Long Drive Challenge",
    "+2 points on one designated par-5 during each round.",
  ],
  [
    "TopGolf Bonus",
    "The top three Day 1 bay scores earn 10, 7, and 5 tournament points.",
  ],
  [
    "Running Leaderboard",
    "Scorecards are collected daily and standings are posted each evening.",
  ],
];

const awards = [
  ["Champion Trophy", "Most total tournament points"],
  ["Culture Cup", "Most Black history trivia points"],
  ["Most Improved", "Biggest jump from Round 1 to Round 4"],
  ["Spirit Award", "Group-voted sportsmanship honor"],
];

const hotels = [
  {
    name: "106 Jefferson",
    location: "Huntsville - Curio Collection by Hilton",
    description:
      "A space race-inspired boutique hotel with The Revivalist restaurant and Baker & Able rooftop bar.",
    price: "$180-$260 / night",
  },
  {
    name: "The Redmont Hotel",
    location: "Birmingham - Curio Collection by Hilton",
    description:
      "Alabama's first skyscraper, a historic landmark near Kelly Ingram Park and 16th Street Baptist Church.",
    price: "$170-$250 / night",
  },
  {
    name: "Elevation Hotel",
    location: "Montgomery - EJI Legacy Campus",
    description:
      "A contemporary stay adjacent to the EJI Legacy Sites and National Memorial for Peace and Justice.",
    price: "$200-$300 / night",
  },
  {
    name: "Marriott at Capitol Hill",
    location: "Prattville - RTJ On-Site Resort",
    description:
      "An on-site golf resort with direct access to Capitol Hill's three courses, dining, pool, and spa.",
    price: "$170-$240 / night",
  },
  {
    name: "Marriott at Grand National",
    location: "Auburn/Opelika - RTJ On-Site Resort",
    description:
      "A full-service resort steps from the first tee at one of America's most scenic public golf sites.",
    price: "$180-$260 / night",
  },
];

const days: Array<{
  day: string;
  location: string;
  title: string;
  introduction: string;
  course?: string;
  schedule: ScheduleItem[];
}> = [
  {
    day: "01",
    location: "Huntsville, Alabama",
    title: "Welcome to the Rocket City - Tournament Kickoff",
    introduction:
      "Check into 106 Jefferson and open the competition at TopGolf, where the first tournament bonus points are earned.",
    schedule: [
      {
        time: "12:00 PM",
        activity: "Arrive and check in - 106 Jefferson",
        note: "Meet your fellow travelers at this space race-inspired boutique hotel.",
      },
      {
        time: "1:30 PM",
        activity: "Welcome lunch - Catch 25 Seafood & Steak",
        note: "Fresh Gulf seafood at a premier Black-owned Huntsville restaurant.",
      },
      {
        time: "3:30 PM",
        activity: "CRTT Tournament kickoff and rules briefing",
        note: "Modified Stableford scoring, culture trivia, scorecards, leaderboard, and group photo.",
      },
      {
        time: "5:00 PM",
        activity: "TopGolf Huntsville - bonus round and dinner",
        note: "Reserved group bays. The top three scores earn 10, 7, and 5 tournament points.",
      },
      {
        time: "9:00 PM",
        activity: "Baker & Able rooftop",
        note: "Signature cocktails, charcuterie, premium cigars, and a first standings preview.",
      },
    ],
  },
  {
    day: "02",
    location: "Hampton Cove, Alabama",
    title: "Round 1 - Hampton Cove and Wine & Cigar Evening",
    introduction:
      "Begin Trail play on a scenic old river flood plain framed by Appalachian mountain views.",
    course: "RTJ Hampton Cove - River Course - Par 70 - 4 to 4.5 hours",
    schedule: [
      {
        time: "7:30 AM",
        activity: "Breakfast - The Revivalist at 106 Jefferson",
      },
      { time: "8:30 AM", activity: "Coach to Hampton Cove" },
      {
        time: "9:00 AM",
        activity: "CRTT Round 1 - Hampton Cove River Course",
        note: "Culture trivia on Hole 9, Closest to the Pin, and Long Drive challenges.",
      },
      {
        time: "1:30 PM",
        activity: "Lunch - Hampton Cove Clubhouse Grill",
        note: "Post-round lunch and scorecard review.",
      },
      {
        time: "3:00 PM",
        activity: "Return to 106 Jefferson - rest and recovery",
      },
      {
        time: "6:30 PM",
        activity: "Wine and cigar experience",
        note: "A private tasting with regional wines, premium cigars, and charcuterie.",
      },
      {
        time: "8:30 PM",
        activity: "Dinner - Superhero Chefs",
        note: "Award-winning, Black-owned Southern dining in MidCity.",
      },
    ],
  },
  {
    day: "03",
    location: "Birmingham, Alabama",
    title: "Round 2 - Oxmoor Valley and the Civil Rights District",
    introduction:
      "Play Birmingham's dramatic ridgeline course, then enter the history of the 1963 Birmingham Campaign.",
    course: "RTJ Oxmoor Valley - Ridge Course - Par 72 - 4 to 4.5 hours",
    schedule: [
      { time: "7:00 AM", activity: "Breakfast and hotel checkout" },
      { time: "8:00 AM", activity: "Coach from Huntsville to Birmingham" },
      {
        time: "9:30 AM",
        activity: "CRTT Round 2 - Oxmoor Valley Ridge Course",
        note: "Rolling hills, skyline views, Hole 9 culture trivia, and full tournament challenges.",
      },
      { time: "2:00 PM", activity: "Check in - The Redmont Hotel" },
      {
        time: "3:30 PM",
        activity: "Kelly Ingram Park guided Civil Rights tour",
        note: "Walk the Freedom Walk and sculpture trail with views of 16th Street Baptist Church.",
      },
      {
        time: "5:00 PM",
        activity: "16th Street Baptist Church",
        note: "A respectful visit to one of America's most sacred Civil Rights landmarks.",
      },
      {
        time: "7:30 PM",
        activity: "Dinner - Simone's Kitchen & Cocktails",
        note: "Black-owned upscale soul food and craft cocktails.",
      },
      {
        time: "9:30 PM",
        activity: "Redmont rooftop - cigars and leaderboard review",
      },
    ],
  },
  {
    day: "04",
    location: "Montgomery, Alabama",
    title: "Round 3 - Capitol Hill and the EJI Legacy Sites",
    introduction:
      "Pair an LPGA host course with a moving afternoon at one of America's most significant memorial complexes.",
    course: "RTJ Capitol Hill - Senator Course - Par 72 - LPGA host site",
    schedule: [
      { time: "7:00 AM", activity: "Breakfast at The Redmont" },
      { time: "8:00 AM", activity: "Coach to Montgomery and Prattville" },
      {
        time: "9:30 AM",
        activity: "CRTT Round 3 - Capitol Hill Senator Course",
        note: "Prairie-style fairways, Hole 9 culture trivia, and full tournament challenges.",
      },
      { time: "2:30 PM", activity: "Check in - Elevation Hotel" },
      {
        time: "4:00 PM",
        activity: "EJI Legacy Sites - full experience",
        note: "Visit the Legacy Museum and National Memorial for Peace and Justice, with an optional Alabama River boat ride to Freedom Monument Sculpture Park.",
      },
      {
        time: "7:00 PM",
        activity: "Guided group reflection",
        note: "A thoughtful space to process and share the day's experiences.",
      },
      { time: "8:00 PM", activity: "Dinner - EJI Campus Restaurant" },
    ],
  },
  {
    day: "05",
    location: "Montgomery, Alabama",
    title: "Black History Drive, Rest and Tasting Reception",
    introduction:
      "A lighter day for reflection, cultural exploration, soulful dining, and recovery before the championship round.",
    schedule: [
      { time: "8:30 AM", activity: "Slow breakfast - Elevation Hotel" },
      {
        time: "10:00 AM",
        activity: "Montgomery Black History driving tour",
        note: "Dexter Avenue King Memorial Baptist Church, Rosa Parks Museum, the State Capitol, Civil Rights Memorial, and Bus Boycott landmarks.",
      },
      {
        time: "12:30 PM",
        activity: "Lunch - Martha's Place",
        note: "A beloved Black-owned Montgomery soul food institution.",
      },
      { time: "2:00 PM", activity: "Free afternoon - rest and recovery" },
      {
        time: "5:00 PM",
        activity: "Alabama wine and cigar tasting reception",
        note: "Regional wines, premium cigars, cheese, charcuterie, and Southern bites.",
      },
      {
        time: "7:30 PM",
        activity: "Dinner - Garrett's Restaurant at Marriott Capitol Hill",
      },
    ],
  },
  {
    day: "06",
    location: "Auburn/Opelika, Alabama",
    title: "Championship Round - Grand National and Awards",
    introduction:
      "Close on one of America's most photographed public courses, followed by the CRTT Awards Ceremony and farewell dinner.",
    course: "RTJ Grand National - Lake Course - Par 72 - 4 to 4.5 hours",
    schedule: [
      { time: "7:00 AM", activity: "Breakfast and Elevation Hotel checkout" },
      { time: "8:00 AM", activity: "Coach to Grand National" },
      {
        time: "9:00 AM",
        activity: "CRTT Championship Round - Grand National Lake Course",
        note: "All challenges and bonus points are active, with final scorecards submitted at the 18th green.",
      },
      { time: "1:30 PM", activity: "Lunch - Grand National Clubhouse" },
      { time: "3:00 PM", activity: "Check in - Marriott at Grand National" },
      {
        time: "5:00 PM",
        activity: "CRTT awards reception",
        note: "Cocktails, premium cigars, and the final leaderboard reveal.",
      },
      {
        time: "6:30 PM",
        activity: "Tournament awards ceremony",
        note: "Champion Trophy, Culture Cup, Most Improved, and Spirit Award.",
      },
      {
        time: "7:30 PM",
        activity: "Farewell dinner - Grand National Resort",
        note: "Group toasts, Civil Rights Trail gift books, and swag bags.",
      },
    ],
  },
];

const dining = [
  [
    "Catch 25 Seafood & Steak",
    "Seafood and steak - Huntsville",
    "$28-$38",
    true,
  ],
  ["Superhero Chefs", "Southern dining - Huntsville", "$25-$32", true],
  ["Blaque Cigar Lounge", "Cigars and cocktails - Huntsville", "$20-$30", true],
  [
    "Simone's Kitchen & Cocktails",
    "Upscale soul food - Birmingham",
    "$30-$40",
    true,
  ],
  ["Yo' Mama's", "Soul food - Birmingham", "$22-$30", true],
  ["Martha's Place", "Soul food buffet - Montgomery", "$18-$25", true],
  [
    "EJI Campus Restaurant",
    "Southern farm-to-table - Montgomery",
    "$28-$38",
    false,
  ],
  ["The Revivalist", "American farm-to-table - Huntsville", "$28-$38", false],
  [
    "Baker & Able Rooftop",
    "Cocktails and small plates - Huntsville",
    "$20-$30",
    false,
  ],
] as const;

const included = [
  "6 nights in signature boutique and heritage hotels",
  "4 rounds on the Robert Trent Jones Golf Trail",
  "Luxury coach transportation across the full route",
  "CRTT scorecards, prizes, leaderboard, and Awards Ceremony",
  "TopGolf Huntsville group bays, bonus round, and dinner",
  "Kelly Ingram Park guided Civil Rights tour",
  "EJI Legacy Sites full experience",
  "Montgomery Black History narrated driving tour",
  "Wine and cigar tasting receptions on Days 2 and 5",
  "5 breakfasts, 3 lunches, and 5 dinners as noted",
  "SME-certified Tour Manager and Assistant Tour Director",
  "Civil Rights History Trail gift book, swag bag, and trivia cards",
];

const excluded = [
  "Round-trip airfare to and from Huntsville International Airport",
  "Personal golf equipment; rentals are available at each course",
  "Personal travel insurance",
  "Meals not listed in the itinerary",
  "Caddies and cart fees beyond the standard greens fee",
  "Gratuities; suggested amount is $5 per day for the Tour Director",
];

export default function RTJGolfTrailTour() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        <section className="relative min-h-[72vh] overflow-hidden border-b border-primary/30">
          <img
            src="https://www.rtjgolf.com/grandnational/gnla15.jpg"
            alt="Grand National Lake Course on Alabama's Robert Trent Jones Golf Trail"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="container relative flex min-h-[72vh] items-center py-16">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
                6-Day Golf and Heritage Tour
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                RTJ Golf Trail
                <span className="block text-primary">Alabama Tour</span>
              </h1>
              <p className="mt-5 text-xl font-semibold">
                Golf. History. Culture. Competition.
              </p>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">
                Four signature Robert Trent Jones Golf Trail stops paired with
                Black history, dining, culture, and a spirited CRTT tournament.
              </p>

              <div className="mt-8 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5">
                {[
                  ["Duration", "6 Days"],
                  ["Courses", "4 RTJ Sites"],
                  ["Golf", "72+ Holes"],
                  ["Travelers", "Ages 35-65"],
                  ["From", "$1,950 / person"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-card p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 font-bold">{value}</p>
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
                  A full scorecard.
                  <span className="block text-primary">
                    A fuller understanding.
                  </span>
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  Alabama's Robert Trent Jones Golf Trail spans 26 championship
                  courses at 11 sites. This six-day journey follows four
                  signature stops from Huntsville through Birmingham and
                  Montgomery to Auburn/Opelika.
                </p>
                <p>
                  The experience reaches beyond the fairway. Guests play in the
                  morning, then enter the history of Kelly Ingram Park, 16th
                  Street Baptist Church, the EJI Legacy Sites, and Montgomery's
                  Civil Rights landmarks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                The CRTT Tournament
              </p>
              <h2 className="text-4xl font-bold">Golf Meets Culture</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Modified Stableford scoring combines course performance with
                Black history trivia and friendly daily challenges.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tournamentRules.map(([label, value], index) => {
                const Icon = [
                  Flag,
                  Landmark,
                  Award,
                  Trophy,
                  CircleDollarSign,
                  Trophy,
                ][index];
                return (
                  <article
                    key={label}
                    className="rounded-md border border-border bg-card p-6"
                  >
                    <Icon className="mb-5 text-primary" size={24} />
                    <h3 className="font-bold">{label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {value}
                    </p>
                  </article>
                );
              })}
            </div>
            <div className="mx-auto mt-6 grid max-w-6xl gap-px overflow-hidden rounded-md border border-primary/30 bg-primary/30 md:grid-cols-4">
              {awards.map(([name, detail]) => (
                <div key={name} className="bg-card p-5 text-center">
                  <Trophy className="mx-auto text-primary" size={22} />
                  <p className="mt-3 font-bold">{name}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Stay Along the Trail
              </p>
              <h2 className="text-4xl font-bold">Recommended Hotels</h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hotels.map(hotel => (
                <article
                  key={hotel.name}
                  className="rounded-md border border-border bg-background p-6"
                >
                  <Hotel className="mb-5 text-primary" size={24} />
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

        <section className="bg-background py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Day by Day
              </p>
              <h2 className="text-4xl font-bold">Six Days Across Alabama</h2>
            </div>
            <div className="mx-auto max-w-5xl space-y-7">
              {days.map(item => (
                <article
                  key={item.day}
                  className="overflow-hidden rounded-md border border-border bg-card"
                >
                  <div className="grid md:grid-cols-[110px_1fr]">
                    <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground md:flex-col md:justify-center md:py-6">
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Day
                      </span>
                      <span className="text-3xl font-bold">{item.day}</span>
                    </div>
                    <div className="px-5 py-5 md:px-7">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        {item.location}
                      </p>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="px-5 py-6 md:ml-[110px] md:px-7">
                    <p className="mb-5 border-l-2 border-secondary pl-4 italic leading-7 text-muted-foreground">
                      {item.introduction}
                    </p>
                    {item.course && (
                      <div className="mb-5 flex items-start gap-3 rounded-md border border-primary/30 bg-primary/10 p-4 text-sm font-semibold text-primary">
                        <Flag className="mt-0.5 shrink-0" size={18} />
                        <span>{item.course}</span>
                      </div>
                    )}
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
                            <p className="font-semibold">{entry.activity}</p>
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

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Dining Guide
              </p>
              <h2 className="text-4xl font-bold">Taste the Trail</h2>
              <p className="mt-4 text-muted-foreground">
                Average costs are per person and exclude beverages.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
              {dining.map(([name, type, cost, blackOwned]) => (
                <article
                  key={name}
                  className="flex items-start justify-between gap-5 rounded-md border border-border bg-background p-5"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold">{name}</h3>
                      {blackOwned && (
                        <span className="rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                          Black-owned
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{type}</p>
                  </div>
                  <p className="shrink-0 font-bold text-primary">{cost}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
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
                      Flag,
                      Bus,
                      Trophy,
                      Utensils,
                      Landmark,
                      MapPin,
                      Wine,
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

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Tour Investment
                </p>
                <h2 className="text-4xl font-bold">Choose Your Stay</h2>
                <p className="mt-4 text-muted-foreground">
                  A $199 deposit reserves your place. The balance is due 60 days
                  before departure.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <article className="relative overflow-hidden rounded-md border-2 border-primary bg-background p-8">
                  <span className="absolute right-0 top-0 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Best Value
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Double Occupancy
                  </p>
                  <p className="mt-5 text-5xl font-bold">$1,950</p>
                  <p className="mt-2 text-muted-foreground">
                    Per person, shared room
                  </p>
                  <p className="mt-7 border-t border-border pt-5 font-semibold text-primary">
                    $199 deposit
                  </p>
                </article>
                <article className="rounded-md border border-border bg-background p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Single Occupancy
                  </p>
                  <p className="mt-5 text-5xl font-bold">$2,350</p>
                  <p className="mt-2 text-muted-foreground">
                    Per person, private room
                  </p>
                  <p className="mt-7 border-t border-border pt-5 font-semibold text-primary">
                    $199 deposit
                  </p>
                </article>
              </div>
              <div className="mt-5 flex flex-col gap-5 rounded-md border-l-4 border-primary bg-background p-7 sm:flex-row sm:items-center">
                <p className="text-5xl font-bold text-primary">10%</p>
                <p className="leading-7 text-muted-foreground">
                  <strong className="text-foreground">
                    Group discount available.
                  </strong>{" "}
                  Book 10 or more travelers and every participant receives 10%
                  off. Private departures and custom dates are also available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <CalendarDays className="mx-auto text-primary" size={38} />
              <h2 className="text-4xl font-bold">Ready to Tee It Up?</h2>
              <p className="text-xl leading-8 text-muted-foreground">
                Reserve your place or ask our team about a private group
                departure on the Robert Trent Jones Golf Trail.
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
