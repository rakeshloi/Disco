export const signinPage = {
  clickSignin() {
    //click sign in icon
    //cy.get('[class="styles-iconContainer-1W8Pph-J styles-authButton-11PaBCTY"]').click()
    cy.get('a[href*="login"]').click()
  },
  enterLoginInfo() {
      cy.get('input[name="email"]')
      .type(Cypress.env('userid'))
      cy.get('input[name="password"]')
      .type(Cypress.env('pword'))
      cy.get('button[type="submit"]').click()    
  },
}