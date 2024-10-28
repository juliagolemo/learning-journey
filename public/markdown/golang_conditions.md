# GoLang 
## *if* Statement

In GoLang, the if statement allows you to execute a block of code only when a given condition is true. The basic syntax looks like this:
```go
if condition {
    // code to execute if the condition is true
}
```
**Logical Operators**

**&&** (and) - Returns **true** if both expressions on either side of the operator are true.

**||** (or) - Returns **true** if at least one of the expressions on either side of the operator is true.

**Comparison Operators**

**<** - Less than

**>** - Greater than

**!** = - Not equal to

**==** - Equal to

For example:
```go
if x > 10 && y < 20 {
    // code to execute if x is greater than 10 and y is less than 20
}
```
## *else* and *else if*

The **else** statement lets you execute an alternative block of code if the if condition is not met. The **else if** statementlets you add additional conditions to check:
```go
if condition1 {
    // code to execute if condition1 is true
} else if condition2 {
    // code to execute if condition2 is true
} else {
    // code to execute if none of the above conditions are true
}
```
