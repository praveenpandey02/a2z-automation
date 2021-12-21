/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I verify that a drop down exists with 3 options", () => {
  cy.get("select").children("option").should("have.length", 3);
});

Then(
  "I verify that the default option selected is Please select an option",
  () => {
    cy.get("select")
      .find("option:selected")
      .should("have.text", "Please select an option");
  }
);

Then("I verify that 1st option can be selected from the dropdown", () => {
  cy.get("select").select(1).should("have.value", 1);
});
