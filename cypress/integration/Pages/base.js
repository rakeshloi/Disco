import '@percy/cypress';

export const basePage = {
    percySnapshot(snapshot) {
        cy.wait(2000)
        cy.percySnapshot(snapshot, {widths: [480, 768, 1024, 1280]})
    },
    cookieMonster() {
        cy.get('button[class="styles-btn-3RS5wkVj"]').click()
  }
}