class AuthPage {
    visit() {
        cy.log('Open auth form')
        cy.visit('/#/login')
    }

    getAuthEmailField() {
        return cy.get('#email')
    }

    getAuthPasswordField() {
        return cy.get('#password')
    }

    getAuthLoginButton() {
        return cy.get('#loginButton')
    }

    getAuthErrorMessage() {
        return cy.get('.error')
    }

    getBasketPanel() {
        return cy.get('mat-menu+button')
    }

    inputValidAuthData(email, password) {
        cy.log(`Input valid date for successful login with credential: ${email}, ${password}`)

        this.getAuthEmailField().type(email)
        this.getAuthPasswordField().type(password)
        this.getAuthLoginButton().click()
        this.getBasketPanel().should('be.visible')
    }

    inputInvalidAuthData() {
        cy.log(`Input invalid date for unsuccessful login`)

        // Да, мог сгенерировать с помощью фейкера, но мне же всегда нужны невалидные данные, для чего усложнять...
        this.getAuthEmailField().type('invalidData99@gmail.com')
        this.getAuthPasswordField().type('11111')
        this.getAuthLoginButton().click()
        this.getAuthErrorMessage().should('be.visible')
    }
}
export default new AuthPage()
