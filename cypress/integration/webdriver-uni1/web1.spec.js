/// <reference types="cypress" />
describe("First test case again",()=>{


it("Open the site", ()=>{
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us").click({force: true});
    cy.get('[name="first_name"]').type("Eugene");
    cy.get('[name="last_name"]').type("Timofeev");
    cy.get('[name="email"]').type("eugene@gmail.com");
    cy.get('[name="message"]').type("Hi there, pease learn quickly, and remember everything");
    cy.get("[value='SUBMIT']").click();
})


})