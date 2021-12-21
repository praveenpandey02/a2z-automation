Feature: Dropdown

    Background: I am on the Dropdown page
        Given I am on the "Dropdown" page

    Scenario: Verify that page header is displayed as expected
        Then I verify that page header is displayed as "Dropdown List"

    Scenario: Verify that a drop down exists with 3 options
        Then I verify that a drop down exists with 3 options

    Scenario: Verify that the default option is PLEASE SELECT AN OPTION
        Then I verify that the default option selected is Please select an option

    Scenario: Verify that an option can be selected from the dropdown
        Then I verify that 1st option can be selected from the dropdown