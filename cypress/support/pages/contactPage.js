class ContactPage {
    visit() {
        cy.visit('/#/contact')
    }

    getAuthorField() {
        return cy.get('#mat-input-1')
    }

    getCommentField() {
        return cy.get('#comment')
    }

    getCaptchResultField() {
        return cy.get('#captchaControl')
    }

    getCaptchaNumber() {
        return cy.get('#captcha')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getRatingSlider() {
        return cy.get('#rating')
    }
}

export default new ContactPage()
