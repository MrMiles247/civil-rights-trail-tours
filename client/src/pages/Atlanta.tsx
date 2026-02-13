import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Atlanta() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HZleZauX8yVNrUFyQKt6RU/sandbox/WXNlSPGRkfU3ja1EAWWpfd-img-1_1770958731000_na1fn_YXRsYW50YS1jaXZpbC1yaWdodHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFpsZVphdVg4eVZOclVGeVFLdDZSVS9zYW5kYm94L1dYTmxTUEdSa2ZVM2phMUVBV1dwZmQtaW1nLTFfMTc3MDk1ODczMTAwMF9uYTFmbl9ZWFJzWVc1MFlTMWphWFpwYkMxeWFXZG9kSE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JVcn4otl~40YegEmK9y7ZPuUDKsHrCk-tawdHjH4RXfyFAPfXZSJhEtMlR6wqgP28MSw3Bav9qG9Y6HrxrguCFCFho049MHyr2drSipKq9rSqJdOgXWt944VhUyknP-c18smiHRayLgKZs7YA~KWodPb7FdMLssQLnJpEpIWmd85zOwhOGphMnMc6ar9ryMyZoi0NrKIASgPusN4CHVzFn5vL9IH7o9X6YC-uC34vuoIpLolDywnS9~NoIP5C8pf9NmB0MgsR3Fjd2odgxRVBTQ2PI~yuGhjV1iMH6ydSQDq5yqcankIoZeNOnA6DRH6hpRcuYan2ahHme-oOBePYg__"
            alt="Atlanta Civil Rights Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Atlanta</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A celebration of civil rights achievements and an invitation to carry the torch forward
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <p className="text-lg leading-relaxed text-card-foreground">
              Atlanta caps your tour with a celebration of civil rights achievements and an invitation to carry its torch forward. As Dr. Martin Luther King Jr.'s birthplace and home, Atlanta holds a special place in civil rights history and continues to be a center for human rights work today. The city represents both the culmination of past struggles and the ongoing work of building a more just future.
            </p>
          </div>
        </section>

        {/* Itinerary Locations */}
        <section className="py-16">
          <div className="container max-w-6xl space-y-16">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Tour Itinerary</h2>

            {/* Martin Luther King Jr. Birth Home */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Martin Luther King Jr. Birth Home</h3>
                <h4 className="text-xl text-accent font-semibold">Where a Leader Was Born</h4>
                <p className="text-lg leading-relaxed">
                  The modest Queen Anne-style house at 501 Auburn Avenue is where Martin Luther King Jr. was born on January 15, 1929, and where he spent the first twelve years of his life. The home, preserved as it appeared during King's childhood, offers an intimate glimpse into the formative years of the man who would become the most prominent leader of the Civil Rights Movement.
                </p>
                <p className="text-lg leading-relaxed">
                  Tour participants will walk through the rooms where young Martin played, studied, and learned the values of faith, education, and social justice from his parents, Reverend Martin Luther King Sr. and Alberta Williams King. The home's location in the Sweet Auburn neighborhood, once the center of Black business and culture in Atlanta, provides context for understanding the community that shaped Dr. King's worldview and commitment to equality.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The King Family Legacy</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Dr. King lived here from 1929-1941</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>His father was pastor of Ebenezer Baptist Church</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>His mother was a church organist and choir director</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Restored to 1930s appearance by the National Park Service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ebenezer Baptist Church */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Church's Historic Role</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Dr. King baptized here as a child</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Ordained as a minister here in 1947</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Served as co-pastor with his father (1960-1968)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Site of his funeral service in 1968</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Ebenezer Baptist Church</h3>
                <h4 className="text-xl text-accent font-semibold">The King Family's Spiritual Home</h4>
                <p className="text-lg leading-relaxed">
                  Ebenezer Baptist Church, founded in 1886, was the spiritual home of the King family for three generations. Dr. King's grandfather, Reverend A.D. Williams, served as pastor from 1894 to 1931, followed by Martin Luther King Sr. from 1931 to 1975. Martin Luther King Jr. was baptized, ordained, and served as co-pastor at Ebenezer, and his funeral was held here after his assassination.
                </p>
                <p className="text-lg leading-relaxed">
                  The historic sanctuary, preserved as part of the Martin Luther King Jr. National Historical Park, allows visitors to sit in the pews where Dr. King preached and where his family worshipped. Participants will hear recordings of Dr. King's sermons and learn about the church's role as a center of civil rights organizing and community activism. The church continues to be an active congregation in a new building next door, carrying forward the King family's legacy of faith and social justice.
                </p>
              </div>
            </div>

            {/* The King Center */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">The Martin Luther King Jr. Center for Nonviolent Social Change</h3>
                <h4 className="text-xl text-accent font-semibold">Honoring the Dream</h4>
                <p className="text-lg leading-relaxed">
                  The King Center, established by Coretta Scott King in 1968, serves as the official living memorial dedicated to the advancement of Dr. King's legacy of nonviolence. The center houses Dr. King's tomb, which sits in a reflecting pool alongside the eternal flame, creating a powerful and contemplative memorial space. Coretta Scott King is also interred here, alongside her husband.
                </p>
                <p className="text-lg leading-relaxed">
                  The center features exhibits on Dr. King's life and philosophy, including his personal papers, photographs, and artifacts from the Civil Rights Movement. The Freedom Hall complex includes a multimedia exhibition on Gandhi's influence on King's philosophy of nonviolence. Tour participants will pay their respects at the crypt, walk through the reflecting pool area, and explore exhibits that connect Dr. King's work to contemporary social justice movements around the world.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The King Center's Mission</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Preserve and advance Dr. King's legacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Educate on nonviolent social change</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Train activists in nonviolent philosophy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Connect past struggles to present movements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Center for Civil and Human Rights */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Museum Highlights</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Morehouse College Student Nonviolent Coordinating Committee papers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Interactive lunch counter sit-in experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Global human rights gallery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Contemporary social justice connections</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Center for Civil and Human Rights</h3>
                <h4 className="text-xl text-accent font-semibold">Connecting Past to Present</h4>
                <p className="text-lg leading-relaxed">
                  The Center for Civil and Human Rights, opened in 2014, is a modern museum that connects the American Civil Rights Movement to contemporary human rights struggles around the world. The center houses the personal papers of Dr. Martin Luther King Jr. and features powerful, immersive exhibits that allow visitors to experience key moments of the movement.
                </p>
                <p className="text-lg leading-relaxed">
                  One of the most impactful exhibits is an interactive lunch counter sit-in simulation, where participants experience the verbal and physical abuse that peaceful protesters endured. The museum also features a global human rights gallery that examines contemporary issues such as LGBTQ+ rights, women's rights, and freedom of expression. Tour participants will leave with a deeper understanding of how the principles and tactics of the Civil Rights Movement continue to inspire activists fighting for justice today.
                </p>
              </div>
            </div>

            {/* Sweet Auburn Historic District */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Sweet Auburn Historic District</h3>
                <h4 className="text-xl text-accent font-semibold">The Richest Negro Street in the World</h4>
                <p className="text-lg leading-relaxed">
                  Auburn Avenue, known as "Sweet Auburn," was once called "the richest Negro street in the world" by Fortune magazine. This thriving African American business and cultural district was home to Black-owned banks, insurance companies, newspapers, restaurants, and entertainment venues during the era of segregation. It represented Black economic empowerment and self-sufficiency in the face of systemic racism.
                </p>
                <p className="text-lg leading-relaxed">
                  Walking through Sweet Auburn today, participants will see historic buildings that housed important Black institutions, learn about the entrepreneurs who built this community, and understand how economic power supported the Civil Rights Movement. The district includes the historic Royal Peacock Club, where legendary musicians performed, and the Atlanta Daily World building, home to one of the oldest Black newspapers in America. Sweet Auburn represents the resilience, creativity, and determination of Black Atlanta.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Sweet Auburn Legacy</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Center of Black business and culture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Home to Black-owned banks and insurance companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Birthplace of civil rights leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Symbol of Black economic empowerment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Complete Your Journey in Atlanta</h2>
            <p className="text-lg mb-8">
              Honor Dr. King's legacy and discover how Atlanta continues to lead the fight for civil and human rights. End your tour with inspiration to carry the torch of justice forward.
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
