///<reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I verify that I can download a sample file", () => {
    cy.get("a").contains("sample.pdf").then($el => {
        cy.wrap($el).invoke('attr', 'href').then(href => {
            cy.request(href).then(response => {
                expect(response.headers['content-disposition']).to.equal('attachment; filename="sample.pdf"');
                expect(response.headers['content-type']).to.equal('application/pdf');
                expect(response.status).to.eq(200);
            });
        });
    });
});