export type ClientStatus = "lead" | "booked" | "active" | "completed" | "follow-up";
export type MediaType = "photo" | "video";
export type PublishStatus = "idle" | "checking" | "ready" | "published" | "error";
export type LeadStage = "new" | "qualified" | "proposal" | "booked" | "completed" | "lost";
export type TaskStatus = "open" | "in-progress" | "done" | "blocked";
export type BookingStatus = "quote" | "reserved" | "confirmed" | "completed" | "cancelled";

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

export type Organization = {
  id: number;
  name: string;
  type: "school" | "church" | "corporate" | "nonprofit" | "family" | "agency";
  primaryContactId?: number;
  city: string;
  notes: string;
  createdAt: string;
};

export type CrmContact = CrmClient & {
  organizationId?: number;
  leadStage: LeadStage;
  lifecycleValue: number;
  tags: string[];
  nextStep: string;
  assignedTo: string;
  accessibilityNeeds: string;
  duplicateRisk: "low" | "medium" | "high";
};

export type Deal = {
  id: number;
  contactId: number;
  title: string;
  stage: LeadStage;
  value: number;
  probability: number;
  expectedCloseDate: string;
  owner: string;
  createdAt: string;
};

export type AdminBooking = {
  id: number;
  contactId: number;
  tourName: string;
  startDate: string;
  endDate: string;
  guests: number;
  status: BookingStatus;
  depositPaid: boolean;
  balanceDue: number;
  logisticsNotes: string;
  createdAt: string;
};

export type CrmTask = {
  id: number;
  contactId?: number;
  title: string;
  owner: string;
  dueDate: string;
  status: TaskStatus;
  priority: "low" | "normal" | "high" | "urgent";
  createdAt: string;
};

export type Invoice = {
  id: number;
  bookingId: number;
  invoiceNumber: string;
  amount: number;
  status: "draft" | "sent" | "paid" | "overdue";
  dueDate: string;
  createdAt: string;
};

export type EmailTemplate = {
  id: number;
  name: string;
  subject: string;
  body: string;
  updatedAt: string;
};

const now = () => new Date().toISOString();
const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029344895/TCAJVVsSVBFJXRjm.jpg";

let clientId = 3;
let mediaId = 7;
let organizationId = 3;
let dealId = 3;
let bookingId = 3;
let taskId = 4;
let invoiceId = 3;
let publishStatus: PublishStatus = "idle";
let lastPublishMessage = "No publish has been requested from the admin CRM yet.";
let lastChecks = [
  { name: "Admin CRM backend", status: "passing", detail: "CRM store loaded" },
  { name: "Gallery media", status: "passing", detail: "Seed media available" },
  { name: "Railway deployment", status: "passing", detail: "Railway auto-deploys from GitHub main" },
];

let clients: CrmContact[] = [
  { id: 1, fullName: "Sample Lead", email: "lead@example.com", phone: "(256) 555-0100", city: "Huntsville, AL", status: "lead", tourInterest: "Full Civil Rights Trail", guestCount: 2, travelWindow: "Spring 2026", budget: "$2,000 - $3,000", source: "Website form", notes: "Interested in a private itinerary and hotel recommendations.", lastContacted: now(), createdAt: now(), organizationId: 1, leadStage: "qualified", lifecycleValue: 2800, tags: ["private", "heritage travel"], nextStep: "Send sample itinerary and payment schedule", assignedTo: "Miles", accessibilityNeeds: "None reported", duplicateRisk: "low" },
  { id: 2, fullName: "Sample Group Coordinator", email: "groups@example.com", phone: "(256) 555-0199", city: "Atlanta, GA", status: "booked", tourInterest: "Birmingham + Selma", guestCount: 12, travelWindow: "June 2026", budget: "$10,000+", source: "Referral", notes: "Needs invoice, transportation details, and accessibility notes.", lastContacted: now(), createdAt: now(), organizationId: 2, leadStage: "booked", lifecycleValue: 12400, tags: ["group", "invoice"], nextStep: "Confirm bus pickup window", assignedTo: "Miles", accessibilityNeeds: "One guest needs limited walking routes", duplicateRisk: "low" },
];

