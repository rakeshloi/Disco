export const signinPage = {
    signin() {
    //click sign in icon
    cy.get('button[class="styles-iconContainer-3CA8AEQ6 styles-authButton--vYGtzht"]').click()
    //enter email and password and click sign in
    cy.get('input[name="email"]')
            .type("gb+eurosport@test.com")
    cy.get('input[name="password"]')
            .type("testes1")
    cy.get('button[type="submit"]').click()   
    },
  }
