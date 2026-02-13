import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Montgomery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HZleZauX8yVNrUFyQKt6RU/sandbox/wbcKLCqGs31IHmAsgdmrVv-img-4_1770958673000_na1fn_bW9udGdvbWVyeS1jaXZpbC1yaWdodHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFpsZVphdVg4eVZOclVGeVFLdDZSVS9zYW5kYm94L3diY0tMQ3FHczMxSUhtQXNnZG1yVnYtaW1nLTRfMTc3MDk1ODY3MzAwMF9uYTFmbl9iVzl1ZEdkdmJXVnllUzFqYVhacGJDMXlhV2RvZEhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=g8bzOsldqOK78O2m3PN03Xf5FS-Kb-BYJ0NyhFbwlCRnQWLf2ZHNNnbB3qfkeEiWnGxyGO3dp2WSqVsPW-2J7s6UivJhuYKdGIqtEsItksUgVlz9lmuz2NQflLQ9qEByZ0DfrQ3MKFm0Mp-WYWpQuV8VutWLtIZ7MCY8TinU3eN~KjCBrKVwdlbavrOKin2xhehwrzV9cke4sF86zrIcnO8cWOMLEoERdANCfV4nY5ochZpQ0BjGpFEBINATN9j3CbiLu5yP4a2BmAiBmRJgalqG7KDuemZpf8Kt5bNngw8pC5M70TRpKgAQ9TyeeI--hgMr1tH811W7JjPViIgY0w__"
            alt="Montgomery Civil Rights Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Montgomery</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Birthplace and culmination point of the Civil Rights Movement
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <p className="text-lg leading-relaxed text-card-foreground">
              In Montgomery, engage with the stirring narratives of the Equal Justice Initiative, which will challenge, educate, and inspire. Montgomery's pivotal role as both the birthplace of the modern Civil Rights Movement with the Bus Boycott and the culmination point of the Selma to Montgomery march makes it an essential stop on any civil rights journey.
            </p>
          </div>
        </section>

        {/* Itinerary Locations */}
        <section className="py-16">
          <div className="container max-w-6xl space-y-16">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Tour Itinerary</h2>

            {/* Rosa Parks Museum */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Rosa Parks Museum</h3>
                <h4 className="text-xl text-accent font-semibold">The Spark That Ignited a Movement</h4>
                <p className="text-lg leading-relaxed">
                  On December 1, 1955, Rosa Parks refused to give up her seat to a white passenger on a Montgomery city bus, an act of defiance that sparked the Montgomery Bus Boycott and launched the modern Civil Rights Movement. The Rosa Parks Museum, located at the site where Parks was arrested, tells the story of her courageous stand and the 381-day boycott that followed.
                </p>
                <p className="text-lg leading-relaxed">
                  Participants will experience interactive exhibits including a restored 1950s bus, a recreation of the moment of Parks' arrest, and comprehensive displays on the Montgomery Bus Boycott. The museum explores how this grassroots movement, led by Dr. Martin Luther King Jr. and the Montgomery Improvement Association, successfully desegregated the city's bus system and demonstrated the power of nonviolent resistance.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The Montgomery Bus Boycott</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Lasted 381 days (Dec 1955 - Dec 1956)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>40,000 Black riders boycotted city buses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Organized carpools and walking campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Ended with Supreme Court ruling buses must desegregate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dexter Avenue King Memorial Baptist Church */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Dr. King's Ministry</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Dr. King served as pastor from 1954-1960</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Headquarters for Montgomery Bus Boycott</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Site of mass meetings and strategy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Where Dr. King developed his philosophy of nonviolence</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Dexter Avenue King Memorial Baptist Church</h3>
                <h4 className="text-xl text-accent font-semibold">Dr. King's Pulpit</h4>
                <p className="text-lg leading-relaxed">
                  Dexter Avenue King Memorial Baptist Church, located just steps from the Alabama State Capitol, was Dr. Martin Luther King Jr.'s first pastorate. It was from this church that the 26-year-old minister helped organize and lead the Montgomery Bus Boycott, establishing himself as a national leader of the Civil Rights Movement.
                </p>
                <p className="text-lg leading-relaxed">
                  The church served as the headquarters for the Montgomery Improvement Association and hosted countless strategy meetings. Tour participants will visit the sanctuary where Dr. King preached, see the basement where boycott meetings were held, and learn about the development of his philosophy of nonviolent resistance. The church's proximity to the state capitol symbolizes the movement's challenge to political power.
                </p>
              </div>
            </div>

            {/* National Memorial for Peace and Justice */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">National Memorial for Peace and Justice</h3>
                <h4 className="text-xl text-accent font-semibold">Confronting Racial Terror</h4>
                <p className="text-lg leading-relaxed">
                  The National Memorial for Peace and Justice, opened in 2018 by the Equal Justice Initiative, is the nation's first memorial dedicated to the legacy of enslaved Black people, people terrorized by lynching, African Americans humiliated by racial segregation and Jim Crow, and people of color burdened with contemporary presumptions of guilt and police violence.
                </p>
                <p className="text-lg leading-relaxed">
                  The memorial features over 800 hanging steel monuments, one for each county in the United States where a racial terror lynching took place. As visitors walk through the memorial, the ground slowly descends, and the monuments begin to hang overhead, creating a powerful and haunting experience. Participants will confront this difficult history and understand its connection to contemporary issues of racial injustice.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Memorial Impact</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Documents over 4,400 racial terror lynchings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Represents 800+ counties across America</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Connects historical terror to present injustice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Promotes truth-telling and reconciliation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legacy Museum */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Museum Themes</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Enslavement and the domestic slave trade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Racial terror and lynching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Segregation and racial hierarchy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Mass incarceration and contemporary injustice</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Legacy Museum</h3>
                <h4 className="text-xl text-accent font-semibold">From Enslavement to Mass Incarceration</h4>
                <p className="text-lg leading-relaxed">
                  The Legacy Museum, also created by the Equal Justice Initiative, is located on a site in Montgomery where enslaved people were once warehoused. The museum uses innovative technology, including holograms, video walls, and interactive exhibits, to explore the legacy of slavery and its connection to contemporary issues of racial injustice and mass incarceration.
                </p>
                <p className="text-lg leading-relaxed">
                  Participants will encounter first-person narratives from enslaved people, witness the evolution of racial terror through lynching, experience the humiliation of Jim Crow segregation, and understand how these historical injustices connect to today's criminal justice system. The museum challenges visitors to confront uncomfortable truths and consider their role in creating a more just society.
                </p>
              </div>
            </div>

            {/* Alabama State Capitol */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Alabama State Capitol</h3>
                <h4 className="text-xl text-accent font-semibold">Where the March Concluded</h4>
                <p className="text-lg leading-relaxed">
                  The Alabama State Capitol was the destination and symbolic goal of the Selma to Montgomery marches. On March 25, 1965, after five days of walking 54 miles, 25,000 marchers gathered on the capitol steps where Dr. Martin Luther King Jr. delivered his powerful "How Long, Not Long" speech, declaring that the arc of the moral universe bends toward justice.
                </p>
                <p className="text-lg leading-relaxed">
                  The capitol also served as the first Confederate capitol and the site where Jefferson Davis took the oath of office as president of the Confederacy. This duality—as both a symbol of the Confederacy and the destination of the voting rights march—makes it a powerful site for understanding the long struggle for racial justice in America. Tour participants will stand on the steps where Dr. King spoke and reflect on the journey from Selma.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Historical Significance</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Destination of Selma to Montgomery march</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Site of Dr. King's "How Long, Not Long" speech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Former Confederate capitol building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Symbol of political power and resistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Experience Montgomery's Transformative History</h2>
            <p className="text-lg mb-8">
              From the birthplace of the Bus Boycott to the powerful memorials of the Equal Justice Initiative, Montgomery offers profound insights into America's ongoing journey toward justice.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Your Tour
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
