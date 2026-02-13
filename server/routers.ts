import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  tours: router({
    list: publicProcedure.query(async () => {
      const { getAllTours } = await import("./db");
      return getAllTours();
    }),
    getById: publicProcedure
      .input((val: unknown) => {
        const { z } = require("zod");
        return z.object({ id: z.number() }).parse(val);
      })
      .query(async ({ input }) => {
        const { getTourById } = await import("./db");
        return getTourById(input.id);
      }),
  }),

  availableDates: router({
    list: publicProcedure.query(async () => {
      const { getAllAvailableDates } = await import("./db");
      return getAllAvailableDates();
    }),
    getByTourId: publicProcedure
      .input((val: unknown) => {
        const { z } = require("zod");
        return z.object({ tourId: z.number() }).parse(val);
      })
      .query(async ({ input }) => {
        const { getAvailableDatesByTourId } = await import("./db");
        return getAvailableDatesByTourId(input.tourId);
      }),
  }),

  bookings: router({
    create: publicProcedure
      .input((val: unknown) => {
        const { z } = require("zod");
        return z.object({
          tourId: z.number(),
          availableDateId: z.number(),
          customerName: z.string().min(1),
          customerEmail: z.string().email(),
          customerPhone: z.string().min(1),
          numberOfGuests: z.number().min(1),
          specialRequests: z.string().optional(),
        }).parse(val);
      })
      .mutation(async ({ input }) => {
        const { createBooking, getAvailableDateById, getTourById, updateAvailableDateBookingCount } = await import("./db");
        const { notifyOwner } = await import("./_core/notification");
        
        // Check if date is available
        const availableDate = await getAvailableDateById(input.availableDateId);
        if (!availableDate) {
          throw new Error("Selected date is not available");
        }
        
        if (availableDate.currentBookings + input.numberOfGuests > availableDate.maxCapacity) {
          throw new Error("Not enough capacity for this date");
        }
        
        // Create booking
        const result = await createBooking({
          ...input,
          status: "confirmed",
        });
        
        // Update available date booking count
        await updateAvailableDateBookingCount(input.availableDateId, input.numberOfGuests);
        
        // Get tour details for notification
        const tour = await getTourById(input.tourId);
        
        // Send notification to owner
        await notifyOwner({
          title: "New Tour Booking",
          content: `New booking received:\n\nTour: ${tour?.name || "Unknown"}\nCustomer: ${input.customerName}\nEmail: ${input.customerEmail}\nPhone: ${input.customerPhone}\nGuests: ${input.numberOfGuests}\nDate: ${new Date(availableDate.date).toLocaleDateString()}\nSpecial Requests: ${input.specialRequests || "None"}`,
        });
        
        return {
          success: true,
          bookingId: Number(result[0]?.insertId || 0),
          tour,
          date: availableDate.date,
        };
      }),
  }),

  calendar: router({
    generateICS: publicProcedure
      .input((val: unknown) => {
        const { z } = require("zod");
        return z.object({
          bookingId: z.number(),
        }).parse(val);
      })
      .query(async ({ input }) => {
        const { getAllBookings, getTourById, getAvailableDateById } = await import("./db");
        const { generateICalendar } = await import("./icalendar");
        
        // Get booking details
        const bookings = await getAllBookings();
        const booking = bookings.find(b => b.id === input.bookingId);
        
        if (!booking) {
          throw new Error("Booking not found");
        }
        
        const tour = await getTourById(booking.tourId);
        const availableDate = await getAvailableDateById(booking.availableDateId);
        
        if (!tour || !availableDate) {
          throw new Error("Tour or date not found");
        }
        
        // Generate iCalendar content
        const icsContent = generateICalendar({
          tourName: tour.name,
          tourDescription: tour.description,
          startDate: new Date(availableDate.date),
          customerName: booking.customerName,
          customerEmail: booking.customerEmail,
          duration: tour.duration,
        });
        
        return {
          icsContent,
          filename: `civil-rights-tour-${booking.id}.ics`,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
