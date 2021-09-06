Cypress.add('postCall')
    let accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzdHJpbmdUIiwiaWF0IjoxNjMwOTEyMjM4LCJleHAiOjE2MzExNzE0Mzh9.HoZIVlsawB6IDZf3nZXb0uLxqKYNA06YEoZoaDFR5As';

        it('create user test', ()=>{
            cy.request({


                method: 'POST',
                url: 'https://supervillain.herokuapp.com/v1/user',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },

                body:{
                    "username":'${uname}',
                    "score": '${score}'
                }
            })
        })