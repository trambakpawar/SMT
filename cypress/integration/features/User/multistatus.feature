Feature: Check the status page

Scenario Outline: Add the users daily task
  Given I login into system
  When I assign the task to system with "<status>" and "<env>" combo
  Then Username with "<status>" and "<env>" get displayed in system

Examples:
 | status | env |
 | To Do| Development Status |
 | Work In Progress | Development Testing Status |
 | Code Review | UAT Testing |
 | UAT | UAT Testing |
 | Done | UAT Testing |
 | Analysis | UAT Testing |

Scenario Outline: Delete the users daily task
  Given I login into system
  When I search the user with "<status>" and "<env>" combo and delete it
  Then Username with "<status>" and "<env>" get deleted from system

Examples:
 | status | env |
 | To Do| Development Status |
 | Work In Progress | Development Testing Status |
 | Code Review | UAT Testing |
 | UAT | UAT Testing |
 | Done | UAT Testing |
 | Analysis | UAT Testing |
