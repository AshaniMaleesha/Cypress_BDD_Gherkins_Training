import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`I launch the SwagLab Scenario Outline`, () => {
    cy.LaunchApp();
});

Given(`I insert the standard username`, () => {
    cy.insertUsername();
});

Given(`I insert the password`, () => {
    cy.insertPassword();
});

When(`I click the login button`, () => {
    cy.clickLoginBtn();
});

Then(`I should see the products page`, () => {
    cy.verifyHomePage();
});

Given(`I insert the problem username`, () => {
    cy.insertProbUsername();
});

Then(`I should not see the products page`, () => {
    cy.verifyErrorMsg();
    cy.reload()
});