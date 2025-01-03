@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria


    @sep19
    Scenario: Verify that next button take customers to step 2 when given valid info
        Given user is on the enrollment page
        Given user clicks and fills first name section
        Then user clicks and fills last name section
        Then user clicks and fills email section
        Then user clicks and fills phone number section
        Then user chooses an option from how did you hear about us
        And user clicks on next button
        Then user succesfully lands on the step 2 page

    
    @sep19
    Scenario: Verify that next button take customers when only required fields are filled
        Given user is on the enrollment page
        Given user clicks and fills first name section
        Then user clicks and fills last name section
        Then user clicks and fills email section
        Then user clicks and fills phone number section
        And user clicks on next button
        Then user succesfully lands on the step 2 page



