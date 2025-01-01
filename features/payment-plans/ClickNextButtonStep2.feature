@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    Background:
    Given user is on the enrollment page
    And user has completed step one with valid information
    And user is on step two of the enrollment process
    Then User clicks on upfront payment plan


    Scenario: Verify that the next button is active after clicking on any plan
    And The next button is clickable

    Scenario: Verify that the user is redirected to the next step when clicking on the next button
    And The user clicks on the next button
    Then The product price is shown in middle of the page

    Scenario: Verify that step 1 and step 2 are green and step 3 is blue in step 3
    And The user clicks on the next button
    Then The step 1 circle is green
    And The step 2 circle is green
    And The step 3 circle is blue

    Scenario: Verify that the payment component is displayed in step 3
    And The user clicks on the next button
    Then The payment component is displayed

    Scenario: Verify that a price summary is displayed in step 3
    And The user clicks on the next button
    Then The price summary is displayed

    Scenario: Verify that the back button is displayed in step 3
    And The user clicks on the next button
    Then The back button is displayed

    Scenario: Verify that the pay button is displayed in step 3
    And The user clicks on the next button
    Then The pay button is displayed

   