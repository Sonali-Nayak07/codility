//All resuable functions related to create user should be added to this file

Cypress.Commands.add('createUser',(userName) =>{
   // cy.xpath('//input[@id="worrior_username"]').type(userName)
    cy.xpath('//a[contains(.,"Create warrior")]').click()
    cy.xpath('//a[contains(@id,"start")]').click()
})