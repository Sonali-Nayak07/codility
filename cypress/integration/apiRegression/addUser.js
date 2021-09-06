/// <reference types ="Cypress"/>
//let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzdHJpbmciLCJpYXQiOjE2MzA4ODY2NjMsImV4cCI6MTYzMTE0NTg2M30.NugNXnNrp1u1vAjY9OMB-NYWmQjatRt5CQgXrP8VF9U';
describe('Add an user to the heroKuApp ', () => {
    let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzdHJpbmciLCJpYXQiOjE2MzA4ODY2NjMsImV4cCI6MTYzMTE0NTg2M30.NugNXnNrp1u1vAjY9OMB-NYWmQjatRt5CQgXrP8VF9U';

it ('create user '), () =>{
    cy.request({
        method: 'POST',
        url:'https://supervillain.herokuapp.com/v1/user',
        headers:{
            'Authorization':'Bearer'+ token
        },
        body:{
               
            "username": "cbastring",
            "score": 4000
          

        }

    }).then((res)=>{
        expect.res(res.status).to.eq(201)
expect(res.body).has.property('username')
    })


}

        })   