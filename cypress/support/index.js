// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './regression/user'
import './regression/takeBuschalleng'
import './regression/goToPublicPlace'
import './regression/goToOffice'
//import './apiRegression/addUser'
require ('cypress-xpath')
//require Cypress.moment.locale('en');

cy.on('uncaught:exception',(err,runnable) => {
    //returning false here prevents Cypress from
    //failing tests
    return false
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
