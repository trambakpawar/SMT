import { user } from "../../pageObjects/User/usertask"
import { update } from "../../pageObjects/User/Updateuser"
const data = require("../../../fixtures/data.json")
const st = new user()
const up = new update()
const deletebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(3) > a"

Given(/^User is login into system and daily status is created$/, function () {
    st.visit()
    st.addstatus()
});
//Update the user jira no
When(/^I update the user jira no$/, function () {
    up.updatejira()
});
Then(/^Jira no should get updated$/, function () {
    up.search()
    if (cy.get('body > div.container > div.jumbotron > div:nth-child(2) >').contains(data.jira1.toLocaleUpperCase()).should("be.visible")) {
        cy.screenshot()
        cy.get(deletebutton).click()
    }
});

//Update the user desc
When(/^I update the user's desc$/, function () {
    up.updatedesc()

});
Then(/^Desc should get updated$/, function () {
    up.search()
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.desc1).should("be.visible")
    cy.screenshot()
    cy.get(deletebutton).click()
});
//Update the user status
When(/^I update the user status$/, function () {
    up.updatestatus()
});
Then(/^Status should get updated$/, function () {
    up.search()
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.status1).should("be.visible")
    cy.screenshot()
    cy.get(deletebutton).click()
});

//Update the user enviroment
When(/^I update the user enviroment$/, function () {
    up.updateenv()
});
Then(/^Enviroment should get updated$/, function () {
    up.search()
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.env1).should("be.visible")
    cy.screenshot()
    cy.get(deletebutton).click()
});

//Update the user comment
When(/^I update the user comment$/, function () {
    up.updatecomment()
});
Then(/^comment should get updated$/, function () {
    up.search()
    cy.get('body > div.container > div.jumbotron > div:nth-child(2) > div > div').contains(data.comment1).should("be.visible")
    cy.screenshot()
    cy.get(deletebutton).click()
});

//Update the user date
When(/^I update the user date$/, function () {

});

Then(/^Date should get updated$/, function () {

});












