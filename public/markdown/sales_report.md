# Sales report

Imagine that we work in the sales department of an export company. We offer cosmetic products for domestic and several foreign markets. Every month we receive information from sellers about the sales value, margin and quantity of products sold in a given market.  The spreadsheet is as follows:

![Alt text for image](/images/markdown/sr1.jpg)

Column B shows the months for which the data are given. Column C gives information on the country to which the data relate. Column D indicates the product category and column E indicates the product segment. Column F gives the brand name of the product. Columns G to L indicate the sales, profit and quantities sold for 2018 and 2019.

On this basis, we would like to prepare a sales report for the last two years to present the results of our department to management.

It should look like this:

![Alt text for image](/images/markdown/sr0.jpg)

## How to start preparing a report?

- pivot tables,
- pivoting charts,
- charts,
- the form controls,
- VLOOKUP function,
- SUMIFS function

1. Insert -> Pivot table
2. Create a new Worksteet
3. Add the fields
4.  ![Alt text for image](/images/markdown/sr2.png)

Now we can put a pivot chart on the "report" sheet.

5. Click PivotTable Analyze -> Pivot Chart -> Determine what type of chart we want to create

![Alt text for image](/images/markdown/sr3.png)

6. 

![Alt text for image](/images/markdown/sr4.png)

7. Adjust the field size
8. Adjust the appearance of the chart. add the title

![Alt text for image](/images/markdown/sr5.png)

*The use of pivoting charts allows you to change the view of the chart based on filters*

*Depeneding on the chart, we can display data for the specific category*

The third practical example presented is quite a simple example of preparing reports as well as spreadsheets for data analysis. In the presented example we will apply:

- pivot tables,
- pivoting charts,
- charts,
- the form controls,
- VLOOKUP function,
- SUMIFS function

1. Create a list of data to choose from in the combo box

![Alt text for image](/images/markdown/sales1.png)

2. Insert combo boxes (Developer -> Insert)
3. Format the combo boxes by assigning it: input appeal cell (as an input we give our list of countries)

*Now we have a list of countries in the combo box and the cell link changes value depending on the position of a particular country on the list*

4. We do the same with the combo box for product categories

*We will need data in cerrular links when using formulas*

We are interested in sales in a particular country.

![Alt text for image](/images/markdown/sales2.png)

We will need two functions here: 
- VLOOKUP
- SUMIFS

![Alt text for image](/images/markdown/sales3.png)
![Alt text for image](/images/markdown/sales33.png)

In this case it will be a 2018 sale.

5. Give the range of the first criterion (in this case it will be the Country column)

Due to the country range Criterion_1 will be the country selected in the Combi Box.

6. Now we need a VLOOKUP function.

![Alt text for image](/images/markdown/sales4.png)

The table searched will be a previously created list of countries.

The comulsive number will be 2, as the country name is in the second column.

The searched range is 0 because we are looking exactly for this particular value.

7. We return to the SUMIFS function.

In the same way, we add two additional criteria:

- Category
- Month

In the case of a month, we use the column with the name of the month.

In the case of sales for 2019, we need to change the basic scope in SUMIFS. 

![Alt text for image](/images/markdown/sales5.png)

8. Now we can insert the chart.

We do the pie charts in a similar way.

![Alt text for image](/images/markdown/sales6.png)



