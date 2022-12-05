Feature: add vals

  Scenario: add vals 1 + 3

    * match addVals(1, 3) == (1 + 3)

  Scenario: add vals 2 + 2

    * match addVals(2, 2) == (2 + 2)

  Scenario: add vals 2, 5

    * match addVals(2, 5) == (2 + 5)
