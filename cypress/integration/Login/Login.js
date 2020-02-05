import { homePage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/home';
import { signinPage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/sign-in';
import { basePage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/base';
import { Then } from "cypress-cucumber-preprocessor/steps";
import { When} from "cypress-cucumber-preprocessor/steps";
import { Given } from "cypress-cucumber-preprocessor/steps";

//Given
Given('I open Home page', () => {
  homePage.gotoHome();
  basePage.percySnapshot("home-loggedOut");
  basePage.cookieMonster();
})

//When
When('I sign in', () => {
  signinPage.signin();
  basePage.percySnapshot("sign-in");
})

//Then
Then(`Subscribe should not be visible on the page`, () => {
  cy.contains("Subscribe").should('not.exist')
  basePage.percySnapshot("home-loggedIn");
})