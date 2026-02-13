import { drizzle } from "drizzle-orm/mysql2";
import { tours, availableDates } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

const tourData = [
  {
    name: "Complete Civil Rights Trail",
    description: "A comprehensive six-day journey through all major Civil Rights landmarks from Memphis to Atlanta, including the Edmund Pettus Bridge, Birmingham Civil Rights Institute, and MLK National Historic Site.",
    cities: JSON.stringify(["Memphis", "Birmingham", "Selma", "Montgomery", "Tuskegee", "Atlanta"]),
    duration: "6 Days",
    price: 249900, // $2,499.00
    highlights: JSON.stringify([
      "Visit the National Civil Rights Museum at the Lorraine Motel in Memphis",
      "Walk across the Edmund Pettus Bridge in Selma",
      "Tour the Birmingham Civil Rights Institute and 16th Street Baptist Church",
      "Experience the Equal Justice Initiative museums in Montgomery",
      "Explore Tuskegee University and its historic legacy",
      "Visit the Martin Luther King Jr. National Historic Site in Atlanta"
    ])
  },
  {
    name: "Alabama Civil Rights Experience",
    description: "A focused four-day exploration of Alabama's pivotal role in the Civil Rights Movement, covering Birmingham, Selma, Montgomery, and Tuskegee.",
    cities: JSON.stringify(["Birmingham", "Selma", "Montgomery", "Tuskegee"]),
    duration: "4 Days",
    price: 169900, // $1,699.00
    highlights: JSON.stringify([
      "Birmingham Civil Rights Institute and Kelly Ingram Park",
      "Edmund Pettus Bridge and Selma to Montgomery National Historic Trail",
      "Rosa Parks Museum and Dexter Avenue King Memorial Baptist Church",
      "Equal Justice Initiative's Legacy Museum and National Memorial for Peace and Justice",
      "Tuskegee University and Tuskegee Airmen National Historic Site"
    ])
  },
  {
    name: "Selma to Montgomery March Experience",
    description: "A powerful two-day journey retracing the historic Selma to Montgomery marches, including the Edmund Pettus Bridge and key Montgomery landmarks.",
    cities: JSON.stringify(["Selma", "Montgomery"]),
    duration: "2 Days",
    price: 79900, // $799.00
    highlights: JSON.stringify([
      "Edmund Pettus Bridge crossing with historical context",
      "Selma to Montgomery National Historic Trail",
      "Alabama State Capitol where the march concluded",
      "Dexter Avenue King Memorial Baptist Church",
      "Rosa Parks Museum and Library"
    ])
  }
];

console.log("Seeding tours...");

for (const tour of tourData) {
  const result = await db.insert(tours).values(tour);
  console.log(`Inserted tour: ${tour.name}`);
}

// Add some available dates for the next 6 months
const today = new Date();
const tourIds = [1, 2, 3];

console.log("Seeding available dates...");

for (let i = 0; i < 12; i++) {
  const date = new Date(today);
  date.setDate(date.getDate() + (i * 14)); // Every 2 weeks
  
  for (const tourId of tourIds) {
    await db.insert(availableDates).values({
      tourId,
      date,
      maxCapacity: 20,
      currentBookings: 0
    });
  }
}

console.log("Seeding complete!");
process.exit(0);
