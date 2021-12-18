Feature: Context Menu

    We go to the Context Menu page and check all possible scenarios

    Background: I am on the context menu page
        Given I am on the "Context Menu" page

    Scenario: Verify that page header is displayed as expected
        Then I verify that page header is displayed as "Context Menu"

    Scenario: Verify the alert box message when a right click operation inside the dotted box is performed
        Then I verify the alert box message is as expected
