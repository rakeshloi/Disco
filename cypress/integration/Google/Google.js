import { Given } from "cypress-cucumber-preprocessor/steps";
import '@percy/cypress';

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
  cy.percySnapshot("one")
})

