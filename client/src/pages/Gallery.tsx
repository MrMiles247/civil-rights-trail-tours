import { Link } from "wouter";
import { ArrowRight, Camera, Film, MapPin, PlayCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg";

const photos = [
  { title: "Tour Group Experience", location: "Civil Rights Trail", src: heroImage },
  { title: "Historic City Stops", location: "Memphis to Atlanta", src: heroImage },
  { title: "Landmark Walkthroughs", location: "Alabama and Tennessee", src: heroImage },
  { title: "Guest Reflections", location: "On the trail", src: heroImage },
  { title: "Museum Visits", location: "Southern heritage sites", src: heroImage },
  { title: "Community Moments", location: "Tour gatherings", src: heroImage },
];

const videos = [
  {
    title: "Guest Journey Highlights",
    caption: "Feature a short reel from recent tour groups and landmark stops.",
    duration: "00:45",
  },
  {
    title: "Historic Site Walkthroughs",
    caption: "Add guided clips from museums, memorials, churches, and trail stops.",
    duration: "02:10",
  },
  {
    title: "Behind the Tour",
    caption: "Share orientation, travel moments, meals, and guest reflections.",
    duration: "01:30",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background py-20">
          <div className="absolute inset-0 opacity-25">
            <img src={heroImage} alt="Civil Rights Trail Tours guests" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-background/80" />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Camera size={16} />
                Tour Gallery
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Pictures and videos from the Civil Rights Trail
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Explore moments from tour groups, historic cities, landmark stops, and the shared experiences that bring this history to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Share Media With Us
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/tours">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View Tours
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Photos</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tour Moments</h2>
              </div>
              <p className="max-w-2xl text-muted-foreground">
                A growing collection of highlights from the route, with space for new guest photos after every trip.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <Card key={photo.title} className="group overflow-hidden border-border bg-card">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold text-foreground">{photo.title}</h3>
                        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={15} className="text-primary" />
                          {photo.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Videos</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Video Library</h2>
              </div>
              <p className="max-w-2xl text-muted-foreground">
                Use this section for tour reels, short testimonials, historic-site walkthroughs, and orientation videos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {videos.map((video) => (
                <Card key={video.title} className="overflow-hidden border-border bg-background">
                  <CardContent className="p-0">
                    <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-primary/25 via-background to-secondary/20">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-background/80 text-primary shadow-lg">
                        <PlayCircle size={34} />
                      </div>
                      <div className="absolute bottom-4 right-4 rounded bg-background/80 px-2 py-1 text-xs font-semibold text-foreground">
                        {video.duration}
                      </div>
                    </div>
                    <div className="space-y-3 p-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Film size={16} />
                        Video Feature
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{video.title}</h3>
                      <p className="text-muted-foreground">{video.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
