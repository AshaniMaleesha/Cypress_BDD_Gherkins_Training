Feature: Testing Login for a standard user
    
    A standard user should have a glitch free login experience

     Scenario:A standard user should be able to login to SwagLabs
        Given I launch the SwagLab Scenario Outline
        And I insert the standard username
        And I insert the password
        When I click the login button
        Then I should see the products page 
        
    Scenario:A problem user should not be able to login to SwagLabs
        Given I launch the SwagLab Scenario Outline
        And I insert the problem username
        And I insert the password
        When I click the login button
        Then I should not see the products page 
        