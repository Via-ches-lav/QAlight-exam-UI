class OrderPage {
    getBasketPanel() {
        return cy.get('mat-menu+button')
    }

    getProductInBasket() {
        return cy.get('mat-row')
    }

    getAddressInTable() {
        return cy.get('mat-row')
    }

    getCheckoutButton() {
        return cy.get('[data-icon="cart-arrow-down"]')
    }

    getAddNewAddressButton() {
        return cy.get('app-address mat-card div button span.mat-button-wrapper')
    }

    getCountryField() {
        return cy.get('#mat-input-3')
    }

    getNameField() {
        return cy.get('#mat-input-4')
    }

    getMobileNumberField() {
        return cy.get('#mat-input-5')
    }

    getZipCodeField() {
        return cy.get('#mat-input-6')
    }

    getAddressField() {
        return cy.get('#address')
    }

    getCityField() {
        return cy.get('#mat-input-8')
    }

    getStateField() {
        return cy.get('#mat-input-9')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getContinueButton() {
        return cy.get('[aria-label="Proceed to payment selection"]')
    }

    getDeliveryAddressContinueButton() {
        return cy.get('[aria-label="Proceed to delivery method selection"]')
    }

    getMyPaymentOptionsContinueButton() {
        return cy.get('[aria-label="Proceed to review"]')
    }

    getRadioButton() {
        return cy.get('.mat-radio-container')
    }

    getAddNewCardDropdown() {
        return cy.get('.mat-expansion-indicator')
    }

    getCardNumberField() {
        return cy.get('#mat-input-11')
    }

    getExpiryMonthField() {
        return cy.get('#mat-input-12')
    }

    getExpiryYearField() {
        return cy.get('#mat-input-13')
    }

    getCardNameField() {
        return cy.get('#mat-input-10')
    }

    getPopup() {
        return cy.get('.mat-simple-snack-bar-content')
    }

    getPlaceYourOrderButton() {
        return cy.get('#checkoutButton')
    }

    checkBasketUrl() {
        return cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/basket')
    }

    checkAddressCreateUrl() {
        return cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/address/create')
    }

    checkDeliveryAddressUrl() {
        return cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/delivery-method')
    }

    checkMyPaymentOptionsUrl() {
        return cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/payment/shop')
    }

    checkOrderSummaryUrl() {
        return cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/order-summary')
    }

    checkSelectUrl() {
        return cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/address/select')
    }

    checkOrderComplitionUrl() {
        return cy.url().should('include', '/order-completion')
    }

    createNewAddress(country, name, mobilenumber, zipcode, address, city, state) {
        cy.log('Input information about new address')

        this.getCountryField().type(country)
        this.getNameField().type(name)
        this.getMobileNumberField().type(mobilenumber)
        this.getZipCodeField().type(zipcode)
        this.getAddressField().type(address)
        this.getCityField().type(city)
        this.getStateField().type(state)
    }

    createNewCard(cardname, cardnumber) {
        cy.log('Input information about new card')

        this.getCardNameField().type(cardname)
        this.getCardNumberField().type(cardnumber)
        this.getExpiryMonthField().select(1)
        this.getExpiryYearField().select(5)
        this.getSubmitButton().click()
        this.getPopup().should('be.visible')
    }
}

export default new OrderPage()
