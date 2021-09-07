/*
// Delete Operation was causing some issue at service level, hence have commented out the entire file.
/// <reference types = "Cypress" />
describe('post user request',()=>{

    let uname = 'T'+(Math.random() + 1).toString(36).substring(7);
        it('create user test', ()=>{


            cy.request({


                method: 'POST',
                url: 'https://supervillain.herokuapp.com/v1/user',
                headers: {
                    'Authorization': 'Bearer '+Cypress.env('passphrase')
                },

                body:{
                    "username": uname,
                    "score": "4000"
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
            }).then((res) =>{
                    let username = res.body[0]
                    cy.log("user name is: " + uname)
                    cy.request({
                        method: 'PUT',
                        url: 'https://supervillain.herokuapp.com/v1/user/',
                        headers: {
                            'Authorization': 'Bearer ' +Cypress.env('passphrase')
                        },
                        body:{
                            "username": uname
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(204)
                    })
            })
        })
})

*/

//Above is the Delete Code

/// <reference types = "Cypress" />
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
            cy.log("Delete was causing some service outage issue, hence the code is commented out, this execution is a dummy get execution")
        })
    })
})