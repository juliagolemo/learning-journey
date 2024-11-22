## Attendance list
Let's imagine that we work in the human resources department in a production company. Employees complete the attendance list, on the basis of which hours worked, overtime, days on sick leave, holidays etc. are calculated. Until now, this has been done using the attendance log, which had to be checked every month and all the information needed to pay the salary calculated independently.

You decided to use **MS Excel** to improve your work. The spreadsheet you created complements the production manager by entering the number of hours worked by the employee on a given day. It also supplements the information about it:

- Sickness
- Holidays
- Unauthorised absence
- Holidays on demand

*Now your task is to write formulas to automate the data analysis process.*

 You want MS Excel to calculate:

- the number of hours worked,
- the number of overtime,
- number of days on sick leave,
- the number of days on holidays,
- the number of days with unauthorised absence,
- number of days on holidays on demand.

You want the overtime column only to show overtime. If there is no overtime, this field **must remain empty**.

Your supervisor also wants to use this sheet. Its purpose is to analyse specific employees. He would like to have the employee selected from the list and see his data for the month he worked.
The second practical example presented is quite a simple one. However, the use of such spreadsheets, even if they are so simple, can make the work very efficient. In the presented example we will apply:

- the sum,
- subtraction,
- function IF,
- function COUNTIF,
- filtering the column

![Alt text for image](/images/markdown/attendance_list.jpg)

## How to create an Attendance List?
**Counting the hours worked**
- SUM function - we mark the range of the whole month

**Counting the number of overtime** (we want the cell to be empty when there are no overtime)
- IF function - checking if **hours worked** are greater than **working hours**

![Alt text for image](/images/markdown/excel1.png)

Blocking a cell with hours of work per month (if the sum of hours is less, insert "" which means an empty cell)

![Alt text for image](/images/markdown/excel2.png)

 If the sum of hours is greater, insert a substraction
 
![Alt text for image](/images/markdown/excel3.png)

Blocking a cell with hours of work per month

![Alt text for image](/images/markdown/excel4.png)

- COUNTIF function (in terms of range, insert the whole month)

- blocking column by column
as a criterion we insert the search value (S,H etc.)
- blocking after the row

## Filtering the employees

![Alt text for image](/images/markdown/excel5.png)

We can now select a single employee and see their details