/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I verify that the table has 7 columns in total", () => {
  cy.get("table > thead > tr > th").should("have.length", 7);
});

Then("I verify that column names are displayed as expected", () => {
  cy.get("table > thead > tr > th").should((col_list) => {
    expect(col_list[0]).to.contain.text("Lorem");
    expect(col_list[1]).to.contain.text("Ipsum");
    expect(col_list[2]).to.contain.text("Dolor");
    expect(col_list[3]).to.contain.text("Sit");
    expect(col_list[4]).to.contain.text("Amet");
    expect(col_list[5]).to.contain.text("Diceret");
    expect(col_list[6]).to.contain.text("Action");
  });
});

Then("I verify that table has 10 rows", () => {
  cy.get("table > tbody > tr").should("have.length", 10);
});

//TODO Need to find a way to reach the cell containing edit and delete links in a row
Then("I verify that each row has Edit and Delete link", () => {
  cy.get("table > tbody > tr").then($row_list => {
      $row_list.each(i => {
          console.log(this.text());
      });
  });
});
