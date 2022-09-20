import {Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/*
Given("that I am logged in as admin", () =>{
    cy.visit(Cypress.env('baseUrl'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login > input').click()
})

And("that I am on the admin page", () =>{
    cy.visit(Cypress.env('adminUrl'))
})
*/

When("I click on the classes button", () =>{
    cy.get('a[href*="#/classes"]').click()
})

Then("I should be able to create a new class", () =>{
    cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({force: true})
    cy.get('#name').type('Test Class')
    cy.get('#shortName').type('Tstcls')
    cy.get('#school').type(1)
    cy.get('#blog').type('test')
    cy.get('#defaultStartTime').type(1)
    cy.get('#defaultEndTime').type(1)
    cy.get('#defaultInvoiceItem').type(1)
    cy.get('#defaultHoursPerDay').type(1)
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div').should('contain', 'Element created')
})

Then("I should be able to see all the classes from class list", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last()
    .should('contain', 'Test Class').and('contain', 'Tstcls')  
})

Then("I should be able to edit a class", () =>{
    cy.get('a[aria-label*="Edit"]').last().click({force: true})
    cy.get('#name').type('TestEDIT')
    cy.get('#shortName').type('Tedi')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1ou5ev1').click({force: true})
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('contain', 'TestEDIT').and('contain', 'Tedi')
})

Then("I should be able to delete a class", () =>{
    cy.get('input[type*="checkbox"]').last().click({force: true})
    cy.get('button[aria-label*="Delete"]').click({force: true})
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div > div.MuiSnackbarContent-message.css-1w0ym84').should('contain', 'Element deleted')
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('not.contain', 'Test ClassTestEDIT').and('not.contain', 'TstclsTedi')
})
