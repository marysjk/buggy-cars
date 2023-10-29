Scenario: Successful user registration
    Given the user is on the registration page
    When they fill in valid registration details
    And click the "Register" button
    Then they should see a "Registration Successful" message
    And be redirected to the home page


Scenario: Incomplete user registration
    Given the user is on the registration page
    When they provide incomplete or invalid details
    And click the "Register" button
    Then they should be prompted to complete the required fields


Scenario: Weak password during registration
    Given the user is on the registration page
    When they set a password that doesn't meet the strength requirements
    And complete other valid details
    And click the "Register" button
    Then they should be prompted to choose a stronger password

Scenario: Existing user
    Given the user is on the registration page
    When they fill in existing registration details
    And click the "Register" button
    Then they should see a Error message
    And be redirected to the home page
