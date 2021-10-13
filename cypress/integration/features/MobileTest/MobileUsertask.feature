Feature: Check the user task on mobile device


Scenario: Add the users daily task on mobile
 Given I login into system from mobile
  When I assign the task to system from mobile
  Then Username get displayed in system from mobile

Scenario: Update the users daily task on mobile
 Given I login into system from mobile
  When I search the user and update it from mobile
  Then Username get updated in system from mobile

Scenario: Delete the users daily task on mobile
 Given I login into system from mobile
  When I search the user and delete it from mobile
  Then Username get deleted from system from mobile

