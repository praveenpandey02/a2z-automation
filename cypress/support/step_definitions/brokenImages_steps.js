/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then(
  "I verify that 1st 2 images are broken where as the 3rd image is working fine",
  () => {
    cy.get("h3")
      .siblings("img")
      .should("have.length", 3)
      .each(($ele, index, $list) => {
        if (index === 0) {
          cy.wrap($ele)
            .invoke("attr", "src")
            .then((src) => {
              cy.request({ url: src, failOnStatusCode: false })
                .its("status")
                .should("equal", 404);
            });
        } else if (index === 1) {
          cy.wrap($ele)
            .invoke("attr", "src")
            .then((src) => {
              cy.request({ url: src, failOnStatusCode: false })
                .its("status")
                .should("equal", 404);
            });
        } else if (index === 2) {
          cy.wrap($ele)
            .invoke("attr", "src")
            .then((src) => {
              cy.request(src).its("status").should("equal", 200);
            });
        }
      });
  }
);
