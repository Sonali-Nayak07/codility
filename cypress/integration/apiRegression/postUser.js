/// <reference types = "Cypress" />
describe('post user request',()=>{
        it('create user test', ()=>{

            //const timestamp=Date.now();
            //cy.log(timestamp);
            cy.request({


                method: 'POST',
                url: 'https://supervillain.herokuapp.com/v1/user',
                headers: {
                    'Authorization': 'Bearer ' +Cypress.env('passphrase')
                },

                body:{
                    "username": 'T'+(Math.random() + 1).toString(36).substring(7),
                    "score": "4000"
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
                //expect(res.body).has.property('username','test999')
            })
        })
})