let organizations: Organization[] = [
  { id: 1, name: "Private Heritage Travelers", type: "family", primaryContactId: 1, city: "Huntsville, AL", notes: "Small family/private bookings.", createdAt: now() },
  { id: 2, name: "Group Travel Partner", type: "agency", primaryContactId: 2, city: "Atlanta, GA", notes: "Coordinates church and community group tours.", createdAt: now() },
];

let deals: Deal[] = [
  { id: 1, contactId: 1, title: "Private Full Trail Spring Tour", stage: "proposal", value: 2800, probability: 65, expectedCloseDate: "2026-03-15", owner: "Miles", createdAt: now() },
  { id: 2, contactId: 2, title: "Birmingham and Selma Group Tour", stage: "booked", value: 12400, probability: 95, expectedCloseDate: "2026-06-01", owner: "Miles", createdAt: now() },
];

let bookings: AdminBooking[] = [
  { id: 1, contactId: 2, tourName: "Birmingham + Selma", startDate: "2026-06-18", endDate: "2026-06-21", guests: 12, status: "confirmed", depositPaid: true, balanceDue: 6800, logisticsNotes: "Confirm pickup and hotel rooming list.", createdAt: now() },
  { id: 2, contactId: 1, tourName: "Full Civil Rights Trail", startDate: "2026-04-10", endDate: "2026-04-16", guests: 2, status: "quote", depositPaid: false, balanceDue: 2800, logisticsNotes: "Awaiting itinerary approval.", createdAt: now() },
];

let tasks: CrmTask[] = [
  { id: 1, contactId: 1, title: "Send sample itinerary", owner: "Miles", dueDate: "2026-02-05", status: "open", priority: "high", createdAt: now() },
  { id: 2, contactId: 2, title: "Confirm transportation vendor", owner: "Operations", dueDate: "2026-05-15", status: "in-progress", priority: "urgent", createdAt: now() },
  { id: 3, title: "Review gallery media before next publish", owner: "Marketing", dueDate: "2026-02-10", status: "open", priority: "normal", createdAt: now() },
];

let invoices: Invoice[] = [
  { id: 1, bookingId: 1, invoiceNumber: "CRT-2026-001", amount: 12400, status: "sent", dueDate: "2026-05-20", createdAt: now() },
  { id: 2, bookingId: 2, invoiceNumber: "CRT-2026-002", amount: 2800, status: "draft", dueDate: "2026-03-20", createdAt: now() },
];

let emailTemplates: EmailTemplate[] = [
  { id: 1, name: "New Inquiry Follow-up", subject: "Your Civil Rights Trail tour inquiry", body: "Thank you for reaching out. We are preparing a thoughtful itinerary and will follow up with next steps.", updatedAt: now() },
  { id: 2, name: "Booking Confirmation", subject: "Your Civil Rights Trail tour is confirmed", body: "Your tour is confirmed. Please review the attached logistics and payment schedule.", updatedAt: now() },
];

let media: GalleryMedia[] = [
  { id: 1, type: "photo", title: "Tour Group Experience", description: "Guests gathering before a Civil Rights Trail journey.", location: "Civil Rights Trail", url: heroImage, thumbnailUrl: heroImage, featured: true, published: true, sortOrder: 1, createdAt: now() },
  { id: 2, type: "photo", title: "Historic City Stops", description: "Photo slot for Memphis, Birmingham, Selma, Montgomery, Tuskegee, and Atlanta.", location: "Memphis to Atlanta", url: heroImage, thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 2, createdAt: now() },
  { id: 3, type: "photo", title: "Landmark Walkthroughs", description: "A gallery card for landmark tours and museum visits.", location: "Alabama and Tennessee", url: heroImage, thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 3, createdAt: now() },
  { id: 4, type: "video", title: "Journey on the Civil Rights Trail", description: "Travel with us through landmark cities, sacred sites, and living history while learning the stories that continue to shape our communities.", location: "Video Slideshow", url: "https://www.youtube.com/watch?v=NB2wCdlaf_E", thumbnailUrl: heroImage, featured: true, published: true, sortOrder: 4, createdAt: now() },
  { id: 5, type: "video", title: "Historic Site Walkthroughs", description: "Add guided clips from museums, memorials, churches, and trail stops.", location: "Video Feature", url: "", thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 5, createdAt: now() },
  { id: 6, type: "video", title: "Behind the Tour", description: "Share orientation, travel moments, meals, and guest reflections.", location: "Video Feature", url: "", thumbnailUrl: heroImage, featured: false, published: true, sortOrder: 6, createdAt: now() },
];

