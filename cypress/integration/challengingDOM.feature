Feature: Challenging DOM

    We go to the Challenging DOM page and check all possible scenarios

    Background: I am on the Challenging DOM page
        Given I am on the "Challenging DOM" page

    Scenario: Verify that the page header is displayed as expected
        Then I verify that page header is displayed as "Challenging DOM"

    Scenario: Verify that the paragraph content is as expected
        Then I verify that paragraph for page "Challenging DOM" is displayed as expected

    Scenario: Verify that the table has 7 columns in total
        Then I verify that the table has 7 columns in total

    Scenario: Verify that columns names are displayed as expected
        Then I verify that column names are displayed as expected

    Scenario: Verify that the table has 10 rows excluding the column headers
        Then I verify that table has 10 rows

    #This scenario is in development and does not work right now
    #Scenario: Verify that each table row has EDIT and DELETE links
    #Then I verify that each row has Edit and Delete link