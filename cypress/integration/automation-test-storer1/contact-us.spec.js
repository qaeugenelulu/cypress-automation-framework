/// <reference types="cypress" />

describe("Automation test Store",()=>{


    it("Open the site", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type('Joe');
        cy.get('#ContactUsFrm_email').type('joe@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get('#ContactUsFrm_enquiry').type('Please remember what you are doing');
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

    })
    
    
    })