# Commonly Used HTTP Status Codes

This document provides a list of the most commonly used HTTP status codes, categorized by their respective classes.

## 1xx - Informational
- **100 Continue**: The server has received the request headers, and the client should proceed to send the request body.
- **101 Switching Protocols**: The requester has asked the server to switch protocols, and the server has agreed to do so.

## 2xx - Success
- **200 OK**: The request has succeeded.
- **201 Created**: The request has been fulfilled, and a new resource has been created.
- **202 Accepted**: The request has been accepted for processing, but the processing is not yet complete.
- **204 No Content**: The server successfully processed the request, but is not returning any content.

## 3xx - Redirection
- **301 Moved Permanently**: The resource has been moved permanently to a new URI.
- **302 Found (Previously "Moved Temporarily")**: The resource is temporarily located at a different URI.
- **304 Not Modified**: The resource has not been modified since the last request.

## 4xx - Client Error
- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server cannot find the requested resource.
- **405 Method Not Allowed**: The request method is known by the server but has been disabled and cannot be used.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.
- **429 Too Many Requests**: The user has sent too many requests in a given amount of time ("rate limiting").

## 5xx - Server Error
- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
- **501 Not Implemented**: The request method is not supported by the server and cannot be handled.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, often due to temporary overloading or maintenance.
- **504 Gateway Timeout**: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
