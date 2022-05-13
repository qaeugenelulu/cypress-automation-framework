import HomePage from "../../support/pageObjects/webdriver-uni/homePage";
import Contact_Us from "../../support/pageObjects/webdriver-uni/Contact_Us";
/// <reference types="cypress" />

const { truncate } = require("lodash");

describe("Test Contact Us form via webdriverUnivercity", ()=>{
  Cypress.config('defaultCommandTimeout',20000)
  const contact_us = new Contact_Us() ;
  before(function(){
    cy.fixture('example').then(function(data){
      globalThis.data = data;
    })
  })

  beforeEach(function(){
    //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
   const homepage = new HomePage();
   homepage.visitHomepage();
   cy.wait(3000);
   homepage.click_ContactUs();
   //cy.pause();

  })

 it("Successfull submit of Contact US form", ()=>{
   cy.document().should("have.property",'charset').and('eq','UTF-8');
   cy.title().should('include','WebDriver');
   cy.url().should('include','contactus')
   

  // cy.contact_submission(Cypress.env("first_name"),data.last_name,data.email,"message for me","h1","Thank You for your Message!");
   const contact_us = new Contact_Us() ;
   contact_us.contactForm_submission(Cypress.env("first_name"),data.last_name,data.email,"message for me","h1","Thank You for your Message!");

 });


 it("Unsuccessfull submit of Contact US form", ()=>{
    
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //get by id #
    //cy.get("#contact-us").click({force : true});
    // cy.get('[name="first_name"]').type("Eugene");
    // cy.get('[name="last_name"]').type("Timofeev");
    // //cy.get('[name="email"]').type("example@gm.com");
    // cy.get('[name="message"]').type("negative test");
    // cy.contains("SUBMIT").click();
    // cy.get('body').contains('Error: all fields are required');
  
    contact_us.contactForm_submission(data.first_name,data.last_name," ","message for me",'body','Error: Invalid email address');
    //cy.contact_submission(data.first_name,data.last_name," ","message for me",'body','Error: Invalid email address');
 });








});