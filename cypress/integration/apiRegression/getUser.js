/// <reference types = "Cypress" />

describe('get api user tests', ()=>{

    it('get users', ()=>{

        cy.request({

            method : 'GET',
            url : 'https://supervillain.herokuapp.com/v1/user',
            headers : {
                'authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzdHJpbmdUIiwiaWF0IjoxNjMwOTEyMjM4LCJleHAiOjE2MzExNzE0Mzh9.HoZIVlsawB6IDZf3nZXb0uLxqKYNA06YEoZoaDFR5As"
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body[0]).has.property('username','test999')
        })
    })
})