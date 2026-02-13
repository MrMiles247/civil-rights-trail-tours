import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Tuskegee() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HZleZauX8yVNrUFyQKt6RU/sandbox/wbcKLCqGs31IHmAsgdmrVv-img-5_1770958676000_na1fn_dHVza2VnZWUtY2l2aWwtcmlnaHRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFpsZVphdVg4eVZOclVGeVFLdDZSVS9zYW5kYm94L3diY0tMQ3FHczMxSUhtQXNnZG1yVnYtaW1nLTVfMTc3MDk1ODY3NjAwMF9uYTFmbl9kSFZ6YTJWblpXVXRZMmwyYVd3dGNtbG5hSFJ6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XpKzXkCdcLeirULg5CoTSiYv0iS1njtzPT6oyxP1NaTl-TyAdxUTvOJ8akfycqV-bMpz89UL58WHxR5JnZPqrUYt4U5eduGQeGwpLk8itwTG52NkFA0ju-ygLnjwOKpkCl5XPyB1HxhwwxqIQqQe6EltOnsbUBpTB~bmHTcL2E0psLRkYReNXbET5fDu3yCPiBCAn8Azgg2d7qQRZhmM2atAe81LV7meXJZBwfvtIXlmbk0VYYFJtVo7oIJvplyRSGXxtjuhs5eKd2n~XFa6J2fHhKH1kcZKkMeWkzrwihI~vWVCgBrrqTNzTtpbEFGw0X4YSl0zdLmdPEs89LAocg__"
            alt="Tuskegee Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">Tuskegee</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Where innovation and resistance speak through time
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <p className="text-lg leading-relaxed text-card-foreground">
              Your exploration takes a reflective turn at Tuskegee, where the legacy of innovation and resistance speaks through time. Tuskegee represents a different but equally important aspect of the civil rights struggle—the fight for dignity, excellence, and recognition through education, scientific achievement, and military service in the face of systemic racism.
            </p>
          </div>
        </section>

        {/* Itinerary Locations */}
        <section className="py-16">
          <div className="container max-w-6xl space-y-16">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Tour Itinerary</h2>

            {/* Tuskegee University */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Tuskegee University</h3>
                <h4 className="text-xl text-accent font-semibold">A Legacy of Excellence</h4>
                <p className="text-lg leading-relaxed">
                  Tuskegee University, founded in 1881 by Booker T. Washington, stands as one of the most prestigious Historically Black Colleges and Universities (HBCUs) in America. Washington's vision was to provide practical education that would empower African Americans to achieve economic independence and social advancement despite the constraints of segregation.
                </p>
                <p className="text-lg leading-relaxed">
                  The campus itself is a National Historic Landmark, featuring the iconic Booker T. Washington Monument and beautiful historic buildings. Tour participants will walk the grounds where generations of Black students pursued excellence in agriculture, engineering, education, and the sciences. The university's commitment to "education for life" and its production of leaders in every field represents a form of resistance through achievement and excellence.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Notable Alumni & Legacy</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>George Washington Carver - agricultural scientist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Ralph Ellison - author of "Invisible Man"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Lionel Richie - Grammy-winning musician</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>First HBCU to be designated a Registered National Historic Landmark</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* George Washington Carver Museum */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Carver's Innovations</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Developed 300+ uses for peanuts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Promoted crop rotation to restore soil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Created products from sweet potatoes and soybeans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Advised presidents and international leaders</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">George Washington Carver Museum</h3>
                <h4 className="text-xl text-accent font-semibold">Scientific Excellence and Innovation</h4>
                <p className="text-lg leading-relaxed">
                  The George Washington Carver Museum celebrates the life and work of one of America's most renowned scientists. Born into slavery, Carver became an internationally acclaimed botanist, inventor, and educator whose agricultural innovations transformed Southern farming and helped lift countless families out of poverty.
                </p>
                <p className="text-lg leading-relaxed">
                  The museum houses Carver's original laboratory equipment, his extensive plant collection, and exhibits on his groundbreaking research. Participants will learn how Carver's work developing alternative crops and sustainable farming practices empowered Black farmers to achieve economic independence. His story demonstrates how scientific achievement and education served as powerful tools in the fight for racial equality and dignity.
                </p>
              </div>
            </div>

            {/* Tuskegee Airmen National Historic Site */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Tuskegee Airmen National Historic Site</h3>
                <h4 className="text-xl text-accent font-semibold">Breaking Barriers in the Sky</h4>
                <p className="text-lg leading-relaxed">
                  The Tuskegee Airmen were the first African American military aviators in the United States Armed Forces. During World War II, these pioneering pilots trained at Tuskegee Army Air Field and went on to fly with distinction in combat, despite facing intense racism and discrimination both at home and within the military.
                </p>
                <p className="text-lg leading-relaxed">
                  The National Historic Site preserves Hangar One and Hangar Two, where the Tuskegee Airmen trained, along with exhibits featuring vintage aircraft, flight simulators, and personal stories of the airmen. Tour participants will learn how these men's exceptional performance in combat—including escorting bombers with one of the lowest loss records—helped pave the way for military desegregation and challenged racist assumptions about Black Americans' capabilities. Their courage in the sky and on the ground made them civil rights pioneers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Tuskegee Airmen Achievements</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Flew over 15,000 combat sorties in WWII</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Earned 150 Distinguished Flying Crosses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Never lost a bomber to enemy fighters on escort missions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Helped lead to military desegregation in 1948</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tuskegee Syphilis Study */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-6 rounded-lg shadow-lg order-2 md:order-1">
                <h4 className="text-xl font-semibold text-card-foreground mb-4">The Study's Impact</h4>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Lasted 40 years (1932-1972)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>600 Black men enrolled, 399 with syphilis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Treatment withheld even after penicillin became available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Led to major reforms in medical ethics and informed consent</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-3xl font-bold text-primary">Tuskegee Syphilis Study Legacy</h3>
                <h4 className="text-xl text-accent font-semibold">A Dark Chapter and Its Lessons</h4>
                <p className="text-lg leading-relaxed">
                  The Tuskegee Syphilis Study (1932-1972) stands as one of the most egregious examples of medical racism in American history. The U.S. Public Health Service conducted this unethical experiment on 600 Black men, withholding treatment for syphilis even after penicillin became the standard cure, in order to study the disease's progression.
                </p>
                <p className="text-lg leading-relaxed">
                  While this painful history is not celebrated, it is an essential part of understanding the systemic racism that African Americans faced in all aspects of life, including healthcare. The study's exposure in 1972 led to major reforms in medical ethics, the establishment of institutional review boards, and requirements for informed consent. Tour participants will learn about this history and its lasting impact on medical distrust in Black communities, as well as ongoing efforts to address health disparities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Discover Tuskegee's Legacy of Excellence</h2>
            <p className="text-lg mb-8">
              From pioneering education to breaking barriers in the sky, Tuskegee's story demonstrates how achievement and excellence became powerful tools in the fight for equality.
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
