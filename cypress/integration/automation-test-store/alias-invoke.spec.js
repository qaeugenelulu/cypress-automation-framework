/// <reference types="cypress" />

describe("Alias and Invoke number1", () => {

    it("Validate a specific Hair care product", () => {
      cy.visit("https://www.automationteststore.com/");
      cy.get("a[href*='product/category&path']").contains("Hair Care").click();
      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
      
      cy.get('@productThumbnail').its('length').should('be.gt', 5);
      cy.get('@productThumbnail').should('include','Seaweed Conditioner');
    });
  

    it("Challenge",()=>{
        cy.visit("https://www.automationteststore.com/");
       
        cy.get(".thumbnail").as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail')
        .find('.productcart')
        .invoke('attr','title')
        .should('contain','Add to Cart');
    })

    it.only("Calculate the total of normal and sale product",()=>{
        cy.visit("https://www.automationteststore.com/");
       
        cy.get(".thumbnail").as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        //   });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
         
        let itemsTotal = 0;


        cy.get('@itemPrice').then($linkText =>{
            let itemPrice = $linkText.split('$');
            let i ;
            let total = 0;
            for(i=0;i<itemPrice.length; i++){
             total += Number(itemPrice[i]) ;
             cy.log(itemPrice[i]);
            }

            itemsTotal += total;
            cy.log("total is : "+itemsTotal);
        })

        cy.get('@saleItemPrice').then($linkText =>{
            let saleItemPrice = $linkText.split('$');
            let j ;
            let totalSalePrice = 0;
            for(j=0;j<saleItemPrice.length; j++){
                totalSalePrice += Number(saleItemPrice[j]) ;
                cy.log(saleItemPrice[j]);
               }
           cy.log("total price for sale items : "+totalSalePrice);
           itemsTotal+= totalSalePrice;
        })
        .then(()=>{
            cy.log("Overrall total price is : "+ itemsTotal)
            expect(itemsTotal).to.equal(648.5);
        })
         
        
    })
    
  });
  
