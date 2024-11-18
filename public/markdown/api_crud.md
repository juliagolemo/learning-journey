## What is Rest API?

A REST API (Representational State Transfer Application Programming Interface) is a way for different computer systems to talk to each other over the internet.

Here’s how it works, in simple terms:

REST uses standard web methods like GET, POST, PUT, and DELETE, just like when you browse websites.

It allows you to ask for data or send data to a server.
    The data is usually exchanged in a format like JSON (a simple text format).

## Typical Methods with Status Codes
| Method   | Purpose                  | Typical HTTP Status Codes                                  |
|----------|--------------------------|-----------------------------------------------------------|
| **GET**  | Retrieve data            | `200 OK`, `404 Not Found`                                 |
| **POST** | Create a new resource    | `201 Created`, `400 Bad Request`                          |
| **PUT**  | Update or replace data   | `200 OK`, `204 No Content`, `404 Not Found`, `400 Bad Request` |
| **DELETE**| Delete a resource       | `204 No Content`, `200 OK`, `404 Not Found`              |


## How to use GET, PUT, POST, DELETE methods?
### GET

**Purpose**: Retrieve data from the server.

**Example**: You want to see a list of all users.
    
**Request**: 
```bash
curl -X GET http://example.com/users
```
Response (Example):
```bash
[
  {"id": 1, "name": "John"},
  {"id": 2, "name": "Alice"}
]
```
### POST

**Purpose**: Create new data on the server.

**Example**: You want to add a new user.

**Request:** 
POST /users
Content-Type: application/json

```bash
curl -X POST http://example.com/users \
     -H "Content-Type: application/json" \
     -d '{"name": "Bob"}'
```
Response (Example):
```bash
{
  "id": 3,
  "name": "Bob"
}
```
### PUT

**Purpose:** Update existing data or replace it entirely.

**Example:** You want to update a user’s name.

**Request:** 
```bash
curl -X PUT http://example.com/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe"}'
```
Response (Example):
```bash
{
  "id": 1,
  "name": "John Doe"
}
```
### DELETE

**Purpose**: Remove data from the server.

**Example:** You want to delete a user.
```bash
curl -X DELETE http://example.com/users/1
```
Response:
```bash
204 No Content
```
## Working with JSON in REST APIs

JSON (JavaScript Object Notation) is a common format for sending and receiving data when working with REST APIs. It’s lightweight, easy to read, and looks like a simplified version of a dictionary or object in programming.



**Sending JSON with REST APIs**

1. Include JSON in Requests: When sending data (with POST or PUT methods), you include the JSON payload in the request body.

2. Use Headers: You must tell the API that you're sending JSON by adding the Content-Type: application/json header.

3. Example with curl:
- **POST** Request (Create a new user):
``` bash
curl -X POST http://example.com/users \
    -H "Content-Type: application/json" \
    -d '{"name": "John", "age": 30}'
```
- **PUT** Request (Update a user):
```bash
curl -X PUT http://example.com/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "age": 31}'
```


