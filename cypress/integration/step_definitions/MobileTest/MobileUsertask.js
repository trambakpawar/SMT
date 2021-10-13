import { user } from "../../pageObjects/MobileTest/MobileUsertask"

const data = require("../../../fixtures/data.json")
const st = new user()
Given(/^I login into system from mobile$/, function () {
    cy.viewport(1024, 1366)
    st.visit()
});

When(/^I assign the task to system from mobile$/, function () {

    st.addstatus()
});

Then(/^Username get displayed in system from mobile$/, function () {
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.name).should("be.visible")
    cy.screenshot()
});

// delete user status
When(/^I search the user and delete it from mobile$/, function () {
    st.deletestatus()
});

Then(/^Username get deleted from system from mobile$/, function () {
    cy.log("User deleted")
    cy.screenshot()
});

// Update user status
When(/^I search the user and update it from mobile$/, function () {
    st.updatestatus()
});

Then(/^Username get updated in system from mobile$/, function () {
    cy.log("User updated")
    cy.screenshot()
});

