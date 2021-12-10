/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("/abtest");
});

describe("A/B Testing", () => {
  it("abc", () => {
    cy.get("h3").should("contain", "A/B Test");
    cy.contains(
      "p",
      "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through)."
    ).should("be.visible");
  });
});
