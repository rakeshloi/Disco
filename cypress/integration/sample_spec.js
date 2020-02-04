import '@percy/cypress';

describe('My First Test', function() {
    it('Gets, types and asserts', function() {
      cy.visit('/login?flow=login')
    
      // Get an input, type into it and verify that the value has been updated
      cy.get('input[name="email"]')
        .type('fake@email.com')

      cy.get('input[name="password"]')
        .type('password')
        //.should('have.value', 'fake@email.com')

      cy.get('button[type="submit"]').click()

      // Take a snapshot for visual diffing
    cy.percySnapshot("one")

      cy.get('button[class="cookie-policy__accept-button-container--button__3KyZP"]').click()

      // Take a snapshot for visual diffing
    cy.percySnapshot("two");

    })
  })