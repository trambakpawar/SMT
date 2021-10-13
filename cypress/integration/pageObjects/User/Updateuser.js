/// <reference types="Cypress" />
const jirano = "#jira_no"
const desc = "#desc"
const status = "#status"
const env = "#work_env"
const comment = "#comment"
const submit = "#submit"

const menu = "#navbar > ul > li.dropdown > a"
const searchstatus = "#navbar > ul > li.dropdown.open > ul > li:nth-child(2) > a"
const searchname = "body > div.container > div.jumbotron > div > div.panel-body > form > table:nth-child(1) > tbody > tr > td:nth-child(2) > select"
const searchsubmit = "body > div.container > div.jumbotron > div > div.panel-body > form > table:nth-child(2) > tbody > tr > td:nth-child(5) > input"
const deletebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(3) > a"
// update status
const updatebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(2) > a"

const data = require("../../../fixtures/data.json")
export class update {

    search() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)

    }
    updatestatus() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)
        if (cy.get("body > div.container > div.jumbotron > div:nth-child(2) > div").contains(data.name)) {
            cy.get(updatebutton).click()
            cy.get(status).select(data.status1)
            cy.get(submit).click()
        }
        else {
            cy.log("User not found")
        }
    }

    updatejira() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)
        if (cy.get("body > div.container > div.jumbotron > div:nth-child(2) > div").contains(data.name)) {
            cy.get(updatebutton).click()
            cy.get(jirano).clear()
            cy.get(jirano).type(data.jira1)
            cy.get(submit).click()
        }
        else {
            cy.log("User not found")
        }
    }

    updatedesc() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)
        if (cy.get("body > div.container > div.jumbotron > div:nth-child(2) > div").contains(data.name)) {
            cy.get(updatebutton).click()
            cy.get(desc).clear().type(data.desc1)
            cy.get(submit).click()
        }
        else {
            cy.log("User not found")
        }
    }

    updateenv() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)
        if (cy.get("body > div.container > div.jumbotron > div:nth-child(2) > div").contains(data.name)) {
            cy.get(updatebutton).click()
            cy.get(env).select(data.env1)
            cy.get(submit).click()
        }
        else {
            cy.log("User not found")
        }
    }
    updatecomment() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)
        if (cy.get("body > div.container > div.jumbotron > div:nth-child(2) > div").contains(data.name)) {
            cy.get(updatebutton).click()
            cy.get(comment).clear().type(data.comment1)
            cy.get(submit).click()
        }
        else {
            cy.log("User not found")
        }
    }
}
