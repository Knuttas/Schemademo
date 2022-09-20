import {Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I click on the Courses button", () =>{
    cy.get('a[href*="#/courses"]').click()
})

Then("I should be able to create a new course", () =>{
    cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({force: true})
    cy.get('#name').type('Test Course')
    cy.get('#shortName').type('Tstcls')
    cy.get('#points').type('1')
    cy.get('#startDate').type('2021-01-01')
    cy.get('#endDate').type('2021-01-01')
    cy.get('#hoursPerDay').type('1')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div').should('contain', 'Element created')
})

Then("I should be able to see all the Courses from course list", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table').last()
    .should('contain', 'Test Course').and('contain', 'Tstcls')  
})

Then("I should be able to edit a course", () =>{
    cy.get('a[aria-label*="Edit"]').last().click({force: true})
    cy.get('#name').type('newCourse')
    cy.get('#shortName').type('NC')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1ou5ev1').click({force: true})
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('contain', 'Test CoursenewCourse').and('contain', 'TstclsNC')
})

Then("I should be able to delete a course", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr:nth-child(154) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingCheckbox.MuiTableCell-sizeSmall.css-1by067q > span > input').click({force: true})
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.css-kclhem > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaBulkActionsToolbar-topToolbar.css-1lj9bzt > button').click({force: true})
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div > div.MuiSnackbarContent-message.css-1w0ym84').should('contain', 'Element deleted')
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('not.contain', 'Test CoursenewCourse').and('not.contain', 'TstclsNC')
})
