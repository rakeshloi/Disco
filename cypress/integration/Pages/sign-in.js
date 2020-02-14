export const signinPage = {
  clickSignin() {
    //click sign in icon
    cy.get('[class="styles-iconContainer-1W8Pph-J styles-authButton-11PaBCTY"]').click()
  },
  enterLoginInfo() {
    // Try to get some external data
    cy.fixture('users.json').as('users')
    // get data from fixture and submit login form
    cy.get('@users').then((users) => {
      // get data from fixture and submit login form
      cy.get('input[name="email"]')
      .type(users.userid)
      cy.get('input[name="password"]')
      .type(users.pword)
      cy.get('button[type="submit"]').click()
    })     
  },
}