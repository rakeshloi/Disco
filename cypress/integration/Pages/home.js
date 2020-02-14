export const homePage = {
  gotoHome() {
    cy.visit('/')
  },

  getResponse() {
    cy.request("https://eu3-prod-direct.eurosportplayer.com/cms/collections/web-menubar?include=default").then(
            response => {
              // use the response.body to write a fixture.
              cy.writeFile("cypress/fixtures/menuBar.json", response.body);
            })
  },
  checkMenuItems() {
    cy.fixture('menuBar.json').as('menu')
    cy.get('@menu').then((items) => {
      // create a loop to run through the json array to get all menu items
      for (var m = 1;; m++) {
          try {
            // iterate through json
            var item = (items.included[m].attributes.title);
            //check they exist on page
            cy.contains(item)
          } catch (e) {
            //catch error code
            break; 
          }
        }            
    })
  },
}
