Cypress.Commands.add('LaunchApp',function(){
    cy.visit('/')
})

Cypress.Commands.add('insertUsername',function(){
   cy.fixture("elementsLogin").then((el)=>{
    cy.get(el.userNameField).type(el.username)
   })
})

Cypress.Commands.add('insertPassword',function(){
    cy.fixture("elementsLogin").then((el)=>{
        cy.get(el.passwordField).type(el.password)
       })
})

Cypress.Commands.add('clickLoginBtn',function(){
    cy.fixture("elementsLogin").then((el)=>{
        cy.get(el.loginButton).click()
       })
})

Cypress.Commands.add('verifyHomePage',function(){
    cy.fixture("elementsLogin").then((el)=>{
        cy.get(el.productTitle).should('have.text','Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
       })
})

Cypress.Commands.add('insertProbUsername',function(){
    cy.fixture("elementsLogin").then((el)=>{
     cy.get(el.userNameField).type(el.usernameProb)
    })
 })

 Cypress.Commands.add('verifyErrorMsg',function(){
    cy.fixture("elementsLogin").then((el)=>{
        cy.get(el.errorMsg).should('have.text','Epic sadface: Sorry, this user has been locked out.')
 
    })
})


