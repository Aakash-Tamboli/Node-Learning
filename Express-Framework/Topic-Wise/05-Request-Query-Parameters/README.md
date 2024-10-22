# Request.query(Express.js)

In Express.js, `request.query` is an object that contains the key-value pairs of the query string parameters in the URL of a request. Query strings are typically used to send data to the server as part of the URL in the format `?key1=value1&key2=value2`.

For example, if you have a URL like this:

```
http://example.com/search?term=express&sort=asc
```

The query string is `?term=express&sort=asc`, and it contains two parameters: `term` and `sort`.

In an Express.js route handler, you can access these query parameters using `request.query`. Here's how you can do it:

```javascript
app.get('/search', (req, res) => {
  const term = req.query.term; // 'express'
  const sort = req.query.sort; // 'asc'
  
  // You can now use these values to perform actions
  res.send(`Search term: ${term}, Sort order: ${sort}`);
});
```

In this example:
- `req.query.term` will give you the value `"express"`.
- `req.query.sort` will give you the value `"asc"`.

`request.query` is particularly useful when you want to handle search parameters, filters, or any other data that can be included in the URL of a GET request.

# Next Topic

[POST Without JSON](../06-POST-NO-JSON/README.md)
