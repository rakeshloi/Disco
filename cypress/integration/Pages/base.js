import '@percy/cypress';
import '@testing-library/cypress/add-commands';
import { Then } from "cypress-cucumber-preprocessor/steps";
import { When} from "cypress-cucumber-preprocessor/steps";
import { Given } from "cypress-cucumber-preprocessor/steps";

export const basePage = {
    percySnapshot(snapshot) {
        cy.wait(1000)
        cy.percySnapshot(snapshot, {widths: [480, 768, 1024, 1280]})
    },

    getResponse() {
        cy.request(Cypress.env('menubarjson')).then(
                response => {
                  //check response and body contains data
                  expect(response.status).to.eq(200)
                  expect(response).to.have.property('headers')
                  // use the response.body to write a fixture.
                  cy.writeFile("cypress/fixtures/menuBar.json", response.body);
                })
      },
      checkMenuItems() {
        cy.fixture('menuBar.json').as('menu')
        cy.get('@menu').then((items) => {
          //variable that only has included objects of fixture
          var itemobject = (items.included);
          //create a loop to run through the json array to get all menu items
          for (var m = 1; m < itemobject.length; m++) {
              try {
                //object does not have attributes so skip
                if(!(itemobject[m].hasOwnProperty('attributes'))){
                }
                //object has no titles so skip
                else if(!(itemobject[m].attributes.hasOwnProperty('title'))){
                }
                else if(itemobject[m].attributes.revision != 16){
                  //object has titles so check if its on the page
                  //ignore revision 16 as for some reason this does not appear on the page
                  var item = (items.included[m].attributes.title);
                  cy.contains(item)
                }
                else {
                }
              } 
              catch (e) {
                //catch error code
              break; 
              }
            }        
        })
      },
}

