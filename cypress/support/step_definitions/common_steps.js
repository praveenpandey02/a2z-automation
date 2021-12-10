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
    default:
      throw console.error("You've entered a wrong page name");
  }
});

Then(
  "I verify that header for page {string} is displayed as expected",
  (page_name) => {
    switch (page_name.toUpperCase()) {
      case "A/B TESTING":
        cy.get("h3").should("contain", "A/B Test");
        break;
      case "ADD/REMOVE ELEMENTS":
        cy.get("h3").should("contain", "Add/Remove Elements");
        break;
      default:
        throw console.error("You've entered a wrong page name");
    }
  }
);

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
