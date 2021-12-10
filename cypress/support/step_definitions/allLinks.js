import { Given } from "cypress-cucumber-preprocessor/steps";

Given(/^I am on the main page$/, () => {
  cy.visit("/");
});
