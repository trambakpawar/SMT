import { multistatus } from "../../../pageObjects/negative/User/multistatus"

const data = require("../../../../fixtures/negativedata.json")
const ms = new multistatus()

Given('I login into system', function () {
    ms.visit()
});

When('I assign the task to system with {string} and {string} 1combo', function (status, env) {
    ms.addstatus(status, env)
});

Then('Username with {string} and {string} get displayed 1in system', function (status, env) {
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.name).should("be.visible")
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(status).should("be.visible")
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(env).should("be.visible")
    cy.screenshot()
});
