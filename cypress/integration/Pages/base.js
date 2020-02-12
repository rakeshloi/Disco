import '@percy/cypress';
import { Then } from "cypress-cucumber-preprocessor/steps";
import { When} from "cypress-cucumber-preprocessor/steps";
import { Given } from "cypress-cucumber-preprocessor/steps";

export const basePage = {
    percySnapshot(snapshot) {
        cy.wait(1000)
        cy.percySnapshot(snapshot, {widths: [480, 768, 1024, 1280]})
    },
    cookieMonster() {
        cy.get('button').contains('Accept').click()
  }
}