describe('Warrior taking the bus challenge',() =>{
    it('Verifying the bus challenge' ,()=> {
    cy.visit('https://responsivefight.herokuapp.com/')
    cy.wait(5000)
    cy.createUser('TestR')
   // cy.areYouGame()
    cy.takeABusChallenge()
     })
    })