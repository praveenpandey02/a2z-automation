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
    case "CHALLENGING DOM":
      cy.visit("/challenging_dom");
      break;
    case "CHECKBOXES":
      cy.visit("/checkboxes");
      break;
    case "CONTEXT MENU":
      cy.visit("/context_menu");
      break;
    case "DISAPPEARING ELEMENTS":
      cy.visit("/disappearing_elements");
      break;
    case "DRAG AND DROP":
      cy.visit("/drag_and_drop");
      break;
    case "DROPDOWN":
      cy.visit("/dropdown");
      break;
    case "DYNAMIC CONTROLS":
      cy.visit("/dynamic_controls");
      break;
    case "ENTRY AD":
      cy.visit("/entry_ad");
      break;
    case "EXIT INTENT":
      cy.visit("/exit_intent");
      break;
    case "FILE DOWNLOAD":
      cy.visit("/download");
      break;
    default:
      console.log("You have entered an invalid page name");
      throw console.error("You've entered a wrong page name");
  }
});

Then("I verify that page header is displayed as {string}", (page_header) => {
  cy.get("h3").should("contain", page_header);
});

Then("I verify that page header is displayed as DYNAMIC CONTROLS", () => {
  cy.get("h4").should("contain", "Dynamic Controls");
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
      case "CHALLENGING DOM":
        cy.contains(
          "p",
          "The hardest part in automated web testing is finding the best locators (e.g., ones that well named, unique, and unlikely to change). It's more often than not that the application you're testing was not built with this concept in mind. This example demonstrates that with unique IDs, a table with no helpful locators, and a canvas element"
        ).should("be.visible");
        break;

      default:
        break;
    }
  }
);

Then("I verify that I am on the main page", () => {
  cy.url().should("eq", "https://the-internet.herokuapp.com/");
});
