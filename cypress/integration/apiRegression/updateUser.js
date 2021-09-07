/// <reference types = "Cypress" />
describe('post user request',()=>{
    let uname = 'T'+(Math.random() + 1).toString(36).substring(7);
        it('create user test', ()=>{


            cy.request({


                method: 'POST',
                url: 'https://supervillain.herokuapp.com/v1/user',
                headers: {
                    'Authorization': 'Bearer ' +Cypress.env('passphrase')
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
                            'Authorization': 'Bearer '+Cypress.env('passphrase')
                        },
                        body:{
                            "username": uname,
                            "score": "100"
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(204)
                    })
            })
        })
})