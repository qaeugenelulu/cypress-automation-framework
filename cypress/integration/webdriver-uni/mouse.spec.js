/// <reference types="cypress" />

describe("Mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
        

    });

    it("Drag and drop dragable item", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#draggable').trigger('mousedown',{which :1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})

    });

    it.only("Double click performance", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#double-click').dblclick();
    });

    
})