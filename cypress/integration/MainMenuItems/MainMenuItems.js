import { homePage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/home';
import { signinPage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/sign-in';
import { basePage } from '/Users/rakeshloi/Develop/Disco/cypress/integration/Pages/base';

//Given
Given('I am logged in', () => {
    homePage.gotoHome();
    signinPage.clickSignin();
    signinPage.enterLoginInfo();
  })

//Then
Then(`the menu bar items should be consistent with the cms`, () => {
    basePage.getResponse();
    basePage.checkMenuItems();
  })