Feature: Dynamic Controls

    Background: I am on the Dynamic Controls page
        Given I am on the "Dynamic Controls" page

    Scenario: Verify that page header is displayed as expected
        Then I verify that page header is displayed as DYNAMIC CONTROLS

    Scenario: Verify that the only checkbox on the page is unchecked by default
        Then I verify that the only checkbox is unchecked

    Scenario: Verify that the checkbox disappears when Remove button is clicked, appears when Add button is clicked and clicking on Add button brings the checkbox back
        When I click on Remove button
        Then I verify that Wait For It progress bar appears and disappears on it's own
        And I verify that It's gone message is displayed
        And I verify that Add button is displayed

        When I click on Add button

        Then I verify that Wait For It progress bar appears and disappears on it's own
        And I verify that It's back message is displayed
        And I verify that the only checkbox is unchecked


