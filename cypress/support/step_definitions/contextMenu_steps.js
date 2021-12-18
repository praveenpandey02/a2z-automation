/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I verify the alert box message is as expected", () => {
  cy.get("#hot-spot").rightclick();
  cy.on('window:alert', msg => {
      expect(msg).to.equal('You selected a context menu');
  });
});
