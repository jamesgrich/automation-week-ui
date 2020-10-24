/// <reference types="cypress" />

import { navigate, fillNameField, fillEmailField, fillPhoneField, fillSubjectField, fillDescriptionField, clickSubmit, checkValidationMessage, navigateToAdminPage} from "../page-objects/homepage"
import { enterUsername, enterPassword, clickLoginButton } from "../page-objects/admin-login-page"
import { clickInboxLink } from "../page-objects/admin-logged-in-page"
import { clickMessage, verifyMessageContents, clickCloseButton } from "../page-objects/admin-messages-page"

const name = "John Smith"
const email = "atestemail@provider.com"
const phone = "07712345678"
const subject = "Test Subject"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const username = "admin"
const password = "password"

describe ('testing the contact form functionality', () => {

    it('should navigate to the Homepage', () => 
    {
        navigate()
    })

    it('should fill in the contact form', () => {
        fillNameField(name)
        fillEmailField(email)
        fillPhoneField(phone)
        fillSubjectField(subject)
        fillDescriptionField(description)
    })

    it('should click the submit button', () => {
        clickSubmit()
    })

    it('should check the validation message appears', () => {
        checkValidationMessage(name, subject)
    })
})

describe ('logging in as an admin', () => {

    it('should click on the Admin Page link', () => {
        navigateToAdminPage()
    })

    it('should enter the login details', () => {
        enterUsername(username)
        enterPassword(password)
    })

    it('should click the login button', () => {
        clickLoginButton()
    })
})

describe ('checking the message has been received on the admin panel', () => {

    it('should click on the Admin Inbox link', () => {
        clickInboxLink()
    })

    it('should click the request in the inbox', () => {
        clickMessage(subject)
    })

    it('should check the message contents are visible', () => {
        verifyMessageContents(name, email, phone, subject, description)
    })
})