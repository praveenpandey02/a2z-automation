Feature: Broken Images

    We go to Broken Images page and test all possible scenarios

    Scenario: Verify that the page header is displayed as expected
        Given I am on the "Broken Images" page
        Then I verify that page header is displayed as "Broken Images"

    Scenario: Verify that first 2 images are broken while the 3rd one is working fine
        Given I am on the "Broken Images" page
        Then I verify that 1st 2 images are broken where as the 3rd image is working fine