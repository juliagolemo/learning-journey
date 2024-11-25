# Excel functions (VLOOKUP, Index Function, Function Conditions)

## The VLOOKUP function

The VLOOKUP function is one of the most frequently used and known functions in Excel. We use it to find an element in a table or in a range according to the indicated row. It is in the LOOKUP & REFERENCE category.

![Alt text for image](/images/markdown/vlo1.png)

Syntax of the function VLOOKUP

![Alt text for image](/images/markdown/vlo2.png)

**Lookup_value** - the value you want to look up

**Table_array** - the range within which the value sought is located. Remember that the value you are looking for should always be in the first column of the range for the VLOOKUP function in order for it to work properly. For example, if the value you are looking for is in cell B2, the range should start with column B.  

**Col_index_num** - column number in the range that contains the returned value. For example, if you specify C2: E10 as a range, count the number C as first column, D as second, etc. 

**Range_lookup** - logical value (optional argument), to find an estimated match, enter the value TRUE, or FALSE if you need an exact value match. NOTE If you do not specify a value, the default value is TRUE

## Index function

Very often the index function appears in medium and advanced worksheets. This is a function whose job is to return a value or reference to a value in a specific table or range.

*The index function can be used in two different ways*:

**Array form** - returns the value of a specific cell or array of cells.

**Reference form** - returns a reference to specific cells.

The Index function is often combined with the **Match function** in references to column and row numbers. Using a combination of these two functions makes the index function dynamic.

**ARRAY FORM**

When looking for a specific value in a table or array, we should use the function Index in array form.

To do this, select the first option in the Index function window:

![Alt text for image](/images/markdown/array1.jpg)

Syntax of the board form

![Alt text for image](/images/markdown/array2.jpg)

- **Array** - this is the argument required in the Index function. Specify the cell range or array constant.

- **Row_num** - We give the row number from which the value is to be taken. If the cell range or array has only one line, we don't have to give anything here. However, if we leave it blank, we must fill in the column number.

- **Column_num** - We give the column number from which the value is to be taken. If the cell range or array has only one column, we don't have to specify anything here. However, if we leave it blank, we must fill in the line number.




