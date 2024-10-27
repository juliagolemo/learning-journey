# Functions
A function in Go is a block of code that performs a specific task and can return a result. Functions are a core modular element in Go, allowing you to break down complex programs into smaller, reusable pieces.

## Function Syntax in Go
Here’s the basic format of a function in Go:
```go
func name(parameters) return_type {
    // function body
}
```
**func** - a keyword indicating the start of a function declaration.

**name** - the function's name, which should be descriptive of what it does.

**parameters** - optional arguments that the function can accept. Each parameter has a name and a type.

**return_type** - the type of the value the function returns (can be empty if the function returns nothing).

**Function Body** - the code block where the operations are performed.

## Example of a Function

Here’s a simple example of a function that adds two numbers:
```go
func add(a int, b int) int {
    return a + b
}
```
Explanation:

The function **add** takes two parameters, **a** and **b**, both of type **int**.

The function returns a result of type **int**, which is the sum of **a** and **b**.

The **return** keyword returns the result from the function.

## Calling a Function

To call a function, write its name and pass the necessary arguments:

```go
result := add(3, 5) // result will be 8
```
## Multi-Return Functions

Go allows functions to return multiple values:
```go
func divide(a int, b int) (int, int) {
    return a / b, a % b
}
```
The **divide** function returns both the result of division and the remainder:
```go
quotient, remainder := divide(10, 3) // quotient = 3, remainder = 1
```
## Anonymous Functions

Go supports anonymous functions, which are functions without a name. These are often used as "lambda" functions or as arguments to other functions.
```go
func() {
    fmt.Println("This is an anonymous function!")
}()
```


