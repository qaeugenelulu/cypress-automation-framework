/// <reference types="cypress" />

describe("Verrify checkboxes viad webdriver", () => {
    it("Check and validate checkboxes", () => {
        //cy.visit("http://www.webdriveruniversity.com")
        cy.log(Cypress.env("name"));
        cy.navigateTo();
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        cy.get('[value="option-3"]').as('option3');
        cy.get('@option3').uncheck().should('not.be.checked');

    });

    it.only("Check multiply checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
       cy.get('input[type="checkbox"]').check(["option-1","option-2","option-3","option-4"]).should("be.checked");

    });
})