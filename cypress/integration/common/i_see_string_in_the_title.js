import { Then } from "cypress-cucumber-preprocessor/steps";
import { Given } from "cypress-cucumber-preprocessor/steps";
import '@percy/cypress';



//Given

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
  cy.percySnapshot("one")
})

//Then

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})