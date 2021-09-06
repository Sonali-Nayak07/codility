
Cypress.Commands.add('goToPublicPlace',() =>{
    cy.xpath('//a[@href="restaurant"][contains(.,"Go to a public place")]').click()
    cy.wait(2000)
    cy.xpath('//button[contains(@id,"restaurant_timer_start")]').click()
    cy.xpath('//a[contains(@id,"restaurant_answer_1")]').click()
    cy.xpath('//button[@id="leaderboard_link"]').click()
    cy.wait(2000)
    cy.xpath('//button[contains(@id,"leaderboard_link")]').click()
  
})
