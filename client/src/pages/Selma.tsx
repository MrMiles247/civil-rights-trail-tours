import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Selma() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HZleZauX8yVNrUFyQKt6RU/sandbox/wbcKLCqGs31IHmAsgdmrVv-img-3_1770958672000_na1fn_c2VsbWEtY2l2aWwtcmlnaHRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFpsZVphdVg4eVZOclVGeVFLdDZSVS9zYW5kYm94L3diY0tMQ3FHczMxSUhtQXNnZG1yVnYtaW1nLTNfMTc3MDk1ODY3MjAwMF9uYTFmbl9jMlZzYldFdFkybDJhV3d0Y21sbmFIUnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OXR3x9stmr--san1trYSo444gJKTuY8-VOLfKzRm2MwpqTCuGHuyX5PHPlXfKA2lBGqZLxP6r4H00h8NfQSZPl-YlqFE9iJpJtq432QlkWemmTvDQlHc3s~IscOjmUIVAYPbKTNsAOowqUnqOjXPxPBix4IsqRIIXBnn6fZFzknT6DyoDGw7Rt5jEWIsmbjpjthWfS31tAxdRjDnWI82oSRqv49jtDdZFo8tkrijU7qN-aAESclUzowFmSYHc1O~B95ZZWVexpWeGyUkrT4~xmVcDAZvfzrifS~B8IeJMHFcYMeUxj-BuZSW6UlSPjdqF2JY4qnFFguXGlHzrdSDOA__"
            alt="Selma Civil Rights Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Selma</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A symbol of courage and a beacon for change
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <p className="text-lg leading-relaxed text-card-foreground">
              Selma stands on the Edmund Pettus Bridge, a symbol of courage and a beacon for change. The events that unfolded here in 1965 shocked the nation and led directly to the passage of the Voting Rights Act. The courage of those who marched across the bridge in the face of brutal violence remains an enduring testament to the power of nonviolent resistance.
            </p>
          </div>
        </section>

        {/* Itinerary Locations */}
        <section className="py-16">
          <div className="container max-w-6xl space-y-16">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Tour Itinerary</h2>

            {/* Edmund Pettus Bridge */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Edmund Pettus Bridge</h3>
                <h4 className="text-xl text-accent font-semibold">Bloody Sunday - March 7, 1965</h4>
                <p className="text-lg leading-relaxed">
                  The Edmund Pettus Bridge is one of the most iconic landmarks of the Civil Rights Movement. On March 7, 1965—a day that became known as "Bloody Sunday"—approximately 600 voting rights marchers attempted to cross this bridge on their way from Selma to Montgomery. As they reached the apex of the bridge, they were met by Alabama State Troopers and local law enforcement who brutally attacked them with billy clubs, tear gas, and bullwhips.
                </p>
                <p className="text-lg leading-relaxed">
                  The violence was captured on television and broadcast across the nation, shocking Americans and galvanizing support for voting rights legislation. Participants will walk across this historic bridge, stand where John Lewis and Hosea Williams led the marchers, and reflect on the courage it took to face such violence in pursuit of the fundamental right to vote.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The Three Marches</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>March 7:</strong> Bloody Sunday - marchers beaten back</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>March 9:</strong> Turnaround Tuesday - symbolic march</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span><strong>March 21-25:</strong> Successful march to Montgomery</span>
                  </li>
                  <li className="mt-4 pt-4 border-t border-border">
                    <em className="text-sm">Led to the Voting Rights Act of 1965</em>
                  </li>
                </ul>
              </div>
            </div>

            {/* Brown Chapel AME Church */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Church's Role</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Starting point for all three Selma marches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Meeting place for voting rights organizers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Sanctuary for civil rights activists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>National Historic Landmark since 1997</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Brown Chapel AME Church</h3>
                <h4 className="text-xl text-accent font-semibold">The Movement's Spiritual Home</h4>
                <p className="text-lg leading-relaxed">
                  Brown Chapel African Methodist Episcopal Church, with its distinctive twin towers, served as the headquarters and starting point for the Selma Voting Rights Movement. This sacred space hosted mass meetings, strategy sessions, and served as a gathering place for activists from across the country who came to Selma to support the voting rights campaign.
                </p>
                <p className="text-lg leading-relaxed">
                  Dr. Martin Luther King Jr. spoke from its pulpit, and it was from the steps of Brown Chapel that the three marches to Montgomery began. The church provided not only spiritual sustenance but also physical sanctuary for activists facing violence and intimidation. Tour participants will visit this historic church, see the sanctuary where mass meetings were held, and understand its central role in the voting rights struggle.
                </p>
              </div>
            </div>

            {/* National Voting Rights Museum */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">National Voting Rights Museum</h3>
                <h4 className="text-xl text-accent font-semibold">Preserving the Story</h4>
                <p className="text-lg leading-relaxed">
                  Located at the foot of the Edmund Pettus Bridge, the National Voting Rights Museum and Institute tells the story of the struggle for voting rights in America, with a particular focus on the Selma to Montgomery marches and the passage of the Voting Rights Act of 1965. The museum was founded by activists who participated in the movement, ensuring that the story is told by those who lived it.
                </p>
                <p className="text-lg leading-relaxed">
                  Exhibits include photographs from Bloody Sunday, artifacts from the marches, interactive displays on voter suppression tactics, and testimonies from foot soldiers of the movement. Participants will gain a deeper understanding of the systematic disenfranchisement of Black voters and the courageous efforts to overcome it. The museum also addresses contemporary voting rights challenges, connecting past struggles to present-day issues.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Museum Highlights</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Bloody Sunday photographs and artifacts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Voter registration literacy tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Footprints of the foot soldiers exhibit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Contemporary voting rights issues</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Selma to Montgomery Trail */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The 54-Mile Journey</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Started with 3,200 marchers from Selma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Grew to 25,000 by the time they reached Montgomery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Protected by federal troops and National Guard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Designated National Historic Trail in 1996</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Selma to Montgomery National Historic Trail</h3>
                <h4 className="text-xl text-accent font-semibold">The Journey to Justice</h4>
                <p className="text-lg leading-relaxed">
                  The Selma to Montgomery National Historic Trail commemorates the 54-mile route that marchers traveled over five days in March 1965. After two failed attempts, the third march—protected by federal troops ordered by President Lyndon B. Johnson—successfully reached the Alabama State Capitol in Montgomery on March 25, 1965.
                </p>
                <p className="text-lg leading-relaxed">
                  Tour participants will learn about the logistics of the march, the campsites where marchers rested each night, the support provided by local Black families along the route, and the historic rally at the capitol where Dr. King delivered his "How Long, Not Long" speech. The trail represents not just a physical journey, but a moral journey that transformed America's commitment to voting rights and democracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Walk in the Footsteps of Heroes</h2>
            <p className="text-lg mb-8">
              Cross the Edmund Pettus Bridge and experience the power of courage in the face of injustice. Discover how Selma's voting rights struggle changed America forever.
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
