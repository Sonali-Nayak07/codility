//All resuable functions related to create user should be added to this file

Cypress.Commands.add('createUser',(userName) =>{
    cy.xpath('//input[@id="worrior_username"]').click()
   cy.xpath('//input[@id="worrior_username"]').type(userName)
    cy.xpath('//a[contains(.,"Create warrior")]').click()
    cy.wait(3000)
    cy.xpath('//a[contains(@id,"start")]').click()
})

Cypress.Commands.add('areYouGame',() =>{
     cy.xpath('//a[@href="news"][contains(.,"Are you game?")]').click()
     cy.wait(5000)
     cy.xpath('//button[@id="start"]').click()
     cy.xpath('//a[contains(@id,"answer_1")]').click()
     cy.xpath('//button[contains(@id,"continue")]').click()
     cy.xpath('//a[contains(.,"Use your superhero Social Distance and notify your Manager.")]').click()
     cy.xpath('//button[contains(@id,"continue")]').click()
     cy.wait(3000)
     cy.xpath('//a[contains(@id,"1")][@class="btn text-wrap"][contains(.,"Use your super hero sanitizer, keep a safe distance and advise they should keep 1.5 metres away from others.")]').click()
     cy.xpath('//button[contains(@id,"continue")]').click()
     cy.wait(5000)
     cy.xpath('//button[contains(@id,"leaderboard_link")]').click()
 })

