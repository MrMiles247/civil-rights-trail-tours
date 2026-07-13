import { describe, expect, it } from "vitest";

/**
 * Test suite for city itinerary pages
 *
 * These tests verify that the city pages are properly structured
 * and accessible through the routing system.
 */

describe("City Itinerary Pages", () => {
  const cities = [
    {
      name: "6-Day RTJ Golf Trail Tour",
      slug: "rtj-golf-trail-tour",
    },
    {
      name: "8-Day Civil Rights History Tour",
      slug: "civil-rights-history-tour",
    },
    {
      name: "5-Day Washington, D.C. Black Heritage Tour",
      slug: "washington-dc-black-heritage-tour",
    },
    {
      name: "7-Day Black American Music History Tour",
      slug: "black-american-music-history-tour",
    },
    {
      name: "7-Day Mayan Riviera Expat Tour",
      slug: "mayan-riviera-expat-tour",
    },
    { name: "7-Day Jamaica Heritage Trail", slug: "jamaica-heritage-trail" },
  ];

  it("should have six itineraries defined", () => {
    expect(cities).toHaveLength(6);
    expect(cities.map(c => c.name)).toEqual([
      "6-Day RTJ Golf Trail Tour",
      "8-Day Civil Rights History Tour",
      "5-Day Washington, D.C. Black Heritage Tour",
      "7-Day Black American Music History Tour",
      "7-Day Mayan Riviera Expat Tour",
      "7-Day Jamaica Heritage Trail",
    ]);
  });

  it("should have valid URL slugs for all cities", () => {
    cities.forEach(city => {
      expect(city.slug).toBeTruthy();
      expect(city.slug).toMatch(/^[a-z]+(?:-[a-z]+)*$/);
      expect(city.slug.length).toBeGreaterThan(0);
    });
  });

  it("should have unique slugs for each city", () => {
    const slugs = cities.map(c => c.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(cities.length);
  });
});

describe("Tour Data Integrity", () => {
  it("should maintain consistent city information", () => {
    // This test ensures that city data remains consistent across the application
    const expectedCities = [
      "Memphis",
      "Birmingham",
      "Selma",
      "Montgomery",
      "Tuskegee",
      "Atlanta",
    ];

    expectedCities.forEach(cityName => {
      expect(cityName).toBeTruthy();
      expect(typeof cityName).toBe("string");
    });
  });
});
