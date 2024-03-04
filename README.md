# Todo List App

A simple Todo List application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. The app allows users to register, log in, and manage their todos efficiently. Each todo entry includes details such as creation time, completion status, and can be easily filtered for a streamlined experience.

## Features

- **User Authentication:** Users can register and log in to access their personalized todo lists.

- **Add Todo:** Create new todos with a title, description, and timestamp for easy tracking.

- **Delete Todo:** Remove unnecessary todos to keep your list organized.

- **Mark as Completed/Incomplete:** Quickly toggle the completion status of a todo.

- **Filter/Search:** Use the search box to filter todos based on titles or descriptions.

- **Logout:** Securely log out to protect your account information.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Installation

1. **Clone Repository:**
    ```bash
    git clone https://github.com/your-username/ToDO-List.git
    ```

2. **Navigate to Project Folder:**
    ```bash
    cd ToDO-List/To-Do
    ```

3. **Install Dependencies:**
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

4. **Setup MongoDB:**
    - Create a MongoDB Atlas account and set up a cluster.
    - Open the `To-Do\server\src\utils\constants.js` file.
    - Configure the MongoDB connection string in the `constants.js` file.

5. **Run the Application:**
    ```bash
    npm run dev
    ```

6. **Access the Application:**
    Open your web browser and go to `http://localhost:3000` to use the Todo List app.

## Usage

- Register a new account or log in if you already have one.
- Add, delete, and manage your todos on the home page.
- Use the search box to filter todos based on titles or descriptions.
- Log out when done to secure your account.

## Contributing

Feel free to contribute to the project by creating issues or submitting pull requests. Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, feel free to reach out to Prabhakar kumar at prabhakarsinghssm1@gmail.com.
