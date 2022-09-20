Feature: Classes

    Scenario: Adding a class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then I should be able to create a new class

    Scenario: Get class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then I should be able to see all the classes from class list

    Scenario: Edit a class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then I should be able to edit a class

    Scenario: Delete a class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then I should be able to delete a class