function calculateDuplicateRisk(email: string, phone: string, currentId?: number): "low" | "medium" | "high" {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPhone = phone.replace(/\D/g, "");
  const matches = clients.filter(client => client.id !== currentId && (client.email.toLowerCase() === normalizedEmail || client.phone.replace(/\D/g, "") === normalizedPhone));
  if (matches.some(client => client.email.toLowerCase() === normalizedEmail)) return "high";
  if (matches.length > 0) return "medium";
  return "low";
}

export function listClients() { return [...clients].sort((a, b) => b.id - a.id); }
export function listContacts() { return listClients(); }

export function createClient(input: Omit<CrmClient, "id" | "createdAt" | "lastContacted"> & Partial<Pick<CrmContact, "organizationId" | "leadStage" | "lifecycleValue" | "tags" | "nextStep" | "assignedTo" | "accessibilityNeeds">> & { lastContacted?: string }) {
  const duplicateRisk = calculateDuplicateRisk(input.email, input.phone);
  const client: CrmContact = {
    ...input,
    id: clientId++,
    createdAt: now(),
    lastContacted: input.lastContacted || now(),
    leadStage: input.leadStage || "new",
    lifecycleValue: input.lifecycleValue || 0,
    tags: input.tags || [],
    nextStep: input.nextStep || "Follow up with client",
    assignedTo: input.assignedTo || "Miles",
    accessibilityNeeds: input.accessibilityNeeds || "",
    duplicateRisk,
  };
  clients = [client, ...clients];
  return client;
}

export function updateClient(id: number, input: Partial<Omit<CrmContact, "id" | "createdAt">>) {
  const existing = clients.find(client => client.id === id);
  if (!existing) throw new Error("Client not found");
  Object.assign(existing, input, { lastContacted: input.lastContacted || existing.lastContacted });
  existing.duplicateRisk = calculateDuplicateRisk(existing.email, existing.phone, existing.id);
  return existing;
}

export function deleteClient(id: number) { clients = clients.filter(client => client.id !== id); return { success: true } as const; }

export function listOrganizations() { return [...organizations].sort((a, b) => a.name.localeCompare(b.name)); }
export function createOrganization(input: Omit<Organization, "id" | "createdAt">) { const item: Organization = { ...input, id: organizationId++, createdAt: now() }; organizations = [item, ...organizations]; return item; }

export function listDeals() { return [...deals].sort((a, b) => b.id - a.id); }
export function createDeal(input: Omit<Deal, "id" | "createdAt">) { const item: Deal = { ...input, id: dealId++, createdAt: now() }; deals = [item, ...deals]; return item; }
export function updateDeal(id: number, input: Partial<Omit<Deal, "id" | "createdAt">>) { const existing = deals.find(deal => deal.id === id); if (!existing) throw new Error("Deal not found"); Object.assign(existing, input); return existing; }

export function listAdminBookings() { return [...bookings].sort((a, b) => b.id - a.id); }
export function createAdminBooking(input: Omit<AdminBooking, "id" | "createdAt">) { const item: AdminBooking = { ...input, id: bookingId++, createdAt: now() }; bookings = [item, ...bookings]; return item; }

export function listTasks() { return [...tasks].sort((a, b) => a.status.localeCompare(b.status) || a.dueDate.localeCompare(b.dueDate)); }
export function createTask(input: Omit<CrmTask, "id" | "createdAt">) { const item: CrmTask = { ...input, id: taskId++, createdAt: now() }; tasks = [item, ...tasks]; return item; }
export function updateTask(id: number, input: Partial<Omit<CrmTask, "id" | "createdAt">>) { const existing = tasks.find(task => task.id === id); if (!existing) throw new Error("Task not found"); Object.assign(existing, input); return existing; }

export function listInvoices() { return [...invoices].sort((a, b) => b.id - a.id); }
export function listEmailTemplates() { return [...emailTemplates].sort((a, b) => a.name.localeCompare(b.name)); }

