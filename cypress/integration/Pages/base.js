import '@percy/cypress';

export const basePage = {
    percySnapshot(snapshot) {
        cy.wait(1000)
        cy.percySnapshot(snapshot, {widths: [480, 768, 1024, 1280]})
    },
    cookieMonster() {
        cy.get('button').contains('Accept').click()
  }
}