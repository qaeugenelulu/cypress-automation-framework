/// <reference types="cypress" />

const { truncate } = require("lodash");

describe("Handle JS alerts", ()=>{

 it("Coonfirm that alert has correct text", ()=>{

   //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
   cy.visit('http://www.webdriveruniversity.com');
   cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});
   cy.get('#button1').click();
   cy.on('window:alert', (str)=>{
       expect(str).to.equal('I am an alert box!');
   })
 });

 it("Validate JS alert works when click OK button", ()=>{

    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});
    cy.get('#button4').click();

    cy.on('window:alert', (str)=>{
        return true ;
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!');
    
  });

  it("Validate JS alert works when click Cancel button", ()=>{

    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});
    cy.get('#button4').click();

    cy.on('window:confirm', (str)=>{
        return false ;
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!');
  });

  it.only("Validate JS alert works using a stub", ()=>{

    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});

    const stub = cy.stub()
    cy.on('window:confirm', stub)

    cy.get('#button4').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    });

   
  
    
  });

});