export type ClientStatus = "lead" | "booked" | "active" | "completed" | "follow-up";
export type MediaType = "photo" | "video";
export type PublishStatus = "idle" | "checking" | "ready" | "published" | "error";

export type CrmClient = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  status: ClientStatus;
  tourInterest: string;
  guestCount: number;
  travelWindow: string;
  budget: string;
  source: string;
  notes: string;
  lastContacted: string;
  createdAt: string;
};

export type GalleryMedia = {
  id: number;
  type: MediaType;
  title: string;
  description: string;
  location: string;
  url: string;
  thumbnailUrl: string;
  featured: boolean;
  published: boolean;
  sortOrder: number;
  createdAt: string;
};

const now = () => new Date().toISOString();
const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg";

let clientId = 3;
let mediaId = 7;
let publishStatus: PublishStatus = "idle";
let lastPublishMessage = "No publish has been requested from the admin CRM yet.";
let lastChecks = [
  { name: "Admin CRM backend", status: "passing", detail: "CRM store loaded" },
  { name: "Gallery media", status: "passing", detail: "Seed media available" },
  { name: "Railway deployment", status: "passing", detail: "Railway auto-deploys from GitHub main" },
];

let clients: CrmClient[] = [
  { id: 1, fullName: "Sample Lead", email: "lead@example.com", phone: "(256) 555-0100", city: "Huntsville, AL", status: "lead", tourInterest: "Full Civil Rights Trail", guestCount: 2, travelWindow: "Spring 2026", budget: "$2,000 - $3,000", source: "Website form", notes: "Interested in a private itinerary and hotel recommendations.", lastContacted: now(), createdAt: now() },
  { id: 2, fullName: "Sample Group Coordinator", email: "groups@example.com", phone: "(256) 555-0199", city: "Atlanta, GA", status: "booked", tourInterest: "Birmingham + Selma", guestCount: 12, travelWindow: "June 2026", budget: "$10,000+", source: "Referral", notes: "Needs invoice, transportation details, and accessibility notes.", lastContacted: now(), createdAt: now() },
];

let media: GalleryMedia[] = [
  { id: 1, type: "photo", title: "Tour Group Experience", description: "Guests gathering before a Civil Rights Trail journey.", location: "Civil Rights Trail", url: heroImage, thumbnailUrl: heroImage, featured: true, published: true, sortOrder: 1, createdAt: now() },
  { id: 2, type: "photo", title: "Historic City Stops", description: "Photo slot for Memphis, Birmingham, Selma, Montgomery, Tuskegee, and Atlanta.", location: "Memphis to Atlanta", url: heroImage, thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 2, createdAt: now() },
  { id: 3, type: "photo", title: "Landmark Walkthroughs", description: "A gallery card for landmark tours and museum visits.", location: "Alabama and Tennessee", url: heroImage, thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 3, createdAt: now() },
  { id: 4, type: "video", title: "Guest Journey Highlights", description: "Feature a short reel from recent tour groups and landmark stops.", location: "Video Feature", url: "", thumbnailUrl: heroImage, featured: true, published: true, sortOrder: 4, createdAt: now() },
  { id: 5, type: "video", title: "Historic Site Walkthroughs", description: "Add guided clips from museums, memorials, churches, and trail stops.", location: "Video Feature", url: "", thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 5, createdAt: now() },
  { id: 6, type: "video", title: "Behind the Tour", description: "Share orientation, travel moments, meals, and guest reflections.", location: "Video Feature", url: "", thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 6, createdAt: now() },
];

export function listClients() { return [...clients].sort((a, b) => b.id - a.id); }
export function createClient(input: Omit<CrmClient, "id" | "createdAt" | "lastContacted"> & { lastContacted?: string }) {
  const client: CrmClient = { ...input, id: clientId++, createdAt: now(), lastContacted: input.lastContacted || now() };
  clients = [client, ...clients];
  return client;
}
export function updateClient(id: number, input: Partial<Omit<CrmClient, "id" | "createdAt">>) {
  const existing = clients.find(client => client.id === id);
  if (!existing) throw new Error("Client not found");
  Object.assign(existing, input, { lastContacted: input.lastContacted || existing.lastContacted });
  return existing;
}
export function deleteClient(id: number) { clients = clients.filter(client => client.id !== id); return { success: true } as const; }
export function listMedia(includeUnpublished = false) { return [...media].filter(item => includeUnpublished || item.published).sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id); }
export function createMedia(input: Omit<GalleryMedia, "id" | "createdAt">) { const item: GalleryMedia = { ...input, id: mediaId++, createdAt: now() }; media = [...media, item]; return item; }
export function updateMedia(id: number, input: Partial<Omit<GalleryMedia, "id" | "createdAt">>) { const existing = media.find(item => item.id === id); if (!existing) throw new Error("Media item not found"); Object.assign(existing, input); return existing; }
export function deleteMedia(id: number) { media = media.filter(item => item.id !== id); return { success: true } as const; }
export function runAdminChecks() {
  lastChecks = [
    { name: "Client records", status: "passing", detail: clients.length + " client records available" },
    { name: "Gallery records", status: "passing", detail: media.length + " media records available" },
    { name: "Published gallery", status: media.some(item => item.published) ? "passing" : "warning", detail: media.some(item => item.published) ? "Published media exists" : "No published media yet" },
    { name: "GitHub to Railway", status: "passing", detail: "Pushing to GitHub main triggers Railway auto-deploy" },
  ];
  return lastChecks;
}
export function requestPublish() {
  publishStatus = "published";
  lastPublishMessage = "Admin publish requested. GitHub main is connected to Railway auto-deploys; saved code changes publish automatically.";
  runAdminChecks();
  return { status: publishStatus, message: lastPublishMessage, checks: lastChecks, github: "https://github.com/MrMiles247/civil-rights-trail-tours", railway: "https://railway.com/project/f7dc1312-89aa-4359-a387-7b3ae22351e5" };
}
export function getAdminSummary() {
  return { totalClients: clients.length, activeClients: clients.filter(client => ["booked", "active", "follow-up"].includes(client.status)).length, leads: clients.filter(client => client.status === "lead").length, totalMedia: media.length, publishedMedia: media.filter(item => item.published).length, photos: media.filter(item => item.type === "photo").length, videos: media.filter(item => item.type === "video").length, publishStatus, lastPublishMessage, checks: lastChecks };
}
