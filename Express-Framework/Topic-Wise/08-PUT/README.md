# Express.js `PUT` HTTP Verb Example

This example demonstrates how to use the `PUT` HTTP verb in an Express.js application to update or replace an existing resource.

## Overview

The `PUT` HTTP verb is used to update or replace a resource on the server. Unlike `POST`, which is typically used to create new resources, `PUT` replaces the entire resource at the specified URL with the new data provided in the request body.

## Example

Below is a basic example of using the `PUT` method in an Express.js application.

### Setup

First, make sure you have Node.js and Express installed. You can install Express using npm:

```bash
npm install express
```

### Code

Create an `index.js` file with the following code:

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Sample data to represent resources
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
];

// PUT route to update a user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    // Find user by ID
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        // Replace the old user with the updated user data
        users[userIndex] = { id: userId, ...updatedUser };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

### How It Works

1. **Endpoint**: The endpoint for this `PUT` request is `/users/:id`, where `:id` is a placeholder for the user ID you want to update.

2. **Request Body**: The client sends a JSON object with the updated user data in the request body.

3. **Response**: The server checks if the user with the specified ID exists. If the user exists, it updates the user's information with the provided data and sends back the updated user as a response. If the user doesn't exist, it responds with a `404 Not Found` status.

### Example `PUT` Request

To update a user with `id: 1`, you could send a `PUT` request with the following body:

```json
{
    "name": "Johnathan Doe"
}
```

If successful, the server would respond with:

```json
{
    "id": 1,
    "name": "Johnathan Doe"
}
```

## Running the Application

1. Save the above code in a file named `index.js`.
2. Run the server using the following command:

```bash
node index.js
```

3. The server will start on port 3000. You can send `PUT` requests to `http://localhost:3000/users/:id` using a tool like [Postman](https://www.postman.com/) or `curl`.

## Conclusion

This example demonstrates how to use the `PUT` method in Express.js to update an existing resource. The key takeaway is that `PUT` is used to completely replace a resource at a specific URL with the data provided in the request.

# Next Topic

[Middlewares](../09-Middlewares/README.md)
