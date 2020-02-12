export const videoPage = {
    selectVideo() {
        //get first video on page and click it - must be moved to video page file
        cy.get('[data-sonic-type="video"]:first').click()
    },
    
}