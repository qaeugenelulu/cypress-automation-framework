/// <reference types="cypress" />

const { truncate } = require("lodash");

describe("Test Contact Us form via webdriverUnivercity", ()=>{

 it("Successfull submit of Contact US form", ()=>{

   cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
   cy.document().should("have.property",'charset').and('eq','UTF-8');
   cy.title().should('include','WebDriver');
   cy.url().should('include','contactus')
   //get by id #
   //cy.get("#contact-us").click({force : true});
   cy.get('[name="first_name"]').type("Eugene");
   cy.get('[name="last_name"]').type("Timofeev");
   cy.get('[name="email"]').type("example@gm.com");
   cy.get('[name="message"]').type("message for me");
   cy.contains("SUBMIT").click();
   cy.get("h1").should("have.text","Thank You for your Message!");



 });


 it("Unsuccessfull submit of Contact US form", ()=>{

    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //get by id #
    //cy.get("#contact-us").click({force : true});
    cy.get('[name="first_name"]').type("Eugene");
    cy.get('[name="last_name"]').type("Timofeev");
    //cy.get('[name="email"]').type("example@gm.com");
    cy.get('[name="message"]').type("negative test");
    cy.contains("SUBMIT").click();
    cy.get('body').contains('Error: all fields are required');


 });








});