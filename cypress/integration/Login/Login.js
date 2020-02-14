import { homePage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/home';
import { signinPage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/sign-in';
import { basePage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/base';

//Given
Given('I open Home page', () => {
  homePage.gotoHome();
  basePage.percySnapshot("home-loggedOut");
})

//When
When('I sign in', () => {
  signinPage.clickSignin();
  signinPage.enterLoginInfo();
})

//Then
Then(`Subscribe should not be visible on the page`, () => {
  cy.contains("Subscribe").should('not.exist')
  basePage.percySnapshot("home-loggedIn");
})