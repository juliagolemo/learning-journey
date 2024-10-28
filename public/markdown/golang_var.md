# Golang

## Variable

A variable is a location in memory that stores data of a specific type. A variable has a name, which allows us to reference it and manipulate its value.

In Go, we declare a variable using the **var** keyword, followed by the variable's name and its type:

```go
var name string
name = "John"
```
We can also assign a value directly upon declaration:
```go
var age int = 25
```
Go also allows a shorthand for declaring and initializing variables, especially within functions:
```go
name := "John"
age := 25
```
The ```:=``` operator infers the type based on the assigned value.

## Types
In Go, every object has a specific type. Here are some basic types:

- **string**: a type for storing text. Example:
```go
var greeting string = "Hello, world!"
```
- **int**: a type for storing integer numbers (e.g., -1, 0, 42). Go automatically chooses the appropriate size for int, but there are also ```int8```, ```int16```, ```int32```, and ```int64``` for specific sizes:

```go
var year int = 2024
```
- **bool**: a type for storing a boolean value, either ```true``` or ```false```. Example:
```go
var isLoggedIn bool = true
```
- **float32** and **float64**: types for storing floating-point numbers, or numbers with decimal places. ```float32``` is less precise than ```float64```, which is preferred when more accuracy is needed:
```go
var pi float32 = 3.14
var precisePi float64 = 3.14159265359
```


