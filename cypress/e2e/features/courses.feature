Feature: Courses

    Scenario: Adding a course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the Courses button
        Then I should be able to create a new course

    Scenario: Get courses
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the Courses button
        Then I should be able to see all the Courses from course list

    Scenario: Edit a course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the Courses button
        Then I should be able to edit a course

    Scenario: Delete a course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the Courses button
        Then I should be able to delete a course