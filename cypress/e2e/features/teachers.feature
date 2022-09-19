Feature: Teachers

  Scenario: Add teacher
    Given that I am logged in as admin
    And that I am on the admin page
    When I click on the teachers button
    Then i should be able to add a teacher

  Scenario: See teacher
    Given that I am logged in as admin
    And that I am on the admin page
    When I click on the teachers button
    Then i should be able to see the teacher in the teachers list

  Scenario: Edit teacher
    Given that I am logged in as admin
    And that I am on the admin page
    When I click on the teachers button
    Then i should be able to edit a teacher

  Scenario: Delete teacher
    Given that I am logged in as admin
    And that I am on the admin page
    When I click on the teachers button
    Then i should be able to delete a teacher

