import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Memphis() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HZleZauX8yVNrUFyQKt6RU/sandbox/wbcKLCqGs31IHmAsgdmrVv-img-1_1770958671000_na1fn_bW1tcGhpcy1jaXZpbC1yaWdodHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFpsZVphdVg4eVZOclVGeVFLdDZSVS9zYW5kYm94L3diY0tMQ3FHczMxSUhtQXNnZG1yVnYtaW1nLTFfMTc3MDk1ODY3MTAwMF9uYTFmbl9iV1Z0Y0docGN5MWphWFpwYkMxeWFXZG9kSE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=swmChdkEiQRZrDGjEX5S~8h4Y~YoBdWYdFo4UkLrhjHj6FfAPClhUa-CbEFxPnawCWzxUlK2N6vrG4BbbYWxBPYFWD1RYUAUmA6rIG~ZNtOywMNO6Ro-0eoTrHORyXzt83odp5E3yJWGlJG8A75EPwHa9Ryr1MhCHm4PuiokDlJIS4IL90v-1C0C8sDGte2zsy6TBrm3nFsyPoflvBomMt6nMi72ntfjiONe~Mb~X~gZM2YUP7~VWHNJhDjVE2Tq9CorXKz0XJz9M~-SVZZcFQrHnxcbH9nC2wP99jvtu8s952yPN5lLHqm3EExMcqbXsEasoJFStc2kfcvJbNMk-A__"
            alt="Memphis Civil Rights Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Memphis</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Where the echoes of blues and the fight for equality resonate through the air
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <p className="text-lg leading-relaxed text-card-foreground">
              Your journey begins in Memphis, where the echoes of blues and the fight for equality resonate through the air. Here, you will tread the same paths that legends once walked, feeling the weight and the hope of history. Memphis stands as a testament to the power of music, the courage of activists, and the tragic loss that galvanized a nation.
            </p>
          </div>
        </section>

        {/* Itinerary Locations */}
        <section className="py-16">
          <div className="container max-w-6xl space-y-16">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Tour Itinerary</h2>

            {/* National Civil Rights Museum */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">National Civil Rights Museum</h3>
                <h4 className="text-xl text-accent font-semibold">The Lorraine Motel</h4>
                <p className="text-lg leading-relaxed">
                  The National Civil Rights Museum at the Lorraine Motel stands as a powerful memorial to Dr. Martin Luther King Jr., who was assassinated on its balcony on April 4, 1968. This historic site preserves the rooms as they were on that tragic day and offers comprehensive exhibits chronicling the American Civil Rights Movement from the 17th century to the present.
                </p>
                <p className="text-lg leading-relaxed">
                  Participants will have the opportunity to stand on the balcony where Dr. King spent his final moments, view the preserved motel rooms, and explore exhibits featuring the Montgomery Bus Boycott, the Little Rock Nine, lunch counter sit-ins, Freedom Riders, and the Memphis Sanitation Workers' Strike that brought Dr. King to the city.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Key Highlights</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Dr. King's preserved motel room (Room 306)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>The iconic turquoise balcony memorial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Interactive exhibits on the Civil Rights Movement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>The boarding house where James Earl Ray fired the fatal shot</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Beale Street */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Cultural Significance</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Birthplace of the blues and Memphis soul</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Historic African American business district</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Home to legendary music venues and clubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>W.C. Handy's musical legacy and influence</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Beale Street Historic District</h3>
                <h4 className="text-xl text-accent font-semibold">The Home of the Blues</h4>
                <p className="text-lg leading-relaxed">
                  Beale Street has been called the "Home of the Blues" and "Birthplace of Rock 'n' Roll." This historic street was one of the few places in the segregated South where Black and white people could mingle freely. It became a thriving African American business and entertainment district in the early 20th century.
                </p>
                <p className="text-lg leading-relaxed">
                  Tour participants will walk the same streets where W.C. Handy, B.B. King, and countless other blues legends performed, learning how music became a form of resistance and cultural expression during the Civil Rights era. The street's vibrant history demonstrates how African American culture flourished despite systemic oppression.
                </p>
              </div>
            </div>

            {/* Memphis Sanitation Workers Strike */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">I AM A MAN Plaza</h3>
                <h4 className="text-xl text-accent font-semibold">The 1968 Sanitation Workers' Strike</h4>
                <p className="text-lg leading-relaxed">
                  The Memphis Sanitation Workers' Strike of 1968 was a pivotal moment in the Civil Rights Movement and labor history. On February 12, 1968, over 1,300 Black sanitation workers went on strike to protest unsafe working conditions, discriminatory treatment, and poverty wages. Their iconic signs declaring "I AM A MAN" became a powerful statement of dignity and human rights.
                </p>
                <p className="text-lg leading-relaxed">
                  Dr. Martin Luther King Jr. came to Memphis to support the striking workers, delivering his prophetic "I've Been to the Mountaintop" speech at Mason Temple on April 3, 1968—the night before his assassination. Participants will visit the I AM A MAN Plaza memorial and learn how this labor struggle intersected with the broader fight for civil rights and economic justice.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Strike Impact</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>United civil rights and labor movements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Dr. King's final campaign for economic justice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Victory achieved after 65 days of striking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Recognition of union rights and wage increases</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mason Temple */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Historic Significance</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Site of Dr. King's final speech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Headquarters of Church of God in Christ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Gathering place for civil rights rallies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Prophetic "Mountaintop" speech delivered here</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Mason Temple</h3>
                <h4 className="text-xl text-accent font-semibold">"I've Been to the Mountaintop"</h4>
                <p className="text-lg leading-relaxed">
                  Mason Temple, the international headquarters of the Church of God in Christ, was the site of Dr. Martin Luther King Jr.'s final and perhaps most prophetic speech on April 3, 1968. Despite a stormy night and death threats, Dr. King delivered his powerful "I've Been to the Mountaintop" sermon to a crowd of sanitation workers and supporters.
                </p>
                <p className="text-lg leading-relaxed">
                  In this speech, Dr. King reflected on the Civil Rights Movement's achievements and spoke with eerie prescience about his own mortality: "I've seen the Promised Land. I may not get there with you. But I want you to know tonight, that we, as a people, will get to the Promised Land." Tour participants will stand in this sacred space and reflect on Dr. King's final message of hope and determination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Experience Memphis's Civil Rights Legacy</h2>
            <p className="text-lg mb-8">
              Walk in the footsteps of legends and witness where history was made. Book your tour today to explore Memphis's profound contribution to the Civil Rights Movement.
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
