/// <reference types="cypress" />

export function navigate() {
    cy.visit('https://aw1.automationintesting.online/#/')
}

export function fillNameField(name) {
    cy.get('#name').type(name)
    return name
}

export function fillEmailField(email) {
    cy.get('#email').type(email)
}

export function fillPhoneField(phoneNumber) {
    cy.get('#phone').type(phoneNumber)
}

export function fillSubjectField(subject) {
    cy.get('#subject').type(subject)
    return subject
}

export function fillDescriptionField(description) {
    cy.get('#description').type(description)
}

export function clickSubmit() {
    cy.get('#submitContact').click()
}

export function checkValidationMessage(name, subject) {
    cy.get(':nth-child(2) > div > h2').should('have.text', "Thanks for getting in touch " + name + "!")
    cy.get('.contact > :nth-child(2) > div > :nth-child(2)').should('have.text', "We'll get back to you about")
    cy.get('div > [style="font-weight: bold;"]').should('have.text', subject)
    cy.get('.contact > :nth-child(2) > div > :nth-child(4)').should('have.text', "as soon as possible.")
}

export function navigateToAdminPage() {
    cy.get('[href="/#/admin"]').click()
}