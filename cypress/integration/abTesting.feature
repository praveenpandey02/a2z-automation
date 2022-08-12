Feature: A/B Test

    We go to the A/B Test page and check all possible scenarios

    Background: I am on the A/B Testing page
        Given I am on the "A/B Testing" page

    Scenario: Verify that the page header is displayed as expected
        Then I verify that page header is displayed as "A/B Test"

    Scenario: Verify that A/B Test paragraph has the correct content
        Then I verify that paragraph for page "A/B Testing" is displayed as expected

