Cypress.Commands.add('addUser', (token, ) => {
    cy.request({
        url: 'https://supervillain.herokuapp.com/v1/user',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: {
                  
                "username": "string",
                "score": 4000
              
                 }
        },
        
    
    )
})