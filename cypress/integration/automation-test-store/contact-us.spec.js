/// <reference types="cypress" />
const { truncate } = require("lodash");

describe("Test Contact Us form via automatioon test store number 1", ()=>{
    before(function(){
       //cy.viewport(550,750)
       cy.fixture('example').then(function(data){
         // this.data = data ;
         globalThis.data = data; 
       }
       )
   })
 it("Successfull submit of Contact US form", ()=>{
  
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href$="contact"]')
    .click()
    .then(function(linkText){
       cy.log("Link clicking contains"+linkText.text())
    });
    ////a[contains(@href,'contact')]
    //cy.xpath("//a[contains(@href,'contact')]").click();

    cy.get('#ContactUsFrm_first_name').type(data.first_name);
    cy.get('#ContactUsFrm_email').type(data.email);
    cy.get('#ContactUsFrm_email').should('have.attr','name','email');
    cy.get('#ContactUsFrm_enquiry').type("Do you prrovide additional discount on bulk orders");
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > :nth-child(3)").should("have.text","Your enquiry has been successfully sent to the store owner!");
    



  


 });


});