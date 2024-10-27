# Loops
In Go, loops are primarily handled with the **for** loop, which is the only loop construct in the language. Go does not have **while** loops, but the **for** loop is flexible enough to cover these cases. Let's explore the different ways to use **for** loops in Go.

## Basic *for* loop
```go
for initializer; condition; post {
    // loop body
}
```
Example:
```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```
- **initializer** sets the starting value (e.g., i := 0).
- **condition** is checked before each iteration (e.g., i < 5).
- **post** is executed after each iteration (e.g., i++ increments i)

This loop will print numbers from 0 to 4.

## *for* as a *while* loop
To create a loop that only has a condition (like a **while** loop), you can omit the initializer and post statements:
```go
i := 0
for i < 5 {
    fmt.Println(i)
    i++
}
```
This loop behaves like a **while** loop, printing numbers from 0 to 4.


