# Clearing Cookies on the Client Side with JavaScript

Cookies are small pieces of data stored by the browser that can be used to maintain state between requests. To remove cookies on the client side using JavaScript, you need to set the cookie's expiration date to a past date. This effectively deletes the cookie from the browser.

## Function to Clear a Cookie

You can create a function to clear a cookie by setting its expiration date to a past date or using the `Max-Age` attribute. Here’s how you can do it:

### Using `Max-Age`

```javascript
/**
 * Clears a cookie by setting its Max-Age to a negative value.
 * 
 * @param {string} name - The name of the cookie to be cleared.
 */
function clearCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
```

### Using `expires`

Alternatively, you can set the expiration date to a date in the past:

```javascript
/**
 * Clears a cookie by setting its expiration date to a past date.
 * 
 * @param {string} name - The name of the cookie to be cleared.
 */
function clearCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
```

## Explanation

- **`name`**: The `name` parameter is the name of the cookie you want to clear. It should match the name of the cookie you previously set. For example, if you set a cookie with the name `userToken`, you would use `userToken` as the `name` when clearing the cookie.

- **Setting `Max-Age`**:
  - `Max-Age=-99999999`: This sets the cookie's maximum age to a negative value, which causes the browser to delete it.

- **Setting `expires`**:
  - `expires=Thu, 01 Jan 1970 00:00:00 UTC`: This sets the cookie's expiration date to January 1, 1970, which is a date in the past. The browser will delete the cookie upon encountering this expiration date.

- **`path=/;`**: Including this attribute ensures that the cookie is cleared for the entire domain. If you set the cookie with a specific path, you need to include the same path when clearing it.

## Usage

To clear a cookie named `userToken`, you would call the `clearCookie` function as follows:

```javascript
clearCookie('userToken');
```

This will remove the `userToken` cookie from the client's browser.

By following these methods, you can effectively manage and clear cookies on the client side in your web applications.
