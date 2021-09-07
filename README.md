# codility
This project is a programatic take on SuperHeroes and SuperVillian which is carried out via 
WebAutomation using Cypress.

Most feature is automated, where actions like creating user and navigating around for challenges is executed by the scripts in Cypress

Main URL - https://responsivefight.herokuapp.com/


# Project and Code Setup
1. install NodeJS
2. install Cypress
   navigate to the project path 
   enter the following in terminal (this should get all modules needed for the project to run)
    `npm install cypress --save-dev`
3. To use the locator Xpath,install
    `npm install -D cypress-xpath`        
4. To setup Mochawesome for Reports, execute the following three sequentially
    - `npm install --save-dev mochawesome`
    - `npm install mochawesome-merge --save-dev`
    - `npm install -g mochawesome-report-generator`

# Build and Test
Cypress tests can be run in two way
1. In Cypress IDE (Test Runner)
    - run this command in your terminal `npx cypress open`
    - Under Integration Tests in Cypress UI
    - Can select any .js file under regression (createUser, goToOffice, goToPublicPlace, takeBus)
    - Can select any .js file under apiRegression (getUser, postUser, updateUser, deleteUser)
2. To run the tests in the terminal, run the below command. This will run all the tests
    - `npx cypress run`
3. To run a single cypress test, run the following in terminal
    - `npx cypress run --spec "cypress/integration/regression/createUser.spec.js"`
4. To run all regression cypress test, run the following in terminal
    - `npx cypress run --spec "cypress/integration/regression/*.js --browser chrome"`    
5. To run all apiRegression cypress test, run the following in terminal
    - `npx cypress run --spec "cypress/integration/apiRegression/*.js --browser chrome"`
6. To Combine different generated reports into one enter the follwing in the terminal
    - `npm run merge`
    - `npm run generate_mochawesome_report`
7. Report will get generated under the cypress/reports/output.html

Note - Please delete the reports folder prior to execution
In case the passphrase expires, that can be updated in the cypress.json env parameter named passphrase

# Resources 
A sample screenshot of Executed Reports is avaialble to view under cypress/executed_reports
and the html file.