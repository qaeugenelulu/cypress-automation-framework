import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'
/// <reference types="cypress" />

describe("Add myltiply items into the basket", () => {
  const autoStore_Homepage = new AutoStore_Homepage_PO();
  const autoStore_HairCare = new AutoStore_HairCare_PO();


  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_Homepage.accessHomepage();
    autoStore_Homepage.clickOn_HairCare_Link();
    // cy.visit("https://www.automationteststore.com/");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  });

  it("Add specific item into the basket", () => {
    

    autoStore_HairCare.addHairCareToBasket();



  });
});
