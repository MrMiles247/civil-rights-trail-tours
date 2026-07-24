import { Link } from "wouter";
import {
  ArrowRight,
  Camera,
  Film,
  Images,
  MapPin,
  Music2,
  PlayCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

const heroImage =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg";
const youtubeSlideshowUrl = "https://www.youtube.com/watch?v=NB2wCdlaf_E";
const youtubeSlideshowEmbedUrl = "https://www.youtube.com/embed/NB2wCdlaf_E";
const originsMusicTitle = "Origins of American Music Tour";
const originsMusicDescription =
  "Explore the Black American influence in blues, soul, gospel, rock, and the cultural roots that continue to shape music around the world.";
const originsMusicLocation = "Memphis, Clarksdale, and the Mississippi Delta";

const fieldNotesPhotos = [
  {
    src: "/gallery/field-notes/atlanta-youth-learning.jpg",
    alt: "Students completing reflection exercises and gathering outside the National Center for Civil and Human Rights",
    location: "Atlanta, Georgia",
    title: "Learning in the landscape",
  },
  {
    src: "/gallery/field-notes/jamaica-food-fellowship.jpg",
    alt: "Jamaican meal alongside Civil Rights Trail Tours travelers on an international learning experience",
    location: "Jamaica",
    title: "Food, fellowship, and place",
  },
  {
    src: "/gallery/field-notes/caribbean-cultural-rhythm.jpg",
    alt: "Musicians and community members celebrating Caribbean cultural traditions",
    location: "Caribbean Heritage",
    title: "Rhythm carries the story",
  },
  {
    src: "/gallery/field-notes/art-memory-conversation.jpg",
    alt: "Civil Rights Trail Tours guide and guest engaging with a visual civil rights exhibit",
    location: "Cultural Immersion",
    title: "Art, memory, and conversation",
  },
  {
    src: "/gallery/field-notes/classroom-beyond-walls.jpg",
    alt: "Students gathered at the National Center for Civil and Human Rights",
    location: "Atlanta, Georgia",
    title: "A classroom beyond four walls",
  },
  {
    src: "/gallery/field-notes/sound-of-the-delta.jpg",
    alt: "Stax Soulsville marquee and a tour group at Dockery Farms",
    location: "Mississippi Delta",
    title: "The sound of the Delta",
  },
];

const originsMusicPhotos = [
  {
    src: "/gallery/origins-music/stax-soulsville-group.jpg",
    alt: "Tour group at Stax Museum in Soulsville USA",
  },
  {
    src: "/gallery/origins-music/stax-recording-studios.jpg",
    alt: "Stax Recording Studios historical marker",
  },
  {
    src: "/gallery/origins-music/ground-zero-blues-club.jpg",
    alt: "Tour group outside Ground Zero Blues Club",
  },
  {
    src: "/gallery/origins-music/clarksdale-crossroads.jpg",
    alt: "Tour group at the Clarksdale Crossroads",
  },
  {
    src: "/gallery/origins-music/dockery-farms-group.jpg",
    alt: "Tour group at Dockery Farms",
  },
  {
    src: "/gallery/origins-music/grammy-museum-mississippi.jpg",
    alt: "GRAMMY Museum Mississippi marker",
  },
  {
    src: "/gallery/origins-music/crossroads-mural-group.jpg",
    alt: "Students posing in front of a blues crossroads mural",
  },
  {
    src: "/gallery/origins-music/clarksdale-blues-mural.jpg",
    alt: "Clarksdale blues mural",
  },
  {
    src: "/gallery/origins-music/guitar-music-moment.jpg",
    alt: "Guest trying a guitar during a music tour stop",
  },
  {
    src: "/gallery/origins-music/music-tour-students.jpg",
    alt: "Students on the Origins of American Music Tour",
  },
  {
    src: "/gallery/origins-music/music-history-learning-session.jpg",
    alt: "Guests learning during a music history stop",
  },
  {
    src: "/gallery/origins-music/emmett-till-murder-trial-marker.jpg",
    alt: "Emmett Till Murder Trial historical marker",
  },
  {
    src: "/gallery/origins-music/historic-home-tour-stop.jpg",
    alt: "Historic home tour stop",
  },
  {
    src: "/gallery/origins-music/historic-home-group.jpg",
    alt: "Tour group outside a historic home",
  },
];

const originsMusicMedia = {
  id: 1,
  type: "photo",
  title: originsMusicTitle,
  description: originsMusicDescription,
  location: originsMusicLocation,
  url: originsMusicPhotos[0].src,
  thumbnailUrl: originsMusicPhotos[0].src,
  featured: true,
  published: true,
  sortOrder: 1,
};

const fallbackMedia = [
  originsMusicMedia,
  {
    id: 2,
    type: "video",
    title: "Journey on the Civil Rights Trail",
    description:
      "Travel with us through landmark cities, sacred sites, and living history while learning the stories that continue to shape our communities.",
    location: "Video Slideshow",
    url: youtubeSlideshowUrl,
    thumbnailUrl: heroImage,
    featured: true,
    published: true,
    sortOrder: 2,
  },
];

function OriginsMusicGalleryCard() {
  const previewPhotos = originsMusicPhotos.slice(1, 5);

  return (
    <Card className="group overflow-hidden border-border bg-card">
      <CardContent className="p-0">
        <div className="grid aspect-[4/3] grid-cols-[1.25fr_0.75fr] gap-1 overflow-hidden bg-background">
          <div className="relative overflow-hidden">
            <img
              src={originsMusicPhotos[0].src}
              alt={originsMusicPhotos[0].alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-primary shadow-lg">
              <Images size={14} />
              {originsMusicPhotos.length} photos
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-1">
            {previewPhotos.map(photo => (
              <div key={photo.src} className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Music2 size={16} />
            Photo Gallery
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {originsMusicTitle}
          </h3>
          <p className="text-sm leading-6 text-muted-foreground">
            {originsMusicDescription}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={15} className="text-primary" />
            {originsMusicLocation}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {originsMusicPhotos.map(photo => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="h-16 w-20 flex-none rounded object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Gallery() {
  const { data, isLoading } = trpc.crm.media.list.useQuery({
    includeUnpublished: false,
  });
  const media = data && data.length > 0 ? data : fallbackMedia;
  const photos = media
    .filter(item => item.type === "photo")
    .map(item =>
      item.title === "Tour Group Experience"
        ? { ...item, ...originsMusicMedia }
        : item
    );
  const videos = media
    .filter(item => item.type === "video")
    .map(item =>
      item.title === "Guest Journey Highlights"
        ? {
            ...item,
            title: "Journey on the Civil Rights Trail",
            description:
              "Travel with us through landmark cities, sacred sites, and living history while learning the stories that continue to shape our communities.",
            location: "Video Slideshow",
            url: youtubeSlideshowUrl,
          }
        : item
    );
  const featured =
    photos.find(item => item.featured)?.thumbnailUrl ||
    media.find(item => item.featured)?.thumbnailUrl ||
    heroImage;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background py-20">
          <div className="absolute inset-0 opacity-25">
            <img
              src={featured}
              alt="Civil Rights Trail Tours guests"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-background/80" />
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Camera size={16} />
                Tour Gallery
              </div>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Pictures and videos from the Civil Rights Trail
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Explore moments from tour groups, historic cities, landmark
                stops, and the shared experiences that bring this history to
                life.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Share Media With Us
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/tours">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    View Tours
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  Photos
                </p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Tour Moments
                </h2>
              </div>
              <p className="max-w-2xl text-muted-foreground">
                A growing collection of highlights managed from the CRM at
                /admin.
              </p>
            </div>
            {isLoading ? (
              <p className="text-muted-foreground">Loading gallery...</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo, index) =>
                  photo.title === originsMusicTitle ? (
                    <OriginsMusicGalleryCard key={photo.id} />
                  ) : (
                    <Card
                      key={photo.id}
                      className="group overflow-hidden border-border bg-card"
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={photo.thumbnailUrl || photo.url || heroImage}
                            alt={photo.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-xl font-bold text-foreground">
                              {photo.title}
                            </h3>
                            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin size={15} className="text-primary" />
                              {photo.location}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Photo Gallery
              </p>
              <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Travel <span className="text-primary">Journal</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Moments of learning, culture, music, food, and community from
                journeys across the Civil Rights Trail and beyond.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {fieldNotesPhotos.map(photo => (
                <figure
                  key={photo.src}
                  className="group overflow-hidden border border-border bg-background"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="border-t border-border p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {photo.location}
                    </p>
                    <p className="mt-1 text-xl font-bold text-foreground">
                      {photo.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  Videos
                </p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Video Library
                </h2>
              </div>
              <p className="max-w-2xl text-muted-foreground">
                Tour reels, testimonials, walkthroughs, and orientation videos
                managed from the CRM.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {videos.map(video => (
                <Card
                  key={video.id}
                  className="overflow-hidden border-border bg-background"
                >
                  <CardContent className="p-0">
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 via-background to-secondary/20">
                      {video.url === youtubeSlideshowUrl ? (
                        <iframe
                          className="h-full w-full"
                          src={youtubeSlideshowEmbedUrl}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : video.url ? (
                        <video
                          src={video.url}
                          poster={video.thumbnailUrl || heroImage}
                          controls
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <>
                          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-background/80 text-primary shadow-lg">
                            <PlayCircle size={34} />
                          </div>
                          <div className="absolute bottom-4 right-4 rounded bg-background/80 px-2 py-1 text-xs font-semibold text-foreground">
                            Ready for video
                          </div>
                        </>
                      )}
                    </div>
                    <div className="space-y-3 p-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Film size={16} />
                        Video Feature
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {video.description}
                      </p>
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