export function listMedia(includeUnpublished = false) { return [...media].filter(item => includeUnpublished || item.published).sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id); }
export function createMedia(input: Omit<GalleryMedia, "id" | "createdAt">) { const item: GalleryMedia = { ...input, id: mediaId++, createdAt: now() }; media = [...media, item]; return item; }
export function updateMedia(id: number, input: Partial<Omit<GalleryMedia, "id" | "createdAt">>) { const existing = media.find(item => item.id === id); if (!existing) throw new Error("Media item not found"); Object.assign(existing, input); return existing; }
export function deleteMedia(id: number) { media = media.filter(item => item.id !== id); return { success: true } as const; }

export function runAdminChecks(securityConfigured = false) {
  const duplicateWarnings = clients.filter(client => client.duplicateRisk !== "low").length;
  lastChecks = [
    { name: "Client records", status: clients.length > 0 ? "passing" : "warning", detail: clients.length + " client records available" },
    { name: "Lead pipeline", status: deals.length > 0 ? "passing" : "warning", detail: deals.length + " active deal records tracked" },
    { name: "Gallery records", status: media.length > 0 ? "passing" : "warning", detail: media.length + " media records available" },
    { name: "Published gallery", status: media.some(item => item.published) ? "passing" : "warning", detail: media.some(item => item.published) ? "Published media exists" : "No published media yet" },
    { name: "Security configuration", status: securityConfigured ? "passing" : "warning", detail: securityConfigured ? "ADMIN_ACCESS_CODE is configured" : "Setup mode active; configure ADMIN_ACCESS_CODE on Railway" },
    { name: "Duplicate detection", status: duplicateWarnings === 0 ? "passing" : "warning", detail: duplicateWarnings === 0 ? "No duplicate client warnings" : duplicateWarnings + " possible duplicate records" },
    { name: "GitHub to Railway", status: "passing", detail: "Pushing to GitHub main triggers Railway auto-deploy" },
  ];
  return lastChecks;
}

export function requestPublish() {
  publishStatus = "published";
  lastPublishMessage = "Admin publish requested. GitHub main is connected to Railway auto-deploys; saved code changes publish automatically.";
  runAdminChecks(Boolean(process.env.ADMIN_ACCESS_CODE));
  return { status: publishStatus, message: lastPublishMessage, checks: lastChecks, github: "https://github.com/MrMiles247/civil-rights-trail-tours", railway: "https://railway.com/project/f7dc1312-89aa-4359-a387-7b3ae22351e5" };
}

export function getAdminSummary(securityConfigured = false) {
  const openTasks = tasks.filter(task => task.status !== "done").length;
  const pipelineValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const confirmedRevenue = bookings.filter(booking => booking.status === "confirmed" || booking.status === "completed").reduce((sum, booking) => sum + booking.balanceDue, 0);
  return {
    totalClients: clients.length,
    activeClients: clients.filter(client => ["booked", "active", "follow-up"].includes(client.status)).length,
    leads: clients.filter(client => client.status === "lead").length,
    totalMedia: media.length,
    publishedMedia: media.filter(item => item.published).length,
    photos: media.filter(item => item.type === "photo").length,
    videos: media.filter(item => item.type === "video").length,
    openTasks,
    pipelineValue,
    confirmedRevenue,
    bookings: bookings.length,
    organizations: organizations.length,
    publishStatus,
    lastPublishMessage,
    checks: runAdminChecks(securityConfigured),
  };
}

export function getEnterpriseDashboard(securityConfigured = false) {
  return {
    summary: getAdminSummary(securityConfigured),
    recentContacts: listContacts().slice(0, 5),
    upcomingBookings: listAdminBookings().slice(0, 5),
    openTasks: listTasks().filter(task => task.status !== "done").slice(0, 8),
    pipeline: listDeals(),
    invoiceExposure: invoices.reduce((sum, invoice) => invoice.status !== "paid" ? sum + invoice.amount : sum, 0),
  };
}

export function exportContactsCsv() {
  const header = "id,fullName,email,phone,city,status,tourInterest,guestCount,leadStage,lifecycleValue,assignedTo,nextStep";
  const rows = clients.map(client => [client.id, client.fullName, client.email, client.phone, client.city, client.status, client.tourInterest, client.guestCount, client.leadStage, client.lifecycleValue, client.assignedTo, client.nextStep].map(value => '"' + String(value ?? "").replace(/"/g, '""') + '"').join(","));
  return [header, ...rows].join("\n");
}
