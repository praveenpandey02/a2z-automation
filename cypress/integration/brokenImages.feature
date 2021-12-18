Feature: Broken Images

    We go to Broken Images page and test all possible scenarios

    Background: Background name
        Given I am on the "Broken Images" page

    Scenario: Verify that the page header is displayed as expected
        Then I verify that page header is displayed as "Broken Images"

    Scenario: Verify that first 2 images are broken while the 3rd one is working fine
        Then I verify that 1st 2 images are broken where as the 3rd image is working fine