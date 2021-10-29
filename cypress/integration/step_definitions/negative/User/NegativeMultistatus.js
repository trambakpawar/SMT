import { multistatus } from "../../../pageObjects/negative/User/NegativeMultistatus"

const data = require("../../../../fixtures/negativedata.json")
const ms = new multistatus()
const deletebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(3) > a"

Given('I login into system', function () {
    ms.visit()
});

When('I assign the task to system with {string} and {string}', function (status, env) {
    ms.addstatus(status, env)
});

Then('Username with {string} and {string} get displayed', function (status, env) {
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.name).should("be.visible")
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(status).should("be.visible")
    //  cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(env).should("be.visible")
    cy.screenshot()
    ms.searchuser()
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) >').contains(data.name).should("be.visible")
    cy.get(deletebutton).click()
    cy.get('.panel-body').contains(status).should("not.exist")
    cy.get('.panel-body').contains(env).should("not.exist")
    cy.log("User Status Deleted")

});
