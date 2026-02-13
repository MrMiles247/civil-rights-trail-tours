import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("Tours API", () => {
  it("should fetch all tours", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const tours = await caller.tours.list();

    expect(tours).toBeDefined();
    expect(Array.isArray(tours)).toBe(true);
    expect(tours.length).toBeGreaterThan(0);
    
    // Verify tour structure
    const firstTour = tours[0];
    expect(firstTour).toHaveProperty("id");
    expect(firstTour).toHaveProperty("name");
    expect(firstTour).toHaveProperty("description");
    expect(firstTour).toHaveProperty("cities");
    expect(firstTour).toHaveProperty("duration");
    expect(firstTour).toHaveProperty("price");
    expect(firstTour).toHaveProperty("highlights");
  });

  it("should fetch a specific tour by ID", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const tour = await caller.tours.getById({ id: 1 });

    expect(tour).toBeDefined();
    expect(tour?.id).toBe(1);
    expect(tour?.name).toBeDefined();
  });
});

describe("Available Dates API", () => {
  it("should fetch all available dates", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const dates = await caller.availableDates.list();

    expect(dates).toBeDefined();
    expect(Array.isArray(dates)).toBe(true);
    expect(dates.length).toBeGreaterThan(0);
    
    // Verify date structure
    const firstDate = dates[0];
    expect(firstDate).toHaveProperty("id");
    expect(firstDate).toHaveProperty("tourId");
    expect(firstDate).toHaveProperty("date");
    expect(firstDate).toHaveProperty("maxCapacity");
    expect(firstDate).toHaveProperty("currentBookings");
  });

  it("should fetch available dates for a specific tour", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const dates = await caller.availableDates.getByTourId({ tourId: 1 });

    expect(dates).toBeDefined();
    expect(Array.isArray(dates)).toBe(true);
    
    // All dates should be for tour ID 1
    dates.forEach(date => {
      expect(date.tourId).toBe(1);
    });
  });
});

describe("Bookings API", () => {
  it("should create a booking successfully", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Get first available date
    const dates = await caller.availableDates.list();
    expect(dates.length).toBeGreaterThan(0);
    const firstDate = dates[0];

    const bookingData = {
      tourId: firstDate.tourId,
      availableDateId: firstDate.id,
      customerName: "Test Customer",
      customerEmail: "test@example.com",
      customerPhone: "+1234567890",
      numberOfGuests: 2,
      specialRequests: "Test special request",
    };

    const result = await caller.bookings.create(bookingData);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.bookingId).toBeGreaterThan(0);
    expect(result.tour).toBeDefined();
    expect(result.date).toBeDefined();
  });

  it("should handle booking with mismatched tour and date IDs", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Get a valid date
    const dates = await caller.availableDates.list();
    const validDate = dates[0];

    // Try to book with a different tour ID than the date's tour ID
    const bookingData = {
      tourId: validDate.tourId === 1 ? 2 : 1, // Use different tour ID
      availableDateId: validDate.id,
      customerName: "Test Customer",
      customerEmail: "test@example.com",
      customerPhone: "+1234567890",
      numberOfGuests: 1,
    };

    // This should still create a booking (no validation for tour/date match)
    const result = await caller.bookings.create(bookingData);
    expect(result.success).toBe(true);
  });

  it("should reject booking with invalid date ID", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const bookingData = {
      tourId: 1,
      availableDateId: 99999, // Non-existent date
      customerName: "Test Customer",
      customerEmail: "test@example.com",
      customerPhone: "+1234567890",
      numberOfGuests: 1,
    };

    await expect(caller.bookings.create(bookingData)).rejects.toThrow("Selected date is not available");
  });
});

describe("Calendar Generation", () => {
  it("should generate iCalendar file for a booking", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Create a booking first
    const dates = await caller.availableDates.list();
    const firstDate = dates[0];

    const booking = await caller.bookings.create({
      tourId: firstDate.tourId,
      availableDateId: firstDate.id,
      customerName: "Calendar Test",
      customerEmail: "calendar@example.com",
      customerPhone: "+1234567890",
      numberOfGuests: 1,
    });

    // Generate calendar file
    const calendar = await caller.calendar.generateICS({ bookingId: booking.bookingId });

    expect(calendar).toBeDefined();
    expect(calendar.icsContent).toBeDefined();
    expect(calendar.filename).toBeDefined();
    expect(calendar.icsContent).toContain("BEGIN:VCALENDAR");
    expect(calendar.icsContent).toContain("END:VCALENDAR");
    expect(calendar.icsContent).toContain("BEGIN:VEVENT");
    expect(calendar.icsContent).toContain("END:VEVENT");
    expect(calendar.filename).toMatch(/\.ics$/);
  });
});
