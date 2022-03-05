/// <reference types="cypress" />

describe("Verify autocomplete dropdown", () => {
    it("Seleect specific product via autocmplete", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        
       cy.get('#myInput').type('A');
      
       cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
           const product = $el.text() ;
           const prodToSelect = 'Avacado';
       
      if(product === prodToSelect) {
          //$el.click();
          $el.trigger('click');
          cy.get('#submit-button').click();
          cy.url().should('include', "Avacado");
          }
          })
          

      

    });

    
})