### University Management Project

#### Technology Stack

- TypeScript
- Node.js
- Express.js
- MongoDB (or specify your database)

#### Initial Setup

1. **Localhost and Database Connection**

   Ensure you have Node.js and MongoDB installed locally.

   - Clone the repository: `git clone <repository_url>`
   - Install dependencies: `npm install`
   - Set up environment variables:
     - Create a `.env` file in the root directory.
     - Define environment variables in `.env`:

       ```
       PORT=3000
       DB_URI=mongodb://localhost:27017/university_db
       JWT_SECRET=your_jwt_secret_key
       ```

       Adjust `PORT`, `DB_URI`, and `JWT_SECRET` according to your setup.

2. **Start the Application**

   - Start the application in development mode with `ts-node-dev`:

     Add the following script to your `package.json`:

     ```json
     "scripts": {
       "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"
     }
     ```

     Run the development server:

     ```
     npm run start:dev
     ```

     This script uses `ts-node-dev` to watch for changes in your TypeScript files (`--respawn`) and transpile them (`--transpile-only`) without type checking on every run. Replace `src/index.ts` with your main TypeScript entry file.

3. **GitHub Repository Description**

**Repository Name**: PH-University-Management

**Description**:
This repository contains the backend implementation of a university management system using TypeScript, Node.js, and Express.js. It includes user authentication and authorization mechanisms for students, faculty, and administrators. Features include profile management, academic processes management, and user administration functionalities. The application uses MongoDB for data storage and is designed to provide a secure and efficient platform for managing university operations.

