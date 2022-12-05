@ignore
Feature: common setup functionality for tests

  Scenario:

    * def addVals =
    """
    function(val1, val2) {
      return val1 + val2;
    }
    """

    * def Byte = Java.type("java.lang.Byte")
    * def Double = Java.type("java.lang.Double")
    * def Float = Java.type("java.lang.Float")
    * def Integer = Java.type("java.lang.Integer")
    * def BigInteger = Java.type("java.math.BigInteger")
    * def BigDecimal = Java.type("java.math.BigDecimal")
