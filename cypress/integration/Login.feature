Feature: Login

  I want to be able to login
  
  Scenario: Logging in a user
    Given I open Home page
    When I sign in
    Then Subscribe should not be visible on the page