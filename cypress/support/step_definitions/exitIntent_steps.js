/// <reference types="Cypress" />

import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("I move the mouse outside of the viewport", () => {
  cy.root().trigger('mouseleave', 0, 0);
});

Then("I verify the appearance of a modal window", () => {
  cy.get(".modal").should("be.visible");
});
