/// <reference types="Cypress" />

import { Then, When } from "cypress-cucumber-preprocessor/steps";

When(
  "I click on {string} button in Disappearing Elements page",
  (button_name) => {
    cy.get("a").contains(button_name).click();
  }
);

Then(
  "I verify that for {string} button, 404 is the response code",
  (button_name) => {
    switch (button_name.toUpperCase()) {
      case "ABOUT":
        cy.request({ url: "/about", failOnStatusCode: false })
          .its("status")
          .should("eq", 404);
        break;
      case "CONTACT US":
        cy.request({ url: "/contact-us", failOnStatusCode: false })
          .its("status")
          .should("eq", 404);
        break;
      case "PORTFOLIO":
        cy.request({ url: "/portfolio", failOnStatusCode: false })
          .its("status")
          .should("eq", 404);
        break;
      case "GALLERY":
        cy.request({ url: "/gallery", failOnStatusCode: false })
          .its("status")
          .should("eq", 404);

      default:
        break;
    }
  }
);
