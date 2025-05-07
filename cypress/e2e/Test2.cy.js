
describe('my first test', function() {

    it('verify title - positive', function() {
    cy.visit ("https://jqueryui.com/")
    cy.title ().should('eq','jQuery UI')
    })
})


describe('my second test', function() {

    it('verify title - positive', function() {
    cy.visit ("https://jqueryui.com/demos/")
    cy.title ().should('eq','jQuery UI Demos | jQuery UI')
    })
})

describe('my tred test', function() {

    it('verify title - negatif', function() {
    cy.visit ("https://jqueryui.com/demos/")
    cy.title ().should('eq','jQuery UI Demos')
    }) 
})

