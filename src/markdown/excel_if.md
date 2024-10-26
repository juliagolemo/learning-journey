# Excel - if function and derivatives of the if function

### 1) IF
The “IF” function in Excel allows you to perform a logical test and return one value if the test is true and another value if it’s false. The basic syntax is:

```excel
=IF(condition, value_if_true, value_if_false)
```

For example, if you want to check if a number in cell A1 is greater than 10, the function might look like:

```excel
=IF(A1>10, "Yes", "No")
```
This will return “Yes” if the condition is true (A1 > 10) and “No” if it’s false.

### 2) COUNTIF and SUMIF
COUNTIF is a function that counts the number of cells in a range that meet a specific condition. 
For example, `=COUNTIF(A1:A10, ">5")` counts cells in the range A1:A10 that have values greater than 5.
	
SUMIF is a function that adds up the values in a range that meet a certain criterion. 
For example, `=SUMIF(A1:A10, ">5")` sums only the values in A1:A10 that are greater than 5.

CONDITIONS
Conditions are used to test specific criteria in formulas, often combined with functions like IF, COUNTIF, and SUMIF.

AND and OR are logical functions: AND returns TRUE if all conditions are met, while OR returns TRUE if at least one condition is met.

### COMPARISONS

Comparison operators like >, <, >=, <=, == (equal to), and <> (not equal to) are used to compare values within formulas.

Examples:
```excel
=IF(A1 > 100, "Greater than 100", "Less than or equal to 100") 
// If A1 = 120, the result will be "Greater than 100"
// If A1 = 80, the result will be "Less than or equal to 100"

=IF(A2 < 50, "Less than 50", "Greater than or equal to 50") 
// If A2 = 30, the result will be "Less than 50"
// If A2 = 60, the result will be "Greater than or equal to 50"

=IF(A3 >= 200, "Greater than or equal to 200", "Less than 200") 
// If A3 = 250, the result will be "Greater than or equal to 200"
// If A3 = 150, the result will be "Less than 200"

=IF(A4 <= 75, "Less than or equal to 75", "Greater than 75") 
// If A4 = 50, the result will be "Less than or equal to 75"
// If A4 = 100, the result will be "Greater than 75"

=IF(A5 = 100, "Equal to 100", "Not equal to 100") 
// If A5 = 100, the result will be "Equal to 100"
// If A5 = 120, the result will be "Not equal to 100"

=IF(A6 <> 0, "Not zero", "Is zero") 
// If A6 = 5, the result will be "Not zero"
// If A6 = 0, the result will be "Is zero"
```