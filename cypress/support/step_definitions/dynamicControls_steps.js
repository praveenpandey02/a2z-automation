/// <reference types="Cypress" />

import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

Then("I verify that the only checkbox is unchecked", () => {
  cy.get("input[type='checkbox']").should("not.be.checked");
});

When("I click on Remove button", () => {
  cy.get("button").contains("Remove").click();
});

Then(
  "I verify that Wait For It progress bar appears and disappears on it's own",
  () => {
    cy.get("div#loading").contains("Wait for it...").should("be.visible");
    cy.get("div#loading")
      .contains("Wait for it...", { timeout: 10000 })
      .should("not.be.visible");
    cy.get("div#loading")
      .invoke("attr", "style")
      .should("eq", "display: none;");
  }
);

Then("I verify that It's gone message is displayed", () => {
  cy.get("p#message").contains("It's gone!").should("be.visible");
});

Then("I verify that Add button is displayed", () => {
  cy.get("button").contains("Add").should("be.visible");
});

When("I click on Add button", () => {
  cy.get("button").contains("Add").click();
});

Then("I verify that It's back message is displayed", () => {
  cy.get("p#message").contains("It's back!").should("be.visible");
});

Then("I verify that the text field is disabled", () => {
  cy.get("input[type='text']").should("have.attr", "disabled");
});

When("I click on the Enable button", () => {
  cy.get("button").contains("Enable").click();
});

And("I verify that It's enabled message is displayed", () => {
  cy.get("p#message").contains("It's enabled!").should("be.visible");
});

And("I verify that the text field is enabled", () => {
  cy.get("input[type='text']")
    .type("Praveen")
    .should("have.value", "Praveen")
    .should("not.have.attr", "disabled");
});

When("I click on Disable button", () => {
  cy.get("button").contains("Disable").click();
});

And("I verify that It's disabled message is displayed", () => {
  cy.get("p#message").contains("It's disabled!").should("be.visible");
});
