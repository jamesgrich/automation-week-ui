/// <reference types="cypress" />

export function clickInboxLink() {
    cy.get('.order-3 > .navbar-nav > :nth-child(1) > .nav-link').click()
}