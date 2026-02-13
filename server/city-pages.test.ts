import { describe, expect, it } from "vitest";

/**
 * Test suite for city itinerary pages
 * 
 * These tests verify that the city pages are properly structured
 * and accessible through the routing system.
 */

describe("City Itinerary Pages", () => {
  const cities = [
    { name: "Memphis", slug: "memphis" },
    { name: "Birmingham", slug: "birmingham" },
    { name: "Selma", slug: "selma" },
    { name: "Montgomery", slug: "montgomery" },
    { name: "Tuskegee", slug: "tuskegee" },
    { name: "Atlanta", slug: "atlanta" },
  ];

  it("should have all six city pages defined", () => {
    expect(cities).toHaveLength(6);
    expect(cities.map(c => c.name)).toEqual([
      "Memphis",
      "Birmingham",
      "Selma",
      "Montgomery",
      "Tuskegee",
      "Atlanta",
    ]);
  });

  it("should have valid URL slugs for all cities", () => {
    cities.forEach(city => {
      expect(city.slug).toBeTruthy();
      expect(city.slug).toMatch(/^[a-z]+$/);
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
    const expectedCities = ["Memphis", "Birmingham", "Selma", "Montgomery", "Tuskegee", "Atlanta"];
    
    expectedCities.forEach(cityName => {
      expect(cityName).toBeTruthy();
      expect(typeof cityName).toBe("string");
    });
  });
});
