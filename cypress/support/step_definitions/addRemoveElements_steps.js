/// <reference types="Cypress" />

import { And, Then } from "cypress-cucumber-preprocessor/steps";

Then('I verify that a button named {string} is displayed', (button_name) => {
    cy.get('button').contains(button_name, {matchCase:false});
});

And(/^I click on {string} button$/, (button_name) => {
    cy.get('button').contains(button_name, {matchCase:false}).click();
});