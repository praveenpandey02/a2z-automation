Feature: Drag and Drop

    Background: I am on the Drag and Drop page
        Given I am on the "Drag and Drop" page

    Scenario: Verify that the page header is displayed as expected
        Then I verify that page header is displayed as "Drag and Drop"

    Scenario: Verify that there are 2 boxes
        Then I verify that there are 2 boxes on the page

    #TODO Need to understand drag and drop mechanism
    # Scenario: Verify that first box is A and 2nd box is B
    #     Then I verify that 1st box is A and 2nd box is B
