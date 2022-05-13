/// <reference types="cypress" />

describe("Iterate over elements", () => {
  beforeEach(function(){
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  })
  it("Log information of all care products", () => {
    

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index : "+index+" : "+ $el.text())
    });
  });

  it("Add specific product to the bag", () => {
    

    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //     if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
    //         cy.wrap($el).click();
    //     }
    //   });
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });

  it("Add another specific product to the bag", () => {
    

    cy.selectProduct('Seaweed Conditioner');
  });

  it("Add another specific product to the bag 2", () => {
  

    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });
});
