/// <reference types="Cypress" />

describe("These tests will check if all links are working or not", () => {
  it("Check all links", () => {
    cy.visit("/");
    cy.get("ul > li > a").each(($el) => {
      cy.log("**" + $el.text() + "**");
      if ($el.text() !== "Digest Authentication") {
        if ($el.text() === "Basic Auth") {
          cy.request(
            "https://admin:admin@the-internet.herokuapp.com/basic_auth"
          )
            .its("status")
            .should("equal", 200);
        } else if ($el.text() === "Secure File Download") {
          cy.request(
            "https://admin:admin@the-internet.herokuapp.com/download_secure"
          )
            .its("status")
            .should("equal", 200);
        } else {
          cy.wrap($el)
            .invoke("attr", "href")
            .then((href) => {
              cy.request(href).its("status").should("equal", 200);
            });
        }
      }
    });
  });
});
