Feature: Check the user task with negative data


Scenario: Add the users daily task with negative data
 Given I login into system
  When I assign the task to system
  Then Username get displayed in system with negative data

Scenario: Update the users daily task with negative data
 Given I login into system
  When I search the user and update it
  Then Username get updated in system with negative data

Scenario: Delete the users daily task with negative data
 Given I login into system
  When I search the user and delete it
  Then Username get deleted from system with negative data





