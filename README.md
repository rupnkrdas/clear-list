# Clear-List

Clear-List is a simple and efficient todo application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project incorporates MongoDB for the database, React for the frontend, and Tailwind CSS for a clean and responsive user interface. Additionally, it includes user authentication implemented through JSON Web Tokens (JWT).

## Demo

https://github.com/rupnkrdas/clear-list/assets/88283289/14207af7-2ec8-4acc-b7b3-5922c504ee23

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

4. **Set Environment Variables:**

    - Set up environment variables for your project. Create a `.env` file in the root directory of your project.
    - Add the following lines to your `.env` file:

        ```dotenv
        # .env

        # Replace 'your-mongo-database-url' with your actual MongoDB connection URL
        MONGODB_URL=your-mongo-database-url
        # Replace 'your-jwt-secret' with your actual JWT secret
        JWT_SECRET=your-jwt-secret
        ```

5. **Access Environment Variables in Your Code:**

    - Update the code to access the environment variables directly.

        ```javascript
        // server/index.js or server/app.js

        require("dotenv").config();

        const JWT_SECRET = process.env.JWT_SECRET;
        const MONGODB_URL = process.env.MONGODB_URL;

        // Your application logic here, using JWT_SECRET and MONGODB_URL as needed
        ```

6. **Run the Application:**

    ```bash
    # Start the server (from the server directory)
    npm start

    # Start the client (from the client directory)
    npm run dev
    ```

7. **Open in Browser:**
   Once the application is running, open your browser and go to the provided client URL, e.g., [http://localhost:5173/](http://localhost:5173/), to view and interact with the Clear-List Todo Application.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
