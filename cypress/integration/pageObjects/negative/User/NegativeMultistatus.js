/// <reference types="Cypress" />

// Add user task
const name = "#user_id"
const date = "#date"
const jirano = "#jira_no"
const desc = "#desc"
const statusselect = "#status"
const envselect = "#work_env"
const comment = "#comment"
const submit = "#submit"

// Delete the user task
const menu = "#navbar > ul > li.dropdown > a"
const searchstatus = "#navbar > ul > li.dropdown.open > ul > li:nth-child(2) > a"
const searchname = "body > div.container > div.jumbotron > div > div.panel-body > form > table:nth-child(1) > tbody > tr > td:nth-child(2) > select"
const searchsubmit = "body > div.container > div.jumbotron > div > div.panel-body > form > table:nth-child(2) > tbody > tr > td:nth-child(5) > input"
const deletebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(3) > a"
// update status
const updatebutton = "body > div.container > div.jumbotron > div:nth-child(2) > div > table:nth-child(5) > tbody > tr > td:nth-child(2) > a"

const data = require("../../../../fixtures/negativedata.json")
export class multistatus {

    visit() {
        cy.visit(data.baseurl)
    }

    addstatus(status, env) {
        cy.get(name).select(data.name)
        cy.get(jirano).clear().type(data.jirano)
        cy.get(desc).type(data.desc)
        cy.get(statusselect).select(status)
        cy.get(envselect).select(env)
        cy.get(comment).type(data.comments)
        cy.wait(1000)
        cy.get(submit).click({ force: true })

    }
}