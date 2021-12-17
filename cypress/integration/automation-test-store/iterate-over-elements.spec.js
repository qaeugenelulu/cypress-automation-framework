/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log information of all care products", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index : "+index+" : "+ $el.text())
    });
  });

  it("Add specific product to the bag", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
            cy.wrap($el).click();
        }
      });
    
  });
});
