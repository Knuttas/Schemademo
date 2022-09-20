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

When("I click on the courses button", () =>{
    cy.get('a[href*="#/courses"]').click()
})

Then("I should be able to create a new courses", () =>{
    cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({force: true})
    cy.get('#name').type('Test Course')
    cy.get('#shortName').type('Tstcls')
    cy.get('#points').type(1)
    cy.get('#startDate').type('test')
    cy.get('#endDate').type(1)
    cy.get('#hoursPerDay').type(1)
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div').should('contain', 'Element created')
})

Then("I should be able to see all the courses from course list", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last()
    .should('contain', 'Test Course').and('contain', 'Tstcls')  
})

Then("I should be able to edit a course", () =>{
    cy.get('a[aria-label*="Edit"]').last().click({force: true})
    cy.get('#name').type('TestEDIT')
    cy.get('#shortName').type('Tedi')
    cy.get('#class').type(1)
    cy.get('#points').type(1)
    cy.get('#startDate').type('test')
    cy.get('#endDate').type(1)
    cy.get('#plan').type(1)
    cy.get('#hoursPerDay').type(1)
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1ou5ev1').click({force: true})
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('contain', 'TestEDIT').and('contain', 'Tedi')
})

Then("I should be able to delete a course", () =>{
    cy.get('input[type*="checkbox"]').last().click({force: true})
    cy.get('button[aria-label*="Delete"]').click({force: true})
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div > div.MuiSnackbarContent-message.css-1w0ym84').should('contain', 'Element deleted')
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('not.contain', 'Test ClassTestEDIT').and('not.contain', 'TstclsTedi')
})
