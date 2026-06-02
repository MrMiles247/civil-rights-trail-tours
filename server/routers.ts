import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { assertPermission, getAdminAccessState, getRoleMatrix, listAuditLogs, recordAudit } from "./adminSecurity";

const clientSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  city: z.string().min(1),
  status: z.enum(["lead", "booked", "active", "completed", "follow-up"]),
  tourInterest: z.string().min(1),
  guestCount: z.number().min(1),
  travelWindow: z.string().min(1),
  budget: z.string().min(1),
  source: z.string().min(1),
  notes: z.string().optional().default(""),
  lastContacted: z.string().optional(),
  organizationId: z.number().optional(),
  leadStage: z.enum(["new", "qualified", "proposal", "booked", "completed", "lost"]).optional(),
  lifecycleValue: z.number().optional(),
  tags: z.array(z.string()).optional(),
  nextStep: z.string().optional(),
  assignedTo: z.string().optional(),
  accessibilityNeeds: z.string().optional(),
});
const mediaSchema = z.object({ type: z.enum(["photo", "video"]), title: z.string().min(1), description: z.string().optional().default(""), location: z.string().optional().default(""), url: z.string().optional().default(""), thumbnailUrl: z.string().optional().default(""), featured: z.boolean().default(false), published: z.boolean().default(true), sortOrder: z.number().default(99) });
const organizationSchema = z.object({ name: z.string().min(1), type: z.enum(["school", "church", "corporate", "nonprofit", "family", "agency"]), primaryContactId: z.number().optional(), city: z.string().min(1), notes: z.string().optional().default("") });
const dealSchema = z.object({ contactId: z.number(), title: z.string().min(1), stage: z.enum(["new", "qualified", "proposal", "booked", "completed", "lost"]), value: z.number().min(0), probability: z.number().min(0).max(100), expectedCloseDate: z.string().min(1), owner: z.string().min(1) });
const taskSchema = z.object({ contactId: z.number().optional(), title: z.string().min(1), owner: z.string().min(1), dueDate: z.string().min(1), status: z.enum(["open", "in-progress", "done", "blocked"]), priority: z.enum(["low", "normal", "high", "urgent"]) });
const adminBookingSchema = z.object({ contactId: z.number(), tourName: z.string().min(1), startDate: z.string().min(1), endDate: z.string().min(1), guests: z.number().min(1), status: z.enum(["quote", "reserved", "confirmed", "completed", "cancelled"]), depositPaid: z.boolean(), balanceDue: z.number().min(0), logisticsNotes: z.string().optional().default("") });

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  crm: router({
    summary: publicProcedure.query(async ({ ctx }) => { const { getAdminSummary } = await import("./crmStore"); return getAdminSummary(getAdminAccessState(ctx.req).configured); }),
    checks: publicProcedure.query(async ({ ctx }) => { const { runAdminChecks } = await import("./crmStore"); return runAdminChecks(getAdminAccessState(ctx.req).configured); }),
    publish: publicProcedure.mutation(async ({ ctx }) => { assertPermission(ctx.req, "publish:write"); const { requestPublish } = await import("./crmStore"); const result = requestPublish(); recordAudit(ctx.req, "publish.request", "deployment", "Admin requested GitHub/Railway publish from CRM."); return result; }),
    security: router({
      session: publicProcedure.query(({ ctx }) => ({ ...getAdminAccessState(ctx.req), roles: getRoleMatrix() })),
      auditLogs: publicProcedure.query(({ ctx }) => { assertPermission(ctx.req, "security:read"); return listAuditLogs(); }),
    }),
    dashboard: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { getEnterpriseDashboard } = await import("./crmStore"); return getEnterpriseDashboard(getAdminAccessState(ctx.req).configured); }),
    exportContactsCsv: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { exportContactsCsv } = await import("./crmStore"); recordAudit(ctx.req, "contacts.export", "contact", "Contacts CSV exported from admin CRM."); return exportContactsCsv(); }),
    clients: router({
      list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { listClients } = await import("./crmStore"); return listClients(); }),
      create: publicProcedure.input(clientSchema).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "clients:write"); const { createClient } = await import("./crmStore"); const item = createClient(input); recordAudit(ctx.req, "client.create", "client", "Created client " + item.fullName + ".", item.id); return item; }),
      update: publicProcedure.input(z.object({ id: z.number(), data: clientSchema.partial() })).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "clients:write"); const { updateClient } = await import("./crmStore"); const item = updateClient(input.id, input.data); recordAudit(ctx.req, "client.update", "client", "Updated client " + item.fullName + ".", item.id); return item; }),
      delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "clients:write"); const { deleteClient } = await import("./crmStore"); recordAudit(ctx.req, "client.delete", "client", "Deleted client id " + input.id + ".", input.id); return deleteClient(input.id); }),
    }),
    organizations: router({
      list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { listOrganizations } = await import("./crmStore"); return listOrganizations(); }),
      create: publicProcedure.input(organizationSchema).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "crm:write"); const { createOrganization } = await import("./crmStore"); const item = createOrganization(input); recordAudit(ctx.req, "organization.create", "organization", "Created organization " + item.name + ".", item.id); return item; }),
    }),
    deals: router({
      list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { listDeals } = await import("./crmStore"); return listDeals(); }),
      create: publicProcedure.input(dealSchema).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "crm:write"); const { createDeal } = await import("./crmStore"); const item = createDeal(input); recordAudit(ctx.req, "deal.create", "deal", "Created deal " + item.title + ".", item.id); return item; }),
      update: publicProcedure.input(z.object({ id: z.number(), data: dealSchema.partial() })).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "crm:write"); const { updateDeal } = await import("./crmStore"); const item = updateDeal(input.id, input.data); recordAudit(ctx.req, "deal.update", "deal", "Updated deal " + item.title + ".", item.id); return item; }),
    }),
    adminBookings: router({
      list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { listAdminBookings } = await import("./crmStore"); return listAdminBookings(); }),
      create: publicProcedure.input(adminBookingSchema).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "crm:write"); const { createAdminBooking } = await import("./crmStore"); const item = createAdminBooking(input); recordAudit(ctx.req, "booking.create", "booking", "Created admin booking " + item.tourName + ".", item.id); return item; }),
    }),
    tasks: router({
      list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { listTasks } = await import("./crmStore"); return listTasks(); }),
      create: publicProcedure.input(taskSchema).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "crm:write"); const { createTask } = await import("./crmStore"); const item = createTask(input); recordAudit(ctx.req, "task.create", "task", "Created task " + item.title + ".", item.id); return item; }),
      update: publicProcedure.input(z.object({ id: z.number(), data: taskSchema.partial() })).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "crm:write"); const { updateTask } = await import("./crmStore"); const item = updateTask(input.id, input.data); recordAudit(ctx.req, "task.update", "task", "Updated task " + item.title + ".", item.id); return item; }),
    }),
    invoices: router({ list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "finance:read"); const { listInvoices } = await import("./crmStore"); return listInvoices(); }) }),
    emailTemplates: router({ list: publicProcedure.query(async ({ ctx }) => { assertPermission(ctx.req, "crm:read"); const { listEmailTemplates } = await import("./crmStore"); return listEmailTemplates(); }) }),
    media: router({
      list: publicProcedure.input(z.object({ includeUnpublished: z.boolean().optional().default(false) }).optional().default({ includeUnpublished: false })).query(async ({ ctx, input }) => { if (input.includeUnpublished) assertPermission(ctx.req, "gallery:write"); const { listMedia } = await import("./crmStore"); return listMedia(input.includeUnpublished); }),
      create: publicProcedure.input(mediaSchema).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "gallery:write"); const { createMedia } = await import("./crmStore"); const item = createMedia(input); recordAudit(ctx.req, "media.create", "media", "Created media " + item.title + ".", item.id); return item; }),
      update: publicProcedure.input(z.object({ id: z.number(), data: mediaSchema.partial() })).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "gallery:write"); const { updateMedia } = await import("./crmStore"); const item = updateMedia(input.id, input.data); recordAudit(ctx.req, "media.update", "media", "Updated media " + item.title + ".", item.id); return item; }),
      delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ ctx, input }) => { assertPermission(ctx.req, "gallery:write"); const { deleteMedia } = await import("./crmStore"); recordAudit(ctx.req, "media.delete", "media", "Deleted media id " + input.id + ".", input.id); return deleteMedia(input.id); }),
    }),
  }),

  tours: router({
    list: publicProcedure.query(async () => { const { getAllTours } = await import("./db"); return getAllTours(); }),
    getById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => { const { getTourById } = await import("./db"); return getTourById(input.id); }),
  }),

  availableDates: router({
    list: publicProcedure.query(async () => { const { getAllAvailableDates } = await import("./db"); return getAllAvailableDates(); }),
    getByTourId: publicProcedure.input(z.object({ tourId: z.number() })).query(async ({ input }) => { const { getAvailableDatesByTourId } = await import("./db"); return getAvailableDatesByTourId(input.tourId); }),
  }),

  bookings: router({
    create: publicProcedure.input(z.object({ tourId: z.number(), availableDateId: z.number(), customerName: z.string().min(1), customerEmail: z.string().email(), customerPhone: z.string().min(1), numberOfGuests: z.number().min(1), specialRequests: z.string().optional() })).mutation(async ({ input }) => {
      const { createBooking, getAvailableDateById, getTourById, updateAvailableDateBookingCount } = await import("./db");
      const { notifyOwner } = await import("./_core/notification");
      const availableDate = await getAvailableDateById(input.availableDateId);
      if (!availableDate) throw new Error("Selected date is not available");
      if (availableDate.currentBookings + input.numberOfGuests > availableDate.maxCapacity) throw new Error("Not enough capacity for this date");
      const result = await createBooking({ ...input, status: "confirmed" });
      await updateAvailableDateBookingCount(input.availableDateId, input.numberOfGuests);
      const tour = await getTourById(input.tourId);
      await notifyOwner({ title: "New Tour Booking", content: "New booking received:\n\nTour: " + (tour?.name || "Unknown") + "\nCustomer: " + input.customerName + "\nEmail: " + input.customerEmail + "\nPhone: " + input.customerPhone + "\nGuests: " + input.numberOfGuests + "\nDate: " + new Date(availableDate.date).toLocaleDateString() + "\nSpecial Requests: " + (input.specialRequests || "None") });
      return { success: true, bookingId: Number(result[0]?.insertId || 0), tour, date: availableDate.date };
    }),
  }),

  calendar: router({
    generateICS: publicProcedure.input(z.object({ bookingId: z.number() })).query(async ({ input }) => {
      const { getAllBookings, getTourById, getAvailableDateById } = await import("./db");
      const { generateICalendar } = await import("./icalendar");
      const bookings = await getAllBookings();
      const booking = bookings.find(b => b.id === input.bookingId);
      if (!booking) throw new Error("Booking not found");
      const tour = await getTourById(booking.tourId);
      const availableDate = await getAvailableDateById(booking.availableDateId);
      if (!tour || !availableDate) throw new Error("Tour or date not found");
      const icsContent = generateICalendar({ tourName: tour.name, tourDescription: tour.description, startDate: new Date(availableDate.date), customerName: booking.customerName, customerEmail: booking.customerEmail, duration: tour.duration });
      return { icsContent, filename: "civil-rights-tour-" + booking.id + ".ics" };
    }),
  }),
});

export type AppRouter = typeof appRouter;
