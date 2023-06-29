import AuthPage from '../support/pages/authorizationPage'
import userinfo from '../fixtures/userinfo.json'

describe('Registration suit', () => {
    beforeEach('', () => {
        AuthPage.visit()
        cy.wait(1000).then(() => {
            cy.get('#mat-dialog-0 .close-dialog').click()
        })
    })

    it('Positive auth', () => {
        AuthPage.inputValidAuthData(userinfo.email, userinfo.password)
    })

    it('Negative auth', () => {
        AuthPage.inputInvalidAuthData()
    })
})
