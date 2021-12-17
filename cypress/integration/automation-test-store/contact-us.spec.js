/// <reference types="cypress" />
const { truncate } = require("lodash");

describe("Test Contact Us form via automatioon test store", ()=>{

 it("Successfull submit of Contact US form", ()=>{
  
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href$="contact"]')
    .click()
    .then(function(linkText){
       cy.log("Link clicking contains"+linkText.text())
    });
    ////a[contains(@href,'contact')]
    //cy.xpath("//a[contains(@href,'contact')]").click();

    cy.get('#ContactUsFrm_first_name').type("John");
    cy.get('#ContactUsFrm_email').type("John@ex.com");
    cy.get('#ContactUsFrm_email').should('have.attr','name','email');
    cy.get('#ContactUsFrm_enquiry').type("Do you prrovide additional discount on bulk orders");
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > :nth-child(3)").should("have.text","Your enquiry has been successfully sent to the store owner!");
    



  


 });


});