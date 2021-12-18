/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I verify that there are 2 checkboxes on the page", () => {
    cy.get("input[type='checkbox']").should('have.length', 2);
});

Then("I verify that the 1st checkbox is checked and the 2nd one is unchecked", () => {
    cy.get("input[type='checkbox']").should(list => {
        expect(list[0]).to.be.not.checked;
        expect(list[1]).to.be.checked;
    })
});

Then("I verify that checkboxes status can be changed", () => {
    cy.get("input[type='checkbox']").eq(0).should('not.be.checked').check().should('be.checked');
    cy.get("input[type='checkbox']").eq(1).should('be.checked').uncheck().should('not.be.checked');
});