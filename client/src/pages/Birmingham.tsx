import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Birmingham() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HZleZauX8yVNrUFyQKt6RU/sandbox/wbcKLCqGs31IHmAsgdmrVv-img-2_1770958675000_na1fn_YmlybWluZ2hhbS1jaXZpbC1yaWdodHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFpsZVphdVg4eVZOclVGeVFLdDZSVS9zYW5kYm94L3diY0tMQ3FHczMxSUhtQXNnZG1yVnYtaW1nLTJfMTc3MDk1ODY3NTAwMF9uYTFmbl9ZbWx5YldsdVoyaGhiUzFqYVhacGJDMXlhV2RvZEhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IRE7UiAWPsMgo1PElRglp4K1XHnan3f8Bo5uL3YSh7ZRPxiruGtHJB2HvdWyInaz8y7G6gsULpL6qop1GDUMDoUF5aDjoS0GVUeUQLnXnYbFK-vK2EoanVomiDEad48DAK2mp4npqMYLibezLlz7YDlJpIGDqvVSPf~uDz43oWSAZK7a~f9k2i~z8P5JE-nkjgDdfhCvNsDcDuPeqDKc9RG7CGnMLMdNrzOvF-taN79ADuuq86KaH9o97pUAT0vXEBsOM5i4H9gNHhGqsp~BmpyVf~SmvK8pCGGiadRxXtg5XgWAzsU2DBw31lNZV3GN1Wgrgnu3z4Zi5uaFajeKkg__"
            alt="Birmingham Civil Rights Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Birmingham</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A city where the movement's indomitable spirit refused to be quenched
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <p className="text-lg leading-relaxed text-card-foreground">
              Birmingham unfolds as a city where the movement's indomitable spirit refused to be quenched, offering relevant lessons today. Once known as "Bombingham" for the frequency of racist attacks, Birmingham became a crucible of the Civil Rights Movement. The courage displayed here by activists, including children, in the face of brutal violence helped turn the tide of public opinion and led to landmark civil rights legislation.
            </p>
          </div>
        </section>

        {/* Itinerary Locations */}
        <section className="py-16">
          <div className="container max-w-6xl space-y-16">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Tour Itinerary</h2>

            {/* 16th Street Baptist Church */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">16th Street Baptist Church</h3>
                <h4 className="text-xl text-accent font-semibold">A Sacred Memorial</h4>
                <p className="text-lg leading-relaxed">
                  The 16th Street Baptist Church stands as both a symbol of tragedy and resilience. On September 15, 1963, Ku Klux Klan members planted dynamite beneath the church steps, killing four young girls—Addie Mae Collins, Cynthia Wesley, Carole Robertson, and Carol Denise McNair—and injuring 22 others. This horrific act of terrorism shocked the nation and became a turning point in the Civil Rights Movement.
                </p>
                <p className="text-lg leading-relaxed">
                  Before the bombing, the church served as a rallying point for civil rights activities and mass meetings. Dr. Martin Luther King Jr. and other leaders organized demonstrations from this location. Today, participants will tour the church, view the basement where the bomb exploded, see the restored stained-glass window depicting a Black Christ, and pay respects at the memorial to the four young martyrs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The Four Little Girls</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Addie Mae Collins (14 years old)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Cynthia Wesley (14 years old)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Carole Robertson (14 years old)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Carol Denise McNair (11 years old)</span>
                  </li>
                  <li className="mt-4 pt-4 border-t border-border">
                    <em className="text-sm">Their sacrifice galvanized support for the Civil Rights Act of 1964</em>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kelly Ingram Park */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The Children's Crusade</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>May 2-5, 1963: Over 1,000 students marched</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Police used fire hoses and attack dogs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Images shocked the world and changed public opinion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Led to desegregation agreement in Birmingham</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Kelly Ingram Park</h3>
                <h4 className="text-xl text-accent font-semibold">A Place of Revolution</h4>
                <p className="text-lg leading-relaxed">
                  Kelly Ingram Park, located directly across from the 16th Street Baptist Church, was ground zero for many of the most dramatic confrontations of the Birmingham Campaign. In May 1963, the park became the staging ground for the Children's Crusade, where thousands of young students, some as young as seven years old, marched for freedom and faced brutal police violence.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, the park serves as a "Place of Revolution and Reconciliation," featuring powerful sculptures that depict the violence protesters faced, including statues of children being attacked by police dogs and knocked down by fire hoses. Tour participants will walk through this outdoor museum, experiencing the physical space where young people demonstrated extraordinary courage in the face of state-sanctioned violence.
                </p>
              </div>
            </div>

            {/* Birmingham Civil Rights Institute */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Birmingham Civil Rights Institute</h3>
                <h4 className="text-xl text-accent font-semibold">A Comprehensive Museum Experience</h4>
                <p className="text-lg leading-relaxed">
                  The Birmingham Civil Rights Institute is a world-class museum and research center that provides comprehensive context for understanding the Birmingham Campaign and the broader Civil Rights Movement. Through multimedia exhibits, artifacts, and interactive displays, the Institute chronicles the struggle for civil rights from the 1920s through the present day.
                </p>
                <p className="text-lg leading-relaxed">
                  Participants will explore exhibits on segregation in Birmingham, the role of Fred Shuttlesworth and other local leaders, the Birmingham Campaign of 1963, and the ongoing fight for human rights globally. The Institute's powerful exhibits include a recreation of the Birmingham jail where Dr. King wrote his famous "Letter from Birmingham Jail," original protest signs, and testimonies from movement participants.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Exhibit Highlights</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>"Barriers" gallery on segregation era</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>"Confrontation" gallery on Birmingham Campaign</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Replica of Birmingham jail cell</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>"Movement" gallery on continuing human rights work</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* A.G. Gaston Motel */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Historical Significance</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Headquarters for Birmingham Campaign strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Dr. King's "war room" during 1963 protests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Bombed by segregationists on May 11, 1963</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Symbol of Black economic empowerment</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">A.G. Gaston Motel</h3>
                <h4 className="text-xl text-accent font-semibold">The Movement's Headquarters</h4>
                <p className="text-lg leading-relaxed">
                  The A.G. Gaston Motel, owned by Black entrepreneur A.G. Gaston, served as the de facto headquarters for the Civil Rights Movement in Birmingham during the 1963 campaign. Dr. Martin Luther King Jr., Ralph Abernathy, and other leaders stayed at the motel and planned strategy in Room 30, which became known as the "war room."
                </p>
                <p className="text-lg leading-relaxed">
                  On May 11, 1963, just hours after an agreement was reached to desegregate Birmingham, the motel was bombed by white supremacists in an attempt to assassinate Dr. King (who had already left the city). The bombing sparked riots and nearly derailed the hard-won agreement. Today, participants will learn about the motel's role as a safe haven for civil rights leaders and a symbol of Black economic achievement during the Jim Crow era.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Witness Birmingham's Transformation</h2>
            <p className="text-lg mb-8">
              From "Bombingham" to a beacon of reconciliation, discover how courage and sacrifice transformed a city and a nation. Join us on this powerful journey through Birmingham's civil rights history.
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
