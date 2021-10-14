Feature: Search user functionality

Scenario: Search user with user name
  Given I login to system and create status
  When I search user status with name
  Then username should get displayed

Scenario: Search user with jira ticket
  Given I login to system and create status
  When I search user status with jira ticket
  Then username with jira ticket should get displayed
