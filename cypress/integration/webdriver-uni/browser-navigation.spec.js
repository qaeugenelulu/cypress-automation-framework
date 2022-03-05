/// <reference types="cypress" />

//const { curryRight } = require("cypress/types/lodash");
//const { truncate } = require("lodash");

describe("Validate webdriver uni links", ()=>{

 it("Validate links redirect to the correct pages", ()=>{

   //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
   cy.visit('http://www.webdriveruniversity.com');
   cy.get('#contact-us').invoke('removeAttr','target').click({force:true});
   cy.url().should('include','Contact-Us')

   cy.go("back");
   cy.reload();
   //cy.reload(true); //without cache
   

   
   cy.get('#login-portal').invoke('removeAttr','target').click({force:true});
   cy.url().should('include','Login-Portal');
   cy.go('back');


 });
});