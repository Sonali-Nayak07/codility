/// <reference types = "Cypress" />
//import './fixtures/token.js'
describe('get api user tests', ()=>{
    
    it('get users', ()=>{
        cy.request({

            method : 'GET',
            url : 'https://supervillain.herokuapp.com/v1/user',
            headers : {
                'authorization' : "Bearer "+Cypress.env('passphrase')
            }

        }).then((res)=>{
            //cy.log(token.passphrase)
            expect(res.status).to.eq(200)
            res.body[0].username //gets the first element's username
            expect(res.body[0]).has.property('username',res.body[0].username)
            cy.log("Number of users in the array : "+ res.body.length)
            //cy.log(passphrase)
            for (let i = 0; i < res.body.length; i++) {
                cy.log("Name: " + res.body[i].username);
              }
        })
    })
})