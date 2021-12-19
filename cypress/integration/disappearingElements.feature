Feature: Disappearing Elements

    We go to the Disappearing Elements page and check all possible scenarios

    Background: I am on the Disappearing Elements page
        Given I am on the "Disappearing Elements" page

    Scenario: Verify that page header is displayed as expected
        Then I verify that page header is displayed as "Disappearing Elements"

    Scenario: Verify that clicking on the Home button takes me to the main page
        When I click on "Home" button in Disappearing Elements page
        Then I verify that I am on the main page

    Scenario: Verify that clicking on the About button throws 404 Not Found
        When I click on "About" button in Disappearing Elements page
        Then I verify that for "About" button, 404 is the response code

    Scenario: Verify that clicking on the Contact Us button throws 404 Not Found
        When I click on "Contact Us" button in Disappearing Elements page
        Then I verify that for "Contact Us" button, 404 is the response code

    Scenario: Verify that clicking on the Portfolio Us button throws 404 Not Found
        When I click on "Portfolio" button in Disappearing Elements page
        Then I verify that for "Portfolio" button, 404 is the response code

    #TODO The button disappears sometimes. Need to find a way to automate a randomly disappearing element
    # Scenario: Verify that clicking on the Gallery button throws 404 Not Found
    #     When I click on "Gallery" button in Disappearing Elements page
    #     Then I verify that for "Gallery" button, 404 is the response code