import ContactPage from '../support/pages/contactPage'
import { solveCaptcha, moveSliderToValue } from '../support/helpers'

describe('Registration suit', () => {
    beforeEach('', () => {
        ContactPage.visit()
        cy.wait(1000).then(() => {
            cy.get('#mat-dialog-0 .close-dialog').click()
        })
        cy.get('.cc-dismiss').click()
    })

    it('', () => {
        ContactPage.getCommentField().type('Random comment')
        moveSliderToValue()
        solveCaptcha()
        cy.get('body').click()
        ContactPage.getSubmitButton().click()
    })
})
