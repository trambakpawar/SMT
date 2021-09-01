import { user } from "../pageObjects/usertask"

const data = require("../../fixtures/data.json")
const st = new user()
Given(/^I login into system$/, function () {
    st.visit()
});

When(/^I assign the task to system$/, function () {
    st.addstatus()
});

Then(/^Username get displayed in system$/, function () {
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.name).should("be.visible")
    cy.screenshot()
});

// delete user status
When(/^I search the user and delete it$/, function () {
    st.deletestatus()
});

Then(/^Username get deleted from system$/, function () {
    cy.log("User deleted")
    cy.screenshot()
});

// Update user status
When(/^I search the user and update it$/, function () {
    st.updatestatus()
});

Then(/^Username get updated in system$/, function () {
    cy.log("User updated")
    cy.screenshot()
});
