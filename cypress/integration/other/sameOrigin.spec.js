/// <reference types="cypress" />

const { truncate } = require("lodash");

describe("Cypreess web security", ()=>{

 it("Webdriver univercity two different domains", ()=>{
     cy.visit('http://www.webdriveruniversity.com/');
     cy.visit('https://automationteststore.com/');
     



 });


 it("Validate visiting two diffeernt domains via user action", ()=>{
    
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get("#automation-test-store").invoke('removeAttr','target').click();


 });








});