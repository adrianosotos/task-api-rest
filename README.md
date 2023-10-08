# Task API REST

## Overview

This is a Node.js application that provides a RESTful API for managing a list of tasks. Users can perform the following operations:

- Add a new task.
- Edit an existing task.
- Delete a task.
- List all tasks.
- Mark a task as completed.

The API is documented using Swagger, which includes information on how to use each route, the required parameters, and examples of requests and responses.

Authentication is implemented using JWT (JSON Web Tokens). Users must authenticate before they can perform any operations on tasks. This README also explains how token generation, validation, and renewal are handled.

Additionally, error handling in the API is described, including the use of appropriate HTTP status codes and meaningful error messages.

## Dependencies

The project uses several Node.js libraries to build a RESTful API with JWT authentication. Here are three important dependencies and why they were chosen:

1. **Express**: Express is a popular web application framework for Node.js. It simplifies routing, middleware handling, and request/response handling.

2. **JWT**: This library is used to generate and verify JSON Web Tokens (JWT). It's essential for implementing user authentication and securing API routes.

3. **mongoose**: Mongoose is an ODM (Object Data Modeling) library for MongoDB. It simplifies database operations and schema validation when working with MongoDB.

## Prerequisites

Before you begin, make sure you have Docker and Docker Compose installed on your system. If you don't have Docker installed, you can download it from the official website:

[Docker Download](https://www.docker.com/products/docker-desktop)

## Getting Started

1. Clone the repository: `git clone https://github.com/adrianosotos/task-api-rest.git`

2. Navigate to the project directory: `cd task-api-rest`

3. Create a `.env` file based on the provided `.env.example` and set the necessary environment variables. For example:

```
APP_PORT=3000
MONGODB_USERNAME=myusername
MONGODB_PASSWORD=mypassword
MONGODB_DATABASE_NAME=mydb
```

4. Build and start the application, MongoDB, and Redis containers using Docker Compose:

```bash
docker-compose up -d
```

Replace `APP_PORT` in the `.env` file with the port you want to use for the application.

5. Access the Swagger documentation at `http://localhost:YOUR_PORT/api-docs` in your web browser, where `YOUR_PORT` is the port you specified in the `.env` file.

## API Documentation

Detailed API documentation can be found in the Swagger documentation, which is accessible at `http://localhost:YOUR_PORT/api-docs` when the server is running.

The documentation provides information on each API endpoint, including request and response examples.

## Authentication

JWT (JSON Web Tokens) are used for authentication. Users must obtain a token by logging in, and this token should be included in the `Authorization` header for secured API requests.

Users must authenticate before they can perform any operations on tasks. Here's how authentication works:

1. When a user logs in successfully, a JWT containing the user's information is generated and signed with a secret key.

2. This JWT is then set as an HTTP cookie, allowing the client to send it with each subsequent request.

3. To enhance security and prevent unauthorized access, the server uses Redis, an in-memory data store, to manage active user sessions.

4. When a user logs out or the JWT expires, the associated session data in Redis is automatically cleared.

This combination of JWT and Redis ensures that user sessions are secure and easily revocable, providing a robust authentication mechanism for the API.

To generate a token, use the `/login` endpoint, providing valid credentials. The token should then be included as a bearer token in the `Authorization` header of subsequent requests.

### Error Handling

The API has been developed with an error handling system that provides meaningful responses in case of failures. The error handling approach follows best practices for RESTful API development and includes the use of appropriate HTTP status codes and meaningful error messages.

#### HTTP Status Codes

HTTP status codes are used to indicate the result of a request. The API utilizes the following HTTP status codes to handle errors:

- **401 Unauthorized**: This status code is returned when an unauthorized access attempt occurs, such as attempting to log in with invalid credentials.

- **409 Conflict**: The status code 409 is used when a conflict occurs, such as trying to create a user with an email address that is already in use.

- **404 Not Found**: When a request is made for a resource that does not exist, the API returns the 404 status to indicate that the resource was not found.

- **400 Bad Request**: The status code 400 is used to indicate that an error occurred in the client's request. This can include errors during task creation, task update, marking a task as completed, and more.

#### Error Messages

In addition to HTTP status codes, the API provides meaningful error messages to help developers understand and troubleshoot issues in their requests. Each error message is designed to describe the error clearly and concisely, making it easier to diagnose and resolve problems.

For example, in cases of attempting to log in with invalid credentials, the error message "Invalid email or password" is returned along with the 401 status code (Unauthorized).

In summary, error handling in the API aims to provide a smoother development experience, helping developers identify and effectively resolve issues.


## Contributions

Contributions to this project are welcome. Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

For more details, please refer to the [LICENSE](LICENSE) file.


