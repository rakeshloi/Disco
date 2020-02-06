export const signinPage = {
    signin() {
    //click sign in icon
    cy.get('button[class="styles-iconContainer-3CA8AEQ6 styles-authButton--vYGtzht"]').click()
    // Try to get some external data
  cy.fixture('users.json').as('users')
  // now we can avoid the alias altogether
  // and just use a callback function

  cy.get('@users').then((users) => {
    //const user = users[1]
    // access the users argument

    // get email element and fill in with data from file and assert
    cy.get('input[name="email"]')
    .type(users.userid)
    cy.get('input[name="password"]')
    .type(users.pword)
    cy.get('button[type="submit"]').click()
    //get first video on page and click it
    cy.get('[data-sonic-type="video"]:first').click()
      })  
    },
  }