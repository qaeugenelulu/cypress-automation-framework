/// <reference types="cypress" />

describe("Verrify radiobutton", () => {
    it("Check specific radiobuttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#radio-buttons').find('[type="radio"]').first().check();
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check();

    });

    it("Check state of specific radiobuttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="pumpkin"]').should('be.checked');


        cy.get('[value="lettuce"]').check();
        cy.get('[value="lettuce"]').should('be.checked');
        cy.get('[value="pumpkin"]').should('not.be.checked');

        cy.get('[value="cabbage"]').should('be.disabled');
    
        

    });

    
})