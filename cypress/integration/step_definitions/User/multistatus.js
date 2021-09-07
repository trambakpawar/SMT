import { multistatus } from "../../pageObjects/User/multistatus"

const data = require("../../../fixtures/data.json")
const ms = new multistatus()

Given('I login into system', function () {
    ms.visit()
});

When('I assign the task to system with {string} and {string} combo', function (status, env) {
    ms.addstatus(status, env)
});

Then('Username with {string} and {string} get displayed in system', function (status, env) {
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.name).should("be.visible")
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(status).should("be.visible")
    //cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(env).should("be.visible")
    cy.screenshot()
});

When('I search the user with {string} and {string} combo and delete it', function (status, env) {
    ms.deletestatus(status, env)
});

Then('Username with {string} and {string} get deleted from system', function (status, env) {
    ms.searchuser()
    cy.get('.panel-body').contains(status).should("not.exist")
    cy.get('.panel-body').contains(env).should("not.exist")
    cy.screenshot()
});