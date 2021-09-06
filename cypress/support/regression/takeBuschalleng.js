//User taking the Bus Challenge
Cypress.Commands.add('createUser',(userName) =>{
    cy.xpath('//input[@id="worrior_username"]').click()
   cy.xpath('//input[@id="worrior_username"]').type(userName)
    cy.xpath('//a[contains(.,"Create warrior")]').click()
    cy.wait(3000)
    cy.xpath('//a[contains(@id,"start")]').click()
})

Cypress.Commands.add('takeABusChallenge',() =>{
    cy.xpath('//a[@href="bus"][contains(.,"Take the bus")]').click()
    cy.xpath('//button[contains(@id,"bus_timer_start")]').click()
    cy.xpath('//a[@href="#"][contains(@id,"1")][contains(.,"Use your superheroes Mask and sanitizer while traveling on public transport and clean your hands regularly.")]').click()
    cy.wait(3000)
    cy.xpath('//button[@id="close_correct_modal_btn"]').click()
    cy.xpath('//button[contains(@id,"restaurant_timer_start")]').click()
    cy.xpath('//a[@href="#"][contains(@id,"1")][contains(.,"Use your super hero sanitizer, keep a safe distance and advise they should keep 1.5 metres away from others.")]').click()
    cy.xpath('//button[@id="close_correct_modal_btn"]').click()
    cy.wait(3000)
    cy.xpath('//button[contains(@id,"start")]').click()
    cy.xpath('//a[@href="#"][contains(@id,"1")][contains(.,"Use your superhero Social Distance and notify your Manager.")]').click()
    cy.xpath('//button[contains(@id,"close_modal_btn_1")]').click()
    cy.wait(3000)
    cy.xpath('//button[contains(@id,"bus_timer_start")]').click()
    cy.wait(3000)
    cy.xpath('//a[@href="#"][contains(@id,"2")][contains(.,"Move to another seat immediately and report it to the driver!")]').click()
    cy.xpath('//button[@id="close_correct_modal_btn"]').click()
    cy.wait(2000)
    cy.xpath('//button[contains(@id,"restaurant_timer_start")]').click()
    cy.xpath('//a[contains(@id,"restaurant_answer_2")]').click()
    cy.xpath('//button[@id="leaderboard_link"]').click()
    cy.wait(3000)
    cy.xpath('//button[@id="leaderboard_link"]').click()



})