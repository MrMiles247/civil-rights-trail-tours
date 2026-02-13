import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Tours queries
export async function getAllTours() {
  const db = await getDb();
  if (!db) return [];
  const { tours } = await import("../drizzle/schema");
  return db.select().from(tours);
}

export async function getTourById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const { tours } = await import("../drizzle/schema");
  const result = await db.select().from(tours).where(eq(tours.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Available dates queries
export async function getAvailableDatesByTourId(tourId: number) {
  const db = await getDb();
  if (!db) return [];
  const { availableDates } = await import("../drizzle/schema");
  const { gt } = await import("drizzle-orm");
  return db.select().from(availableDates)
    .where(eq(availableDates.tourId, tourId))
    .orderBy(availableDates.date);
}

export async function getAllAvailableDates() {
  const db = await getDb();
  if (!db) return [];
  const { availableDates } = await import("../drizzle/schema");
  return db.select().from(availableDates).orderBy(availableDates.date);
}

export async function getAvailableDateById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const { availableDates } = await import("../drizzle/schema");
  const result = await db.select().from(availableDates).where(eq(availableDates.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateAvailableDateBookingCount(id: number, increment: number) {
  const db = await getDb();
  if (!db) return;
  const { availableDates } = await import("../drizzle/schema");
  const { sql } = await import("drizzle-orm");
  await db.update(availableDates)
    .set({ currentBookings: sql`currentBookings + ${increment}` })
    .where(eq(availableDates.id, id));
}

// Bookings queries
export async function createBooking(booking: any) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { bookings } = await import("../drizzle/schema");
  const result = await db.insert(bookings).values(booking);
  return result;
}

export async function getAllBookings() {
  const db = await getDb();
  if (!db) return [];
  const { bookings } = await import("../drizzle/schema");
  return db.select().from(bookings).orderBy(bookings.createdAt);
}
