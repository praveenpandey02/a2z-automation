# Need to understand how to automate this. Refer https://github.com/cypress-io/cypress-example-kitchensink/issues/453
Feature: Exit Intent

    Scenario: Verify that when mouse is moved out of the view port, a modal window appears
        Given I am on the "Exit Intent" page
        When I move the mouse outside of the viewport
        Then I verify the appearance of a modal window