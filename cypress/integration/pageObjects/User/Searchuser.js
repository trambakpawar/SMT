const menu = "#navbar > ul > li.dropdown > a"
const searchstatus = "#navbar > ul > li.dropdown.open > ul > li:nth-child(2) > a"
const searchname = "body > div.container > div.jumbotron > div > div.panel-body > form > table:nth-child(1) > tbody > tr > td:nth-child(2) > select"
const searchsubmit = "body > div.container > div.jumbotron > div > div.panel-body > form > table:nth-child(2) > tbody > tr > td:nth-child(5) > input"
const jiraticket = ":nth-child(2) > #date"

const data = require("../../../fixtures/data.json")

export class search {
    searchname() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(searchname).select(data.name)
        cy.get(searchsubmit).click()
        cy.wait(1000)
    }
    searchjira() {
        cy.get(menu).click({ force: true })
        cy.get(searchstatus).click()
        cy.get(jiraticket).type(data.jirano)
        cy.get(searchsubmit).click()
        cy.wait(1000)
    }
}