class RegistrationPage {
    visit() {
        cy.log('Open registration form')
        cy.visit('/#/register')
    }

    getEmailField() {
        return cy.get('#emailControl')
    }

    getPasswordField() {
        return cy.get('#passwordControl')
    }

    getPasswordRepeat() {
        return cy.get('#repeatPasswordControl')
    }

    getSecurityQuestionField() {
        return cy.get('#mat-select-0')
    }

    getSecurityQuestionOption() {
        return cy.get('.mat-option')
    }

    getAnswerField() {
        return cy.get('#securityAnswerControl')
    }

    getRegistrButton() {
        return cy.get('#registerButton')
    }

    emailErrorMessage() {
        return cy.get('#mat-error-5')
    }

    passwordErrorMessage() {
        return cy.get('#mat-error-6')
    }

    repeatPasswordErrorMessage() {
        return cy.get('#mat-error-6')
    }

    securityQuestionErrorMessage() {
        return cy.get('#mat-error-3')
    }

    answerErrorMessage() {
        return cy.get('#mat-error-4')
    }

    fillEmailAndPassword(email, password, repeatPassword) {
        cy.log(`Fill fields with data: ${email}, ${password}, ${repeatPassword}`)

        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getPasswordRepeat().type(repeatPassword)
    }

    chooseSecurityQuestion(optionNumber) {
        cy.log(`Choose option from security questions list with number: ${optionNumber}`)

        this.getSecurityQuestionField().click()
        this.getSecurityQuestionOption().eq(optionNumber).click()
    }

    writeSecurityAnswer(answer) {
        cy.log(`Write an answer with text: ${answer}`)

        this.getAnswerField().type(answer)
    }

    errorMessagesAppear() {
        cy.log('Checking that validation errors appear under each field')

        this.getEmailField().type('@email.com').blur()
        this.getPasswordField().type('111').blur()
        this.getPasswordRepeat().type('222').blur()
        this.getSecurityQuestionField().click()
        cy.get('body').click()
        this.getAnswerField().click()
        this.getAnswerField().blur()
        this.emailErrorMessage().should('be.visible')
        this.passwordErrorMessage().should('be.visible')
        this.repeatPasswordErrorMessage().should('be.visible')
        this.securityQuestionErrorMessage().should('be.visible')
        this.answerErrorMessage().should('be.visible')
    }
}

export default new RegistrationPage()
