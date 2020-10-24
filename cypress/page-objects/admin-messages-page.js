/// <reference types="cypress" />

export function clickMessage(subject) {
    cy.get('.messages').contains('p', subject).click()
}

export function verifyMessageContents(name, email, phone, subject, message) {
    cy.get('.col-10 > p').should('have.text', "From: " + name)
    cy.get(':nth-child(2) > .col-12 > p').should('have.text', "Email: " + email)
    cy.get('.col-2 > p').should('have.text', "Phone: " + phone)
    cy.get(':nth-child(3) > .col-12 > p > span').should('have.text', subject)
    cy.get(':nth-child(4) > .col-12 > p').should('have.text', message)
}