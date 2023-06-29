export function findSpecificProduct(productName) {
    cy.log('Is looking for product')
    cy.get('.mat-search_icon-search').type('a{enter}')
    cy.wait(500).then(pages => {
        for (let i = 0; i < 3; i++) {
            if (cy.get('.mat-simple-snack-bar-content').should('not.exist')) {
                cy.get('body').then(body => {
                    if (body.find(`[alt="${productName}"]`).length > 0) {
                        cy.get('[aria-label="Add to Basket"]').eq(9).click({ force: true })
                        cy.get('.mat-simple-snack-bar-content').should('be.visible')
                    } else {
                        cy.get('.mat-paginator-icon').eq(1).click({ force: true })
                    }
                })
            }
        }
    })
}

export function solveCaptcha() {
    cy.log('Captcha solving')

    cy.get('#captcha').then(captchaElement => {
        const captchaText = captchaElement.text().trim()
        const result = eval(captchaText)
        if (!isNaN(result)) {
            cy.get('#captchaControl').type(result.toString())
        } else {
            cy.log('Не удалось вычислить результат капчи.')
        }
    })
}

export function moveSliderToValue() {
    cy.log('slider moving is activated')

    cy.get('#rating').invoke('attr', 'aria-valuenow', '3')
    cy.get('#rating').invoke('attr', 'aria-valuetext', '3★')
    cy.get('.mat-slider-thumb-container').invoke('attr', 'style', 'transform: translateX(-50%);')
    cy.get('.mat-slider-thumb-label-text').invoke('attr', 'class', '3★')
    cy.get('#rating').click()
}
