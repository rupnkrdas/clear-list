# Clear-List

Clear-List is a simple and efficient todo application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project incorporates MongoDB for the database, React for the frontend, and Tailwind CSS for a clean and responsive user interface. Additionally, it includes user authentication implemented through JSON Web Tokens (JWT).

## Features

-   **User Accounts**: Register and create your personalized todo list.
-   **Mark as Done or Incomplete**: Keep track of your progress by marking tasks as done or incomplete.
-   **MERN Stack**: Leverages MongoDB, Express.js, React, and Node.js for a robust and scalable application.
-   **User Authentication**: Secure your data with JWT-based authentication.

## Technologies Used

-   **MongoDB**: A NoSQL database used to store and retrieve todo data.
-   **Express.js**: A web application framework for building server-side logic.
-   **React**: A JavaScript library for building user interfaces.
-   **Node.js**: A JavaScript runtime for server-side development.
-   **Tailwind CSS**: A utility-first CSS framework for styling the frontend.
-   **JWT Authentication**: Provides secure user authentication through JSON Web Tokens.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/clear-list-todo.git
    cd clear-list-todo
    ```

2. **Install Dependencies:**

    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Setup MongoDB:**

    - Create a MongoDB database instance and obtain the connection URI.

4. **Create Secrets File:**

    - Create a file named `secrets.js` inside the `server` directory.
    - Add the following code to `secrets.js`:

        ```javascript
        // server/secrets.js

        const JWT_SECRET = "<your-jwt-secret>";
        const MONGODB_URL = "<your-mongo-database-url>";

        module.exports = { JWT_SECRET, MONGODB_URL };
        ```

5. **Run the Application:**

    ```bash
    # Start the server (from the server directory)
    npm start

    # Start the client (from the client directory)
    npm run dev
    ```

6. **Open in Browser:**
   Once the application is running, open your browser and go to the provided client URL, e.g., [http://localhost:5173/](http://localhost:5173/), to view and interact with the Clear-List Todo Application.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
