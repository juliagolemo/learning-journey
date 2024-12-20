# Household budget

Microsoft Excel is one of the best tools for creating and managing your home budget. Depending on how detailed and transparent we want the budget to be, Excel offers many options to design and customize a budgeting tool that meets our needs. With its flexibility, Excel allows us to track expenses, set savings goals, and create financial forecasts, all while providing powerful data analysis and visualization features. Whether you're looking for a simple overview or a comprehensive financial plan, Excel can help you stay on top of your finances and make informed decisions.

In the first sheet we will enter data on expenses divided into categories and subcategories. The created worksheet will be quite a simple tool where we will enter the name of the expense, its value and we will choose the category and subcategory. It will look like this:

![Alt text for image](/images/markdown/budget1.png)

The second sheet will be a summary of our expenses. We will have to complete the following data here:

- planned revenues,
- actual revenue,
- planned expenditure broken down by category and subcategory

It will look like this:

![Alt text for image](/images/markdown/budget2.jpg)

## How to start creating a home budget?

This practical example is about creating a simple tool to control the home budget. Depending on the needs of those using it, it can be a more powerful tool. The presented example of solving the problem is a universal household budget. It is used in the example:

- charts,
- the SUM function,
- subtraction,
- the SUMIFS function
- the INDIRECT function,
- data validation,
- conditional formatting,
- creating a name from a selection

**Rename the sheet**

**Remove the grid lines** (view -> gridlines)(optionally)

**Create the tables you need**

**Introduce the new formulas**
- =SUM (monthly income) (in some parts we will use the references to other cells)

![Alt text for image](/images/markdown/budget3.png)

- substraction (difference)

![Alt text for image](/images/markdown/budget4.png)

**PLANNED COSTS ARE ALL COSTS FROM THE PLANNED COST COLUMNS**

- we use the SUM function, seperating the individual cell ranges

![Alt text for image](/images/markdown/budget5.png)

**We do the same with actual costs**
 
THE BALANCE SHEET IS THE DIFFERENCE BETWEEN INCOME AND COSTS

![Alt text for image](/images/markdown/budget6.png)

![Alt text for image](/images/markdown/budget7.png)

