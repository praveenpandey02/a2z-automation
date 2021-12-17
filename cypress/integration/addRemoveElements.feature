Feature: Add/Remove Elements

    We go to the Add/Remove Elements page and check all possible scenarios

    Scenario: Verify that the page header is displayed as expected
        Given I am on the "Add/Remove Elements" page
        Then I verify that page header is displayed as "Add/Remove Elements"

    Scenario: Verify that a button named ADD ELEMENT is displayed
        Given I am on the "Add/Remove Elements" page
        Then I verify that a button named "Add Element" is displayed
        When I click on "Add Element" button
        Then I verify that a button named "Delete" is displayed