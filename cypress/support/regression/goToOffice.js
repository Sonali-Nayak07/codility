
Cypress.Commands.add('goToOffice',() =>{
    cy.xpath('//a[@href="office"][contains(.,"Go to the office")]').click()
    cy.wait(2000)
    cy.xpath('//button[contains(@id,"start")]').click()
    cy.xpath('//a[@href="#"][contains(@id,"1")][contains(.,"Use your superhero Social Distance and notify your Manager.")]').click()
    cy.xpath('//button[contains(@id,"close_modal_btn_1")]').click()
    cy.xpath('//button[contains(@id,"bus_timer_start")]').click()
    cy.xpath('//a[@href="#"][contains(@id,"1")][contains(.,"Use your superheroes Mask and sanitizer while traveling on public transport and clean your hands regularly.")]').click()
    cy.xpath('//button[contains(@id,"close_correct_modal_btn")]').click();
    cy.xpath('//button[contains(@id,"restaurant_timer_start")]').click()
    cy.wait(3000)
    cy.xpath('//a[contains(@id,"restaurant_answer_1")]').click()
    cy.xpath('//a[contains(@id,"restaurant_answer_1")]').click()
    cy.wait(3000)
    cy.xpath('//button[contains(@id,"leaderboard_link")]').click()
    
})