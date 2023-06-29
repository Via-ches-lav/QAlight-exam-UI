import userinfo from '../fixtures/userinfo.json'
import { faker } from '@faker-js/faker'
import registrationPage from '../support/pages/registrationPage'

// userinfo.email = faker.internet.email()
// userinfo.password = faker.internet.password({ length: 6 })
// userinfo.optionNumber = faker.number.int({ min: 1, max: 14 })
userinfo.answer = faker.lorem.word({ length: { min: 5, max: 7 } })

describe('Registration suit', () => {
    beforeEach('', () => {
        registrationPage.visit()
        cy.wait(1000).then(() => {
            cy.get('#mat-dialog-0 .close-dialog').click()
        })
    })

    it('Positive registration', () => {
        registrationPage.fillEmailAndPassword(userinfo.email, userinfo.password, userinfo.password)
        registrationPage.chooseSecurityQuestion(userinfo.optionNumber)
        registrationPage.writeSecurityAnswer(userinfo.answer)
        registrationPage.getRegistrButton().click()
    })

    it('Negative registration', () => {
        registrationPage.errorMessagesAppear()
    })
})
