Feature: Check the user task with negative data


Scenario: Add the users daily task with negative data
 Given I login into system
  When I assign the task to system with negative data
  Then Username get displayed in system with negative data

Scenario: Update the users daily task with negative data
 Given I login into system
  When I search the user and update it with negative data
  Then Username get updated in system with negative data

Scenario: Delete the users daily task with negative data
 Given I login into system
  When I search the user and delete it with negative data
  Then Username get deleted from system with negative data





