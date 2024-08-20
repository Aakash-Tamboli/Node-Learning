### Explanation of the Express Application Code

This code demonstrates a simple Express.js application that defines two routes: one for retrieving a list of users and another for retrieving a list of products. Here's a breakdown of the code:

```javascript
import express from 'express';
```
- This line imports the `express` module, which is used to create the Express application.

```javascript
const app = express();
```
- Here, the Express application is created by calling `express()`. This `app` object will be used to define routes and middleware.

## API Endpoints

### 1. Get Users

- **URL:** `/api/users`
- **Method:** `GET`
- **Description:** Retrieves a list of users.
- **Response:**
  ```json
  [
    { "id": 101, "username": "Aakash" },
    { "id": 102, "username": "Gautam" },
    { "id": 103, "username": "Verendra" }
  ]
  ```

```javascript
app.get("/api/users", (request, response) => {
    const users = [
        { id: 101, username: "Aakash" },
        { id: 102, username: "Gautam" },
        { id: 103, username: "Verendra" }
    ];
    response.status(200).send(users);
});
```
- This block defines a GET route at `/api/users`. When a client makes a GET request to this endpoint, the server responds with a status code of `200` and sends back an array of user objects.

### 2. Get Products

- **URL:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieves a list of products.
- **Response:**
  ```json
  [
    { "productId": "pro11", "productName": "Lamp" },
    { "productId": "pro22", "productName": "Laptop" }
  ]
  ```

```javascript
app.get("/api/products", (request, response) => {
    const products = [];
    products.push({ "productId": "pro11", "productName": "Lamp" });
    products.push({ "productId": "pro22", "productName": "Laptop" });
    response.status(200).send(products);
});
```
- Similarly, this block defines a GET route at `/api/products`. When a client makes a GET request to this endpoint, the server responds with a status code of `200` and sends back an array of product objects.

```javascript
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is listening at: " + PORT + "...");
});
```
- Finally, the application is set to listen on port `5000`. When the server starts, it logs a message indicating that it is listening on this port.

### Summary
- **Routes:** 
  - `/api/users`: Returns a list of users.
  - `/api/products`: Returns a list of products.
- **Server:** Listens on port `5000`.

### Next Topic
[Object vs JSON](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/3-Object-Vs-JSON)
