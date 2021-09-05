
describe('Create warrior name and login',() =>{
it('Enter the userName and create' ,()=> {
cy.visit('https://responsivefight.herokuapp.com/')
cy.wait(5000)
cy.createUser()

 })
})