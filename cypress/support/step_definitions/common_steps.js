/// <reference types="Cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the {string} page", (end_point_url) => {
  switch (end_point_url.toUpperCase()) {
    case "A/B TESTING":
      cy.visit("/abtest");
      break;
    case "ADD/REMOVE ELEMENTS":
      cy.visit("/add_remove_elements/");
      break;
    case "BROKEN IMAGES":
      cy.visit("/broken_images");
      break;
    default:
      console.log("You have entered an invalid page name");
      throw console.error("You've entered a wrong page name");
  }
});

Then("I verify that page header is displayed as {string}", (page_header) => {
  cy.get("h3").should("contain", page_header);
});

Then(
  "I verify that paragraph for page {string} is displayed as expected",
  (page_name) => {
    switch (page_name.toUpperCase()) {
      case "A/B TESTING":
        cy.contains(
          "p",
          "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through)."
        ).should("be.visible");

        break;

      default:
        break;
    }
  }
);