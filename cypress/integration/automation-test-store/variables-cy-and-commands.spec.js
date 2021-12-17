/// <reference types="cypress" />

describe("Verify variables, cy commands and jquery", ()=>{

    it("Navigate to specific product page", ()=>{
        cy.visit("https://www.automationteststore.com/");
        
       

      cy.get("a[href*='product/category&path']").contains("Makeup").click();
      //cy.get("a[href*='product/category&path']").contains("Skincare").click();

      //  const header = cy.get("h1 .maintext"); it will fail
      // cy.log(header.text());
      cy.get("h1 .maintext").then(($headerText)=>{
        const headerText = $headerText.text()
            cy.log("found header text : "+ headerText);
        expect(headerText).is.eq('Makeup');
    }) ;
   
    });

    it.only("Validate properties of the contact us page", ()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
      // uses cyperss command and chaining
      cy.contains('#ContactUsFrm', 'Contact Us Form')
      .find('#field_11')
      .should('contain','First name:');
      
      //Jquery approach
      cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
          const firstNameText = text.find('#field_11').text()
          expect(firstNameText).to.contain('First name:');
      })
      //Embeded commands(Closure)
       cy.get('#field_11').then(fntext =>{
           cy.log(fntext.text())
           cy.log(fntext)
       })
    });

    
   
   
   });