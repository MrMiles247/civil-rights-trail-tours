import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

const clientSchema = z.object({ fullName: z.string().min(1), email: z.string().email(), phone: z.string().min(1), city: z.string().min(1), status: z.enum(["lead", "booked", "active", "completed", "follow-up"]), tourInterest: z.string().min(1), guestCount: z.number().min(1), travelWindow: z.string().min(1), budget: z.string().min(1), source: z.string().min(1), notes: z.string().optional().default(""), lastContacted: z.string().optional() });
const mediaSchema = z.object({ type: z.enum(["photo", "video"]), title: z.string().min(1), description: z.string().optional().default(""), location: z.string().optional().default(""), url: z.string().optional().default(""), thumbnailUrl: z.string().optional().default(""), featured: z.boolean().default(false), published: z.boolean().default(true), sortOrder: z.number().default(99) });

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
    summary: publicProcedure.query(async () => { const { getAdminSummary } = await import("./crmStore"); return getAdminSummary(); }),
    checks: publicProcedure.query(async () => { const { runAdminChecks } = await import("./crmStore"); return runAdminChecks(); }),
    publish: publicProcedure.mutation(async () => { const { requestPublish } = await import("./crmStore"); return requestPublish(); }),
    clients: router({
      list: publicProcedure.query(async () => { const { listClients } = await import("./crmStore"); return listClients(); }),
      create: publicProcedure.input(clientSchema).mutation(async ({ input }) => { const { createClient } = await import("./crmStore"); return createClient(input); }),
      update: publicProcedure.input(z.object({ id: z.number(), data: clientSchema.partial() })).mutation(async ({ input }) => { const { updateClient } = await import("./crmStore"); return updateClient(input.id, input.data); }),
      delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => { const { deleteClient } = await import("./crmStore"); return deleteClient(input.id); }),
    }),
    media: router({
      list: publicProcedure.input(z.object({ includeUnpublished: z.boolean().optional().default(false) }).optional().default({ includeUnpublished: false })).query(async ({ input }) => { const { listMedia } = await import("./crmStore"); return listMedia(input.includeUnpublished); }),
      create: publicProcedure.input(mediaSchema).mutation(async ({ input }) => { const { createMedia } = await import("./crmStore"); return createMedia(input); }),
      update: publicProcedure.input(z.object({ id: z.number(), data: mediaSchema.partial() })).mutation(async ({ input }) => { const { updateMedia } = await import("./crmStore"); return updateMedia(input.id, input.data); }),
      delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => { const { deleteMedia } = await import("./crmStore"); return deleteMedia(input.id); }),
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
