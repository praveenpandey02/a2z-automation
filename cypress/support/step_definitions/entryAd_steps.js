/// <reference types="Cypress" />

import { Then, When } from "cypress-cucumber-preprocessor/steps";

Then("I verify that a modal window appears right away", () => {
    cy.get(".modal").should('be.visible');
    cy.get(".modal-footer > p").click();
});

