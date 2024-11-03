# Movies DB Server

A RESTful API for managing a movie database, including participants, movies, and user authentication. The server is built with Node.js and Express, with support for role-based permissions, rate limiting, and RabbitMQ for message queuing.

## Features

- **User Registration and Login**: Secure user registration and login with token-based authentication.
- **Movie Management**: CRUD operations for movies with permission-based access control.
- **Participant Management**: CRUD operations for participants in movies.
- **Rate Limiting**: Limits API request rates to prevent abuse.
- **Role-Based Access Control**: Restricts specific actions based on user roles.
- **RabbitMQ Integration**: Message queue for handling tasks asynchronously.

## Tech Stack

- **Node.js** and **Express**: Backend framework and server
- **RabbitMQ**: Message queuing system for asynchronous processing
- **Express Validator**: Validates incoming data
- **Rate Limiting**: Protects API endpoints from abuse

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/movies-db-server.git
   cd movies-db-server


**Install dependencies**:

    npm install

**Environment Variables**:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    RABBITMQ_URL=your_rabbitmq_url


# RabbitMQ
Ensure RabbitMQ is running and configured with the URL specified in the `.env` file.

## API Endpoints

### Participants
- `GET /api/participants`: Get a list of all participants.
- `POST /api/participants`: Create a new participant.
- `GET /api/participants/:id`: Get details of a specific participant by ID.
- `PUT /api/participants/:id`: Update an existing participant by ID.
- `DELETE /api/participants/:id`: Delete a participant by ID.

### Movies
- `GET /api/movies`: Get a list of all movies (rate-limited).
- `GET /api/movies/:id`: Get details of a specific movie by ID (rate-limited).
- `POST /api/movies/add-movie`: Create a new movie (requires authentication and "create" permission).
- `PUT /api/movies/:id`: Update an existing movie by ID (requires authentication and "update" permission).
- `DELETE /api/movies/:id`: Delete a movie by ID (requires authentication and "delete" permission).

### Users
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login an existing user.

## Middleware
- **Authentication Middleware**: Ensures that users are authenticated.
- **Role Middleware**: Checks if the user has the required permission for specific routes.
- **Rate Limiting**: Controls the number of requests a user can make to specific endpoints.

## Project Structure

movies-db-server/
- **controllers/**           # Route handlers for participants, movies, and users
- **middlewares/**           # Middleware for authentication, permissions, rate limiting
- **models/**                # MongoDB models for movies, participants, and users
- **routes/**                # API route definitions
- **services/**              # RabbitMQ service and other utility services
- **app.js**                 # Main application setup

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please reach out to the project maintainer at [lalit.aswal92@gmail.com](mailto:lalit.aswal92@gmail.com).
