class AutoStore_HairCare_PO{
addHairCareToBasket(){

    globalThis.data.productName.forEach(function(element){
        cy.addProduct(element).then(()=>{
           // debugger
        })
    })
}
  
}

export default  AutoStore_HairCare_PO;