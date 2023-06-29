import { findSpecificProduct } from '../support/helpers.js'
import { faker } from '@faker-js/faker'
import AuthPage from '../support/pages/authorizationPage.js'
import OrderPage from '../support/pages/orderPage.js'
import newaddressinfo from '../fixtures/newaddressinfo.json'
import newcardinfo from '../fixtures/newcardinfo.json'
import userinfo from '../fixtures/userinfo.json'

newaddressinfo.country = faker.location.country()
newaddressinfo.name = faker.person.firstName()
newaddressinfo.mobilenumber = faker.phone.number('##########')
newaddressinfo.zipcode = faker.location.zipCode('#####')
newaddressinfo.address = faker.location.streetAddress()
newaddressinfo.city = faker.location.city()
newaddressinfo.state = faker.location.state()

newcardinfo.cardname = faker.finance.accountName()
newcardinfo.cardnumber = faker.finance.accountNumber(16)

describe('order test suit', () => {
    beforeEach('', () => {
        AuthPage.visit()
        cy.wait(1000).then(() => {
            cy.get('#mat-dialog-0 .close-dialog').click()
        })
        cy.get('.cc-dismiss').click()
        AuthPage.inputValidAuthData(userinfo.email, userinfo.password)
        findSpecificProduct('Strawberry Juice (500ml)')
    })
    it('Successful first order after auth', () => {
        AuthPage.getBasketPanel().click()
        OrderPage.checkBasketUrl()
        OrderPage.getProductInBasket().should('be.visible')
        OrderPage.getCheckoutButton().click()
        OrderPage.checkSelectUrl()
        OrderPage.getAddNewAddressButton().click()
        OrderPage.checkAddressCreateUrl()
        OrderPage.createNewAddress(
            newaddressinfo.country,
            newaddressinfo.name,
            newaddressinfo.mobilenumber,
            newaddressinfo.zipcode,
            newaddressinfo.address,
            newaddressinfo.city,
            newaddressinfo.state
        )
        OrderPage.getSubmitButton().click()
        OrderPage.checkSelectUrl()
        OrderPage.getRadioButton().eq(0).click()
        OrderPage.getContinueButton().click({ force: true })
        OrderPage.checkDeliveryAddressUrl()
        OrderPage.getRadioButton().eq(0).click()
        OrderPage.getDeliveryAddressContinueButton().click({ force: true })
        OrderPage.checkMyPaymentOptionsUrl()
        OrderPage.getAddNewCardDropdown().eq(0).click()
        OrderPage.createNewCard(newcardinfo.cardname, newcardinfo.cardnumber)
        OrderPage.getRadioButton().eq(0).click()
        OrderPage.getMyPaymentOptionsContinueButton().click({ force: true })
        OrderPage.checkOrderSummaryUrl()
        OrderPage.getPlaceYourOrderButton().click()
        OrderPage.checkOrderComplitionUrl()
    })
})
