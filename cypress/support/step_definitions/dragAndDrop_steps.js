/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I verify that there are 2 boxes on the page", () => {
    cy.get("#columns > .column").should('have.length', 2);
});

Then("I verify that 1st box is A and 2nd box is B", () => {
    cy.get("#columns > .column").then(list => {
        cy.wrap(list[0]).find('header').should('have.text', 'A');
        cy.wrap(list[1]).find('header').should('have.text', 'B');
    });

    cy.get('#columns > #column-a').click().trigger("mousedown", {which: 1})
    cy.get('#columns > #column-b')

    cy.get("#columns > .column").then(list => {
        cy.wrap(list[0]).find('header').should('have.text', 'B');
        cy.wrap(list[1]).find('header').should('have.text', 'A');
    });
});