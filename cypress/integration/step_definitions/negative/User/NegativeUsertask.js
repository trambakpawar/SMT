import { user } from "../../../pageObjects/negative/User/NegatibeUsertask"

const data = require("../../../../fixtures/negativedata.json")
const st = new user()
Given(/^I login into system$/, function () {
    st.visit()
});

When(/^I assign the task to system with negative data$/, function () {
    st.addstatus()
});

Then(/^Username get displayed in system with negative data$/, function () {
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.name).should("be.visible")
    cy.screenshot()
});

// delete user status
When(/^I search the user and delete it with negative data$/, function () {
    st.deletestatus()
});

Then(/^Username get deleted from system with negative data$/, function () {
    cy.log("User deleted")
    cy.screenshot()
});

// Update user status
When(/^I search the user and update it with negative data$/, function () {
    st.updatestatus()
});

Then(/^Username get updated in system with negative data$/, function () {
    cy.log("User updated")
    cy.screenshot()
});

