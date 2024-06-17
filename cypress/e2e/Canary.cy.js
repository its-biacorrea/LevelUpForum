/// <reference types="cypress"/>
import { describe } from "mocha";

describe("", () => {
  it("", () => {
    cy.visit("http://localhost:5174");

    cy.get('[data-cy="menu_posts"]').click();

    cy.get('[data-cy="post_card"]').should("have.length", 19);

    cy.get("#inputSearch").type("Hey all");

    cy.get('[data-cy="post_card"]').should("have.length", 1);
  });
});
