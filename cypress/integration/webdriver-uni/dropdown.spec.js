/// <reference types="cypress" />

describe("Verify withdropdown list", () => {
    it("Seelect specific value via dropdown", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')
        
    });

    
})