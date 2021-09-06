describe('Warrior going to Office place',() =>{
    it('Verifying the public place challenge' ,()=> {
    cy.visit('https://responsivefight.herokuapp.com/')
    cy.wait(5000)
    cy.createUser('TestR')
   // cy.areYouGame()
    cy.goToOffice()
     })
    })