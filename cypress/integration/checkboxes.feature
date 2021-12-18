Feature: Checkboxes

    We go to the Checkboxes page and check all possible scenarios

    Background: I am on the Checkboxes page
        Given I am on the "Checkboxes" page

    Scenario: Verify that the page header is displayed as expected
        Then I verify that page header is displayed as "Checkboxes"

    Scenario: Verify that there are only 2 checkboxes on the page
        Then I verify that there are 2 checkboxes on the page

    Scenario: Verify that the 1st checkbox is unchecked and the 2nd one is checked by default
        Then I verify that the 1st checkbox is checked and the 2nd one is unchecked

    Scenario: Verify that the checkboxes status can be changed
    Then I verify that checkboxes status can be changed

