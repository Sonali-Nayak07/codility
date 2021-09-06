/// <reference types = "Cypress" />
describe('post user request',()=>{
    let accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzdHJpbmdUIiwiaWF0IjoxNjMwOTEyMjM4LCJleHAiOjE2MzExNzE0Mzh9.HoZIVlsawB6IDZf3nZXb0uLxqKYNA06YEoZoaDFR5As';
    //times0tamp = Cypress.moment();
        it('create user test', ()=>{

            //const timestamp=Date.now();
            //cy.log(timestamp);
            cy.request({


                method: 'POST',
                url: 'https://supervillain.herokuapp.com/v1/user',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
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