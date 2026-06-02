import { describe, expect, it } from "vitest";
import { createClient, getAdminSummary, listClients, listMedia, runAdminChecks } from "./crmStore";

describe("enterprise crm store", () => {
  it("reports dashboard counts and gallery checks", () => {
    const summary = getAdminSummary(false);
    expect(summary.totalClients).toBeGreaterThan(0);
    expect(summary.totalMedia).toBeGreaterThan(0);
    expect(listMedia(false).every(item => item.published)).toBe(true);
    expect(runAdminChecks(false).some(check => check.name === "Security configuration")).toBe(true);
  });

  it("flags duplicate client risk when email is reused", () => {
    const existing = listClients()[0];
    const duplicate = createClient({
      fullName: "Duplicate Test",
      email: existing.email,
      phone: "(256) 555-0999",
      city: "Birmingham, AL",
      status: "lead",
      tourInterest: "Selma",
      guestCount: 1,
      travelWindow: "Fall 2026",
      budget: "$1,000",
      source: "Test",
      notes: "Duplicate detection test",
    });

    expect(duplicate.duplicateRisk).toBe("high");
  });
});
