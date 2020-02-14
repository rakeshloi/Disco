@feature-tag
Feature: Main Menu Items

  I want to be able to see the navigation menu items
  
  Scenario: Check menu items against CMS response
  Given I am logged in
  Then the menu bar items should be consistent with the cms