import { search } from "../../pageObjects/User/Searchuser"
import { user } from "../../pageObjects/User/usertask"
const deletebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(3) > a"
const data = require("../../../fixtures/data.json")
const se = new search()
const st = new user()

Given(/^I login to system and create status$/, function () {
    st.visit()
    st.addstatus()
});
// search user with name
When(/^I search user status with name$/, function () {
    se.searchname()
});
Then(/^username should get displayed$/, function () {
    if (cy.get('body > div.container > div.jumbotron > div:nth-child(2) >').contains(data.name).should("be.visible")) {
        cy.screenshot()
        cy.get(deletebutton).click()
    }
    cy.log("User Status Deleted")
});


//search user with jira ticket
When(/^I search user status with jira ticket$/, function () {
    se.searchjira()
});
Then(/^username with jira ticket should get displayed$/, function () {
    if (cy.get('body > div.container > div.jumbotron > div:nth-child(2) >').contains(data.jirano.toLocaleUpperCase()).should("be.visible")) {
        cy.screenshot()
        cy.get(deletebutton).click()
    }
    cy.log("User Status Deleted")
});