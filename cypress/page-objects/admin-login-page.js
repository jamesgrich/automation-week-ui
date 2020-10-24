/// <reference types="cypress" />

export function enterUsername(username) {
    cy.get('[data-testid=username]').type(username)
}

export function enterPassword(password) {
    cy.get('[data-testid=password]').type(password)
}

export function clickLoginButton() {
    cy.get('[data-testid=submit]').click();
}