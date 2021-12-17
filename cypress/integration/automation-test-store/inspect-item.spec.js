/// <reference types="cypress" />

describe("Inspect Automation Test Store items using Chain commands", ()=>{

    it.only("Click on the first item using using item header", ()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get(".prdocutname[title='Skinsheen Bronzer Stick']")
          .contains('Skinsheen Bronzer Stick')
          .click()
          .then(function(itemHeaderText){
              console.log("Selected the following item"+itemHeaderText.text())
          });
   
    });

    it("Click on the first item using using index", ()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper')
          .find('.prdocutname')
          .eq(0)
          .click()
   
    });
   
   
   });