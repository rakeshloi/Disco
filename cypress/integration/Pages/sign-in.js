export const signinPage = {
  signin() {
    //click sign in icon
    cy.get('button[class="styles-iconContainer-3CA8AEQ6 styles-authButton--vYGtzht"]').click()
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