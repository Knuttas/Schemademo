import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the teachers button", () => {
  cy.get('#root > div > div > div > main > div.MuiDrawer-root.RaSidebar-docked.MuiDrawer-docked.css-j24rge > div > div > div > a:nth-child(2)').click()
})

Then("i should be able to add a teacher", () => {
  cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({ force: true })
  cy.get('#firstname').type('Peter')
  cy.get('#lastname').type('Parker')
  cy.get('#initials').type('PP')
  cy.get('#email').type('Peter@nodehill.com')
  cy.get('#color').type('#71b2de')
  cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
  cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div').should('contain', 'Element created')
})

Then("i should be able to see the teacher in the teachers list", () => {
  cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table').last()
    .should('contain', 'Peter').and('contain', 'Peter@nodehill.com').and('contain', 'Parker')
})

Then("i should be able to edit a teacher", () => {
  cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().click({ force: true })
  cy.get('#firstname').type('Spiderman')
  cy.get('#lastname').type('3')
  cy.get('#email').type('spiderman@nodehill.com')
  cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1ou5ev1').click({ force: true })
  cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('contain', 'Spiderman').and('contain', '3')
})

Then("i should be able to delete a teacher", () => {
  cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr:nth-child(19) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingCheckbox.MuiTableCell-sizeSmall.css-1by067q > span > input').click({ force: true })
  cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.css-kclhem > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaBulkActionsToolbar-topToolbar.css-1lj9bzt > button').click({ force: true })
  cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div > div.MuiSnackbarContent-message.css-1w0ym84').should('contain', 'Element deleted')
  cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('not.contain', 'Spiderman').and('not.contain', '3')
})