Feature: Calculator Addition
    As a Business User I open Calculato App and i validate the addition

    Scenario Outline: Calculator Addition functionality Testing
        Given I navigate to <homePage> Site
        When I add two numbers "3" and "5"
        Then output displayed is "8"
        Examples:
            | homePage                                  |
            | "http://juliemr.github.io/protractor-demo/" |




    Scenario Outline: AngularJS search text
        Given I navigate to <homePage> Site
        When I click on header link
        And I navigate to Angular page
        Then I will enter "hello" in search box
        Examples:
            | homePage               |
            | "https://angularjs.org/" |