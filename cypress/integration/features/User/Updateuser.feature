Feature: Update user details

Scenario: Update the user Jira Ticket
    Given User is login into system and daily status is created
    When I update the user jira no
    Then Jira no should get updated

  Scenario: Update the users desc
     Given User is login into system and daily status is created
     When I update the user's desc
     Then Desc should get updated

 Scenario: Update the user status
     Given User is login into system and daily status is created
     When I update the user status
     Then Status should get updated

 Scenario: Update the user enviroment
     Given User is login into system and daily status is created
     When I update the user enviroment
     Then Enviroment should get updated

 Scenario: Update the user comment
     Given User is login into system and daily status is created
     When I update the user comment
     Then comment should get updated

 Scenario: Update the user date
     Given User is login into system and daily status is created
     When I update the user date
     Then Date should get updated
